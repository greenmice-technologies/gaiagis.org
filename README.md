# gaiagis.org

Public website for `https://gaiagis.org/`.

This repository is the source of truth for the product narrative and site navigation. English is the maintained editorial baseline. Other languages should be published only after explicit editorial review.

The installer lives in [github.com/greenmice-technologies/gaia](https://github.com/greenmice-technologies/gaia): Compose file, `.env.example`, and the install steps. Do not copy those commands onto this site.

The application source lives in `gaia-api` (private). Do not keep a manuals tree there, and do not keep a second install runbook here.

## Content

- `content/en/product/` — Notebook, Layers, Print
- `content/en/manuals/` — user and administration guides
- `content/en/install.md` — short pointer to the installer repository
- `data/en/home/` — home page blocks

## Local Commands

Run the website locally:

```bash
hugo server
```

Build the static site:

```bash
hugo
```
