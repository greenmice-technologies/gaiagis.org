---
title: 'Explore data with the attribute table'
description: 'Open a layer as a table, filter and select features, edit values, and export the data.'
translationKey: 'tutorial-attribute-table'
weight: 30
contentStatus: 'canonical-en'
---

Every vector layer has an attribute table: one row per feature, one column per attribute, linked to the map. In this tutorial you open the table of the countries layer, find a country, select it on the map, and export the data.

| | |
| --- | --- |
| You need | The **World atlas** workspace from the [previous tutorials](01-first-workspace.md) |
| Time | About 10 minutes |
| Result | You can filter a layer, select features from the table, and export them |

## 1. Open the table

In the **Layers** panel, open the **⋮** menu of **Natural Earth Countries** and choose **Attribute table**.

![The layer menu with the Attribute table action](/images/tutorials/03-attribute-table/01-open-from-menu.png)

The table opens in the side panel, beside the map. The breadcrumb at the top (**Layers › Table — Natural Earth Countries**) shows where you are; use it to go back to the layers.

![The attribute table of the countries layer beside the map](/images/tutorials/03-attribute-table/02-table.png)

- The first column, **Geometry**, shows the geometry type of each feature (here **Multi Polygon**), followed by small buttons for that geometry.
- The other columns are the attributes stored in the GeoPackage: `featurecla`, `scalerank`, `SOVEREIGNT`, `ADMIN`, `NAME`, `POP_EST`, and many more. Scroll the table sideways to see them all.
- The checkbox at the start of each row selects the feature. The checkbox in the header selects all rows.

## 2. Select a column

Click the header of a column, for example `SOVEREIGNT`. The column is highlighted and a red **Delete Column** button appears in the toolbar.

![The SOVEREIGNT column selected, with the Delete Column button in the toolbar](/images/tutorials/03-attribute-table/03-column-selected.png)

Deleting a column changes the layer, so use that button with care.

## 3. Filter the rows

Type `Italy` in the **Filter** field and press Enter. The table shows only the rows that contain the text.

![The table filtered to one row, Italy](/images/tutorials/03-attribute-table/04-filter.png)

The filter looks at the attributes of each row, not only at one column. Select the filter button to the left of the field (**Clear filter**) to show all rows again.

> **Note:** layers added from a WFS service show an extra **Advanced CQL editor** button next to the filter. It is available only for WFS layers, where the filter is sent to the server as a CQL expression.

## 4. Select features and see them on the map

Select the checkbox of the Italy row. The feature is highlighted on the map, and its vertices are drawn.

![The selected row and the matching feature on the map](/images/tutorials/03-attribute-table/05-selection.png)

When at least one row is selected, new buttons appear in the toolbar:

| Button | What it does |
| --- | --- |
| **Mode: Transform** | Switches between transforming the selected geometry (move, scale, rotate) and editing its vertices |
| **Geometric operations** | Opens the menu described below |
| **Delete selected rows** | Deletes the selected rows |

## 5. Geometric operations

Select **Geometric operations** to open the menu.

![The Geometric operations menu](/images/tutorials/03-attribute-table/06-geometric-operations.png)

| Operation | Needs |
| --- | --- |
| **Buffer…** | One or more selected rows |
| **Union…** | Two or more selected rows |
| **Intersection…** | Two or more selected rows |
| **Difference…** | Two or more selected rows |
| **Symmetric difference…** | Two or more selected rows |

With a single row selected, only **Buffer…** is available; the others are greyed out until you select a second row.

## 6. Edit a value

Double-click a cell to edit it: the cell becomes an editable field.

![A cell in edit mode](/images/tutorials/03-attribute-table/08-edit-cell.png)

Use the **Save** button, the first button of the toolbar, to store your changes. Do not save if you only want to try this out.

## 7. Export the data

The download button of the toolbar opens the **Export** menu, which offers **CSV** and **GeoJSON**.

![The Export menu with CSV and GeoJSON](/images/tutorials/03-attribute-table/10-export-menu.png)

## The toolbar at a glance

From left to right: **Save**, **Add Column**, **Add Row**, and **Export**, then the filter. This tutorial covers these:

| Button | Action |
| --- | --- |
| Save | Saves the changes made in the table |
| Export | Downloads the table as CSV or GeoJSON |
| Clear filter | Removes the filter and shows all rows |

## Result

You opened a layer as a table, narrowed it down with the filter, linked rows to features on the map, and know where to find the geometric operations and the export. The [next tutorial](_index.md) changes how the layers look with styles.

## Related

- [Managing Layers](../features/layers.md)
- [Workspace Editor](../manuals/workspaces/workspace-editor.md)
