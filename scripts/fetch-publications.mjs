// Pulls recent publications for everyone in scripts/orcids.json from OpenAlex
// and writes one markdown file per paper into src/content/publications/.
// Run manually: npm run fetch-publications   (add --dry to preview without writing)
import { readFile, writeFile, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';

const YEARS_BACK = 3;
const OUT_DIR = new URL('../src/content/publications/', import.meta.url).pathname;
const MAILTO = 'j.rasera@imperial.ac.uk'; // OpenAlex "polite pool"
const dry = process.argv.includes('--dry');

const orcids = JSON.parse(await readFile(new URL('./orcids.json', import.meta.url), 'utf8'));
const since = new Date();
since.setFullYear(since.getFullYear() - YEARS_BACK);
const sinceStr = since.toISOString().slice(0, 10);

const TYPE_MAP = { article: 'journal-article', review: 'journal-article', preprint: 'preprint', dissertation: 'thesis' };

const normTitle = (t) => t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, ' ').trim();
const normDoi = (d) => d?.replace(/^https?:\/\/doi\.org\//i, '').toLowerCase();
const slugify = (t) => normTitle(t).split(' ').slice(0, 8).join('-');
const yamlStr = (s) => JSON.stringify(s);

async function fetchWorks(orcid) {
  const works = [];
  let cursor = '*';
  while (cursor) {
    const url = new URL('https://api.openalex.org/works');
    url.searchParams.set('filter', `author.orcid:${orcid},from_publication_date:${sinceStr}`);
    url.searchParams.set('per-page', '100');
    url.searchParams.set('cursor', cursor);
    url.searchParams.set('mailto', MAILTO);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`OpenAlex ${res.status} for ${orcid}`);
    const json = await res.json();
    works.push(...json.results);
    cursor = json.meta.next_cursor;
  }
  return works;
}

// Journal version beats preprint when the same paper appears twice.
const rank = (w) => (w.type === 'preprint' ? 0 : 1);

const byKey = new Map();
const titleToKey = new Map();
for (const [name, orcid] of Object.entries(orcids)) {
  const works = await fetchWorks(orcid);
  console.log(`${name}: ${works.length} works`);
  for (const w of works) {
    const type = TYPE_MAP[w.type];
    if (!type || !w.title) continue;
    const doi = normDoi(w.doi);
    const tkey = normTitle(w.title);
    const key = (doi && byKey.has(doi) && doi) || titleToKey.get(tkey) || doi || tkey;
    const existing = byKey.get(key);
    if (!existing || rank(w) > rank(existing)) byKey.set(key, w);
    titleToKey.set(tkey, key);
    if (doi) titleToKey.set(doi, key);
  }
}

// Preprints are often retitled on publication, so DOI/title matching misses them.
// Drop a preprint when a published paper shares most of its distinctive title words.
const words = (t) => new Set(normTitle(t).split(' ').filter((x) => x.length > 3));
const overlap = (a, b) => [...a].filter((x) => b.has(x)).length / Math.min(a.size, b.size);
const all = [...byKey.values()];
const published = all.filter((w) => w.type !== 'preprint');
const deduped = all.filter(
  (w) => w.type !== 'preprint' || !published.some((p) => overlap(words(w.title), words(p.title)) >= 0.6),
);
console.log(`Merged ${all.length - deduped.length} preprint(s) into published versions`);

const works = deduped.sort((a, b) => b.publication_date.localeCompare(a.publication_date));

const files = new Map();
for (const w of works) {
  const doi = normDoi(w.doi);
  const url = doi ? `https://doi.org/${doi}` : w.primary_location?.landing_page_url || w.id;
  const venue = w.primary_location?.source?.display_name;
  const authors = w.authorships.map((a) => a.author.display_name);
  const body = [
    '---',
    `title: ${yamlStr(w.title.replace(/<[^>]+>/g, '').trim())}`,
    'authors:',
    ...authors.map((a) => `  - ${yamlStr(a)}`),
    `year: ${w.publication_year}`,
    `type: ${TYPE_MAP[w.type]}`,
    ...(venue ? [`venue: ${yamlStr(venue)}`] : []),
    'link:',
    '  kind: external',
    `  url: ${url}`,
    'featured: false',
    '---',
    '',
  ].join('\n');
  let file = `${w.publication_year}-${slugify(w.title)}.md`;
  while (files.has(file)) file = file.replace(/(-\d+)?\.md$/, (_, n) => `-${(parseInt(n?.slice(1) ?? '1') + 1)}.md`);
  files.set(file, body);
}

console.log(`\n${files.size} unique publications since ${sinceStr}`);
if (dry) {
  for (const w of works) console.log(w.publication_date, w.type, normDoi(w.doi), '|', w.title.slice(0, 70), '|', w.primary_location?.source?.display_name);
  for (const f of files.keys()) console.log('  ' + f);
  process.exit(0);
}

// Replace previous output (placeholders and earlier fetches); leave nothing stale.
for (const f of await readdir(OUT_DIR)) if (f.endsWith('.md')) await unlink(path.join(OUT_DIR, f));
for (const [f, body] of files) await writeFile(path.join(OUT_DIR, f), body);
console.log(`Wrote ${files.size} files to src/content/publications/`);
