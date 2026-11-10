# gaiagis.org

Public website for `https://gaiagis.org/`.

## Single source of truth

This repository is the only place where Gaia is described in prose: what the product is, what each screen does, and how to get it. The application code in `gaia-api` (private) is the truth; this site is where that truth is written down. Other repositories link here instead of keeping their own copy.

- Do not keep product pages, manuals, or screen maps in `gaia-api`.
- Do not copy the install commands here. The installer lives in [github.com/greenmice-technologies/gaia](https://github.com/greenmice-technologies/gaia): Compose file, `.env.example`, and the install steps.
- A change in `gaia-api` that alters a screen is finished when the matching guide page here is updated.
- English is the maintained baseline. Publish another language only after an editorial review, and add it to `config/_default/hugo.yaml` only when its content exists.

## Content

- `content/en/_index.md` and `data/en/home/hero.yaml` — home page
- `content/en/product/` — Notebook, Layers, Print
- `content/en/manuals/` — user and administration guides
- `content/en/install.md` — short pointer to the installer repository
- `data/app-screens.json` — the screens of the app that the guides must cover

## Keeping the guides aligned with the app

`data/app-screens.json` lists every screen and panel of the app. Each guide page says in its front matter which screens it documents and how far it can be trusted:

```yaml
appScreen:
  - "/project/:id/editor?panel=history"
contentStatus: verified # verified | needs-review | stub
verifiedAgainst: "828cf266" # short gaia-api commit the page was checked against
```

- `verified` — every label, path, and step was checked in the running app at `verifiedAgainst`.
- `needs-review` — written for an earlier version of the app; may name things that have changed.
- `stub` — a placeholder, not yet a guide.

When a screen is added to the app, add it to `data/app-screens.json`. When you check a page against the app, set `contentStatus: verified` and update `verifiedAgainst`.

Report what is covered and what is not:

```bash
node scripts/check-coverage.mjs
```

Fail on any uncovered screen or unverified page:

```bash
node scripts/check-coverage.mjs --strict
```

## Local commands

Run the website locally:

```bash
hugo server
```

Build the static site:

```bash
hugo
```
