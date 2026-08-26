---
title: 'Users'
description: 'Admin user management: list, create, view, and edit accounts.'
translationKey: 'users'
weight: 20
contentStatus: 'canonical-en'
---

Admin user management: list, create, view, and edit accounts.

| | |
| --- | --- |
| Route | `/admin/user-management` · `/admin/user-management/new` · `/admin/user-management/:login/view` · `/admin/user-management/:login/edit` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Authentication and Authorization → Users** |

## Features

- List users with search by login, filter, and sort
- Create user
- View user detail
- Edit login, first name, last name, email
- Activated flag
- Language
- Authorities / profiles (multi-select)
- Delete user (confirmation)
- Empty state with create action

Listing, detail, and form are full pages (not dialogs).

## Related

- [Authorities](authorities.md)
- [OAuth Providers](oauth-providers.md)
- [Organizations](application/organizations/_index.md)
