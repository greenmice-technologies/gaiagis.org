---
weight: 10
title: 'Self-hosted install'
description: 'Run Gaia on your own servers with one Docker Compose stack: app, print, Postgres, storage, and GeoServer.'
translationKey: self-hosted
canonicalSource: 'gaia-api/src/main/docker/self-hosted/README.md'
contentStatus: 'derived-en'
---

Gaia is available as [SaaS](https://app.gaiagis.org/login) and as self-hosted software.

The 1.0 installer is a **single Docker Compose stack** that starts:

- the Gaia application (API and browser UI)
- the QGIS print / GeoPDF worker
- PostgreSQL
- MinIO (S3-compatible storage)
- GeoServer (WMS/WFS the map editor can use as a data source)
- Mailpit (activation and password-reset mail on a fresh install)

Payments are off. New accounts default to the unlimited plan. After the first login, replace logo, colors, title, terms, and privacy in **Settings** (white-label).

## Runbook

The commands, `.env.example`, and Compose file live in the application repository:

**[gaia-api self-hosted README](https://gitlab.greenmice.it/gaiagis.org/gaia-api/-/blob/main/src/main/docker/self-hosted/README.md)**

Short version:

1. Build or pull the `gaia-api` and `gaia-q` images.
2. Copy `src/main/docker/self-hosted/.env.example` to `.env` and set JWT, database, MinIO, and GeoServer secrets. Do not reuse committed or SaaS credentials.
3. `docker compose --env-file .env up -d`
4. Open http://localhost:8080 and sign in as `admin` / `admin`, then change that password.

For TLS, put Nginx or Traefik in front and set the public URL variables documented in the runbook.

Need help with a production install? [Contact Greenmice](mailto:info@gaiagis.org).
