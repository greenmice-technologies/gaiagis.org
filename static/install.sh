#!/bin/sh
# Public entry point: https://gaiagis.org/install.sh
# Clones the installer when needed, fills the secrets, then starts the stack.
set -eu

repo=https://github.com/greenmice-technologies/gaia.git
dest=${GAIA_DIR:-gaia}

if [ ! -r /dev/tty ]; then
  echo "gaia:setup needs an interactive terminal." >&2
  exit 1
fi

run_setup() {
  cd "$1"
  GAIA_BOOTSTRAP=1 sh scripts/setup.sh </dev/tty
  echo "Starting the stack."
  sh scripts/install.sh
}

if [ -f compose.yml ] && [ -f .env.example ] && [ -f scripts/setup.sh ]; then
  run_setup "$(pwd)"
  exit
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
