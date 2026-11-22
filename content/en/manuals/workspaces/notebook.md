---
title: "Notebook"
description: "Write the document that explains your map, with text, queries, maps, and charts."
translationKey: "editor-notebook"
weight: 100
appScreen:
  - "/project/:id/editor?panel=notebook"
contentStatus: needs-review
---

Open the **Notebook** panel from the strip on the left of the [editor](workspace-editor.md). The notebook opens beside the map.

## Write

Select the page and start typing. Each paragraph is a block.

Press **Tab** on an empty line, or select **+**, to choose another kind of block.

## Blocks

| Block | Use it for |
| --- | --- |
| **Text** | A paragraph |
| **Heading** | A title or section title |
| **Map layer** | A layer of the workspace, shown in the document |
| **Query layer** | A query on your data, shown as a table, a map, or a chart |
| **Map snapshot** | A picture of the map as it is now |
| **Image** | A picture |
| **Attachment** | A file readers can download |
| **Table** | A table you type in |
| **Unordered List**, **Ordered List**, **Checklist** | Lists |
| **Quote** | A quotation |
| **Warning** | A highlighted note |
| **Code** | Text shown as code |
| **Raw HTML** | HTML you write yourself |
| **Delimiter** | A break between sections |

Select text to make it a **Link**.

## Query results

A query block shows its result as a table, a map or a chart. If the query fails, the message appears under the query box, which stays editable: change it and press **Run** (or ⌘/Ctrl + Enter) again. The table shows up to 500 rows. The notebook file keeps the first 200 rows of a result and exports include the first 50; when a result is longer than that, a notice under the table says so.

## Share the notebook

Readers see the notebook in the [viewer](workspace-viewer.md) and on the public page. To save it as a file, use the **Export** panel on the left strip. See [Share, preview, and export](share-and-export.md).

## Make a print layout from the notebook

To print the notebook as pages, open the **Export** menu, then **Notebook**, and choose **Print layout (notebook)**. The command palette has the same action. Choose the name, the page size, the orientation and the number of columns (one to three; two by default). Gaia sets the notebook in columns across as many pages as it needs and opens the result in the [print layout editor](../print-layouts.md). The name is put across the top of the first page unless you turn that off.

- Headings, paragraphs, lists, images and feature maps are set in reading order. A heading is not left alone at the foot of a column. A long paragraph without formatting continues in the next column; a paragraph with bold text or links moves as a whole.
- Images keep their shape and fill the width of a column, with their caption under them. A feature map becomes a map item showing the same area.
- A layout needs a map to be printed, so a notebook with no feature map gets one at the top, showing what the editor map shows at that moment.
- Query, layer and snapshot blocks are not set yet. A notice says how many were left out.

The result is an ordinary print layout. Move, resize or delete anything, and add what the notebook did not have. It is not kept in sync with the notebook: change the notebook and make a new layout. Because Wikipedia text and weather snapshots added from Feature Spotlight are ordinary notebook blocks, they are set too, with their source line.

