---
title: 'Organization Page'
description: 'Admin read-only detail of an organization.'
translationKey: 'admin-organization-detail'
weight: 10
contentStatus: 'canonical-en'
---

Admin read-only detail of an organization.

| | |
| --- | --- |
| Route | `/admin/organizations/:id/view` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Row action from [Organizations](_index.md) |

## Features

- Brand hero (logo, title, color)
- Personal / plan badges
- Name, slug, brand title, brand color
- Layout override, theme, preset, and surface
- Edit action opening the [Organization Form Page](organization-form.md)

The same detail component is reused on the user-facing [Organization Page](../../../organizations/organization-detail.md) with `userFacing` data.

## Related

- [Organizations](_index.md)
- [Organization Form Page](organization-form.md)
