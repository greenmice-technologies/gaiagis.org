---
title: "Layers"
description: "Add data to the map, order it, and work with each layer."
translationKey: "editor-layers"
weight: 50
appScreen:
  - "/project/:id/editor?panel=layers"
  - "editor:import"
contentStatus: needs-review
---

Open the **Layers** panel from the strip on the left of the [editor](workspace-editor.md).

A new workspace starts with one base layer, **Open Street Map**.

## Add a layer

Select **+** (**Add layer**) at the top of the panel:

- **Browse** — files from your computer
- **Empty Layer** — a new layer to draw on
- **Layer Group** — a group to organize layers
- **Layer from Pictures** — one point per photo, placed from the GPS position stored in the photo. While it works, a window blocks the editor and shows how many photos are done, what is happening to the current one (reading its metadata, finding its address, uploading, saving the layer) and about how long is left. Gaia looks up one address per second, so a large set takes a few minutes; keep the tab open. **Cancel** stops it without creating the layer; photos already uploaded stay in the workspace's storage.
- **Grid**
- **Add XYZ** — a tiled base map from a URL
- **Add Vector Tiles** — a vector tile source from a URL (a MapTiler map link, with or without `style.json`, works). The print preview needs a raster URL; if it shows "Invalid key", enter a raster tiles URL in the dialog.
- **Query layer** — a layer from a query on your data

## Import files

1. Select **+**, then **Browse**, and choose your files.
2. The **Import data** window lists each file and the layers found in it, with the number of features and the coordinate system.
3. Untick the layers you do not want. Change the coordinate system if Gaia did not detect the right one.
4. Select **Add to map**. The button shows how many layers are selected, for example **Add to map (3)**.

With two or more layers selected, tick **Group layers** to add them as one group. Use **Browse** to add more files before you finish. If a layer cannot be converted, its row shows **Error**; hover over it to read the reason, and for a raster select its format to change it and retry.

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
- **Layer actions**, a menu with **Zoom to layer**, **Attribute table**, **Reproject**, **Export**, **Publish**, **Clone**, **Copy**, **Create Annotation Layer**, and **Delete**.

**Clone** freezes a WFS or WMS layer into a snapshot (a GeoJSON layer or an image). **Copy** duplicates a WFS or WMS layer as it is: the copy keeps the same type and stays connected to the OGC endpoint, so you can, for example, give it a different CQL filter. On a vector or raster layer, **Copy** makes an independent copy of the data. A copy is named like the original with `_copy`.

On a tile layer, **Edit tile source…** reopens the source dialog to change its name, URL, raster URL and attributions, and **Clone** adds a hidden copy named "(copy)".

On a vector tile layer, **Edit style…** opens the layer's **Style** panel. The list shows a **Map style** row, like a rule; select it to open **Map style**, a table with one row per style layer, grouped by source layer (water, roads, places…). Each row has a visibility checkbox and cells for color, outline or halo color, line width / radius / text size, opacity and the min and max zoom where it shows. A cell the provider drives with an expression shows **ƒ**, and one it leaves unset shows **–**; click it, or the layer name, to open that layer with the same label and control rows as the symbolizer editors, where the expression is edited as JSON or replaced with **Fixed value**. Changed cells are highlighted. Changes show on the map as you make them and are saved automatically. The provider's style is never modified: **↺** in a layer, or **Reset all**, goes back to it.

The print preview and PDF export still use the provider's own raster tiles, so they do not show these style changes.

## Atlas from pictures

On a **Layer from Pictures**, **Crea atlante** / create atlas opens a wizard. Its optional **Add context text** switch (off by default) sends each photo's coordinates and shooting time through the Gaia server to Open-Meteo and Wikipedia, and drafts a text per page from templates: when the photo was taken and the light of the day, the weather then (Open-Meteo reanalysis, indicative at about 25 km), and the Wikipedia lead when an article matches the place name. Each page ends with a **Sources** line. A photo that already has a description keeps it; all texts stay editable in the print layout afterwards.

The **Diff** window has two views, chosen with the switch at the top right: **Readable** (the default) lists only the features that differ, each with a label, a status (**Changed**, **New** or **Only here**) and a button to use the other side's version, and **Code** shows the two GeoJSON files side by side. In the readable view you can filter by status, search by name or ID, open a feature to see which fields changed, and apply all the listed changes at once. The two views edit the same result, so **Save merged copy** works from either.

**Diff** on a vector layer opens a submenu. **WFS source (updated)** appears when the layer was cloned from a WFS layer: it compares the layer with the current source and lets you save a merged copy. Below it are the other layers of the workspace you can compare with: WFS layers and GeoJSON vector layers, and, when the layer comes from a WFS type, only those of the same type. When you compare with another layer, your layer is on the left and the other layer is on the right. Select the arrow (←) in the margin of a changed block on the right to copy that change into your layer, or edit the left side by hand, and select **Save merged copy** to replace the data of your layer with the result. Its style, options and WFS source are not changed, and the other layer is not touched.

## Groups

A group is a row with a folder icon; its layers are listed under it. Add one with **+**, then **Layer Group**, or move a layer into a group with **Move to group** in its actions menu.

- Select the folder icon to close or open the group.
- The checkbox of a group shows or hides every layer in it. When you turn on a layer inside a hidden group, the group turns on again and the other layers keep their state.
- The actions menu of a group has **Clone group**, **Copy group** and **Delete**.

**Clone group** adds a new group, named like the original with `_copy`, and a copy of each layer in it. Each copy keeps the visibility and the place in the order of the layer it came from, and its name ends in `_copy` too. Vector, WFS, raster and WMS layers are copied. Other kinds of layer are left out, and the message at the end says how many. A large group can take a few seconds, because each layer is copied in turn.

**Copy group** does the same, except that WFS and WMS layers are copied as they are and stay connected to their endpoint instead of becoming snapshots. Vector and raster layers are cloned as with **Clone group**.

## The layer you are editing

Drawing and editing tools write to one layer at a time. The map toolbar shows its name beside the pencil, and you choose another layer from that menu. In the Layers panel the same layer has a pencil mark and an accent along its left edge, and its attribute table shows an **Editing** label. Point at a layer name to read it in full.
