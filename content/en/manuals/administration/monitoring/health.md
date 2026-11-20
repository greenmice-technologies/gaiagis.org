---
title: "Health"
description: "Check that the application and the services it depends on are running."
translationKey: "health"
weight: 20
appScreen:
  - "/admin/health"
contentStatus: needs-review
---

Open **Administration**, then **Monitoring**, then **Health**.

The page reports whether the application and the services it depends on, such as the database and mail, are running.

## When there is nothing to show

The page tells three situations apart:

- **Healthy, unhealthy or unknown** — each service is listed with its status.
- **No indicators** — the service answered but reported no health indicators.
- **Could not be checked** — the request failed. The page says so and offers **Try again**. If an earlier result was already on screen, it stays, and a message warns that it may be out of date.
