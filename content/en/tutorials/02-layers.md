---
title: 'Add and organize layers'
description: 'Add an empty layer, groups, grids, and tile services, then control the order and visibility of every layer.'
translationKey: 'tutorial-layers'
weight: 20
contentStatus: verified
verifiedAgainst: '828cf266'
---

A workspace is a stack of layers: the layer at the top of the **Layers** panel is drawn on top of the map. This tutorial shows every way to add a layer from the **+** menu and how to arrange the stack.

| | |
| --- | --- |
| You need | The **World atlas** workspace from [Your first workspace](01-first-workspace.md), with the five Natural Earth layers |
| Time | About 15 minutes |
| Result | A workspace with an empty layer, a group, and the know-how to reorder layers and add grids and tile services |

For clarity, the screenshots below hide **Natural Earth Populated Places** (clear its checkbox in the **Layers** panel).

![The Layers panel with the five Natural Earth layers](/images/tutorials/02-layers/01-starting-point.png)

## 1. The Add layer menu

Select the **+** button next to the search field. The menu lists the actions that create or import layers:

![The Add layer menu](/images/tutorials/02-layers/02-add-layer-menu.png)

| Action | What it does |
| --- | --- |
| **Browse** | Opens a file from your computer in the import dialog, as in the [first tutorial](01-first-workspace.md) |
| **Empty Layer** | Creates a vector layer you can fill later |
| **Layer Group** | Creates a folder that holds other layers |
| **Layer from Pictures** | Creates a layer from pictures |
| **Grid** | Generates a regular grid of square or other cells |
| **Add XYZ** | Adds a raster tile service from a URL template |
| **Add Vector Tiles** | Adds a vector tile service from a style URL |
| **Query layer** | Creates a layer from a query on your data |

## 2. The base map

A new workspace already has a base map: **Open Street Map**, the last row of the list. Clear its checkbox to hide it, and tick it again to show it. To use another background, add a tile service as described in step 7.

## 3. Change the layer order

Every row in the **Layers** panel has a grip on the left. Hover over the **Natural Earth Populated Places** row, then drag it by the grip below **Natural Earth Disputed Areas**.

![The Layers panel after moving a row](/images/tutorials/02-layers/03-layer-order.png)

The order of the rows is the order of the stack: the first row is on top. Keep the base map at the bottom and the layers you want to read on top.

## 4. Create an empty layer

Select **+** and then **Empty Layer**. The **New layer** dialog asks for a **Layer name**; enter `Notes` and select **Save**.

![The New layer dialog with the name Notes](/images/tutorials/02-layers/04a-new-layer-name.png)

New layers are added at the top of the list.

![The new Notes layer in the list](/images/tutorials/02-layers/04-empty-layer.png)

Use it as a starting point for your own features: choose it with **Edit layer** in the toolbar at the bottom of the map, then draw.

## 5. Group layers

Select **+** and then **Layer Group**. In the **New group** dialog, enter the **Group name** `Reference data` and select **Save**. A group is a folder with its own visibility checkbox, opacity, and a chevron to collapse it.

![The new group at the top of the list](/images/tutorials/02-layers/05-layer-group.png)

To put a layer in the group, open the **⋮** menu of the layer, choose **Move to group**, and pick the group.

![The Move to group submenu listing the Reference data group](/images/tutorials/02-layers/05b-move-to-group.png)

The layer is now listed under the group.

![Natural Earth Disputed Areas inside the Reference data group](/images/tutorials/02-layers/05c-layer-in-group.png)

## 6. Create a grid

Select **+** and then **Grid** to generate a grid layer, for example for sampling or for an index map. The dialog previews the grid on the map while you change its settings.

![The Create Grid Layer dialog with a preview of the grid on the map](/images/tutorials/02-layers/06-grid-dialog.png)

| Setting | Meaning |
| --- | --- |
| **Layer name** | Name of the new layer (`grid` by default) |
| **Cell size** and **Unit** | Size of each cell, in kilometers by default. The hint under the field shows how many cells you get |
| **Grid type** | Shape of the cells, **Square** by default |
| **Draw on map** | Draw the extent of the grid on the map instead of typing it |
| **Show grid preview on map** | Turns the live preview on or off |
| **Width** and **Height** | Size of the extent, in degrees of longitude and latitude |
| **Anchor point**, **Anchor X**, **Anchor Y** | Corner of the extent and its coordinates |
| **Use current map view** | Fills the extent from what you see on the map |

Select **Create Grid** to add the layer, or **Cancel** to close the dialog.

## 7. Add a tile service

**Add XYZ** adds a raster tile service. Give it a name, enter the URL template, and, if the provider asks for it, an attribution.

![The Add XYZ dialog](/images/tutorials/02-layers/07-xyz-dialog.png)

The template uses `{z}/{x}/{y}` for the tile position. Use `{-y}` for TMS services and `{a-c}` for subdomains, for example `https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png`.

**Add Vector Tiles** adds a vector tile service from the URL of a MapLibre or Mapbox `style.json`. Include the API key in the query string if the provider requires one. The optional **Raster XYZ URL** is used for print and previews. For MapTiler styles it is derived automatically.

![The Add Vector Tiles dialog](/images/tutorials/02-layers/07b-vector-tiles-dialog.png)

## 8. Create a layer from text

The search field at the top of the panel also accepts data. Paste GeoJSON, KML, GML, WKT, or a URL into it and press Enter: the **Text Layer** dialog opens with your text in an editor. **Format** sets how the text is read, **Copy** copies it, and **Save** continues to the layer name and the import dialog.

While you type in the field, it also suggests ready-made layers under **Available layers**.

![The Text Layer dialog](/images/tutorials/02-layers/07c-text-layer-dialog.png)

## 9. The layer row

![A layer row with its controls](/images/tutorials/02-layers/08-layer-row.png)

From left to right, a row has the drag grip, the layer type, a visibility checkbox, the name, the opacity percentage, the style button, the attribute table button, and the **⋮** menu. The menu offers **Zoom to layer**, **Attribute table**, **Reproject**, **Export**, **Publish**, **Clone**, **Create Annotation Layer**, **Move to group**, and **Delete**. The [next tutorial](_index.md) uses the attribute table and the style button.

## Result

Your workspace now has the base map at the bottom, your data above it, an empty layer, and a group that organizes related layers. Since the order of the rows is the order of the stack, you can rearrange it at any time.

## Related

- [Workspace editor](../manuals/workspaces/workspace-editor.md)
- [Layers](../manuals/workspaces/layers.md)
