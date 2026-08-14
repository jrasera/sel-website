# SEL Website: Pass 3 Design Plan

Prepared by: build session, 14 August 2026
Responds to: `sel-website-redesign-pass3.md` (review of pass 2), under `sel-website-redesign-brief.md` (still in force)
Status: **Phase 1 — plan only, no code written.** Present and stop.

Every hex value below was measured, not estimated: OKLCH lightness/chroma/hue and WCAG contrast ratios
were computed for each value against the surfaces it actually sits on, and against the three default
clusters named in the `frontend-design` skill. The numbers are in the tables.

---

## 1. Palette, rebuilt from zero

Pass 2's palette was inherited (`#4cc4ff` carried over from before the redesign started) and
supplemented (`#f4f1ea` + `#f2975a` + Fraunces). Nothing below is carried forward. The system is
derived from one thing: **how this lab draws an ensemble on screen** — a dim mass of possible
futures on a deep plot field, with one or two traces lifted out of it because the argument depends
on them, and a printed page for anything that belongs on paper.

| Token | Hex | OKLCH (L\* / C / H) | Role and justification |
|---|---|---|---|
| `--field` | `#121730` | 21.5 / 0.050 / 273° | The plot field. Deep indigo ink, not black: a matplotlib dark figure background sits *above* black so traces at low alpha still separate from it. Chroma 0.050 is visibly blue-violet, five times the chroma of a neutral near-black. |
| `--field-lift` | `#1B2242` | 26.4 / 0.061 / 272° | One lifted surface, same hue, for the few regions that genuinely sit above the field (nav panel, active detail field). Lift is +5 L\*, the smallest step that reads as a plane change without becoming a card. |
| `--rule` | `#333C66` | 36.9 / 0.073 / 273° | Axis rules, gridlines, ticks. Sized to the job: 1.66:1 against the field, so an axis reads as furniture and never competes with a trace. |
| `--trace` | `#9BA5C9` | 72.6 / 0.054 / 273° | The ensemble mass, and secondary text. Same hue as the field, so unemphasised futures recede *into* the plot exactly as they do in a real spaghetti plot. 7.24:1 on field, 6.37:1 on lift — comfortably AA as body text. |
| `--text` | `#EAEDF8` | 94.7 / 0.015 / 274° | Primary text, tinted to the field's hue rather than pure white. 15.09:1. |
| `--signal` | `#F1568E` | 67.4 / 0.195 / 2° | **The emphasised path.** The one trace the argument is about: the flexible design, the active step, the primary action. Rose-magenta, high chroma, and the only high-chroma cool-adjacent value in the system, so emphasis is unambiguous. 5.43:1 on field, 4.77:1 on lift. |
| `--series-2` | `#EFB44B` | 80.6 / 0.137 / 79° | **The comparison case.** The second series a plot needs: the fixed baseline against the flexible design. Amber, 77° from `--signal` — far enough that the two read as *different series*, not two shades of emphasis. 9.49:1. |

**Inverted band** (one section of the home page runs on paper, per brief §3.3):

| Token | Hex | OKLCH | Contrast |
|---|---|---|---|
| `--paper` | `#EDEFF2` | 95.1 / 0.005 / 258° | Cool plotting-paper white. Printed figures come on white stock, not cream. |
| `--paper-ink` | `#131727` | 20.9 / 0.032 / 273° | 15.45:1 on paper |
| `--paper-trace` | `#565E7A` | 48.6 / 0.046 / 272° | 5.56:1 on paper |
| `--paper-signal` | `#B3234F` | 50.7 / 0.179 / 9° | 5.57:1 on paper — the same signal hue, darkened for a light surface |

### 1.1 Cluster check, with the check shown

The review's requirement was to check each value against the skill's three named clusters and
**reject matches**, not to assert non-matching. Measured separations:

