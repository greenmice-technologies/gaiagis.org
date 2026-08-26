---
title: 'Settings'
description: 'Install-wide namespaced application settings.'
translationKey: 'admin-settings'
weight: 10
contentStatus: 'canonical-en'
---

Install-wide application settings. Namespaced key/value configuration used by the public site, layout, and other runtime features.

| | |
| --- | --- |
| Route | `/setting` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Application → Settings** |

## Features

- List settings by namespace, name, type, and value
- Search by namespace
- Filter and sort
- Open a setting to edit its value (page, not dialog)
- Value editors by type: string, number, boolean, array, object, HTML, password, email, URL, color, image
- Empty state when no settings match

## Related

- [Organizations](organizations/_index.md)
- [OAuth Providers](../oauth-providers.md)
- [Preferences](../../account/preferences.md)
