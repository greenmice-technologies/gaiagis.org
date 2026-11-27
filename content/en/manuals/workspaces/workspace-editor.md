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

- The **name of the workspace** opens the **Workspace** panel, with the [workspace settings](workspace-settings.md).
- **Preview** shows the workspace as a page, with the map beside the notebook. **Open editor** brings you back.
- **Close** returns to your workspaces.
- **Save status** next to the buttons reads *Saving…*, *Unsaved changes*, *Saved 14:32* (the time of the last save) or *Not saved* in red when the last save failed. After a failure the **Save** button stays available and a message explains what went wrong.

Export and the status of the workspace are panels on the left strip, below.

See [Share, preview, and export](share-and-export.md).

## Panels

The strip on the left edge opens one panel at a time:

| Panel | What it is for |
| --- | --- |
| [Layers](layers.md) | The data on the map |
| [Notebook](notebook.md) | The document that explains your work |
| [Layouts](../print-layouts.md) | Print layouts and atlases |
| [Assets](assets.md) | Files that belong to the workspace |
| [Connections](connections.md) | External WMS and WFS servers |
| [History](history.md) | Saved versions, preview link, production |
| [Export](share-and-export.md) | Save the map or the notebook to a file |
| [Status](share-and-export.md) | Who can see the workspace, and publishing |
| [Design](appearance.md) | Colours and fonts of the workspace |
| [Workspace](workspace-settings.md) | Name, address, cover, members |

Drag the edge of the panel to resize it. Use the small arrow on that edge, or the button at the bottom of the strip, to hide or show the panel.

## Map tools

The toolbar at the bottom of the map edits the features of a layer:

1. Select the pencil (**Edit layer**) and choose the layer to edit. The toolbar then shows that layer's name beside the pencil; point at the name to read it in full. On a narrower map the name shortens, and the words **Edit layer** are left off until there is room.

   If you pick a drawing tool without choosing a layer, Gaia adds a new layer for what you draw. Leaving the tool without drawing removes it.
2. Pick a tool: **Select features**, **Draw point**, **Draw line**, **Draw polygon**, **Draw circle**, **Draw rectangle**, **Draw text**, **Draw symbol**, **Edit vertices**, or **Move, rotate and scale**. **Draw text** and **Draw symbol** ask for the label or the SVG, then a click on the map stores the outline as a polygon on the layer.
3. Use **Delete selected**, **Undo**, and **Redo** as you work. **Delete selected** turns red once a feature is selected.

The tools are grouped as select, draw, and edit. When the map is too narrow for every tool, groups fold into menus, starting with **View** and **Edit**, so drawing stays on the bar. If the bar is still too wide, **Draw** folds into one menu and the smaller groups open again beside it. The menu lists each tool by name, and its button shows the active tool. Select and the layer stay on the bar. While a tool is active, a label above the toolbar names it, for example **Mode: Draw polygon**. Select the **x** beside it, or press **Esc**, to leave the mode.

**Select to zoom** zooms to an area you draw. **Legend** shows the legend of the map.

## Feature info

Click the map to inspect what is under the pointer. **Feature info** opens on the right. Hits are grouped by the layer they come from. Each layer is a row like the ones in the [Layers](layers.md) panel: the layer icon, its name, how many features were hit, and a chevron on the right. Expand a layer to list its features. The control beside the title expands every layer, or collapses them when they are already open. The selected feature keeps its actions on that row and shows its attributes underneath. The sparkles action opens Feature Spotlight.

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