| Cluster reference | OKLCH | Nearest value in this palette | Separation |
|---|---|---|---|
| Cream `#F4F1EA` (cluster 1) | 95.9 / 0.010 / **87°** | `--paper #EDEFF2` at H **258°** | **171° apart in hue** — the cream is warm-yellow, this is cool-blue. Also half the chroma. |
| Terracotta `#E2725B` (cluster 1) | 67.7 / 0.144 / **33°** | `--signal` at 2° (31° away) and `--series-2` at 79° (46° away) | No value lands within 30° of terracotta. |
| Pass 2's own `#F2975A` | 75.8 / 0.134 / 53° | `--series-2` at 79° | 26° away, and +0.3 chroma-normalised — amber, not clay. Not carried forward. |
| High-contrast serif display (cluster 1) | — | Display face is a **grotesk**, not a serif (§2) | The only serif in the system is a low-contrast text face used for body copy. |
| Acid green `#C0FF00` (cluster 2) | 92.3 / 0.234 / 126° | `--series-2` at 79° | 47° away. |
| Vermilion `#E34234` (cluster 2) | 61.3 / 0.200 / **29°** | `--signal` at **2°** | 27° away — `#F1568E` is a rose-magenta (it reads pink), vermilion is orange-red. |
| Near-black `#0A0A0A` (cluster 2) | 14.5 / **0.000** | `--field` at 21.5 / **0.050** | +7 L\* and chroma from zero to 0.050. |
| Single accent on near-black (cluster 2) | — | Two named series with distinct semantics, plus an inverted band | The structural rejection: emphasis and comparison are different colours because they encode different things. |
| Old `--accent #4cc4ff` | 77.8 / 0.135 / 234° | — | **Not present.** No cyan anywhere in the system. |
| Broadsheet (cluster 3) | — | See §3.3 | Hairlines here are axis furniture with ticks and labels, on a dark chromatic field, with a single-measure text column — not newsprint, not dense columns, not zero-radius throughout. |

The honest summary: cluster 1 is rejected on hue (cool paper, no terracotta, no serif display),
cluster 2 on structure (chromatic field, two-series accent system, inverted band), cluster 3 on
substance (rules that carry data semantics rather than editorial rules, and a layout that is
figure-led rather than column-led).

---

## 2. Typography

Three roles, **two files**. The idea: one variable family works both ends of the width axis, the
way a technical drawing does — expanded lettering on the title block, condensed lettering on the
dimensions — and the scholarly register moves to where a research group's long-form text actually
lives, the body.

| Role | Face | Axes used | Why |
|---|---|---|---|
| **Display** | **Archivo** (variable, `wght` 100–900, `wdth` 62–125) | `wdth` 112–118, `wght` 600–680, tracking −0.02em | A neo-grotesk pushed *expanded* reads editorial-authoritative (mission report, Businessweek), not start-up-technical. Not Space Grotesk, not a serif, not on any cluster list. Confirmed available as a two-axis variable woff2 (90KB latin). |
| **Body** | **Newsreader** (variable, `opsz` 6–72, `wght` 200–800) | `wght` 420–460 on dark, 400 on paper; `opsz` auto | A screen-first, **low-contrast** text serif with sturdy stems that hold up reversed out of a dark field. Carries the peer-reviewed-journal register the brief asks for, in the place that register belongs. |
| **Labels / data** | **Archivo Condensed** — same file | `wdth` 75, `wght` 600, uppercase, tracking 0.14em | ISO 3098 drawing lettering is narrow, uppercase and letterspaced. Axis labels, captions, step numbers, metadata, eyebrows. |

**Mono is removed entirely.** The diagnosis (brief §2.2) named "uppercase mono eyebrows" as part of
the problem, and matplotlib's own tick labels are a plain sans, not a monospace — the mono was
signalling "data" rather than being it. Archivo's `tnum` covers figure alignment where numbers need
to line up. This drops three font files.

**Dropped:** Fraunces (named in the review as cluster-1 evidence), Public Sans, IBM Plex Mono ×3.
**Net weight:** 222KB → about the same as the 196KB it replaces, and one fewer HTTP request.

### Scale

Kept wide, per the review ("the scale and confidence should [survive]"), with the display end pushed
further because it now has a width axis to work with.

```
label     0.72 → 0.78rem   Archivo condensed 600, +0.14em
body      1.05 → 1.15rem   Newsreader 440 / 1.62
lead      1.35 → 1.75rem   Newsreader 300, opsz high
step-2    2.00 → 2.90rem   Archivo 620 wdth 110
step-3    2.90 → 4.40rem   Archivo 650 wdth 114
hero      4.20 → 8.00rem   Archivo 680 wdth 118, −0.025em
```

---

