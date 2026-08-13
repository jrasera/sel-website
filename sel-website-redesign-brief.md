# SEL Website: Visual Redesign Brief

Prepared for: Dr Joshua Rasera, Strategic Engineering Laboratory
Date: 13 August 2026
Status: Ready for build
Supersedes: the visual design sections of `sel-website-requirements-v2-addendum.md` and items 1, 2 and 5 of `sel-website-fix-list-3.md`. The base architecture, content model, and accessibility requirements in `sel-website-requirements.md` remain in force and are unchanged.

## 0. Read this first: mandatory process

**Use the `frontend-design` skill.** Read it before doing anything else. This brief assumes its two-pass process and does not repeat its guidance.

**Do not rebuild the whole site in one pass.** Previous rounds have followed a pattern of full rebuild followed by rejection, which wastes effort on pages that were never the problem. Instead:

1. **Pass one, design plan.** Produce the token system the skill calls for: 4 to 6 named hex values, typefaces for three roles, a layout concept with ASCII wireframes, and a named signature element. Run the skill's self-critique against it. Present this for review and stop.
2. **Pass two, one reference page.** After the plan is approved, build the home page only, to a finished standard, on a separate preview deployment so the current live site stays intact. Present it for review and stop.
3. **Pass three, rollout.** Only after the reference page is approved, apply the system to the remaining pages.

Do not proceed to the next pass without sign-off. A design plan rejected on paper costs minutes; a site rebuilt in the wrong direction costs days.

## 1. What is working and must not regress

The current build is structurally sound. The redesign is a presentation-layer change. Preserve all of the following:

- Astro static output, real per-page HTML, full content availability with JavaScript disabled.
- WCAG 2.2 AA conformance, keyboard operability, visible focus states, `prefers-reduced-motion` support, accessible names on icon and logo links.
- The one-file-per-person and one-file-per-project content model.
- Site copy. The writing is good and is not the problem. Do not rewrite page content as part of this work, with the single exception noted in section 4.
- The starfield fix (small, low-opacity, behind content), the initials fix, the Imperial wordmark link to imperial.ac.uk, and partner logo links. These were all corrected recently and are correct now.

## 2. Diagnosis: why the current design reads as mediocre

State the problem precisely so the redesign targets it:

1. **One container idiom, repeated everywhere.** Every element on every page is a rounded rectangle with a hairline border on a dark fill: content cards, diagram nodes, the quote block, partner logo tiles, the detail panel, the hero container, status pills. When one shape carries all content, the page reads as a template with content poured into it. This is the single largest contributor to the problem.
2. **Typography does no work.** Bold sans headings, grey body text, uppercase mono eyebrows, at a compressed scale range. Space Grotesk is among the most heavily used display faces in current technology design, so it reads as a default rather than a decision.
3. **Uniform sectional rhythm.** Nearly every section is heading, then paragraph, then a grid of two to five cards. Nothing interrupts, nothing changes weight, nothing earns attention.
4. **A single accent on near-black.** One blue against a near-black field, with no range and no hierarchy.
5. **Nothing is specific to this lab.** Replace the words and the design would serve any research group or any enterprise software product. The decoration in use (a generic star field) is atmosphere borrowed from the topic rather than anything drawn from the work itself.

## 3. Design direction

### 3.1 Ground it in the lab's own artifacts

The lab's real output is the analytical plot. Scenario ensembles, cumulative cash-flow curves, probability distributions, decision trees, Pareto frontiers, tornado diagrams, staged deployment timelines, sensitivity sweeps. This is the visual vernacular the site should be built from.

The strongest element currently on the site is the diverging-futures graphic in the hero, and it is strongest because it comes from this world. The direction follows from that observation: **make the plot the design system rather than an illustration placed inside one.**

Concretely, the ornamental language of the site becomes hairline axes, tick marks, gridlines, plotted paths, ensemble traces, and confidence bands, replacing the bordered-card idiom. Section dividers can be axis rules with ticks. Data and figures can sit against plot furniture. Emphasis can come from a plotted path rather than a border. Cards, where they survive at all, should be the exception used for one purpose, not the universal container.

This is the aesthetic risk the skill asks for, and it is defensible: it is drawn from what SEL actually produces, and no other research group site will look like it.

### 3.2 Typography

Choose a deliberate three-role pairing and move off Space Grotesk:

- **Display**, carrying real character, used with restraint at a large scale. The register to aim for is scholarly and editorial rather than start-up technical, appropriate to a university research group publishing peer-reviewed work.
- **Body**, a precise and readable companion that holds up at long paragraph lengths on a dark background.
- **Technical or data face**, for axis labels, figures, captions, and metadata, drawn from the plotting vernacular above.

Set a type scale with genuine range. The current scale is compressed and is part of why the page feels flat. Make the type treatment itself memorable.

### 3.3 Colour

Keep the dark identity. Josh has confirmed the dark direction more than once and it should not be abandoned. Beyond that:

- Move past a single accent on near-black. Build a considered system: a deep base, at least one lifted surface value, and an accent treatment with range, appropriate to a design language built on plots where colour can encode sequence, probability, or emphasis.
- Consider a light or warm inverted band for at least one section, so long pages are not an unbroken dark field. This was raised in the earlier brief and never implemented.

