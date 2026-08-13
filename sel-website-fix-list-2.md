# SEL Website: Fix List 2 (Initials Bug Scope, Partner Logo Styling and Linking)

Prepared for: Dr Joshua Rasera, Strategic Engineering Laboratory
Date: 13 August 2026
Status: Ready for build
Context: follow-up to `sel-website-fix-list.md`. Partner logos are confirmed correct and current, so item 6 in that document (verify sourcing) is resolved; the two items below replace it. The initials bug in item 7 of that document is broader than first reported.

## 1. Initials bug affects everyone with a title, not just Michel

Dr Joshua Rasera's placeholder avatar shows "DJ", the same bug as Michel's "DM". Both read "Dr" as the first initial rather than skipping the title. Kosuke Ikeya, João Garça Gomes, Davis Bigestans, Zibo Fang, and Site Ma are unaffected since none of them carry a title prefix.

Rather than patching the parsing logic to strip "Dr", "Prof", "Professor", and so on, which is fragile and will break again for the next title variant or edge case, add an explicit `initials` field to each person's content file and use that directly instead of deriving initials from the name string. This matches the existing content-management approach of one human-editable file per person. Set it correctly for everyone now: MC for Michel, JR for Joshua, and confirm the rest are still correct once the field is added.

## 2. Partner logos: styling and linking

The logos themselves are correct and approved; the presentation needs work.

**Styling**: the current light cream/tan rounded rectangles are inconsistent in tone with each other and clash against the dark theme. Rebuild the tiles as a single, deliberate, consistent treatment:

- Uniform tile size and consistent internal padding across all seven logos, regardless of each logo's native aspect ratio, so the row reads as one coherent set rather than seven mismatched boxes.
- A single background treatment applied identically to every tile: a plain white or very light neutral card (most of these logos are designed for light backgrounds and won't read against dark), with a subtle border using the site's existing card border color and the same corner radius used elsewhere on the site, so the tiles feel like part of this design system rather than pasted in.
- Keep the grayscale-to-color hover behavior from the original spec.
- Subtle hover lift (shadow or slight scale) consistent with the hover treatment used elsewhere on the site.

**Linking**: each logo tile becomes a link to that partner's website, opening in a new tab. Use each organisation's official homepage:

- European Space Agency: https://www.esa.int
- ESRIC: https://esric.lu
- Frazer-Nash Consultancy: https://www.fnc.co.uk
- Factories in Space: https://www.factoriesinspace.com
- Moliri: https://moliri.eu
- Space RS: https://space-rs.com
- UK Space Agency: https://www.gov.uk/government/organisations/uk-space-agency
- Zuken: https://www.zuken.com

Note: Factories in Space and Moliri were previously shown as a single combined tile ("Factories in Space / Moliri"). With both now having confirmed separate URLs, split this into two separate logo tiles, one per organisation, each linking to its own site.

Each link needs an accessible name beyond the bare logo image, an `aria-label` such as "Visit European Space Agency (opens in new tab)" or equivalent visually hidden text, and a visible focus state for keyboard users, consistent with the accessibility requirements in the base document. If a partner's URL can't be confirmed, leave that tile as a non-interactive image rather than guessing at a link.
