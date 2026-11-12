---
title: 'Explore data with the attribute table'
description: 'Open a layer as a table, filter and select features, edit values, and export the data.'
translationKey: 'tutorial-attribute-table'
weight: 30
contentStatus: needs-review
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

The table opens below the map. Its toolbar shows the name of the layer; select **×** to close the table.

![The attribute table of the countries layer below the map](/images/tutorials/03-attribute-table/02-table.png)

- Each row is a feature. At the start of the row you find a checkbox to select it, an eye to hide it on the map, and the geometry type with a **…** menu of geometry actions.
- The columns are the attributes stored in the GeoPackage: `featurecla`, `scalerank`, `SOVEREIGNT`, `ADMIN`, `NAME`, `POP_EST`, and many more. Scroll the table sideways to see them all. Select the arrow in a header to sort.
- The checkbox in the header selects all rows, and the eye beside it hides all rows on the map.
- **Add row** at the bottom adds a feature. The **+** at the end of the header adds a column.

## 2. Select a column

Click the header of a column, for example `SOVEREIGNT`. The column is highlighted and a red delete button appears in the toolbar.

![The SOVEREIGNT column selected, with the delete button in the toolbar](/images/tutorials/03-attribute-table/03-column-selected.png)

Deleting a column changes the layer, so use that button with care.

## 3. Filter the rows

Type `Italy` in the **Filter** field and press Enter. The table shows only the rows that contain the text.

![The table filtered to one row, Italy](/images/tutorials/03-attribute-table/04-filter.png)

The filter looks at the attributes of each row, not only at one column. Clear the field to show all rows again.

## 4. Select features and see them on the map

Select the checkbox of the Italy row. The feature is highlighted on the map, and the **Feature info** panel opens on the right with every attribute of the feature in an editable field.

![The selected row, the matching feature on the map, and the Feature info panel](/images/tutorials/03-attribute-table/05-selection.png)

When at least one row is selected, new buttons appear in the toolbar of the table:

| Button | What it does |
| --- | --- |
| **Switch to vertex editing** | Switches between transforming the selected geometry (move, scale, rotate) and editing its vertices |
| **Delete selected rows** | Deletes the selected rows |

## 5. Geometry actions

Select the **…** button at the start of the row.

![The geometry actions of a row](/images/tutorials/03-attribute-table/06-geometry-actions.png)

| Action | What it does |
| --- | --- |
| **Focus on map** | Moves the map to the feature |
| **Edit geometry** | Lets you change the shape on the map |
| **Replace geometry** | Lets you give the feature a new shape: point, line, polygon, circle, rectangle, text, or symbol. Text and symbol become polygon outlines |
| **Geometric operations** | Opens the operations below |

Select **Geometric operations**:

![The Geometric operations menu](/images/tutorials/03-attribute-table/07-geometric-operations.png)

The menu lists **Buffer…**, **Union…**, **Intersection…**, **Difference…**, and **Symmetric difference…**.

## 6. Edit a value

Double-click a cell to edit it: the cell becomes an editable field. Press Enter to confirm, or Esc to leave the value as it was.

![A cell in edit mode](/images/tutorials/03-attribute-table/08-edit-cell.png)

## 7. Export the data

The download button of the toolbar opens a menu with **CSV** and **GeoJSON**.

![The export menu with CSV and GeoJSON](/images/tutorials/03-attribute-table/10-export-menu.png)

## Result

You opened a layer as a table, narrowed it down with the filter, linked rows to features on the map, and know where to find the geometric operations and the export. The [next tutorial](_index.md) changes how the layers look with styles.

## Related

- [Attribute table](../manuals/workspaces/attribute-table.md)
- [Workspace editor](../manuals/workspaces/workspace-editor.md)