**Avoid the current AI-design default clusters.** The skill names three. Two are directly relevant here: a warm cream background with a high-contrast serif and a terracotta accent, and a near-black background with a single bright acid-green or vermilion accent. The site today sits close to the second of these, which is part of why it reads as generic. Move away from it deliberately.

### 3.4 Signature element

Name one element the site will be remembered by, and let it carry the boldness while everything around it stays disciplined. The hero is the natural home for it. An ensemble of possible futures that actually runs, redrawing rather than sitting static, is one candidate grounded in the subject, but choose deliberately in the design plan and justify the choice.

## 4. Resolve the four-step and seven-step conflict

This is a content problem creating a design problem, and it must be resolved before the diagrams are rebuilt.

The home page presents a four-step method (Model uncertainty, Analyse risk, Optimise design, Support decisions). The Method page presents a seven-step method (Frame the decision, Model uncertainty explicitly, Map the wider system, Design for change over time, Explore the space of possibilities, Quantify the value of flexibility, Balance risk and reward). Both are drawn as a radial hub with "SEL" at the centre. A visitor moving between the two pages sees the same diagram with a different number of nodes and different labels, and reads it as an error.

**Resolution: there is one method, of seven steps.** The home page must stop presenting a competing four-step framework as though it were a separate thing. Either:

- **(a)** the home page presents the same seven steps in a compact treatment of a different visual form, clearly a summary that links through to the full Method page; or
- **(b)** the home page drops the framework diagram entirely and does something else with that space, with the method represented only by a link.

Option (b) is worth serious consideration. The home page does not need to teach the method, and removing the diagram from it eliminates the collision outright while giving the Method page sole ownership of the idea. This is the one place where copy may change, since resolving this requires editing the home page's four-step content.

## 5. Rebuild the method diagram as a sequence

The current radial form is wrong for the content, for three separate reasons:

1. **It contradicts its own content.** The seven principles are a sequence, numbered 01 through 07 and ordered from framing a decision to balancing risk and reward. A hub-and-spoke communicates that items orbit a centre with no order. The numbering and the diagram form are telling the reader opposite things. The skill's principle applies directly: structure should encode something true about the content.
2. **It forces uneven cells.** Node boxes are currently sized to their text, so "Frame the decision" and "Quantify the value of flexibility" render at noticeably different sizes around the ring, which reads as sloppy.
3. **It fails responsively.** Verified at 1440 by 800: the diagram alone fills the entire viewport and the detail panel falls completely below the fold, so activating a node produces no visible change. The interaction appears broken. A radial layout has no graceful path down to narrow screens.

**Rebuild as a sequential layout with the detail panel beside it, not below it.**

- Steps run as an ordered sequence, with uniform cell dimensions regardless of label length.
- The detail panel sits alongside the sequence, both visible simultaneously without scrolling at 1440 by 800 and below. Activating a step must produce a visible change within the viewport.
- Preserve the interaction requirements already specified: each step is a real button with an accessible name combining number and heading, keyboard operable, visible focus, `aria-live="polite"` on the detail region, step one shown by default on load.
- Preserve the no-JavaScript fallback: all seven headings and descriptions render as a plain visible list without JavaScript, with the interactive behaviour layered on top as an enhancement.
- On narrow screens, degrade to a stacked accordion or a plain list. A sequence does this naturally.

## 6. Fix the hero composition

The diverging-futures graphic is conceptually right and should survive the redesign, with its presentation rebuilt:

- It currently sits inside a tall bordered card occupying roughly a quarter of the container's height, leaving large dead space above and below and a caption floating in isolation. Remove the card container. Scale the graphic to its space, or let it run full-bleed as the hero's backdrop rather than sitting as a boxed object beside the text.
- Reconsider the emphasised flat baseline. A flat horizontal path drawn as the highlighted line reads as inert. If it represents a reference case, that could be made legible; if it is decorative, it should go.
- If the signature element chosen in section 3.4 supersedes this graphic, that is an acceptable outcome. The requirement is that the hero opens with the most characteristic thing in the lab's world, in whatever form serves it best.

## 7. Quality floor

Build to these without announcing them:

- Responsive from large desktop down to mobile, verified by screenshot at a minimum of 1920, 1440, 1024, 768, and 390 pixels wide. Every interactive element must produce a visible response within the viewport at every width.
- Visible keyboard focus on every interactive element.
- `prefers-reduced-motion` respected on all motion, including the signature element.
- Contrast meeting AA against the final palette, checked on the real page rather than in isolation.
- Full content and navigation with JavaScript disabled.
- Take screenshots and critique the work in progress. Several defects in previous rounds, uneven node sizes, an off-screen detail panel, would have been caught by looking at the rendered page at a realistic window size.

## 8. Outstanding items not covered by this brief

- **Partner scope.** The current partner logos cover the ESA ISRU project only. Other sponsors exist across other projects, including JLR, and are not yet represented. This needs Joshua to identify which projects they attach to and supply logo files. Until then, keep partner sections scoped per project and do not present an aggregate strip as though it were complete.
- **Per-project diagrams.** Item 5 of the second fix list, a proper value-chain diagram for the ESA ISRU page, remains open and should be revisited once the new design language exists, since it should be built in that language rather than the current one.
