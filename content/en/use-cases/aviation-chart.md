---
title: "From aeronautical layers to a chart sheet"
description: "See a fictional en-route map in the Gaia GIS editor, then download the GeoPDF exported from its print layout."
translationKey: use-case-aviation-chart
contentStatus: canonical-en
weight: 10
---

The Northhaven example shows how a cartography team can turn separate aeronautical layers into one sheet for review. The goal is to make routes, reporting points, and airspace boundaries easy to distinguish at the selected scale.

## Prepare the map

The workspace uses five synthetic vector layers: islands, airspace sectors, route segments, reporting points, and aerodromes. Each layer can be styled independently. The two aerodromes use circles, reporting points use triangles, and translucent sectors keep the geographic context visible underneath.

<img class="screenshot" src="/images/use-cases/northhaven-editor.webp" alt="Gaia GIS editor showing the five Northhaven layers beside the example map" width="1440" height="920" loading="lazy" decoding="async">

[Explore how layers are imported, edited, and styled](/en/product/layers/).

## Lay out and export the sheet

The layout fits the map in a landscape frame with a title, a map key, and a scale bar. The export is a GeoPDF, so compatible readers can use the geographic reference in the map frame. Compare the editor view above with the exported sheet below.

<img class="screenshot" src="/images/use-cases/northhaven-chart.webp" alt="The exported Northhaven chart with a map frame, scale bar, and symbols for aerodromes, reporting points, routes, and airspace" width="1357" height="961" loading="lazy" decoding="async">

**[Download the Northhaven sample GeoPDF](/downloads/use-cases/northhaven-sample-chart.pdf)**

The Northhaven chart contains fictional data and is for demonstration only. Do not use it for navigation.

[Explore print layouts](/en/product/print/) · [Browse all use cases](/en/use-cases/)
