# gaiagis.org

Public website for `https://gaiagis.org/`.

## Single source of truth

This repository is the only place where Gaia is described in prose: what the product is, what each screen does, and how to get it. The application code in `gaia-api` (private) is the truth; this site is where that truth is written down. Other repositories link here instead of keeping their own copy.

- Do not keep product pages, manuals, or screen maps in `gaia-api`.
- One exception: product direction (decisions and roadmap) stays in `gaia-api/docs/`, because this repository is public. Do not add it here.
- `static/install.sh` is the public install command (`curl -fsSL https://gaiagis.org/install.sh | sh`). It clones [github.com/greenmice-technologies/gaia](https://github.com/greenmice-technologies/gaia) when needed, runs `scripts/setup.sh`, and starts the stack. Requirements and configuration stay in that repository. Do not copy them onto this site.
- A change in `gaia-api` that alters a screen is finished when the matching guide page here is updated.
- English is the maintained baseline. Publish another language only after an editorial review, and add it to `config/_default/hugo.yaml` only when its content exists.

## Branding

One line of communication, shared with the app (`gaia-api`):

- **Name**: the product is **Gaia GIS**, the only public name. Use "Gaia" alone only as a short form after the first mention on a page. Never use "Community": it suggests an open-source edition, and the source is not public. Say **self-hosted** to describe how it is distributed.
- **Colour**: the brand primary is `#0B5D8E` (Oceanus blue), set in `config/_default/params.yaml` and `assets/css/styles.css`. The logo gradient runs from `#46A8D8` to `#0B5D8E`.
- **Release names**: only major releases are named, after the Titans, the children of Gaia (1.0 Oceanus, 2.0 Themis, ...). Minor and patch releases stay numbered: "Gaia GIS 1.2 (Oceanus)". Each major has its own primary colour and sign-in splash screen; the full list and the reasoning are in `gaia-api` under `src/main/webapp/content/images/splash/README.md`.
- **Brand images**: `assets/images/gaia-gis.png` (home hero) is a screenshot of the editor; retake it when the editor's look changes. `static/gaia-gis-og.png` (social preview) is composed from `logo-brand.svg`, the Oceanus splash from `gaia-api` and the Urbanist wordmark; regenerate it when the logo or the brand colour changes.
- **Screenshots** in the tutorials come from the app. Regenerate them with `npm run screenshots` after a branding change so they show the current colours.

## Content

- `content/en/_index.md` and `data/en/home/hero.yaml` — home page
- `content/en/product/` — Notebook, Layers, Print
- `content/en/manuals/` — user and administration guides
- `content/en/tutorials/` — step-by-step walkthroughs, with screenshots generated from the app
- `content/en/install.md` — short pointer to the installer repository
- `content/en/about.md`, `contact.md`, `faq.md`, `privacy.md`, `terms.md`, `cookies.md` — pages linked by default from an installation's Settings
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

## Tutorial screenshots as a drift check

The images of each tutorial are captured by Playwright from a running Gaia (`screenshots/`, see `screenshots/README.md`). A spec that fails means the app no longer matches that tutorial: fix the spec and the text together, then mark the tutorial `verified`.

```bash
npm run screenshots
```

Run it only against a local, throwaway Gaia: each spec creates a workspace and deletes it at the end.

## Local commands

Run the website locally:

```bash
hugo server
```

Build the static site:

```bash
hugo
```