## 3. Signature element: **the ensemble and its margin**

One figure, in the hero, carrying the whole aesthetic risk. Everything else stays quiet.

Forty cumulative-value paths leave a single decision point, branch at three staged decision gates,
and **resolve on the right into a marginal density histogram of where they ended up**. Two paths are
lifted out of the mass: one in `--signal` (the flexible design), one in `--series-2` (the fixed
baseline). The rest are `--trace` at low alpha.

```
  value ▲
        │            ╭──────────────────╮                     ┌──┐
        │        ╭───╯                  ╰─────────╮           ├──┤
        │    ╭───╯ ╭─────────────────────────╮    ╰──         ├────┤   ← terminal
        ●────┤ ╭───╯══════════ signal ═══════╪═══════════     ├──────┤    distribution
        │    ╰─┼───╮ ─ ─ ─ series-2 ─ ─ ─ ─ ─╮ ╰───────       ├────┤     (the fan's
        │      ╰───╯╰──────────╮  ╰──────────╯                ├──┤        own histogram)
        │                      ╰───────────────────           └─┘
        └──┬────┬────┬────┬────┬────┬────┬────▶  years from decision
           0    5    10   15   20   25   30
           ╎    ╎              ╎
          gate 1              gate 3
```

**Why this and not the pass-2 fan.** The pass-2 fan was a spray of rays that got hard-cropped at the
right edge, with endpoint dots sitting on a straight vertical cut (review §5). Here the right edge
is *the point*: the paths terminate on an axis, and the histogram is what a terminal distribution
actually looks like. Nothing is clipped because the figure resolves inside its own frame. It also
says something true about the lab — the branching gates are staged decisions, the spread is
uncertainty, the histogram is the outcome distribution those two produce.

**Mechanics.** Generated at build time from the existing seeded PRNG (`mulberry32`), so the output
is byte-identical for every visitor and there is no runtime randomness. Inline SVG. On load, paths
draw left→right over ~1.1s with an 8ms stagger, then the histogram bars grow over 200ms — one
orchestrated moment, then still. `prefers-reduced-motion` renders the finished state with no draw.
No hover interaction: restraint.

This is also what replaces the starfield's job (§5.4).

---

## 4. Home page composition

The diagnosis called out uniform sectional rhythm (heading → paragraph → grid of cards). Each band
below has a deliberately different shape.

```
┌──────────────────────────────────────────────────────────────┐
│ [Imperial ▪ SEL]                     Home Method Projects ▾ …│  56px, single row
├──────────────────────────────────────────────────────────────┤
│  IMPERIAL COLLEGE LONDON                    ┊                │
│                                             ┊   ╱───╮        │
│  Strategic                                  ┊ ●─┤   ╰──┐ ┌┐  │  full-bleed
│  Engineering                                ┊   ╰───╮  │ ├┤  │  ensemble +
│  Laboratory                                 ┊       ╰──┘ └┘  │  margin
│                                             ┊ 0  10  20  30  │
│  How do we design future-generation …       ┊ YEARS          │
│  ▪ Explore our projects   ▫ Meet the team   ┊                │
├──────────────────────────────────────────────────────────────┤
│ MISSION ├─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─ │  axis divider
│                                                              │
│  Designing for flexibility        “Our research develops     │  no card:
│  under deep uncertainty            and evaluates new         │  display
│  Body copy, single measure,        data-driven methods…”     │  pull-quote,
│  62ch, Newsreader.                 ▪ MC · Dr M-A Cardin      │  hanging attrib
├──────────────────────────────────────────────────────────────┤
│ METHOD ├─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴ │
│  Every project follows the same seven-step method …  Explore ▸│  one wide line
├──────────────────────────────────────────────────────────────┤
│ SECTORS  Aerospace & Space / Energy / Resource Extraction /…  │  ruled strip
├──────────────────────────────────────────────────────────────┤
│ 01 ─── ESA ISRU: lunar resource value chains ─────────────  ▸ │  numbered
│ 02 ─── Deployment strategies for ISRU plant ──────────────  ▸ │  ruled rows
│ 03 ─── DCF tooling for staged infrastructure ─────────────  ▸ │  (kept)
├══════════════════════════════════════════════════════════════┤
│▒▒ PAPER BAND ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│▒ ESA PROGRAMME PARTNERS                                     ▒│  logos on white
│▒  [esa]  │  [esric]  │  [frazer-nash]  │  [zuken]  │  [uksa] ▒│  no tiles,
│▒                                                            ▒│  hairline
│▒ RESOURCES ─────────────────────────────────────────────── ▒│  separators
│▒  01  Tool / dataset name ───────────────────────────────── ▒│
├══════════════════════════════════════════════════════════════┤
│ RELATED  MIT Strategic Engineering ──────────────────────  ↗ │  ruled rows,
│          CESUN ──────────────────────────────────────────  ↗ │  not pills
├──────────────────────────────────────────────────────────────┤
│  Work with us                                                │  terminal tick:
│  ┴────────────────────────────────────────────────────────┴  │  the page ends
│  ▪ m.cardin@imperial.ac.uk                                    │  on an axis
└──────────────────────────────────────────────────────────────┘
```

