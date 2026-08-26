---
title: 'Organization Form Page'
description: 'Admin create and edit form for an organization, including branding and members.'
translationKey: 'admin-organization-form'
weight: 20
contentStatus: 'canonical-en'
---

Admin create and edit form for an organization, including branding and members.

| | |
| --- | --- |
| Route | `/admin/organizations/new` · `/admin/organizations/:id/edit` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | **Create** on [Organizations](_index.md), or **Edit** on the [Organization Page](organization-detail.md) |

## Features

- Name and slug
- Plan
- Brand title, color, logo, and background
- Override layout (locks member preferences to this brand)
- Theme, preset, and surface
- Member list: add by login, assign role, remove (not on personal organizations)
- Personal organization hint when applicable
- Save in the page header

## Related

- [Organizations](_index.md)
- [Organization Page](organization-detail.md)
- [User Organization Form Page](../../../organizations/organization-form.md)
