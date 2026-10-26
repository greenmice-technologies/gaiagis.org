---
title: 'Add and organize layers'
description: 'Add a base map, an empty layer, groups, grids, and tile services, then control the order and visibility of every layer.'
translationKey: 'tutorial-layers'
weight: 20
contentStatus: 'canonical-en'
---

A workspace is a stack of layers: the layer at the top of the **Layers** panel is drawn on top of the map. This tutorial shows every way to add a layer from the **+** menu and how to arrange the stack.

| | |
| --- | --- |
| You need | The **World atlas** workspace from [Your first workspace](01-first-workspace.md), with the five Natural Earth layers |
| Time | About 15 minutes |
| Result | A workspace with a base map at the bottom, an empty layer, a group, and the know-how to add grids and tile services |

For clarity, the screenshots below hide **Natural Earth Populated Places** (clear its checkbox in the **Layers** panel).

![The Layers panel with the five Natural Earth layers](/images/tutorials/02-layers/01-starting-point.png)

## 1. The Add layer menu

Select the **+** button next to the search field. The menu has two parts:

![The Add layer menu with its actions and base maps](/images/tutorials/02-layers/02-add-layer-menu.png)

| Action | What it does |
| --- | --- |
| **Browse** | Opens a file from your computer in the import dialog, as in the [first tutorial](01-first-workspace.md) |
| **Text** | Creates a layer from GeoJSON, KML, or XML that you type or load |
| **Empty Layer** | Creates a vector layer you can fill later |
| **Layer Group** | Creates a folder that holds other layers |
| **Layer from Pictures** | Creates a layer from pictures |
| **Grid** | Generates a regular grid of square or other cells |
| **Add XYZ** | Adds a raster tile service from a URL template |
| **Add Vector Tiles** | Adds a vector tile service from a style URL |

Below the actions, **Base maps** lists ready-to-use backgrounds: Open Street Map, Google Satellite, Google Hybrid, ArcGIS Satellite, and more. Scroll the row sideways to see them all.

## 2. Add a base map

Select **Open Street Map**. The base map is added to the list like any other layer.

New layers are added at the **top** of the list. The base map is opaque, so it now hides everything below it:

![The OpenStreetMap base map covering the vector layers](/images/tutorials/02-layers/03-basemap-on-top.png)

## 3. Change the layer order

Every row in the **Layers** panel has a grip on the left. Hover over the **Open Street Map** row, then drag it by the grip below **Natural Earth Boundary Lines Land**.

![The base map moved to the bottom of the list, with the vector layers visible above it](/images/tutorials/02-layers/03b-basemap-at-bottom.png)

The order of the rows is the order of the stack: the first row is on top. Keep base maps at the bottom and the layers you want to read on top.

## 4. Create an empty layer

Select **+** and then **Empty Layer**. The browser asks for a name; enter `Notes`.

![The new Notes layer in the list](/images/tutorials/02-layers/04-empty-layer.png)

The layer is created as a GeoJSON layer with a single placeholder point named `null island` at coordinates 0, 0, where the equator meets the prime meridian. Use it as a starting point for your own features.

## 5. Group layers

Select **+** and then **Layer Group**, and enter the name `Reference data`. A group is a folder with its own visibility checkbox, opacity, and a chevron to collapse it.

![The new group at the top of the list](/images/tutorials/02-layers/05-layer-group.png)

To put a layer in the group, open the **⋮** menu of the layer, choose **Move to group**, and pick the group.

![The Move to group submenu listing the Reference data group](/images/tutorials/02-layers/05b-move-to-group.png)

The layer is now indented under the group.

![Natural Earth Disputed Areas inside the Reference data group](/images/tutorials/02-layers/05c-layer-in-group.png)

To take a layer out again, use **Move to group** and choose **(Root)**.

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

**Text** opens the **Text Layer** dialog. Use **Load file** to read a `.json`, `.geojson`, `.kml`, or `.xml` file, or type or paste the content in the editor. The format selector sets how the text is read, and **Copy** and **Save** act on the editor content.

![The Text Layer dialog](/images/tutorials/02-layers/07c-text-layer-dialog.png)

## 9. The layer row

![A layer row with its controls](/images/tutorials/02-layers/08-layer-row.png)

From left to right, a row has the drag grip, the layer type, a visibility checkbox, the name, the opacity percentage, the style button, and the **⋮** menu. The menu offers **Zoom to layer**, **Attribute table**, **Publish**, **Clone**, **Create Annotation Layer**, **Move to group**, and **Delete**. The [next tutorial](_index.md) uses the attribute table and the style button.

## Result

Your workspace now has a base map at the bottom, your data above it, an empty layer, and a group that organizes related layers. Since the order of the rows is the order of the stack, you can rearrange it at any time.

## Related

- [Workspace Editor](../manuals/workspaces/workspace-editor.md)
- [Managing Layers](../features/layers.md)
