---
title: "History and versions"
description: "Save versions of a workspace, go back to one, share a preview, and produce layouts in a batch."
translationKey: "editor-history"
weight: 110
appScreen:
  - "/project/:id/editor?panel=history"
  - "editor:production"
contentStatus: needs-review
---

Open the **History** panel from the strip on the left of the [editor](workspace-editor.md).

## Save a version

Select **Save version**. Gaia stores the workspace as it is now and adds the version to the list, with the date and the name of who saved it.

A version is a snapshot kept in the list. It is separate from **Save** in the top bar, which stores your current work.

## Go back to a version

Open the menu on a version:

- **Restore** brings that version back into the editor. It replaces what you are editing now. The confirmation names the version and its date, and warns that unsaved changes are lost: save a version first to keep the current state.
- **Delete** removes the version.

## Preview link

**Copy preview link** creates a link to the current draft, before you publish, and copies it. Anyone with the link can open it without an account. If the browser refuses to copy, the message shows the link so you can copy it by hand.

The preview link is not the published link: the published link, shown in the share panel as **Published link**, only works once the workspace is Published and Public.

The workspace needs a **Slug** first. Set it in [Workspace settings](workspace-settings.md).

## Freeze data and layouts

**Freeze data and layouts** saves a frozen version: the data and the print layouts as they are now. Production runs from a frozen version.

## Production

Open **Production** to prepare saved layouts, freeze a version, and produce the outputs in one run.

**Prepare templates**

1. Tick the layouts to include.
2. Optionally type a **Version name**.
3. Select **Prepare and freeze selected templates**.

**Produce a frozen version**

1. **Choose a frozen version**.
2. Optionally list the **Required labels**, separated by commas, and the **Maximum suppressed labels**.
3. Check the line under the options: it names the frozen version and the number of layouts that will be produced. **Start production (N)** stays disabled until a version and at least one prepared layout are chosen.
4. Select **Start production**.

**Follow a run**

Each run shows how many outputs are ready (for example *2 of 4 outputs ready*) and, when some failed, how many are *to recover*, above the status of every layout. Open **PDF** or **Quality report** on a finished layout. When a run ends with errors, **Resume unfinished outputs** produces only the missing ones. While a run is active the list refreshes by itself; once it ends it stops.
