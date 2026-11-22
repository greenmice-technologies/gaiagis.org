---
title: "From aeronautical layers to a chart sheet"
description: "See a fictional en-route map in the Gaia GIS editor, then download the GeoPDF exported from its print layout."
translationKey: use-case-aviation-chart
contentStatus: canonical-en
cover: /images/use-cases/northhaven-chart.webp
coverAlt: "Northhaven demonstration map sheet with fictional islands, routes, airspace, and a map key"
coverCaption: "The finished Northhaven sheet: a deliberately small synthetic dataset makes the relationship between layers, symbols, and output easy to inspect."
category: Cartography
exampleType: Synthetic demonstration
deliverable: "Output: downloadable GeoPDF map sheet"
download:
  url: /downloads/use-cases/northhaven-sample-chart.pdf
  label: Download the GeoPDF
weight: 10
---

The Northhaven example shows how a cartography team can turn separate aeronautical layers into one sheet for review. The goal is to make routes, reporting points, and airspace boundaries easy to distinguish at the selected scale.

## The review question

Can a reader distinguish routes, reporting points, aerodromes, and airspace without losing the geographic context? This example is intended for teams evaluating map-sheet production. The deliverable is a single sheet that can be inspected independently of the editor.

**[Inspect the finished GeoPDF](/downloads/use-cases/northhaven-sample-chart.pdf)**

## Prepare the map

The workspace uses five synthetic vector layers: islands, airspace sectors, route segments, reporting points, and aerodromes. Each layer can be styled independently. The two aerodromes use circles, reporting points use triangles, and translucent sectors keep the geographic context visible underneath.

<img class="screenshot" src="/images/use-cases/northhaven-editor.webp" alt="Gaia GIS editor showing the five Northhaven layers beside the example map" width="1440" height="920" loading="lazy" decoding="async">

[Explore how layers are imported, edited, and styled](/en/product/layers/).

## Why these symbols work together

The design uses shape as well as colour: circles identify aerodromes and triangles identify reporting points. Translucent airspace fills allow routes and the island outlines to remain visible. The map key connects those symbols to their meaning on the exported sheet.

When reviewing the PDF, inspect label collisions, route continuity, symbol readability, and the relationship between the map and its key at the intended viewing size. These are review criteria, not a claim of aeronautical certification.

## Lay out and export the sheet

The layout fits the map in a landscape frame with a title, a map key, and a scale bar. The export is a GeoPDF, so compatible readers can use the geographic reference in the map frame. Compare the editor view above with the exported sheet below.

<img class="screenshot" src="/images/use-cases/northhaven-chart.webp" alt="The exported Northhaven chart with a map frame, scale bar, and symbols for aerodromes, reporting points, routes, and airspace" width="1357" height="961" loading="lazy" decoding="async">

**[Download the Northhaven sample GeoPDF](/downloads/use-cases/northhaven-sample-chart.pdf)**

The Northhaven chart contains fictional data and is for demonstration only. Do not use it for navigation.

## Scope and limitations

This is a product demonstration, not an operational chart or a customer deployment. The geography and aeronautical features are synthetic. The example does not establish compliance with aviation charting standards or suitability for navigation. Geographic tools depend on the PDF reader; a browser preview may display the sheet without exposing them.

**Editorial review:** 20 November 2026. **Data:** five synthetic vector layers. **Deliverable:** one landscape GeoPDF sheet. The exported file is the reference artifact for this example.

## Reproduce the workflow

[Create a workspace](/en/tutorials/01-first-workspace/), prepare your layers, then follow the [print layout guide](/en/manuals/print-layouts/). The synthetic source layers are not included as a downloadable project; the PDF is provided for inspecting the output.

[Discuss a cartographic deliverable](/en/contact/) · [Explore print layouts](/en/product/print/) · [Browse all use cases](/en/use-cases/)
