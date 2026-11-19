---
title: "Share, preview, and export"
description: "Decide who can see a workspace, check it before publishing, and save it to a file."
translationKey: "editor-share-export"
weight: 120
appScreen:
  - "editor:share"
  - "editor:export"
contentStatus: needs-review
---

**Status** and **Export** are two panels on the left strip of the [editor](workspace-editor.md). **Preview** is in the top bar.

## Who can see this workspace

Open the **Status** panel. **Private** and **Public** say who can open the workspace. **Draft** and **Published** say whether that choice is live.

| Choice | Who can open it |
| --- | --- |
| **Private** | People in this channel |
| **Public** | After you publish, anyone with the link and the public catalog. Until then, only this channel |

People in the channel can open a private workspace according to their role: a viewer can read it, a member can edit it, and an admin or owner can change who can see it.

A published public workspace has its own address, built from its **Slug**. Set the slug in [Workspace settings](workspace-settings.md). The panel then shows the **Link**, with **Copy** and a button that opens it. A public draft explains that the link appears after you publish.

The panel also holds the publishing options for a public workspace: a **Revision name**, the artifacts to produce (**HTML**, **Geospatial PDF**, **GeoTIFF**), **Freeze data and layouts**, and the **Publish** button.

## Preview

Select **Preview** to open a preview of the workspace.

To let someone else check a draft, create a preview link from the [History](history.md) panel.

## Export

Open the **Export** panel and choose what to save.

**Workspace**

- **Workspace file (.zip)** downloads a `.gaia.zip` you can import on another Gaia. See [My workspaces](my-workspaces.md).
- **Print Layout** opens the [print layout window](../print-layouts.md).
- **GeoTIFF** saves the map as a georeferenced image.
- **GeoPackage** saves the data of the workspace.

**Notebook**

- **HTML (notebook)** saves the notebook as a web page.
- **PDF (notebook)** saves the notebook as a PDF.
