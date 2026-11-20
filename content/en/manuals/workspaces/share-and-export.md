---
title: "Share, preview, and export"
description: "Decide who can see a workspace, check it before publishing, and save it to a file."
translationKey: "editor-share-export"
weight: 120
appScreen:
  - "editor:share"
  - "editor:export"
  - "/project/:id/geopdf"
  - "/p/:slug/geopdf"
contentStatus: needs-review
---

**Status** and **Export** are two panels on the left strip of the [editor](workspace-editor.md). **Preview** is in the top bar.

## Who can see this workspace

Open the **Status** panel. **Private** and **Public** say who can open the workspace. **Draft** and **Published** say whether that choice is live.

| Choice | Who can open it |
| --- | --- |
| **Private** | People in this organization |
| **Public** | After you publish, anyone with the link and the public catalog. Until then, only this organization |

People in the organization can open a private workspace according to their role: a viewer can read it, a member can edit it, and an admin or owner can change who can see it.

A published public workspace has its own address, built from its **Slug**. Set the slug in [Workspace settings](workspace-settings.md). The panel then shows the **Published link**, with **Copy** and a button that opens it. A public draft explains that the link appears after you publish.

The panel also holds the publishing options for a public workspace: a **Revision name**, the artifacts to produce (**HTML**, **Geospatial PDF**, **GeoTIFF**), **Freeze data and layouts** (a switch: it keeps the data and print layouts as they are now, so production runs from this version), and the **Publish** button.

**Publish** first asks you to confirm. The dialog lists the address where the workspace becomes visible, the version name (automatic when left empty), the files that will be produced, whether data and layouts are frozen, and whether unsaved changes are saved first. After you confirm, the panel shows *Publishing…*, then *Published at* the time with **Copy** and **Open** for the link. If publishing fails, nothing is published and the panel says so next to the button.

## Preview

Select **Preview** to open a preview of the workspace.

To let someone else check a draft, use **Copy preview link** in the [History](history.md) panel. The preview link shows the current draft; the published link only works after you publish.

## Export

Open the **Export** panel and choose what to save.

**Workspace**

- **Workspace file (.zip)** downloads a `.gaia.zip` of the whole workspace, to back it up or import it on another Gaia. See [My workspaces](my-workspaces.md).
- **Print Layout** opens the [print layout window](../print-layouts.md): choose a layout, preview it, then download a PDF or Geospatial PDF.
- **GeoTIFF** saves the current map as a georeferenced image, for GIS software.
- **GeoPackage** saves the workspace layers as a GeoPackage file, for GIS software.

**Notebook**

- **HTML (notebook)** saves the notebook as a web page you can share as a file.
- **PDF (notebook)** saves the notebook as a PDF to print or send.

Each entry has a one-line description of what it produces and for whom. While a render or upload runs, the panel shows the stage and the seconds elapsed, with **Cancel**.

## Geospatial PDF viewer

**Open Geospatial PDF** on a workspace page shows the latest stored Geospatial PDF in the browser, with **Download PDF** and a button back to the notebook. The viewer tells apart three situations:

- **Not exported yet**: export one from the map editor.
- **No access**: you are not allowed to open it. A public address works only after the workspace is published as public.
- **Could not be loaded**: a connection or server problem. Select **Try again**.
