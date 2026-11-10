---
title: "Install"
description: "Install Gaia Community with one Docker Compose stack on your own machines."
translationKey: install
contentStatus: "canonical-en"
---

Gaia Community installs on your own computer or on your own servers. There is no hosted service to sign in to.

The installer is one Docker Compose file. It starts:

- the Gaia application (API and browser UI)
- the QGIS print service (`gaia-q`), reachable only inside the stack
- PostgreSQL
- RustFS, for project files and print packages
- Mailpit, so activation and password-reset mail has a place to land

Payments are off. New accounts use the unlimited plan. After the first login, replace title, logo, color, terms, and privacy in Settings.

The commands, the Compose file, and `.env.example` live in the installer repository:

**[github.com/greenmice-technologies/gaia](https://github.com/greenmice-technologies/gaia)**

The stack names the `gaia-api` and `gaia-q` images on the GitLab registry. Those images are not anonymously pullable yet. The README in that repository says what happens until they are published.

For a production hostname, put a TLS proxy in front of the stack and set the public URL variables documented there.

Need help with an install? [Contact Greenmice](mailto:info@gaiagis.org).
