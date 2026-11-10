---
title: 'Users'
description: 'Admin user management: list, create, view, and edit accounts.'
translationKey: 'users'
weight: 20
contentStatus: needs-review
appScreen:
  - "/admin/user-management"
---

Admin user management: list, create, view, and edit accounts.

| | |
| --- | --- |
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
