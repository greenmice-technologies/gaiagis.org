---
title: 'OAuth Providers'
description: 'Admin CRUD for social and enterprise login providers.'
translationKey: 'oauth-providers'
weight: 20
contentStatus: 'canonical-en'
---

Admin CRUD for social and enterprise login providers used on the sign-in page.

| | |
| --- | --- |
| Route | `/admin/oauth-providers` · `/admin/oauth-providers/new` · `/admin/oauth-providers/:id/view` · `/admin/oauth-providers/:id/edit` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Application → OAuth Providers** |

## Features

- List providers with search, filter, and sort
- Create, view, edit, and delete a provider
- Code, display name, and icon
- Client ID and client secret
- Authorization, token, and user-info URIs
- Scopes
- Enabled flag
- Email, name, and picture attribute mapping
- Empty state with create action

Listing, detail, and form are full pages (not dialogs).

## Related

- [Users](users.md)
- [Settings](application/settings.md)
- [Security](../account/security.md)
