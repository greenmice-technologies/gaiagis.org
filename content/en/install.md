---
title: "Request access"
description: "Ask for access to Gaia GIS, the self-hosted web GIS, and plan the installation on your computer or your organization's servers."
translationKey: install
contentStatus: "canonical-en"
aliases:
  - /en/manuals/self-hosted/
---

## Run Gaia GIS on your infrastructure

Gaia GIS runs on your computer or your organization's servers, and people work with it through a browser. Your organization manages the installation, its users, and its stored data. There is no hosted service to sign up for.

## Ask for access

The application packages are not available for public download. Access is given on request.

**[Request access by email](mailto:info@gaiagis.org?subject=Gaia%20GIS%20access%20request)**

Write to [info@gaiagis.org](mailto:info@gaiagis.org) and tell us:

- what kind of data you work with, and the result you want to produce
- where you plan to run Gaia GIS
- how many people will use it

## Network requirements

Feature Spotlight, in the attribute table, asks public services for context about a feature: OpenStreetMap Nominatim for the place name of a point, MET Norway for weather, and Wikipedia for the article. The Gaia server makes these requests, so it needs outbound HTTPS access to `nominatim.openstreetmap.org`, `api.met.no` and `*.wikipedia.org`. The satellite view and the planisphere load map tiles from `server.arcgisonline.com` and `tile.openstreetmap.org` in the user's browser. Without that access the affected cards report that they are unavailable, and attribute editing keeps working. Articles open in a window inside the editor, which frames `https://*.wikipedia.org` in the user's browser; the default content security policy allows it, and if you set your own policy, add that host to `frame-src`, otherwise the window stays empty and the article is still available through **Open in new tab**.

Each user can make 120 Spotlight requests per minute (opening one feature makes three, plus one more for the text of the nearby articles); change the limit with `APPLICATION_FEATURE_SPOTLIGHT_RATE_LIMIT_PER_MINUTE`, where `0` removes it. Set `APPLICATION_FEATURE_SPOTLIGHT_ENABLED=false` to turn Spotlight off, and `APPLICATION_FEATURE_SPOTLIGHT_USER_AGENT` to identify your installation, with a contact address, to those services.

## Create your first workspace

Once Gaia GIS is running, set the application name, logo, and colors in Settings, then start with a small dataset and a clear output in mind: a map, an analytical notebook, or a printed sheet.

**[Follow the first workspace tutorial](/en/tutorials/01-first-workspace/)** · [Browse the documentation](/en/manuals/)
