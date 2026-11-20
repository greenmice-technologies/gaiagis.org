---
title: "Attribute table"
description: "See and edit the values of a layer, row by row."
translationKey: "editor-attribute-table"
weight: 60
appScreen:
  - "editor:table"
contentStatus: needs-review
---

In the [Layers](layers.md) panel, select the **Attribute table** button on a layer. The table opens below the map.

## Read the table

Each row is a feature of the layer and each column is an attribute. Select a column header to sort.

- Type in **Filter** to show only the rows that match.
- The **eye** on a row hides that feature on the map. The eye in the header hides all rows.
- The **pin** on a row opens the geometry actions for that feature.

## Rows, selection and filter

The numbers in the table's top bar say what you are working on:

- **1428 rows** is the number of features in the layer. While a filter hides some of them it reads **Showing 12 of 1428 rows**.
- **Selected: 3** is the number of selected rows, with **Clear selection** beside it. Hover the number to see how many selected rows the filter hides: they stay selected, and actions on the selection still apply to them.

What an action applies to is named on its button: the tooltips of **Delete selected rows**, **Geometric operations** and **Set / Add / Subtract values** show the number of selected rows. The pin and the eye of a row apply to that row only. Typing in **Filter** changes which rows are shown, never which are selected.

## Edit the table

- **Add row** adds a feature. The arrow beside it offers more ways to add a row.
- **+** at the end of the header adds a column.

Select **×** beside the layer name to close the table.
