---
weight: 3
title: "Print"
description: "Compose a print layout in the app and export a GeoPDF."
translationKey: print
contentStatus: "canonical-en"
---

Print is a layout you compose in the app, then export.

The base version includes:

- A default layout
- An in-app layout editor
- GeoPDF export through the QGIS print service (`gaia-q`)

That print service runs on the same Compose stack and is not exposed on a public port. The app calls it on the internal network.
