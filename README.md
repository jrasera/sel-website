# Strategic Engineering Laboratory website

Source for the SEL group website (Dyson School of Design Engineering, Imperial College
London): a static site built with [Astro](https://astro.build), content-collection-driven,
zero JavaScript by default. Every page renders full content and navigation with JavaScript
disabled.

## ⚠️ Open dependency: Imperial ICT

This site is **not yet on an Imperial subdomain**. Per Imperial ICT's stated process, the plan
is to get the site live at a working URL first (currently a Cloudflare Pages `*.pages.dev`
URL), then have ICT review it for accessibility, then have them assign the subdomain. As of
this build, ICT has not confirmed any specific technical mandate (SSO, a required CMS, a
specific stack) beyond that process. **Domain, redirects, and any ICT-specified constraint are
open items to revisit once ICT responds** — nothing here should be assumed final until then.

## Editing content

There is no CMS or admin login. Content lives in plain Markdown files with typed frontmatter,
one file per person, project, or publication, validated at build time.

- **Add a person** → add a file to `src/content/people/`, following an existing file as a
  template (e.g. `src/content/people/ikeya.md`). Every person automatically gets an individual
  profile page at `/people/<filename>/` and appears grouped by `careerStage` on `/people/`.
- **Add a project** → add a file to `src/content/projects/` (or `src/content/projects/past/`
  for completed work). Sections (`overview`, `objectives`, `workProgramme`, `methodology`,
  `statusFindings`, `partners`) are all optional — omit a field rather than padding it with
  placeholder text, and the corresponding section simply won't render.
- **Add a publication** → add a file to `src/content/publications/`, with `type` set to
  `journal-article`, `preprint`, or `thesis`.
- **A project's "Tool" section** is driven by the `tool` field and supports five states:
  `none`, `in-development`, `coming-soon`, `link-out` (external URL), or `embed` (iframe URL).
  Change the `state` value and redeploy — no page restructuring needed.

Run `npm run astro check` after editing content — invalid frontmatter (a typo'd field, a
missing required value) fails with a clear error rather than silently breaking the page.

## Project structure

```text
src/
├── content.config.ts       # Zod schemas for people / projects / publications
├── content/
│   ├── people/*.md
│   ├── projects/*.md
│   ├── projects/past/*.md
│   └── publications/*.md
├── layouts/                 # BaseLayout (shell/nav), ListLayout (directories),
│                             # FeatureLayout (editorial pages)
├── components/
│   ├── nav/, home/, project/, people/, publications/, ui/
├── pages/                    # File-based routing — mirrors the sitemap
└── styles/                   # tokens.css (design tokens), fonts.css, base.css, motion.css
public/
├── fonts/                    # Self-hosted Space Grotesk + IBM Plex Mono (no font CDN)
└── images/
```

## Commands

| Command             | Action                                       |
| :------------------- | :-------------------------------------------- |
| `npm install`         | Install dependencies                          |
| `npm run dev`          | Start local dev server at `localhost:4321`    |
| `npm run build`        | Build the production site to `./dist/`        |
| `npm run preview`      | Preview the production build locally          |
| `npx astro check`      | Type-check content and components             |

Node **22+** is required (see `.nvmrc`).

## Deployment

Static output (`astro build` → `dist/`), deployed via Cloudflare Pages connected to this
GitHub repository. No adapter, server functions, database, or environment variables are
required — the entire site is static HTML/CSS with no build-time secrets.

## Accessibility

Targets WCAG 2.2 AA. See `/accessibility/` for the current statement. Before each milestone
ships: run an automated accessibility check (e.g. `@axe-core/playwright` against the built
`dist/` output, or Lighthouse) across every page template, plus a manual keyboard-only pass and
a check at 400% zoom / 320px width.

## Known open items

- Real photography and bios for people entries (currently placeholder).
- Final masters students list.
- Content for João Garça Gomes's, Davis Bigestans's, and Zibo Fang's project pages.
- Embed of the Python ISRU tool once it exists (the Excel model stays private and is never
  linked).
- Imperial ICT's confirmed technical requirements (see above).
