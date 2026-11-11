---
title: "Layers"
description: "Add data to the map, order it, and work with each layer."
translationKey: "editor-layers"
weight: 50
appScreen:
  - "/project/:id/editor?panel=layers"
  - "editor:import"
contentStatus: verified
verifiedAgainst: "828cf266"
---

Open the **Layers** panel from the strip on the left of the [editor](workspace-editor.md).

A new workspace starts with one base layer, **Open Street Map**.

## Add a layer

Select **+** (**Add layer**) at the top of the panel:

- **Browse** — files from your computer
- **Empty Layer** — a new layer to draw on
- **Layer Group** — a group to organize layers
- **Layer from Pictures**
- **Grid**
- **Add XYZ** — a tiled base map from a URL
- **Add Vector Tiles** — a vector tile source from a URL
- **Query layer** — a layer from a query on your data

## Import files

1. Select **+**, then **Browse**, and choose your files.
2. The **Import data** window lists each file and the layers found in it, with the number of features and the coordinate system.
3. Untick the layers you do not want. Change the coordinate system if Gaia did not detect the right one.
4. Select **Add to map**.

Use **Group layers** to add the selected layers as one group, and **Browse** to add more files before you finish.

## Paste data

The box at the top of the panel searches your layers. It also accepts pasted data: GeoJSON, KML, GML, WKT, or a URL.

1. Paste the text into the box and press Enter.
2. Check the text in the window that opens, then select **Save**.
3. Give the layer a name and select **Save**.
4. In **Import data**, select **Add to map**.

## Work with a layer

Each row in the panel has:

- A handle to drag the layer up or down in the list.
- A checkbox to show or hide the layer.
- The name. Select it to rename the layer.
- The opacity, from 0 to 100.
- **Style** — see [Styles](styles.md).
- **Attribute table** — see [Attribute table](attribute-table.md).
- **Layer actions**, a menu with **Zoom to layer**, **Attribute table**, **Reproject**, **Export**, **Publish**, **Clone**, **Create Annotation Layer**, and **Delete**.