The page opens on a decision point and closes on the terminal tick of the same axis. That is the
only "concept" in the layout; everything else is ordinary discipline.

**Kept from pass 2, unchanged in intent** (review §1): the seven-step resolution on the home page,
axis-rule-with-ticks dividers, hairline numbered rows, full-bleed hero, display type with presence.

---

## 5. Point-by-point response to the review

### 5.1 Method rail lost its labels (review §2)

Number **and heading** both render as visible text for all seven steps, with no interaction
required. Clicking a step expands its description in the detail field beside the rail.

```
┌ 1440 × 900 ─────────────────────────────────────────────────────────┐
│  SEVEN PRINCIPLES                                                   │
│  Every project we take on … applies the same underlying method.     │
│                                                                     │
│  ┬─ 01  Frame the decision            │  04                         │
│  │                                    │  ────────────────────────── │
│  ┼─ 02  Model uncertainty explicitly  │  Design for change          │
│  │                                    │  over time                  │
│  ┼─ 03  Map the wider system          │                             │
│  │                                    │  We distinguish what should │
│  ●─ 04  Design for change over time ──┤  be fixed at the outset     │
│  │      ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔      │  from what can be staged…   │
│  ┼─ 05  Explore the space of poss…    │                             │
│  │                                    │  ┌ schematic ─────────────┐ │
│  ┼─ 06  Quantify the value of flex…   │  │  ●──┬──●──┬──●──┬──●   │ │
│  │                                    │  │     g1     g2     g3   │ │
│  ┴─ 07  Balance risk and reward       │  └────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

- The rail's vertical line is a **real axis** with a tick per step; the active step's tick is a
  filled marker in `--signal` and its heading rule extends.
- Accessible name stays `"04. Design for change over time"`; the visible text now says the same
  thing, so the label is no longer only in the `aria-label`.
- `aria-live="polite"` on the detail field, step 01 active on load, real `<button>`s, visible focus.
- **No-JS:** all seven headings *and* descriptions render as a plain ordered list; JS collapses the
  descriptions into the detail field as an enhancement.
- **The empty regions (review §2, closing note)** are filled with meaning, not padding: each step
  gets a small line-art schematic in the detail field, drawn in the same plot language —
  01 a crosshair on a labelled objective · 02 a distribution with a confidence band against a single
  dashed forecast · 03 a node-link graph (the one place a hub-and-spoke is honest) · 04 a staged
  timeline with gates · 05 a miniature ensemble · 06 two bars with the flexibility delta bracketed ·
  07 a Pareto frontier. Uniform 320×160, `--trace` strokes, exactly one element in `--signal`.
- Below 48em: a stacked list, one step per row, description inline. (Breakpoint pairs stay adjacent,
  `47.9375em` / `48em`, per the trap already documented in HANDOFF.)

### 5.2 The card idiom (review §3)

| Instance | Pass 3 treatment |
|---|---|
| Director quote | No box. Display-scale pull-quote in Newsreader 300, set against an axis rule, with the attribution hanging below as a legend key (`▪ MC · Dr Michel-Alexandre Cardin, Director`). The initials keep their role but lose the bordered circle. |
| "Interested in working with us?" | No panel. Closing terminal-tick composition: display line, axis rule with end ticks, email as a marker link. |
| Partner logo tiles | No tiles. The logos move onto the **paper band**, where they sit on white without needing individual white rectangles — hairline separators between them, greyscale at rest, full colour on hover/focus. This is the reason the inverted band exists where it does. |
| Related groups pills | No pills. Hairline-ruled rows, label left, `↗` right, rule brightens to `--signal` on hover — the same idiom as the project rows, which the review endorsed. |
| Method detail panel | No panel. The detail field is bounded by the rail's axis on the left and a hairline above carrying the step number as an axis annotation. Open on two sides, not enclosed. |

**The one surviving container** is the mobile nav panel, which genuinely needs to read as a surface
laid over the page. `--radius: 3px` is used only on interactive controls; plot furniture is 0.

### 5.3 Buttons (review §5)

The blue pills go. Two forms, both from the plot vernacular:

- **Primary** — a solid marker block in `--signal`, ink text (`--field`, 5.43:1), 3px radius, arrow
  translating 3px on hover. Focus ring in `--text` at 3px offset so it stays visible against rose.
- **Secondary** — a **legend key**: a 10px square swatch + label + hairline baseline rule. On
  hover/focus the swatch fills `--signal` and the rule extends the full label width.
- **Inline links** — `--signal`, 1px underline at 0.12em offset.

### 5.4 Starfield (review §4)

**Deleted**, component and all. Its job (atmosphere) transfers to the hero figure. What replaces it
as ambient is deliberately less: a faint gridline field at `--rule` 6% opacity, and it appears
**only inside figure regions** (the hero, the method detail field, the paper band's edges) — not as
a fixed layer behind every page. On paper it inverts to `--paper-ink` at 5%, so it behaves correctly
on light surfaces, which is the specific failure the review flagged.

This is the "remove one accessory" cut: an always-on background ornament is exactly what the brief
diagnosed, and the honest answer is not to replace it with a cleverer always-on background ornament.

### 5.5 Mobile navigation (review §6)

Below 64em the nav collapses to a `<details>` disclosure — **works with JS disabled**, which the
current three-row stack at least did too, and which a JS-only hamburger would not. Summary reads
`Menu` with a two-rule marker; the open panel is a full-width `--field-lift` surface of hairline-ruled
rows, with the Projects children as indented rows rather than a nested disclosure. Header drops to a
single 56px row at all widths, so `scroll-padding-top` comes down to two honest tiers (96px / 88px)
measured from the rendered header rather than guessed.

---

## 6. Quality floor and verification protocol

The review correctly read the mobile-nav failure as evidence the screenshot checks were not actually
run. For pass 3 the checks are run **before** presenting, and the evidence is included:

1. Screenshots at **1920, 1440, 1024, 768, 390** of the home page and the Method page.
2. At each width: nav state, hero figure resolution at the right edge, every section's rhythm.
3. Method page interaction at 1440×900 **and** 1024×768: activating a step must produce a visible
   change inside the viewport.
4. Keyboard pass: tab through both pages, confirm focus is visible on rose, on paper, and on dark.
5. `prefers-reduced-motion: reduce` screenshot of the hero.
6. JS-disabled screenshot of the Method page (all seven descriptions visible).
7. Contrast re-measured **on the rendered page**, not in isolation, including `--signal` on
   `--field-lift` (4.77:1, the tightest pair in the system).
8. Self-critique written against these screenshots before anything is presented — and where
   something matches a default cluster or just looks wrong, it gets changed, not defended.

---

## 7. Build order once this plan is signed off

1. Token rebuild (`tokens.css`), fonts swapped in `public/fonts` + `fonts.css`, starfield and mono
   removed.
2. Header/nav rebuild (affects every page, and is a review item).
3. Hero signature figure.
4. Home page bands, in the order in §4.
5. Method page rail + detail field + seven schematics.
6. Screenshot pass, self-critique, deploy to the `redesign-pass-3` branch preview. **Present and stop.**

Pages beyond home and Method are untouched until this is signed off, per the gated process. They
will look wrong on the preview branch in the interim — that is expected, and is the point of the
gate.

## 8. Open, unchanged

- Partner scope beyond the ESA programme (JLR and others) still needs Joshua to identify the
  projects and supply logo files. The paper band is scoped and labelled "ESA programme partners".
- The per-project value-chain diagram for the ESA ISRU page gets built in this language during
  rollout, not before.
