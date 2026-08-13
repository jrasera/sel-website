# SEL Website: Requirements Addendum (Design and Content Refresh)

Prepared for: Dr Joshua Rasera, Strategic Engineering Laboratory
Date: 13 August 2026
Status: Ready for build
Supersedes: nothing in `sel-website-requirements.md`; this is additive. Read that document first for the base sitemap, content architecture, and accessibility requirements, which all still apply.

Context: v1 of the site is live at sel-website.pages.dev and works correctly, but the visual design is flat and static: solid navy panels, bordered rectangles, one line chart. This addendum specifies a design refresh plus two content additions: partner logos, and material adapted from Michel Cardin's company site strategic-engineering.co.

## 1. Content sourcing permission

Michel owns both the Strategic Engineering Laboratory (the academic research group this site represents) and Strategic Engineering (strategic-engineering.co, his commercial advisory company). He has authorized reuse of content from strategic-engineering.co on this site. Claude Code may draw on that site's text and structure directly rather than treating it as a third-party source to work around.

That said, adapt tone rather than copying wholesale. Strategic-engineering.co is written for a commercial consulting audience (calls to action like "Join the programme waitlist", client testimonials, service-selling language). None of that belongs on an academic research group page. Where content is pulled in, rewrite it in SEL's existing voice: descriptive, research-oriented, no sales language, no calls to action beyond "explore our work" or "get in touch."

## 2. New page: Method

Add a new page at `/method/`, linked from the home page's existing four-step methodology section ("Learn more about our method →") and from the main navigation.

Content: an expanded version of the four-step summary already on the home page (Model uncertainty / Analyse risk / Optimise design / Support decisions), adapted from the structure of strategic-engineering.co's Method page. Rework their seven-principle framework into SEL's own language and framing, in research terms rather than consulting terms: for example, "quantify whether adaptation is worth its cost using real-options reasoning" becomes something like "we quantify the value of flexibility using real options analysis, drawing on methods published in [relevant SEL research areas]." Do not reuse their exact wording; the structure and the underlying seven-step logic can carry over, the sentences should not.

This page is the primary home for the hub-and-spoke diagram described in Section 4.

## 3. Publications page: evidence framing

Add a short introductory section above the existing publication list, adapted from the framing on strategic-engineering.co's Evidence Centre page: publications presented as a body of evidence with a short summary of what the research consistently shows, not only a bibliography. Keep this brief, two or three sentences plus the existing list structure. Written in SEL's own words; do not reuse their copy.

## 4. Partner logos

Replace the current text-pill partner lists (visible on project pages, for example the ESA ISRU page's "European Space Agency / ESRIC / Frazer-Nash Consultancy / Factories in Space / Moliri / Space RS / UK Space Agency / Zuken" row) with actual logo images. Add a partner logo strip to the home page as well, showing partners across all active projects, not just one.

- Joshua will supply logo image files.
- Build the logo strip now with placeholder logo tiles (grey rounded rectangles at correct aspect ratio) so real assets can drop in without further layout work.
- Logos render in grayscale by default and shift to full color on hover, matching the pattern seen on strategic-engineering.co's homepage partner strip.
- Each logo links to the partner's website where a URL is known.
- Store logos as their own content entries (one file per partner: name, image path, URL) so adding a new partner is a content change, not a code change, consistent with the content-management approach in the base requirements document.

## 5. Visual and interaction design refresh

The core visual identity (dark navy base, Space Grotesk and IBM Plex Mono type pairing, teal accent) stays. The flatness is the problem, not the palette. Specific changes:

- **Background depth**: replace the flat solid navy fill used across pages with a layered starfield that has actual depth, either a high-quality photographic star field or a properly rendered multi-layer particle field with parallax on scroll, rather than the current static CSS radial-gradient dots. Keep it subtle behind text; it should read as atmosphere, not noise. Must remain fully static (no motion) when `prefers-reduced-motion` is set.

- **Methodology diagram**: replace the current four flat "01 / 02 / 03 / 04" bordered cards on the home page with a connected hub-and-spoke diagram: a central node (something like "SEL methodology" or the lab's mark) with four connected nodes around it, each representing one step, in the visual spirit of the node diagram on strategic-engineering.co's Method page but built as an original SVG design for SEL, not a copy of their graphic. On the new `/method/` page, this expands to the full seven-node version if the seven-step adaptation from Section 2 is used, or stays at four if it isn't; decide based on how the adapted content lands.

- **Per-project methodology diagrams**: each project page's Methodology & capabilities section gets a custom diagram (a value-chain or process diagram specific to that project's actual content) instead of a plain text list. For the ESA ISRU page, this could be a value-chain diagram showing the flow from lunar resource extraction through to the financial model outputs (cost, revenue, NPV/IRR/ROI). Diagrams should be built from each project's real content, not generic decoration; a project without enough defined content yet can skip this until it has one.

- **Motion**: add scroll-triggered reveal animation for major sections (fade and slight upward motion as sections enter the viewport) and subtle hover depth on cards (shadow lift, slight scale, or a soft glow using the accent color) so the page feels responsive to interaction. Keep this restrained: motion should support reading, not compete with it. Respect `prefers-reduced-motion` throughout, consistent with the accessibility requirements in the base document.

- **Partner logo strip**: per Section 4, both grayscale-to-color hover behavior and layout.

## 6. Non-goals for this addendum

- No adoption of strategic-engineering.co's commercial tone, calls to action, or testimonial format.
- No decorative animation that isn't tied to a real interaction or scroll event; nothing purely ambient beyond the background starfield.
- No compromise to the WCAG 2.2 AA requirements, keyboard operability, or no-JavaScript baseline already specified in the base requirements document. All motion and diagrams are progressive enhancement: the page must remain fully readable and navigable with JavaScript and animation disabled.

## 7. Open items

- Partner logo files, to be supplied by Joshua.
- Final decision on whether the Method page uses the full seven-step adaptation or stays at four steps, to be made once draft copy exists.
- Per-project diagrams depend on each project having enough defined methodology content; build these incrementally as project pages mature.
