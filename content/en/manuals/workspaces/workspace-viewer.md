---
title: 'Workspace Viewer'
description: 'Read-only presentation of a workspace, including share and export.'
translationKey: 'workspace-viewer'
weight: 20
contentStatus: 'canonical-en'
---

Read-only presentation of a workspace: story, map bookmarks, and share / export actions.

| | |
| --- | --- |
| Route | `/project/:id/view` (signed-in) · `/p/:slug` (public) |
| Access | Owners and editors; anyone with the public slug when the workspace is public |
| Entry | Row action from [My Workspaces](my-workspaces.md) or [Public Workspaces](public-workspaces.md) |

## Features

- Workspace title, status, and visibility
- Map bookmarks / keyframes
- Copy public share link
- Open GeoPDF when an export exists (`/project/:id/geopdf` or `/p/:slug/geopdf`)
- Open in GIS (WMS capabilities URL) when OGC services are available
- Export the story as HTML
- Open [Workspace Editor](workspace-editor.md) when the user can edit
- Story map and notebook content for the published view

## Related

- [My Workspaces](my-workspaces.md)
- [Public Workspaces](public-workspaces.md)
- [Workspace Editor](workspace-editor.md)
