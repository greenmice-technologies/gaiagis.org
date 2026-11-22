---
title: "Nine sheets. One coherent atlas."
description: "How a shared geographic dataset becomes a nine-page GeoPDF: inside the Brazil L1–L9 cartographic production prototype."
weight: 1
featured: true
category: Cartographic production
exampleType: Production prototype
cover: /images/use-cases/atlas/preview-L3.png
coverAlt: "Brazil L3 prototype chart with coastal routes, airspace boundaries, and marginal legend"
coverCaption: "Sheet L3. Routes and airspace follow the northeastern coast of Brazil; the marginal column keeps the edition, scale, and map key alongside the geography."
deliverable: "Nine-page GeoPDF with shared layer controls"
download:
  url: /downloads/use-cases/brazil-atlas-l1-l9.pdf
  label: Download the atlas · 98 MB
contentStatus: canonical-en
---

## A map series is a consistency problem

One well-composed sheet is only the beginning. Across an atlas, the same route must keep its meaning, symbols must remain recognizable, and every sheet must carry enough context to stand on its own.

This Brazil example explores that production problem in Gaia GIS. Nine regional frames draw from a shared set of map layers, while each page retains its own geographic extent and projection. The result is a single GeoPDF with nine georeferenced maps.

**The intended reader:** a cartography team evaluating multipage delivery. **The output:** a reviewable atlas prototype, not an operational aviation publication.

## Keep the source separate from the cartographic choices

The acquisition covered the combined extent of the nine sheets. Original WFS snapshots were retained separately from editable working layers. That separation makes it possible to distinguish what was acquired from what was selected for the map.

The working selection contains 364 aerodromes and heliports, 1,630 airspace features, 2,412 route segments, 1,696 fixes, and 541 radio aids. These are selections for this prototype, not an inventory of all Brazilian aviation features. Graphic deduplication does not delete records from the original snapshots.

Coastlines and state boundaries provide geographic context. Routes, points, and airspace supply the thematic content. Seven shared map layers carry those elements across the atlas.

## Explore the nine sheets

Read the series as a set, then open an individual sheet to inspect its composition. Different regions require different frames; a consistent scale and visual vocabulary hold them together. These previews show the exported output, rather than the editor interface.

{{< atlas-sheets >}}

## A common language, with room for each region

All nine sheets use a scale of 1:2,000,000. Each keeps its own Lambert projection parameters and map frame. Some sheets use a taller page, and the marginal column changes side where the layout calls for it.

The layout therefore shares a design system without forcing every region into an identical rectangle. The map key, scale bar, and title block remain recognizable across the set.

### Three details to inspect

- **Routes and boundaries:** different line styles and colours distinguish route content from airspace and geographic context. Dense intersections still need cartographic review.
- **Symbols and their explanation:** the legend includes 18 symbol samples across aerodromes, radio aids, and line or area features. It accompanies the sheet rather than relying on the reader to open a separate manual.
- **Edition and source dates:** the reference-chart edition and WFS acquisition date are shown separately. They describe different things and must not be treated as interchangeable.

<figure class="atlas-legend"><a href="/images/use-cases/atlas/legend-L1.png"><img src="/images/use-cases/atlas/legend-L1.png" alt="Enlarged title block and legend from sheet L1, including scale, symbols, source information, and prototype status" loading="lazy"></a><figcaption>The L1 marginal column brings the title, map key, scale, and source notes into one place. Open the image to inspect the original detail.</figcaption></figure>

## Deliver one file that still understands its maps

The final PDF combines nine pages while retaining a geographic viewport for every map. Shared layer identities allow compatible PDF readers to control the same map layer across the document.

A browser preview can display the pages, but may not expose geographic tools or layer controls. Inspect those capabilities in a PDF reader that supports them.

**[Download the nine-page GeoPDF — approximately 98 MB](/downloads/use-cases/brazil-atlas-l1-l9.pdf)**

### What was checked

The recorded validation for this export reports nine pages, nine geographic viewports, and matching projection parameters for each sheet. It also checks that the pages refer to shared layer controls.

Map-frame corners matched the requested coordinates within 0.007 metres in the file-level check. This measures export geometry; it does **not** measure the positional accuracy of the source features. The validation belongs to this saved artifact, not to every future Gaia export.

## What this prototype does—and does not—establish

The atlas demonstrates multipage assembly, shared map layers, page-specific frames, and a consistent marginal design. Aeronautical content remains partial: frequencies, route altitudes, and area minimum altitudes are absent. Label placement and cartographic choices require further refinement. The sheets must not be used for navigation.

Reference editions also differ: L1–L8 refer to 2611A1, effective 29 October 2026; L9 refers to 2610A1, effective 1 October 2026. WFS acquisition uses 29 October 2026. Correspondence of individual WFS records to those publication editions has not been certified.

## Sources and production record

- **Reference charts:** DECEA / AISWEB, Brazil ENRC L1–L9. The download here is the Gaia-produced prototype, not a redistribution of the official reference PDFs.
- **Aeronautical data:** saved WFS acquisition used for the prototype; selected working layers are distinct from the original snapshots.
- **Geographic context:** Natural Earth coast and administrative boundary data.
- **Production:** Gaia GIS / QGIS workflow. Atlas created 31 October 2026; title blocks and legends revised 1 November 2026. Case study prepared 20 November 2026 from the saved artifacts and validation record.

## Build around your own delivery

For a regional atlas, site map series, or technical handover, start with the pages the reader needs. Then define shared layers, per-page extents, and the information each sheet must carry.

[Explore print production](/en/product/print/) · [Read the layout guide](/en/manuals/print-layouts/) · [Discuss your map series](/en/contact/)
