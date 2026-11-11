#!/bin/sh
# Public entry point: https://gaiagis.org/install.sh
# Clones the installer when needed, then runs scripts/setup.sh on the terminal.
set -eu

repo=https://github.com/greenmice-technologies/gaia.git
dest=${GAIA_DIR:-gaia}

if [ ! -r /dev/tty ]; then
  echo "gaia:setup needs an interactive terminal." >&2
  exit 1
fi

run_setup() {
  cd "$1"
  GAIA_BOOTSTRAP=1 exec sh scripts/setup.sh </dev/tty
}

if [ -f compose.yml ] && [ -f .env.example ] && [ -f scripts/setup.sh ]; then
  run_setup "$(pwd)"
fi

if ! command -v git >/dev/null 2>&1; then
  echo "git is required." >&2
  exit 1
fi

if [ -e "$dest" ] && [ ! -d "$dest/.git" ]; then
  echo "Cannot clone into $dest: it already exists and is not a Gaia checkout." >&2
  exit 1
fi

if [ ! -d "$dest/.git" ]; then
  git clone --depth 1 "$repo" "$dest"
fi

run_setup "$(CDPATH= cd -- "$dest" && pwd)"
