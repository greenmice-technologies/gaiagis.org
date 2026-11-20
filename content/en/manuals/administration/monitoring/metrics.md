---
title: "Metrics"
description: "See how the application uses memory, threads and the processor, and how its requests perform."
translationKey: "metrics"
weight: 25
appScreen:
  - "/admin/metrics"
contentStatus: needs-review
---

Open **Administration**, then **Monitoring**, then **Metrics**.

The page, titled **Application metrics**, shows how the application is running:

- **JVM metrics** — memory pools and threads
- **System** — uptime, start time, processor use, system load and open files
- **Garbage collections**
- **HTTP requests** — how many requests returned each status code, and how long they took
- **Endpoint requests** — the count and average time in milliseconds for each endpoint

Use it to see whether the application is under load. To change what the application writes to its logs, use [Logs](logs.md).

While the figures load, the page says it is updating. If they cannot be loaded, it says so and offers **Try again**. Use the refresh button at the top to update the figures.
