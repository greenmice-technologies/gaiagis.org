#!/usr/bin/env node
// Checks that the guides cover the app's screens.
//
//   node scripts/check-coverage.mjs            report; fails only on broken mappings
//   node scripts/check-coverage.mjs --strict   also fails on uncovered screens and unverified pages
//
// A guide page declares what it documents in its front matter:
//   appScreen:        one id, or a list of ids, from data/app-screens.json
//   contentStatus:    verified | needs-review | stub
//   verifiedAgainst:  short gaia-api commit the page was last checked against

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manualsDir = join(root, 'content/en/manuals');
const strict = process.argv.includes('--strict');

const { screens } = JSON.parse(readFileSync(join(root, 'data/app-screens.json'), 'utf8'));
const known = new Map(screens.map(s => [s.id, s]));

function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith('.md') ? [path] : [];
  });
}

const unquote = value => value.trim().replace(/^['"]|['"]$/g, '');

function frontMatter(path) {
  const match = readFileSync(path, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  const lines = match ? match[1].split('\n') : [];
  const meta = { appScreen: [] };
  for (let i = 0; i < lines.length; i++) {
    const field = lines[i].match(/^(\w+):\s*(.*)$/);
    if (!field) continue;
    const [, key, value] = field;
    if (key === 'appScreen') {
      if (value) meta.appScreen.push(unquote(value));
      while (lines[i + 1]?.match(/^\s+-\s+/)) meta.appScreen.push(unquote(lines[++i].replace(/^\s+-\s+/, '')));
    } else if (key === 'contentStatus' || key === 'verifiedAgainst') {
      meta[key] = unquote(value);
    }
  }
  return meta;
}

const errors = [];
const covered = new Map();
const unverified = [];

for (const path of walk(manualsDir)) {
  const page = relative(root, path);
  const meta = frontMatter(path);
  const isIndex = path.endsWith('_index.md');
  if (!isIndex && meta.appScreen.length === 0) errors.push(`${page}: no appScreen`);
  for (const id of meta.appScreen) {
    if (!known.has(id)) errors.push(`${page}: appScreen "${id}" is not in data/app-screens.json`);
    else covered.set(id, [...(covered.get(id) ?? []), page]);
  }
  if (isIndex) continue;
  if (meta.contentStatus === 'verified' && !meta.verifiedAgainst) errors.push(`${page}: verified without verifiedAgainst`);
  if (meta.contentStatus !== 'verified') unverified.push(`${page} (${meta.contentStatus ?? 'no status'})`);
}

// Tutorials follow a task across several screens, so they carry a status but no appScreen.
for (const path of walk(join(root, 'content/en/tutorials'))) {
  if (path.endsWith('_index.md')) continue;
  const page = relative(root, path);
  const meta = frontMatter(path);
  if (meta.contentStatus === 'verified' && !meta.verifiedAgainst) errors.push(`${page}: verified without verifiedAgainst`);
  if (meta.contentStatus !== 'verified') unverified.push(`${page} (${meta.contentStatus ?? 'no status'})`);
}

const uncovered = screens.filter(s => !s.skip && !covered.has(s.id));

const section = (title, items) => {
  console.log(`\n${title}: ${items.length}`);
  for (const item of items) console.log(`  - ${item}`);
};

console.log(`Screens: ${screens.length} (${screens.filter(s => s.skip).length} skipped), covered: ${covered.size}`);
section('Broken mappings', errors);
section('Screens without a guide', uncovered.map(s => `${s.id} (${s.name})`));
section('Guides and tutorials not verified', unverified);

const failed = errors.length > 0 || (strict && (uncovered.length > 0 || unverified.length > 0));
process.exit(failed ? 1 : 0);
