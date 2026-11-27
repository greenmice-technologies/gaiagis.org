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

In the [editor](workspaces/workspace-editor.md), the **Layouts** tab of the left rail lists the print layouts of the workspace. It is the way into the Layout Studio: select a layout to open it in the **Layout Studio** window over the editor. Select **+** for a menu: **New** creates an empty layout, **New atlas from a layer…** opens the atlas wizard (see below), and, in a workspace that belongs to an organization, **New from template…** starts from a saved template (see below). The first icon in the panel header switches between a list of names and thumbnails of each layout's first page.

Point at a layout and select the bin, or focus the row and press Delete or Backspace. Gaia asks for confirmation, naming the layout, before it is removed. If that layout is open in the Layout Studio, the window closes.

The **…** menu in the panel header holds **Import → From JSON**, which opens a layout from a JSON file in the studio.

## Layout templates

A template is a copy of a layout kept by the organization, to start new layouts from. In the Layout Studio, open the **Document settings** tab, select **Save as template** (the bookmark icon in the panel header) and give it a name. Everyone in the organization can use it, with all the content of its pages. Saving needs a role that can edit in the organization. Later changes to the layout do not change the template.

**New from template…** shows the templates of the organization with a picture of their first page. Select one to create a layout with the name of the template and open it. The layout is a copy of its own:

- Maps show the current view of the editor map.
- A layer the template refers to (in a map, a legend, a table or a chart) is taken from the layer of this map with the same name. If there is none, the reference is left out. If several layers share the name, the first one is used.
- Map themes followed by a map are not carried over.
- Pages are not tied to a feature, even if the saved layout was an atlas.

To remove a template, point at it in the same window and select the bin. Layouts already made from it stay. A template cannot be edited: delete it and save it again. The people who can delete it are those with a role that can edit in the organization, and whoever saved it.

## Atlas from a layer

**New atlas from a layer…** opens a four-step wizard: **Layer**, **Template**, **Properties** and **Review**. The first step lists every vector layer of the map, not only layers made from pictures; each shows how many features it has once they are loaded. Each feature of the chosen layer becomes a page. A layer with no features cannot be chosen, and the step says so.

On a layer made from pictures a page carries the photograph. On any other vector layer a page is titled from the feature's `name`, `title` or `label` attribute (or its number), and its text is the `description` or `notes` attribute, or else the first attributes as `name: value` lines; the photograph areas of the template stay empty. The **Add context text** switch appears only for layers made from pictures.

The **Properties** step has an **Include overview map** switch, on by default. It adds a full-bleed map after the cover, framed on all located features, with a numbered pin for each; the numbers are those of the entries in the contents list. The map takes one page, or two facing pages in the **Illustrated guide** template, where each page shows its half. It is left out when no feature has a position or when **Show location maps** is off.

The layer's own menu offers **Create Atlas** on layers made from pictures; it opens the same wizard on the **Template** step.

### Pages tied to a feature

Every page an atlas makes for a feature (including the continuation pages of a long text) is tied to that feature. In the **Pages** list the pages of one feature sit under a caption with the feature's name. The tie changes nothing about editing: each page stays a normal page you can move, rewrite or delete.

In a text or HTML item, `[% @name %]` prints the value of the attribute `name` of the feature of the page; `[% name %]` does the same when no built-in token has that name. Attribute names are not case sensitive. An attribute the feature does not have prints nothing. On a page that is not tied to a feature these tokens stay as written. `[% group %]`, `[% groupno %]` and `[% groups %]` print the feature's name, its number among the features and their total. Values are copied into the pages when the atlas is created, so later edits to the layer do not change existing pages.

An HTML item shows the token while you edit it and the value otherwise. A value is always printed as text. Keep a token within one paragraph or table cell.

On a page tied to a feature, every item has a **Visibility** section. Under **Show when** choose an attribute, a condition and a value, as for the attribute table filter. An item that does not meet the condition stays faded on the canvas and is left out of exports. On other pages the condition is ignored.

On the page of a feature that has a geometry, a map also offers **Frame the feature**: it moves the map onto the feature of the page, with a margin. A point is centred without changing the scale. The extent stays as you leave it; it does not follow later changes of the feature. The command needs the layer of the feature on the map.

Gaia finds the feature by its identifier or, when it has none, by the bounding box of its geometry. Without an identifier, the command reports that the feature cannot be found if its geometry or the map projection has changed since the atlas was created. In an atlas created with an earlier version, pages of features without an identifier do not offer the command: create the atlas again.

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
- **PDF rendering** — **Vector** draws everything as vectors; **Keep effects** turns into an image only what vectors cannot show, such as blend modes; **As image** prints every page as one image, and the Geospatial PDF then keeps its georeferencing but not the features, and its layers cannot be turned off one by one
- **World file** — exported PNG and JPG pages that have a map come with a world file and its reference system, all together in a ZIP
- **Attach data** — embed the GeoPackage and the workspace images in the PDF

