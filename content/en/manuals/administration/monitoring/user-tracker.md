---
title: 'User tracker'
description: 'Live list of signed-in sessions, via WebSocket.'
translationKey: 'user-tracker'
weight: 10
contentStatus: 'canonical-en'
---

Live list of signed-in sessions, via WebSocket.

| | |
| --- | --- |
| Route | `/admin/tracker` |
| Access | Administrators (`ROLE_ADMIN`) |
| Entry | Sidebar **Administration → Monitoring → User tracker** |

## Features

- Session list for currently connected users
- Login, timestamp, IP address, and current page
- Empty state when nobody is connected

## Related

- [Health](health.md)
- [Logs](logs.md)
- [Users](../users.md)
