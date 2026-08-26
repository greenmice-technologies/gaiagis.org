---
title: 'Workspace Editor'
description: 'Browser map and charts editor: layers, styles, print, notebook, and data.'
translationKey: 'workspace-editor'
weight: 30
contentStatus: 'canonical-en'
---

Browser map and charts editor for a workspace. Left rail, map canvas, and stacked side panels.

| | |
| --- | --- |
| Route | `/project/:id/editor` · new workspace via `/project/new` |
| Access | Owners and editors (`ROLE_USER`, `ROLE_ADMIN`) |
| Entry | Create on [My Workspaces](my-workspaces.md) or **Open editor** from the [Workspace Viewer](workspace-viewer.md) |

## Shell

- Back to workspaces
- Workspace name (opens the Edit panel)
- Unsaved badge
- Sidebar panel width mode
- Save
- Export menu
- Command palette (`⌘K`)
- Shortcuts: Esc, `⌘\`, `⌘S`

## Left rail

| Panel | What it covers |
| --- | --- |
| Layers | Vector, raster, WMS, and WFS layers; visibility, order, styling, attribute table, CQL filters, geometry edit |
| Assets | Images and files attached to the workspace |
| Web Services | External endpoints and OGC capabilities |
| Print | Print layouts, pages, map frames, legends, scale bars, GeoPDF export via gaia-q |
| Notebook | EditorJS story with image, layer, and map snapshot blocks |
| Database | Datasets, schema, and feature tables |
| Edit | Workspace metadata: name, visibility, cover, projection, and sharing |

Clicking the active rail tab collapses the panel so the map fills the canvas.

## Map

- OpenLayers canvas with base layers (OSM, Google variants, and others configured for the install)
- Draw and edit points, lines, and polygons
- Live style preview
- Import from filesystem, layer library, or text (GeoJSON, KML, SVG, WKT, and GDAL-supported formats)

## Related

- [My Workspaces](my-workspaces.md)
- [Workspace Viewer](workspace-viewer.md)
