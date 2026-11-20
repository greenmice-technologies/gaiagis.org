---
title: "Connections"
description: "Connect to external WMS and WFS servers and add their layers."
translationKey: "editor-connections"
weight: 80
appScreen:
  - "/project/:id/editor?panel=endpoints"
contentStatus: needs-review
---

Open the **Connections** panel from the strip on the left of the [editor](workspace-editor.md).

A connection is an external map server. Gaia reads WMS and WFS services; it does not publish them.

## Add a connection

Paste the address of a WMS or WFS server into the box at the top of the panel, or select **Add connection**.

Adding a connection only adds a **source** to the workspace. Nothing appears on the map yet. Open the connection (WMS and WFS can be browsed; other types are stored only) and select a layer to add it to the map.

The dialog keeps what you typed if saving fails.

## When a connection does not load

If the server cannot be read, the connection shows the reason, with **Retry** and **Edit connection**. Edit opens the same dialog with the saved name, URL and type, so you fix the address without adding the connection again. Deleting a connection does not remove layers already added to the map.

Use the same box to filter your connections by name.
