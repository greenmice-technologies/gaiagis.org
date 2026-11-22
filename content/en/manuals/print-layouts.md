---
title: "Print layouts"
description: "Arrange a map on a page and export it as a PDF."
translationKey: "print-layouts"
weight: 5
appScreen:
  - "/project/:id/editor?panel=layouts"
  - "/project/:id/editor?panel=print_layouts"
  - "editor:print-layout"
contentStatus: needs-review
---

## Layouts panel

In the [editor](workspaces/workspace-editor.md), the **Layouts** tab of the left rail lists the print layouts of the workspace. It is the way into the Layout Studio: select a layout to open it in the **Layout Studio** window over the editor. Select **+** to create a new layout. The first icon in the panel header switches between a list of names and thumbnails of each layout's first page.

Point at a layout and select the bin, or focus the row and press Delete or Backspace. Gaia asks for confirmation, naming the layout, before it is removed. If that layout is open in the Layout Studio, the window closes.

The **…** menu in the panel header holds **Import → From JSON**, which opens a layout from a JSON file in the studio.

## The Layout Studio

The window has a **rail** of tabs on the left, a **panel** beside it, the page in the middle, and a properties panel on the right. Drag the edge between the panel and the page to resize the panel; double-click the edge to restore its width. The icon at the bottom of the rail hides and shows the panel.

## Document settings

The first tab shows the name of the layout and its settings:

- **Layout name** — type a new name to rename it
- **Format** — the paper size
- **Orientation**
- **Margins**, in millimeters. **Set each side** gives each edge its own margin.
- **Export DPI** — the resolution of the exported file
- **Color Profile**
- **Geospatial PDF** — keep the georeferencing in the exported PDF
- **Attach data** — embed the GeoPackage and the workspace images in the PDF

In the panel header, **Save as JSON** (file with an arrow) saves the layout to a JSON file and the bin deletes the layout.

## Styling

The second tab holds the design tokens of the layout: the brand colors, the heading, body and mono fonts, and the text sizes. Five icons at the end of the panel header act on them:

- **Apply to document** (check) writes the tokens onto the pages and items.
- **Seed from brand** (sparkles) fills them from the brand of the application.
- **Palette from image** (picture) asks for an image and fills the tokens with its dominant colors: the most prominent becomes the primary color, the next two the secondary and the accent. White, black and transparent areas are ignored.
- **Random palette** (dice) fills the tokens with a new harmonious palette: primary, secondary and accent, plus neutrals derived from the primary.
- **Reset** (counter-clockwise arrow) restores the defaults.

## Pages

The third tab lists the pages of the layout. Select **+** to add a page, and select a page to open it. The first icon in the panel header switches between a list and thumbnails of the pages. Thumbnails are schematic: the sheet with its items drawn as boxes.

Each page row has actions that appear when you point at it: **Rename page** (or double-click the name, then Enter to confirm and Esc to cancel), **Background** and **Frame** (each opens a small panel with the on/off box, the color and the brand colors), and **Delete page**. A layout always keeps at least one page.

When nothing is selected, the properties panel shows the same settings of the current page:

- **Page Name**
- **Background** and **Frame** colors

## Add items to a page

The last tab, **Layers**, lists the items of the current page. Select **+** in its header to add one:

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

- **Save** appears only when there are changes to store. **Saved** appears when there is nothing left to save.
- **Print PDF** exports the layout.

To export a GeoPDF, a PDF that keeps the map's geographic information, open the command palette with **⌘K** in the editor and choose **Export Geospatial PDF**.

The buttons at the top right minimize, enlarge, or close the window.

To produce several layouts in one run, see [History and versions](workspaces/history.md).
