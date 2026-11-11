---
title: "Print layouts"
description: "Arrange a map on a page and export it as a PDF."
translationKey: "print-layouts"
weight: 5
appScreen:
  - "/project/:id/editor?panel=print_layouts"
  - "editor:print-layout"
contentStatus: verified
verifiedAgainst: "828cf266"
---

In the [editor](workspaces/workspace-editor.md), select **Export**, then **Print Layout**. The **Layout** window opens over the editor.

## Document settings

The left side shows the name of the layout and a summary such as *A4 · Landscape · 10 mm margins · 300 DPI*. Select the summary to change:

- **Format** — the paper size
- **Orientation**
- **Margins**, in millimeters. **Set each side** gives each edge its own margin.
- **Export DPI** — the resolution of the exported file

Type a new name in the box at the top to rename the layout. The bin beside it deletes the layout.

## Pages

A layout has one or more pages. Select **+** beside **Pages** to add one.

Select a page to open its settings:

- **Page Name**
- **Background** and **Frame** colors

## Add items to a page

Open a page and select **Add item**:

| Item | What it is |
| --- | --- |
| **Map** | A frame showing the map |
| **Legend**, **Scale bar**, **North arrow** | Elements that follow a map frame |
| **Rich Text** | Formatted text |
| **Image** | A picture |
| **Chart** | A chart of your data |
| **Table**, **Attribute table** | A table you type, or the attributes of a layer |
| **Marker**, **Polygon**, **Polyline**, **Rectangle**, **Ellipse**, **Triangle** | Shapes drawn on the page |

## View

The bar at the bottom of the page shows or hides the guides, turns snapping to the grid on or off, and zooms the view.

## Save and export

- **Save** stores the layout. **Saved** appears when there is nothing left to save.
- **Print PDF** exports the layout.

To export a GeoPDF, a PDF that keeps the map's geographic information, open the command palette with **⌘K** in the editor and choose **Export Geospatial PDF**.

The buttons at the top right minimize, enlarge, or close the window.

To produce several layouts in one run, see [History and versions](workspaces/history.md).
