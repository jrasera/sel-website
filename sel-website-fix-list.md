# SEL Website: Fix List (Design Refresh Regressions)

Prepared for: Dr Joshua Rasera, Strategic Engineering Laboratory
Date: 13 August 2026
Status: Ready for build
Context: the design refresh in `sel-website-requirements-v2-addendum.md` shipped with several defects. This document lists what's broken and what to do about each, in priority order. Fix item 1 before anything else; it's the dominant problem.

## 1. Starfield background is broken and must be rebuilt

The current implementation places large circles (roughly 20 to 40 pixels, mixed grey and white) directly on top of foreground content: headlines, body copy, buttons, nav links, diagram nodes, and logo tiles all have circles sitting over them. This is the single biggest problem with the current build and the main reason the site reads as worse than the version before this refresh.

Fix requirements:

- Stars must render behind all content, at a z-index below every text element, card, button, and diagram, with no exceptions.
- Reduce individual star size dramatically: real stars in a photographic or particle starfield read as small points, a pixel or two to at most 4 to 6 pixels for the brightest ones, not 20 to 40 pixel circles.
- Reduce opacity substantially so stars read as texture in the background, not as distinct shapes competing with content. Test against actual page content, not against an empty canvas.
- Reduce density in the areas where body text sits. A starfield that's fine as a hero backdrop is too busy layered directly behind three paragraphs of body copy.
- After this fix, take a full-page screenshot of the home page, the Method page, and one project page, and confirm by inspection that no star overlaps any text, button, or diagram element before calling this done.

## 2. Home page hero animation is broken

The cumulative cash-flow curve in the hero used to render as a full curve (dip then rise, per the original v1 design). It currently renders as a short diagonal line segment only. Restore the full curve animation.

## 3. Home page methodology diagram was never built

The brief asked for the four "Model uncertainty / Analyse risk / Optimise design / Support decisions" cards to become a connected hub-and-spoke diagram. What shipped is a single disconnected circle labelled "03" floating above the cards with no hub, no spokes, and no visible connection to the four cards. This reads as a broken component.

The Method page's seven-node hub diagram (`SEL` at the centre, seven connected numbered nodes) is well executed and sticky-scrolls correctly alongside its list. Use the same pattern and the same component, scaled down to four nodes, for the home page section. Do not ship a partial or placeholder version of this again; if it can't be finished to the same standard as the Method page version, leave the four flat cards as they were rather than shipping a broken half-built diagram.

## 4. Method page copy: remove leftover consultancy language

The line "detailed set of principles we apply consistently across our research and consultancy-facing work" still contains "consultancy-facing," carried over from strategic-engineering.co. SEL is a research group, not a consultancy. Remove this phrase and any other remaining consultancy-register language on this page. Re-read the full page copy specifically checking for this before marking it done.

## 5. Project page capability diagrams: under-scoped

The addendum asked for a custom value-chain or process diagram per project, built from that project's actual content. What shipped on the ESA ISRU page is a row of five small connected chips (Value-chain representation → Financial engine → Decision analytics → Usability & reporting → Operational readiness). This is a reasonable simple sequence indicator but is not the richer diagram described in the brief. Either build a proper diagram (for the ESA ISRU page specifically: something that actually shows the value-chain, lunar resource extraction through processing, storage, transport, and use, feeding into the financial model outputs) or, if that's a larger piece of work, say so explicitly rather than shipping the chip row as if it satisfies the brief.

## 6. Partner logos: confirm sourcing before this goes further

Real logo images were sourced automatically for all seven partners (ESA, ESRIC, Frazer-Nash, Factories in Space, Moliri, Space RS, UK Space Agency, Zuken) rather than waiting for Joshua to supply approved assets, as the addendum specified. Two issues:

- **Verify these are the correct, current, approved logo files.** Organisations like ESA have specific brand guidelines governing how their logo may be reproduced; using an incorrect or outdated version on a public Imperial-affiliated site is a real risk, not a cosmetic one. Joshua should check each logo against the partner's own brand guidelines before this ships to the real subdomain.
- **Fix the tile styling.** Logos currently sit on light cream/tan rounded rectangles that clash against the dark theme. Either keep light tiles but integrate them more deliberately (a consistent white card with proper padding and a subtle border, intentional rather than accidental), or find a treatment that works on a dark background directly. Decide one direction and apply it consistently.

## 7. People page: fix Michel's placeholder initials

The placeholder avatar for Dr Michel-Alexandre Cardin shows "DM". It should show "MC". Check the initials-generation logic; it's likely reading "Dr Michel" as the two-word input rather than the actual first and last name.

## 8. Verification before calling this done

Before this goes back to Joshua for review: reload every page (Home, Method, Projects index, each project page, People, Publications, Opportunities, Accessibility statement) with JavaScript disabled and confirm all content still renders per the base requirements document's no-JavaScript baseline, since the added motion and diagrams must remain progressive enhancement. Then reload with JavaScript enabled and visually confirm, page by page, that no star or decorative element overlaps any text or interactive element.
