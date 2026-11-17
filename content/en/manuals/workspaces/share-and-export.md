---
title: "Share, preview, and export"
description: "Decide who can see a workspace, check it before publishing, and save it to a file."
translationKey: "editor-share-export"
weight: 120
appScreen:
  - "editor:share"
  - "editor:export"
contentStatus: verified
verifiedAgainst: "b5294bf9"
---

**Status** and **Export** are two panels on the left strip of the [editor](workspace-editor.md). **Preview** is in the top bar.

## Who can see this workspace

Open the **Status** panel. A workspace is a **Draft** until you share it.

| Choice | Who can open it |
| --- | --- |
| **Draft** | Only you |
| **Members** | The members of the workspace |
| **Public** | Anyone with the link, no login needed |

A public workspace has its own address, built from its **Slug**. Set the slug in [Workspace settings](workspace-settings.md). Once the workspace is public, the panel shows the **Link**, with **Copy** and a button that opens it.

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
