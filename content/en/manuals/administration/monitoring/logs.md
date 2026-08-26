---
title: 'Logs'
description: 'Runtime logger levels for the application process.'
translationKey: 'logs'
weight: 40
contentStatus: 'canonical-en'
---

Runtime logger levels for the application process.

| | |
| --- | --- |
| Route | `/admin/logs` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Monitoring → Logs** |

## Features

- List loggers with search and sort
- Change level per logger
- Empty state when no loggers match the filter

Changes apply to the running process and are not persisted across restarts.

## Related

- [Health](health.md)
- [Configuration](configuration.md)
- [User tracker](user-tracker.md)