In the panel header, **Save as JSON** (file with an arrow) downloads the layout as a JSON file named after it, **Save as template** (bookmark) keeps it as a [template](#layout-templates), and the bin deletes the layout. The file holds the pages and the document settings, and **Import → From JSON** in the Layouts panel opens it as a new layout. References to map layers are kept as they are, so they may not match in another workspace; to reuse a layout across workspaces, save it as a [template](#layout-templates).

## Styling

A new empty layout starts from the workspace appearance colours and fonts when those are set. If the workspace appearance changes later, Layout Studio can signal it; update the kit and Apply to restyle. In the atlas wizard you can choose to use the workspace colours and fonts on top of the preset. The second tab, **Theme**, holds the design tokens of the layout: the brand colors, the heading, body and mono fonts, and the text sizes. At the top, a palette generator fills the colors from one base color:

- Choose the **Base colour** and a **Harmony** (analogous, monochrome, complementary, split-complementary or triadic), then **Generate palette**: the base color becomes the primary, secondary and accent follow the harmony, and the neutrals derive from the primary.
- **Brand** fills the colors from the brand of the application.
- **From image** asks for an image and fills the colors with its dominant colors: the most prominent becomes the primary color, the next two the secondary and the accent. White, black and transparent areas are ignored.

Two icons at the end of the panel header act on the tokens:

- **Apply to document** (check) updates only colours, fonts and sizes that follow a role (or that still match the application default). Values you set by hand stay as they are. Apply does not turn page backgrounds or frames on.
- **Reset** (counter-clockwise arrow) restores the kit defaults.

Token changes, including Apply, take part in Undo and Redo.

## History

The **History** tab lists the changes made to the layout since it was opened, newest first, ending at **Starting point**. It keeps the last 50 changes. Each entry says what changed, for example an item that was added, moved or edited. Select an entry to go back to the layout as it was after that change; the entries above it turn grey and stay available until you make a new change. The two arrows in the panel header undo and redo one step. The list is not saved with the layout.

## Pages

The third tab lists the pages of the layout. Select **+** to add a page, and select a page to open it. The first icon in the panel header switches between a list and thumbnails of the pages. Thumbnails are schematic: the sheet with its items drawn as boxes.

Each page row has actions that appear when you point at it: **Rename page** (or double-click the name, then Enter to confirm and Esc to cancel), **Background** and **Frame** (each opens a small panel with the on/off box, the color and the brand colors), and **Delete page**. A layout always keeps at least one page.

When nothing is selected, the properties panel shows the same settings of the current page:

- **Page Name**
- **Page size** in millimeters, with **Fit to content**: the page becomes as large as its items plus the margins, in a custom format, and items and guides move with it
- **Exclude Export** leaves the page out of every export; it stays in the editor, and page numbers in texts still count it
- **Background** and **Frame** colors

## Add items to a page

The fourth tab, **Layers**, lists the items of the current page. Select **+** in its header to add one, or to take content from the notebook:

| Item | What it is |
| --- | --- |
| **From notebook…** | Notebook blocks copied as separate print items; they do not stay linked to the notebook. On a page that already has items, they go on new pages |
| **Map** | A frame showing the map |
| **Legend**, **Scale bar**, **North arrow** | Elements that follow a map frame |
| **Text**, **Rich Text** | Plain or formatted text |
| **Image** | A picture |
| **Chart** | A chart of your data |
| **Table**, **Attribute table** | A table you type, or the attributes of a layer |
| **Marker**, **Polygon**, **Polyline**, **Rectangle**, **Ellipse**, **Triangle** | Shapes drawn on the page |

## Map grid

Select a map and open **Grid**, then turn on **Show grid**. For each grid you choose:

- **Style**: lines, crosses, or frame only.
- **Grid in**: degrees, or the units of the map (usually metres), and the **Interval**. Leave the interval empty for a round value that fits the map.
- **Offset X** and **Offset Y**: move the lines away from the round values.
- **Coordinates**, and under **Coordinate sides** the sides of the map where they are written. For a grid in degrees, **Format** chooses decimal degrees or degrees, minutes, seconds.
- **Frame**: none, zebra, ticks, or line. With a frame, you can set its **Frame Width**.
- **Line color** and **Line width**.

**Add grid** draws a further grid on the same map, for example metres over degrees. It starts as crosses without coordinates. If you turn coordinates on for two grids, give them different sides so the numbers do not overlap.

The PDF is the reference: the editor preview does not draw grid frames, and writes each coordinate on one side only.

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

- The top bar shows the state of the layout, for example **Saved**, **Saving…** or **Unsaved changes**. **Save** appears when there is something to save.
- **Print PDF** produces the PDF and shows it in a preview window, where you can move between pages and zoom. Select **Download PDF** to save it.
- **Export images** saves each page as **PNG**, **JPG** or **SVG**, at the resolution set in **Export DPI**. A single page is saved under the name of the layout; with several pages, each file name ends with the page number in the layout.

To export a GeoPDF, a PDF that keeps the map's geographic information, open the command palette with **⌘K** in the editor and choose **Export Geospatial PDF**.

The buttons at the top right minimize, enlarge, or close the window.

To produce several layouts in one run, see [History and versions](workspaces/history.md).
