---
title: "Styles"
description: "Choose how a layer looks: symbols, colors, labels, and rules."
translationKey: "editor-styles"
weight: 70
appScreen:
  - "editor:style"
contentStatus: needs-review
verifiedAgainst: "0d477bd0"
---

In the [Layers](layers.md) panel, select the **Style** button on a layer. The top of the panel always shows which layer you are editing, as *Layer name / Styles*, and the same name stays in front when you open a rule or a symbol. The panel shows the styles of that layer.

Changes appear on the map as soon as you make them and are saved automatically. A short status line under the title says whether saving is in progress, done, or failed (with a retry). The text style editor is a draft until you save it; **Classify** replaces the rules only when you select **Generate**.

## Rules

A style is a list of rules. Each rule draws the layer in one way: a point symbol, a line, a fill, a label.

- Select a rule to open it and change its properties.
- Drag a rule to change the drawing order.
- The bin on a rule deletes it. The bin at the top deletes all rules.
- The eye at the top hides the layer while you work.

## Fixed value or expression

Next to a property control, a two-state button switches between a fixed value and an expression (or a GeoStyler function). Switching back restores the value or expression you had before, for as long as the panel stays open. Vector tile layers use MapLibre expressions; other layers use GeoStyler functions — the button is the same; the expression language is not.

## Add a style

Select **+** (**Add style**) at the top of the panel:

- **Edit style**
- **Classify** colors the layer by the values of an attribute. The window is titled with the layer name, and **Generate** replaces all the rules the style has now; a note above the button says how many.
- **Clear all rules** starts again from nothing.
- Under **Gaia base style**, add a rule of one type: **Mark** for points, **Line**, **Fill**, **Icon**, **Text** for labels, or **Raster**. **All** adds one of each.
- Under **Annotation style**, add a **Symbol** or a **Label**.
- Under **Gaia style library**, pick a ready-made style and adjust it.

Some styling tools are still being refined.
