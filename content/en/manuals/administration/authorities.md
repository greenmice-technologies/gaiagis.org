---
title: 'Authorities'
description: 'Admin CRUD for security roles assigned to users.'
translationKey: 'authorities'
weight: 30
contentStatus: 'canonical-en'
---

Admin CRUD for security roles assigned to users.

| | |
| --- | --- |
| Route | `/authority` · `/authority/new` · `/authority/:name/view` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Authentication and Authorization → Authorities** |

## Features

- List authorities with search, filter, and sort
- Create authority (name)
- View authority detail
- Delete authority (confirmation)
- Empty state with create action

Built-in roles include `ROLE_USER` and `ROLE_ADMIN`. Assign authorities to accounts on [Users](users.md).

Listing, detail, and form are full pages (not dialogs).

## Related

- [Users](users.md)
