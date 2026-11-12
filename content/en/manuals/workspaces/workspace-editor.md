---
title: "Workspace editor"
description: "The screen where you build a map: panels on the left, map on the right, tools along the edges."
translationKey: "workspace-editor"
weight: 30
appScreen:
  - "/project/:id/editor"
contentStatus: needs-review
---

The editor opens when you create a workspace or select one from a list.

## Top bar

- The **back arrow** returns to your workspaces.
- The **name of the workspace** opens [Workspace settings](workspace-settings.md).
- **Export** saves the map or the notebook to a file.
- The status button — **Draft** until you share — sets who can see the workspace.
- **Preview** opens a preview of the workspace.

See [Share, preview, and export](share-and-export.md).

## Panels

The strip on the left edge opens one panel at a time:

| Panel | What it is for |
| --- | --- |
| [Layers](layers.md) | The data on the map |
| [Notebook](notebook.md) | The document that explains your work |
| [Assets](assets.md) | Files that belong to the workspace |
| [Connections](connections.md) | External WMS and WFS servers |
| [History](history.md) | Saved versions, preview link, production |
| [Workspace](workspace-settings.md) | Name, address, cover, members, status |

Drag the edge of the panel to resize it. Use the small arrow on that edge to collapse it.

## Map tools

The toolbar at the bottom of the map edits the features of a layer:

1. Select **Edit layer** and choose the layer to edit.
2. Pick a tool: **Select features**, **Draw point**, **Draw line**, **Draw polygon**, **Draw circle**, **Draw rectangle**, **Draw text**, **Draw symbol**, **Edit vertices**, or **Move, rotate and scale**. **Draw text** and **Draw symbol** ask for the label or the SVG, then a click on the map stores the outline as a polygon on the layer.
3. Use **Delete selected features**, **Undo**, and **Redo** as you work.

**Select to zoom** zooms to an area you draw. **Legend** shows the legend of the map.

## Status bar

Along the bottom edge:

- The coordinate system of the map
- The rotation of the map, with a button to reset it to north
- The **scale**, which you can choose from a list or lock
- The coordinates under the pointer. Select them to copy, or change the format between decimal degrees and degrees, minutes, seconds.

## Command palette and shortcuts

Press **⌘K** to open the command palette. From there you can go to any panel, open Print, browse files to import, save, and export.

| Shortcut | Action |
| --- | --- |
| ⌘K | Open the command palette |
| ⌘S | Save the workspace |
| ⌘\ | Show or hide the panel |
| Esc | Close the open panel |
