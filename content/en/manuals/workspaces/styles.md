---
title: "Styles"
description: "Choose how a layer looks: symbols, colors, labels, and rules."
translationKey: "editor-styles"
weight: 70
appScreen:
  - "editor:style"
contentStatus: needs-review
verifiedAgainst: "pending"
---

In the [Layers](layers.md) panel, select the **Style** button on a layer. The top of the panel always shows which layer you are editing, as *Layer name / Styles*, and the same name stays in front when you open a rule or a symbol. The panel shows the styles of that layer.

For a **vector tile** layer the same Style panel lists the provider's style layers (grouped by source layer) instead of GeoStyler rules. Select a row to edit colours, sizes, opacity and zoom; **Reset all** at the top of the panel restores the provider. Overrides show on the map only — print still uses the provider's raster tiles. Details: [Layers](layers.md).

Changes appear on the map as soon as you make them and are saved automatically. A short status line under the title says whether saving is in progress, done, or failed (with a retry). The text style editor is a draft until you save it; **Classify** replaces the rules only when you select **Generate**.

## Rules

A style is a list of rules. Each rule draws the layer in one way: a point symbol, a line, a fill, a label.

- Select a rule to open it and change its properties.
- Drag a rule to change the drawing order.
- The bin on a rule deletes it. The bin at the top deletes all rules.
- The eye at the top hides the layer while you work.

## Fixed value or expression

Next to a property control, a two-state button switches between a fixed value and an expression (or a GeoStyler function). Switching back restores the value or expression you had before, for as long as the panel stays open. Vector tile layers use MapLibre expressions; other layers use GeoStyler functions — the button is the same; the expression language is not.

## When print differs from the map

On a vector layer, a **Print differs from the map** box appears at the top of the **Style** panel when something in the style will not print as it is drawn. Each line starts with the name of the rule:

- a function (expression) that is not translated for print, or that is set on a property print cannot drive from the data;
- symbols repeated along a polygon outline, which are not drawn;
- a perpendicular line offset, which applies in print but not on the map;
- an upper or lower case transformation of label text, which is not applied;
- icon opacity in a rule that combines the icon with other symbols or opacities, which print ignores;
- a dashed polygon outline, which prints with different dash lengths.

The box does not cover every small difference: text, for example, can look slightly different on paper.

## Panel buttons

The buttons at the top of the panel act on the whole style:

- **Edit style** opens the text style editor.
- **Classify** styles the layer by the values of an attribute, varying colour, mark size or line width. The window is titled with the layer name, and **Generate** replaces all the rules the style has now; a note above the button says how many.
- **Save to organization** saves the style so that you can use it again. It takes the name of the layer. The button appears when the style has at least one rule, and the workspace must belong to an organization.
- **Clear all rules** starts again from nothing.
- **+** (**Add style**) adds ready-made or saved rules.

## Add a style

Select **+** (**Add style**). The list shows only the rules that fit the layer's geometry, and you can search it by style or rule name. Select a rule to add it to the layer, or **All** next to a style name to add its listed rules.

- Under **Gaia base style**, add a rule of one type: **Mark** for points, **Line**, **Fill**, **Icon**, **Text** for labels, or **Raster**.
- Under **Annotation style**, add a **Symbol** or a **Label**.
- Under **Gaia curated styles**, add a ready-made **Point**, **Line**, **Dots** (symbols along a line), **Polygon**, **Hatch** (printable pattern fill), **Label** or **Raster** rule.
- Your saved styles follow these three.

Adding a saved style copies its rules into the layer.

## Rename or delete a saved style

Saved styles are managed in the same **Add style** list, with the buttons next to each name. The three built-in styles do not have them.

- **Rename** asks for the new name.
- **Delete** asks you to confirm. Layers that already use the style do not change.

If you do not have permission to change a style, Gaia shows an error. Because the list shows only rules that fit the layer, open it from a layer with a matching geometry to find a saved style.

Some styling tools are still being refined.
