---
title: "Logs"
description: "Change how much detail the application writes to its logs."
translationKey: "logs"
weight: 40
appScreen:
  - "/admin/logs"
contentStatus: needs-review
---

Open **Administration**, then **Monitoring**, then **Logs**.

The page lists the loggers of the application. For each one, select a level: **TRACE**, **DEBUG**, **INFO**, **WARN**, **ERROR**, or **OFF**. More detailed levels help when you investigate a problem.

Select the **Name** header to sort the list.

If the loggers cannot be loaded, the page says so and offers **Try again**; it does not show an empty list. If a search matches nothing, the page says so and suggests clearing the search. If a level change fails, a message names the logger and the list reloads so it shows the real level.
