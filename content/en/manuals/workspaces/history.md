---
title: "History and versions"
description: "Save versions of a workspace, go back to one, share a preview, and produce layouts in a batch."
translationKey: "editor-history"
weight: 110
appScreen:
  - "/project/:id/editor?panel=history"
  - "editor:production"
contentStatus: verified
verifiedAgainst: "828cf266"
---

Open the **History** panel from the strip on the left of the [editor](workspace-editor.md).

## Save a version

Select **Save version**. Gaia stores the workspace as it is now and adds the version to the list, with the date and the name of who saved it.

## Go back to a version

Open the menu on a version:

- **Restore** brings that version back into the editor. It replaces what you are editing now.
- **Delete** removes the version.

## Preview link

**Preview link** creates a link that shows the workspace as it is now, before you publish. Anyone with the link can open it without an account.

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
3. Select **Start production**.
