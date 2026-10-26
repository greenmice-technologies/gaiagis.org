---
title: 'Your first workspace'
description: 'Create a workspace, set its projection, import a GeoPackage, and explore the layers on the map.'
translationKey: 'tutorial-first-workspace'
weight: 10
contentStatus: 'canonical-en'
---

In this tutorial you create a workspace, set its projection to EPSG:4326, import a GeoPackage with five vector layers, and explore them on the map. The same workspace is the starting point for the following tutorials.

| | |
| --- | --- |
| You need | A Gaia account and the sample file [natural_earth.gpkg](/downloads/tutorials/natural_earth.gpkg) |
| Time | About 10 minutes |
| Result | A workspace named **World atlas** with five layers, centered on the world |

## 1. Create a workspace

Sign in and open the dashboard. Select **Create a new Workspace**.

![The Gaia dashboard with the Create a new Workspace button](/images/tutorials/01-first-workspace/01-dashboard.png)

Gaia creates an empty workspace and opens the editor straight away.

## 2. Get to know the editor

![The empty editor](/images/tutorials/01-first-workspace/02-empty-editor.png)

- **Left rail.** Five panels: **Layers**, **Notebook**, **Assets**, **Web Services**, and **Workspace**. Select a tab to open its panel; select it again to hide it.
- **Side panel.** Shows the content of the selected tab. The three buttons at the top right (**Inspector**, **Split**, **Focus**) change how much of the window the panel takes.
- **Map canvas.** The map takes the rest of the window, with a toolbar at the bottom to draw points, lines, polygons, circles, and rectangles, or to select an area to zoom to.
- **Footer.** Projection selector, scale, and the coordinates under the pointer.
- **Top bar.** The workspace name, **Output**, and **View**, which opens the workspace as a visitor would see it.

## 3. Name the workspace

Open the **Workspace** tab and type a new name, for example `World atlas`.

![The Workspace panel with the name field](/images/tutorials/01-first-workspace/03b-workspace-name.png)

The panel also shows the visibility (**Private**), status (**Draft**), and language of the workspace, and a rich-text description. Select **Save** at the top right to store the change.

## 4. Choose the projection

The sample data is in EPSG:4326 (WGS 84, longitude and latitude), so set the workspace to the same projection. Select the projection button in the footer, which reads `EPSG:3857` in a new workspace.

![The projection dialog with EPSG:4326 selected](/images/tutorials/01-first-workspace/03-projection-dialog.png)

Pick **EPSG:4326** from the list. A preview and the projection definition appear on the right. Select **Apply**.

> **Tip:** you can search other projections in the dialog or define your own with **Add custom**. Choosing the workspace projection first means the import dialog proposes the same projection for your data.

## 5. Import the GeoPackage

Switch to the **Layers** tab and select the **+** button next to the search field. The menu has two parts: **Actions** to create or import layers, and **Base maps**.

![The Add layer menu](/images/tutorials/01-first-workspace/04-add-layer-menu.png)

Select **Browse** and choose `natural_earth.gpkg`. Gaia reads the file in your browser with GDAL and opens the **Import data** dialog.

![The Import data dialog listing the five tables of the GeoPackage](/images/tutorials/01-first-workspace/05-import-dialog.png)

The dialog lists every table of the file with its number of features and its source projection:

| Table | Geometry | Features |
| --- | --- | --- |
| `boundary_lines_land` | Lines | 390 |
| `coastlines` | Lines | 1428 |
| `countries` | Polygons | 242 |
| `disputed_areas` | Polygons | 28 |
| `populated_places` | Points | 1251 |

All five tables are selected. Use **Deselect all** or the checkboxes to import only some of them, and **Group layers** to put the imported layers into one group. Each table is converted to GeoJSON in the workspace projection.

Select **Add to map**. When the five rows show **Added**, close the dialog.

## 6. Explore the layers

![The five imported layers in the Layers panel](/images/tutorials/01-first-workspace/06-layers-added.png)

Each row of the **Layers** panel has a visibility checkbox, an opacity value, a style button, and a menu of actions. The newest layer is listed first.

Open the **⋮** menu of **Natural Earth Countries**.

![The layer actions menu](/images/tutorials/01-first-workspace/07-layer-actions.png)

The menu offers **Zoom to layer**, **Attribute table**, **Publish**, **Clone**, **Create Annotation Layer**, and **Delete**. Select **Zoom to layer**.

The populated places are labelled, which makes the map crowded. Clear the checkbox of **Natural Earth Populated Places** to hide the layer: hiding does not remove it, and you can show it again at any time.

![The world map with countries, coastlines, and boundaries](/images/tutorials/01-first-workspace/08-zoom-to-layer.png)

## Result

You now have a saved workspace with five vector layers in EPSG:4326. The default style is applied, which the [next tutorials](_index.md) replace with your own.

## Related

- [Workspace Editor](../manuals/workspaces/workspace-editor.md)
- [My Workspaces](../manuals/workspaces/my-workspaces.md)
