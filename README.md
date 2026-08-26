# gaiagis.org

Public website and **official product documentation** for `https://gaiagis.org/`.

This repository is the source of truth for manuals, feature pages, marketing copy, and site navigation.

The GAIA application lives in a separate repository (`gaia-api`). Install runbooks stay next to the Compose files there; the self-hosted manual on this site points at that runbook.

## Content Contract

- Edit official docs here, under `content/en/manuals/` and `content/en/features/`.
- English is the maintained editorial baseline. Other languages should be published only after explicit editorial review.
- Do not keep a parallel manuals tree in `gaia-api`.

## Local Commands

Run the website locally:

```bash
hugo server
```

Build the static site:

```bash
hugo
```
