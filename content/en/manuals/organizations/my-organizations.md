---
title: 'My Organizations'
description: 'Organizations the current user belongs to, with an active-org switcher.'
translationKey: 'my-organizations'
weight: 10
contentStatus: 'canonical-en'
---

Organizations the current user belongs to, with a switcher for the active organization.

| | |
| --- | --- |
| Route | `/organizations` |
| Access | Signed-in users (`ROLE_USER`, `ROLE_ADMIN`) |
| Entry | Sidebar **Organizations → My Organizations**, or Dashboard **View all** |

## Features

- List memberships for the signed-in user
- Highlight the current organization
- Switch the active organization
- Open [Organization Page](organization-detail.md)
- Empty state when the user has no memberships

Creating and deleting organizations is an admin action. This page is the membership switcher.

## Related

- [Dashboard](../account/dashboard.md)
- [Organization Page](organization-detail.md)
- [Organization Form Page](organization-form.md)
- [Admin Organizations](../administration/application/organizations/_index.md)
