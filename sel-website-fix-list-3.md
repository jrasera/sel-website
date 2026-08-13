# SEL Website: Fix List 3 (Hero Visual, Interactive Diagrams, Header Link, Partner Scope)

Prepared for: Dr Joshua Rasera, Strategic Engineering Laboratory
Date: 13 August 2026
Status: Ready for build
Context: follow-up to `sel-website-fix-list.md` and `sel-website-fix-list-2.md`. The starfield fix and the initials fix from those documents are both confirmed working correctly on the live build. This document covers four new items.

## 1. Replace the hero "illustrative cash-flow curve"

The current hero graphic (a line labelled "Illustrative cumulative cash-flow curve") draws correctly, a brief animation traces the full dip-then-rise curve on load, so there's no rendering bug to fix here. The actual problem is conceptual: it's decoration wearing a disclaimer, a fake curve with no real content behind it.

Recommended fix: replace it with a diagram showing a fan of diverging possible future paths radiating from a single point, rather than one line. This is a better fit than it might first appear, the copy directly beside it already talks about modelling uncertainty and finding strategies that hold up across many futures, so the diagram illustrates the sentence next to it instead of sitting apart from it. Suggested treatment: a handful of lines (five to eight) starting from a common point on the left, spreading out toward the right with increasing divergence, in varying opacity or thickness so it reads as a family of possibilities rather than a single forecast. Label it something concrete, for example "Exploring the space of possible futures," not "illustrative" anything.

If building a new custom diagram isn't worth the time right now, the acceptable fallback is a real photograph, lunar surface, infrastructure, relevant hardware, in the same hero position, per the general "real imagery over decorative illustration" principle from the earlier design brief. Either resolves this item; the fan diagram is the better outcome if there's time for it.

## 2. Convert the methodology diagrams to click-to-reveal

Applies to both the home page's four-node diagram and the Method page's seven-node diagram. Currently the home page shows the diagram and a separate row of four cards below it with the same headings and descriptions, duplicated, and the two don't align with each other, which is what reads as "weirdly spaced." Fix by making the diagram itself the single source of that content:

- Each node becomes a real button, not a decorative circle, labelled with its number and heading together (for example, accessible name "1. Frame the decision"), so the label is meaningful on its own, including to screen reader and switch users, not just visually.
- Clicking or activating a node opens a detail panel showing that step's heading and full description. One panel, updated on each click, rather than a separate popup per node.
- Load state: show node 1's detail in the panel by default rather than leaving it empty on first load.
- Keyboard and screen reader behaviour: nodes must be reachable and operable by keyboard alone (Tab to reach, Enter or Space to activate), with a visible focus state matching the rest of the site. The detail panel should be a persistent region on the page (`aria-live="polite"`) so its content update is announced without requiring a full page change or a modal dialog.
- **No-JavaScript fallback, required, not optional**: this site's baseline requirement is that all content remains available with JavaScript disabled. Without JavaScript, render all four (or seven) headings and descriptions as a plain visible list, essentially what's on the page today, and use JavaScript only to progressively upgrade that list into the clickable diagram and single detail panel. Do not ship a version where the descriptions exist only inside a JavaScript-triggered panel.
- Once this is in place, remove the separate four-card row on the home page and the separate numbered list on the Method page; the diagram and its panel are the only copy of this content, not a decorative duplicate of it.
- Layout: since the redundant list disappears, the diagram no longer needs to align with anything below it. Build it as a clean, self-contained, evenly spaced radial layout, consistent spoke length, consistent node size, centred with sensible whitespace around it rather than floating with a lot of dead space above and below as it does now.

## 3. Imperial logo must link to imperial.ac.uk, not the SEL homepage

The "IMPERIAL" wordmark in the header currently links to `https://sel-website.pages.dev/`, the same target as the "Strategic Engineering Laboratory" site name beside it. Separate these: the Imperial logo links to `https://www.imperial.ac.uk`, and the "Strategic Engineering Laboratory" name and subtitle keep linking to this site's own home page, as they do now. This is standard practice, institutional logo goes to the institution, site name goes to the site home, and the two should not point to the same place.

## 4. Partner logos: scope is incomplete, needs Joshua's input before expanding

The current partner logos (European Space Agency, ESRIC, Frazer-Nash, Factories in Space, Moliri, Space RS, UK Space Agency, Zuken) are specific to the ESA ISRU project and correctly shown on that project's own page. There are other sponsors and partners tied to other projects in the group, at least one being JLR, not yet represented anywhere on the site.

This is a content gap, not a code fix, and needs Joshua to identify: which project(s) JLR and any other sponsors are attached to, whether that project is one of the six active project pages or belongs in Past projects, and the correct current logo files for each. Until that's confirmed, leave the home page's aggregate partner strip (added in the earlier addendum, showing partners across all active projects) off or clearly scoped to "ESA programme partners" rather than presenting an incomplete cross-project list as if it were complete. Per-project partner sections, which already work correctly for the ESA page, are unaffected and should stay as they are; add a new one for each additional project as its sponsors are confirmed.
