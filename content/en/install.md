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

## Make the installation your team's workspace

Set the application name, logo, and colors in Settings, then start with a small dataset and a clear output in mind: a map, an analytical notebook, or a printed sheet.

[Create your first workspace](/en/tutorials/01-first-workspace/) · [Browse the user guides](/en/manuals/) · [Ask about installation](/en/contact/)
