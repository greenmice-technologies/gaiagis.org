---
title: 'Health'
description: 'Spring Boot health indicators for the running process and its dependencies.'
translationKey: 'health'
weight: 20
contentStatus: 'canonical-en'
---

Spring Boot health indicators for the running process and its dependencies.

| | |
| --- | --- |
| Route | `/admin/health` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Monitoring → Health** |

## Features

- Refresh health snapshot
- One row per indicator (database, disk, mail, and others registered on the install)
- Status per component
- Detail dialog for a component
- Empty state when no indicators are returned

## Related

- [User tracker](user-tracker.md)
- [Configuration](configuration.md)
- [Logs](logs.md)
