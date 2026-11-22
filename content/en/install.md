---
title: "Install Gaia"
description: "Check package availability and set up Gaia GIS on your infrastructure, then give your team browser access to maps, notebooks, and print layouts."
translationKey: install
contentStatus: "canonical-en"
aliases:
  - /en/manuals/self-hosted/
---

## Run Gaia GIS on your infrastructure

Install Gaia GIS on your computer or your organization's servers, then work through a browser. Your organization manages the installation, its users, and its stored data. There is no hosted service to sign up for.

## Check availability before you start

Some application packages are not yet available for public download. Read the installation guide for current access requirements and system requirements before running the installer. [Contact us](/en/contact/) if you need to clarify availability for your project.

**[Check requirements and access on GitHub](https://github.com/greenmice-technologies/gaia)**

## Start the installation

Once you have confirmed the requirements and package access, run this command in a terminal:

```bash
curl -fsSL https://gaiagis.org/install.sh | sh
```

The command clones the installer, asks for three secrets, and starts the stack. Press Enter to generate each secret. Follow the installation guide for configuration and the remaining setup steps, including access through your own web address.

A new installation has payments turned off, and accounts use the unlimited plan. These are installation defaults; they do not establish licensing or package access terms.

## Outbound network access

Feature Spotlight, in the attribute table, asks public services for context about a feature: OpenStreetMap Nominatim for the place name of a point, MET Norway for weather, and Wikipedia for the article. The Gaia server makes these requests, so it needs outbound HTTPS access to `nominatim.openstreetmap.org`, `api.met.no` and `*.wikipedia.org`. The satellite view and the planisphere load map tiles from `server.arcgisonline.com` and `tile.openstreetmap.org` in the user's browser. Without that access the affected cards report that they are unavailable, and attribute editing keeps working. Articles open in a window inside the editor, which frames `https://*.wikipedia.org` in the user's browser; the default content security policy allows it, and if you set your own policy, add that host to `frame-src`, otherwise the window stays empty and the article is still available through **Open in new tab**.

Each user can make 120 Spotlight requests per minute (opening one feature makes three, plus one more for the text of the nearby articles); change the limit with `APPLICATION_FEATURE_SPOTLIGHT_RATE_LIMIT_PER_MINUTE`, where `0` removes it. Set `APPLICATION_FEATURE_SPOTLIGHT_ENABLED=false` to turn Spotlight off, and `APPLICATION_FEATURE_SPOTLIGHT_USER_AGENT` to identify your installation, with a contact address, to those services.

## Create your first workspace

Set the application name, logo, and colors in Settings, then start with a small dataset and a clear output in mind: a map, an analytical notebook, or a printed sheet.

**[Follow the first workspace tutorial](/en/tutorials/01-first-workspace/)** · [Browse the documentation](/en/manuals/) · [Ask about installation](/en/contact/)
