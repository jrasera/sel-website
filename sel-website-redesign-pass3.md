# SEL Website: Redesign Pass 3 Direction

Prepared for: Dr Joshua Rasera, Strategic Engineering Laboratory
Date: 13 August 2026
Reviewed build: https://redesign-pass-2.sel-website.pages.dev
Status: Ready for build
Companion to: `sel-website-redesign-brief.md`, which remains in force. This document records what pass 2 got right, what it got wrong, and what pass 3 must change.

## 0. Headline finding: the palette landed on the documented AI defaults

The `frontend-design` skill names three looks that AI-generated design currently clusters around, and instructs that where a brief leaves an axis free, that freedom should not be spent on one of them. Pass 2 spent it on two.

Inspected tokens from the live build:

| Token | Value | Issue |
|---|---|---|
| `--surface-warm` | `#f4f1ea` | The skill names "near #F4F1EA" as the default cream. This is that value exactly. |
| `--accent-warm` | `#f2975a` | Terracotta / warm clay, the accent the skill pairs with that cream. |
| `--font-display` | `Fraunces` | A high-contrast serif display, the third element of the same cluster. |
| `--accent` | `#4cc4ff` | Near-black base with a single bright accent is the second named cluster. Also essentially unchanged from the pre-redesign build. |

Cream plus high-contrast serif plus terracotta is default cluster one, reproduced almost to the hex. Near-black plus one bright accent is default cluster two, carried over from the previous design. The result reads as competent and anonymous: the typeface changed, so it looks like a redesign, but the underlying choices are the field's house style rather than decisions made for this lab.

**Pass 3 requirement:** rebuild the palette from scratch. Before adopting any value, check it against the skill's three named clusters and reject matches. The accent in particular must move; carrying `#4cc4ff` forward a third time means colour has never been part of the redesign at all. Present the new palette in the design plan with a written justification for each value, tied to this lab's subject matter rather than to general taste.

## 1. What pass 2 got right and must be preserved

Do not discard these in the next pass:

- **The four-step and seven-step conflict is resolved.** The home page now carries a single line about the seven-step method and links to the Method page. This is the correct resolution and should stay.
- **Axis rules with tick marks as section dividers.** This is the strongest new element in the build and the clearest expression of the plot-derived direction from the brief. Keep it and push it further.
- **Hairline-ruled numbered rows** for the project list and the Resources list, replacing bordered cards. Correct direction, and the pattern should extend to the remaining card instances listed in section 3.
- **The hero ensemble running full-bleed** rather than boxed inside a container.
- **Display type with real presence.** The scale is finally doing work. Whether Fraunces itself survives depends on the palette rebuild, but the scale and confidence should.

## 2. The Method rail lost its labels

The vertical rail now renders as seven numbered dots (01 through 07) with no visible headings. A reader must click each one to discover what it contains. The previous build showed all seven headings at once. The side-by-side layout and the responsive behaviour are both fixed, which was the point of the change, but the information available at a glance went down.

**Fix:** the rail must show number and heading together as visible text, matching the accessible name already specified. All seven steps readable without interaction; clicking one expands its full description in the detail region beside the rail. This was the intent of the original requirement and the visible label was lost in implementation.

Related: the Method page carries large empty regions to the right of and below the detail panel at 1440 by 900. Compose the section so the rail and the panel occupy the space deliberately.

## 3. The card idiom persists where it should have gone

The brief called for the bordered rounded rectangle to stop being the universal container. It survives in:

- the director quote block on the home page
- the "Interested in working with us?" call to action panel
- the partner logo tiles
- the related groups and communities pills
- the Method page detail panel

Each of these should be reconsidered in the plot-derived language: rules, ticks, axis furniture, plotted emphasis, generous space. Some may legitimately remain contained, but the container should then be one deliberate exception rather than the default that every element falls back to.

## 4. The star field contradicts the direction

The brief specified that ornament should derive from the lab's own artifacts, replacing the generic star field. The star field survives on every page in the new build.

Two problems: it works against the plot-derived language rather than with it, and on the cream section it renders as grey specks across the light background, which reads as a rendering defect. Remove it, and let the plot furniture carry the atmosphere. If some ambient background is wanted, derive it from the subject, faint gridlines, contour bands, ensemble traces, and make it behave correctly against light surfaces as well as dark.

## 5. Leftover components from the previous design

- **Bright blue pill buttons** ("Explore our projects", "Meet the team", "Contact the lab") are unchanged from the pre-redesign build. They sit awkwardly against the new display face and belong to the old system. Redesign them within the new language.
- **The hero ensemble is clipped hard at the right edge**, with the path endpoints terminating in visible dots along a straight vertical cut. Either let the traces resolve inside the frame or fade them out; the current hard crop looks accidental.

## 6. Mobile navigation does not collapse

At 390 pixels wide the primary navigation renders as an unwrapped list occupying three stacked rows before any page content begins. Implement a collapsed navigation at small widths. This also indicates the quality floor in the brief was not exercised: verify by screenshot at 1920, 1440, 1024, 768, and 390 and fix what those reveal, before presenting the build for review.

## 7. Process for pass 3

Same staged approach as before:

1. **Design plan first, no code.** The rebuilt palette with per-value justification, the typographic system, and the treatment for each item in sections 2 through 6. Explicitly confirm that no palette value or type choice matches the skill's three named default clusters, and say how each was checked. Present and stop.
2. **Home and Method pages only**, built to a finished standard on the preview deployment, screenshotted at all five widths and self-critiqued before presenting. Present and stop.
3. **Rollout** to the remaining pages after sign-off.

## 8. Still open, unchanged

- Partner scope beyond the ESA programme, including JLR, pending Joshua identifying the projects and supplying logo files.
- A per-project value-chain diagram for the ESA ISRU page, to be built in the new design language once that language is settled.
