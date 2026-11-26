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
verifiedAgainst: "0d477bd0"
---

## Layouts panel

In the [editor](workspaces/workspace-editor.md), the **Layouts** tab of the left rail lists the print layouts of the workspace. It is the way into the Layout Studio: select a layout to open it in the **Layout Studio** window over the editor. Select **+** for a menu: **New** creates an empty layout, and **New atlas from a layer…** opens the atlas wizard (see below). The first icon in the panel header switches between a list of names and thumbnails of each layout's first page.

Point at a layout and select the bin, or focus the row and press Delete or Backspace. Gaia asks for confirmation, naming the layout, before it is removed. If that layout is open in the Layout Studio, the window closes.

The **…** menu in the panel header holds **Import → From JSON**, which opens a layout from a JSON file in the studio.

## Atlas from a layer

**New atlas from a layer…** opens a four-step wizard: **Layer**, **Template**, **Properties** and **Review**. The first step lists every vector layer of the map, not only layers made from pictures; each shows how many features it has once they are loaded. Each feature of the chosen layer becomes a page. A layer with no features cannot be chosen, and the step says so.

On a layer made from pictures a page carries the photograph. On any other vector layer a page is titled from the feature's `name`, `title` or `label` attribute (or its number), and its text is the `description` or `notes` attribute, or else the first attributes as `name: value` lines; the photograph areas of the template stay empty. The **Add context text** switch appears only for layers made from pictures.

The **Properties** step has an **Include overview map** switch, on by default. It adds a full-bleed map after the cover, framed on all located features, with a numbered pin for each; the numbers are those of the entries in the contents list. The map takes one page, or two facing pages in the **Illustrated guide** template, where each page shows its half. It is left out when no feature has a position or when **Show location maps** is off.

The layer's own menu offers **Crea atlante** on layers made from pictures; it opens the same wizard on the **Template** step.

### Pages tied to a feature

Every page an atlas makes for a feature (including the continuation pages of a long text) is tied to that feature. In the **Pages** list the pages of one feature sit under a caption with the feature's name. The tie changes nothing about editing: each page stays a normal page you can move, rewrite or delete.

In a text item, `[% @name %]` prints the value of the attribute `name` of the feature of the page; `[% name %]` does the same when no built-in token has that name. Attribute names are not case sensitive. An attribute the feature does not have prints nothing. On a page that is not tied to a feature these tokens stay as written. `[% group %]`, `[% groupno %]` and `[% groups %]` print the feature's name, its number among the features and their total. Values are copied into the pages when the atlas is created, so later edits to the layer do not change existing pages.

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

A new empty layout starts from the workspace appearance colours and fonts when those are set. If the workspace appearance changes later, Layout Studio can signal it; update the kit and Apply to restyle. In the atlas wizard you can choose to use the workspace colours and fonts on top of the preset. The second tab holds the design tokens of the layout: the brand colors, the heading, body and mono fonts, and the text sizes. At the top, a palette generator fills the colors from one base color:

- Choose the **Base colour** and a **Harmony** (analogous, monochrome, complementary, split-complementary or triadic), then **Generate palette**: the base color becomes the primary, secondary and accent follow the harmony, and the neutrals derive from the primary.
- **Brand** fills the colors from the brand of the application.
- **From image** asks for an image and fills the colors with its dominant colors: the most prominent becomes the primary color, the next two the secondary and the accent. White, black and transparent areas are ignored.

Two icons at the end of the panel header act on the tokens:

- **Apply to document** (check) updates only colours, fonts and sizes that follow a role (or that still match the application default). Values you set by hand stay as they are. Apply does not turn page backgrounds or frames on.
- **Reset** (counter-clockwise arrow) restores the kit defaults.

Token changes, including Apply, take part in Undo and Redo.

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

## Legend

A legend lists the vector layers that its linked map shows. Select it to set it up in the properties panel:

- **Legend**: **Linked map**, **Title**, **Columns**, and three switches:
  - **Show groups** lists the layers under their layer groups. A group with no listed layer does not appear.
  - **Count printed features** adds the number of features next to each layer and rule. It counts the features loaded for the export, those inside the area covered by the layout's maps, not the whole layer. Colors computed from the data get no count of their own.
  - **Only what the map shows** leaves out the layers and rules with nothing to show inside the linked map. The preview works from the unrotated map frame, so on a rotated map check the PDF.
- **Legend layers**: switch a layer off, type another label, or move it up or down. With groups shown, a layer moves among the items of its group.
- **Legend style**: the font, the text sizes of the title, groups, layer titles and items, and the width and height of the symbols. Fields you leave alone keep the defaults (16, 14, 12 and 12 pt, symbols 7 × 4 mm).

## Attribute table

An **Attribute table** lists the features of one layer inside the area your maps print. Select it to choose:

- **Layer**, **Fields** (names separated by commas; empty means all), **Max rows** and **Visible only** (only what the table's map shows).
- **Sort by**: one field, with **Descending** to reverse it. Without it, rows keep the layer's order. The field does not have to be one of the columns.
- **Unique rows**: rows with the same cells are listed once.
- **Filter on**: a field, then a **Condition** and a **Value**. Numbers compare as numbers; text compares letter by letter and **contains** ignores upper and lower case. A feature without a value matches only **is empty**.

The filter is applied first, then the order, then unique rows, and the row limit last. So sorting by population, descending, with 10 rows gives the ten largest.

## View

The bar at the bottom of the page shows or hides the guides, turns snapping to the grid on or off, switches the facing-pages view (book icon), and zooms the view.

In the facing-pages view the pages are shown side by side like an open book: the first page stands alone on the right, then pages two and three, four and five, and so on. Items can run across the two pages of a spread, for example a map. The view is saved with the layout; it changes only how pages are arranged on screen, not the page order or the exported PDF. An atlas created from photos with the **Illustrated guide** template opens in this view.

## Save and export

- **Save** appears only when there are changes to store. **Saved** appears when there is nothing left to save.
- **Print PDF** exports the layout.

To export a GeoPDF, a PDF that keeps the map's geographic information, open the command palette with **⌘K** in the editor and choose **Export Geospatial PDF**.

The buttons at the top right minimize, enlarge, or close the window.

To produce several layouts in one run, see [History and versions](workspaces/history.md).
