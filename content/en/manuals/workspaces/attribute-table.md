---
title: "Attribute table"
description: "See and edit the values of a layer, row by row."
translationKey: "editor-attribute-table"
weight: 60
appScreen:
  - "editor:table"
  - "editor:feature-spotlight"
contentStatus: needs-review
---

In the [Layers](layers.md) panel, select the **Attribute table** button on a layer. The table opens below the map.

## Read the table

Each row is a feature of the layer and each column is an attribute. Select a column header to sort.

- Type in **Filter** to show only the rows that match.
- The **eye** on a row hides that feature on the map. The eye in the header hides all rows.
- The **pin** on a row opens the geometry actions for that feature. The sparkles button on that row opens **Feature Spotlight**.

## Rows, selection and filter

The numbers in the table's top bar say what you are working on:

- **1428 rows** is the number of features in the layer. While a filter hides some of them it reads **Showing 12 of 1428 rows**.
- **Selected: 3** is the number of selected rows, with **Clear selection** beside it. Hover the number to see how many selected rows the filter hides: they stay selected, and actions on the selection still apply to them.

What an action applies to is named on its button: the tooltips of **Delete selected rows**, **Geometric operations** and **Set / Add / Subtract values** show the number of selected rows. The pin and the eye of a row apply to that row only. Typing in **Filter** changes which rows are shown, never which are selected.

## Edit the table

- **Add row** adds a feature. The arrow beside it offers more ways to add a row.
- **+** at the end of the header adds a column.

Double-click a cell to edit it. Gaia chooses the editor for the whole column from its values:

- **Number** box for a column of numbers. The value stays a number, and sorting is numeric.
- **Checkbox** for true and false.
- **Date picker** for ISO dates such as `2025-05-02`, and **date and time picker** for date-times such as `2025-05-02T17:52:50Z`. The value is written back in the same shape, with the same time zone and the same seconds.
- **Colour picker** for hex colours such as `#bf07f0`.
- **Image** for a column of addresses that point to images, and for an empty column named `image` or `photo`. The cell shows a small preview beside the address. Editing it gives the address as text and **Upload image** or **Replace image**, which sends a file to the workspace's storage and writes its address into the cell. If the upload fails the cell keeps its value and shows **Upload failed**.
- **Text** for everything else.

A column is typed only when every filled cell agrees. One cell that does not fit, such as a word in a column of numbers, or an empty column, keeps the whole column as plain text so no value becomes impossible to edit. A new column starts as text. Numbers written as text, such as `"34.39"`, are treated as text. When several rows are selected, the value you set is applied to the same column of every selected row.

Select **×** beside the layer name to close the table.

## Inspect a feature in context

Selecting a row opens **Feature info**, where editable attributes can be changed directly. Hits are grouped by the layer they come from, each layer under a compact header. Each attribute gets the control that suits its value:

- **Text** for most values, and a taller text box for long or multi-line text.
- **Number** for numbers. The value stays a number; clearing the box empties the attribute.
- **Checkbox** for true and false.
- **Date and time picker** for ISO dates and date-times such as `2025-05-02T17:52:50.000Z`. The value is written back in the same shape, with the same time zone and the same seconds, so a date you did not touch is never rewritten.
- **Colour picker** next to the text box for hex colours such as `#bf07f0`.
- **Image** for an address that points to an image: a square card across the width of the form showing the picture. Select it to see the picture at full size in a window over the editor. The **⋯** button on the card opens a menu with the address as text to type or paste, **Upload image** or **Replace image** to send a file to the workspace's storage and use its address, **View full size** and **Remove**. An empty attribute named `image` or `photo` shows an empty card that opens the same menu.

Gaia chooses the control from the value, not from the attribute's name, and keeps it while you type. A value that only looks like one of these stays plain text, and every picker and colour control has **Edit as text** to type the value yourself. Numbers written as text, such as `"34.39"`, are shown as text because Gaia cannot tell they are meant as numbers. Select the sparkles action on the selected feature to open **Feature Spotlight**.

Spotlight keeps the attribute form, header included, at full height. The control in that header hides the form. The same control on the left rail brings it back. Beside it, Spotlight reads from top to bottom, from the quick facts to the detail:

1. **Where and when.** One strip with the weather (temperature, conditions, wind), the local time at the feature, including how far it is from the viewer's clock, and, for a point, the place name. The strip's background follows the conditions.
2. **The feature on the map.** A satellite view with a planisphere inset that marks where that zoomed area sits on the world. For a line or a polygon it outlines the area that is searched for articles, the feature's own extent with a margin; for a point it is a circle around it.
3. **Wikipedia.** The article for the feature, with the start of its text, and under it **Also nearby**: up to five more articles, nearest first, each with its image, distance and the start of its text. Selecting an article, the main one or one of these, opens it in a window inside the editor so you keep the feature in view; **Open in new tab** in that window leaves the editor, and a Ctrl, Cmd or Shift click does the same. Each article is also pinned on the satellite view: **W** for the main article and the same numbers as in the list for the nearby ones. Flags, coats of arms and logos are shown whole rather than cropped. When Gaia cannot identify the feature itself it shows a nearby article for the surrounding area, and when it finds nothing the card does not appear. Each block of the Spotlight has its own **Add to notebook** button in its corner: the weather strip, the satellite map, the main article, and every article under **Also nearby**. It copies only that block. The notebook opens if it is closed and the blocks go at its end. A nearby article's button is available once its text has loaded. Every block added this way is already linked on the map: scrolling to it flies the map to the feature, or fits its extent for a line or polygon, and for a nearby article to the place of that article. The article becomes ordinary blocks (title, picture, start of the text and a source line with the link and the licence, CC BY-SA 4.0). The weather is a snapshot: temperature, conditions, wind and the moment it refers to, which do not change afterwards. The map is a map of the feature in the notebook: it follows the feature while it is still in its layer, and keeps a copy of its shape when it is not. In the exported HTML and the public page the map appears as the place name and coordinates with a link to OpenStreetMap.
4. **What the feature carries.** Its own images and embedded video, when it has any.

The article card shows the introduction and uses the page's Open Graph title and image when the page provides them. The layout follows the width of the Spotlight window, not of the screen. External cards report their own unavailable state and do not block attribute editing.

Image properties are shown as a native image gallery. Supported video embed properties (YouTube privacy-enhanced embeds and Vimeo) appear in a sandboxed player; other links remain ordinary attributes.
