import { expect, type APIRequestContext, type Page } from '@playwright/test';
import { appendFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');

/** Sample data shipped with the site (also offered as downloads in the tutorials). */
export const DATA = {
  naturalEarth: path.join(ROOT, 'static/downloads/tutorials/natural_earth.gpkg'),
  precipitation: path.join(ROOT, 'static/downloads/tutorials/precip30min.tif'),
};

export const CREATED_LOG = path.join(ROOT, 'screenshots/.output/created-workspaces.log');

export const IMAGES_DIR = path.join(ROOT, 'static/images/tutorials');

const USER = process.env.GAIA_USER ?? 'admin';
const PASSWORD = process.env.GAIA_PASSWORD ?? 'admin';
const API_URL = (process.env.GAIA_API_URL ?? 'http://127.0.0.1:8080').replace(/\/$/, '');
const SETTLE_MS = Number(process.env.GAIA_SETTLE_MS ?? 900);

export async function acceptCookies(page: Page): Promise<void> {
  const button = page.getByRole('button', { name: 'Accept' });
  if (await button.isVisible().catch(() => false)) {
    await button.click();
  }
}

export async function login(page: Page): Promise<void> {
  await page.goto('/login');
  await page.getByTestId('username').fill(USER);
  await page.getByTestId('password').fill(PASSWORD);
  await page.getByTestId('submit').click();
  await page.waitForURL(url => !url.pathname.includes('/login'), { timeout: 30_000 });
  await acceptCookies(page);
}

/** Creates an empty workspace from the dashboard and returns its id. */
export async function createWorkspace(page: Page): Promise<number> {
  await page.goto('/');
  await page.getByTestId('entityCreateButton').first().click();
  await page.waitForURL(/\/project\/\d+\/editor/, { timeout: 45_000 });
  await acceptCookies(page);
  await waitForMap(page);
  const id = Number(/\/project\/(\d+)\/editor/.exec(page.url())![1]);
  // Registered so global-teardown can delete it even if the test times out before its own cleanup.
  mkdirSync(path.dirname(CREATED_LOG), { recursive: true });
  appendFileSync(CREATED_LOG, `${id}\n`);
  return id;
}

/**
 * Deletes a workspace through the REST API so reruns leave no leftovers.
 * Uses Node's fetch instead of Playwright's `request` fixture, which is already torn down when a test times out.
 */
export async function deleteWorkspaceById(id: number): Promise<void> {
  await deleteWorkspace(undefined as unknown as Page, undefined as unknown as APIRequestContext, id);
}

export async function deleteWorkspace(_page: Page, _request: APIRequestContext, id: number): Promise<void> {
  const auth = await fetch(`${API_URL}/api/authenticate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USER, password: PASSWORD }),
  });
  const { id_token: token } = (await auth.json()) as { id_token: string };
  const res = await fetch(`${API_URL}/api/projects/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
  // 400/404: already deleted by the spec itself (global teardown retries every registered id).
  if (!res.ok && ![400, 404].includes(res.status)) {
    console.warn(`Could not delete workspace ${id}: HTTP ${res.status}`);
  }
}

export async function waitForMap(page: Page): Promise<void> {
  await expect(page.getByTestId('editor-map')).toBeVisible({ timeout: 60_000 });
  await page.waitForTimeout(SETTLE_MS);
}

/** Opens the "Add layer" menu, picks Browse, and uploads a local file into the import dialog. */
export async function importFile(page: Page, file: string): Promise<void> {
  const browse = page.getByTestId('add-layer-action-browse');
  if (!(await browse.isVisible().catch(() => false))) {
    await page.getByTestId('addLayer').click();
  }
  const chooser = page.waitForEvent('filechooser');
  await page.getByTestId('add-layer-action-browse').click();
  await (await chooser).setFiles(file);
  await expect(page.getByTestId('import-dialog')).toBeVisible({ timeout: 90_000 });
}

/**
 * Saves a full-window screenshot as `static/images/tutorials/<tutorial>/<name>.png`.
 * Names are referenced by the Markdown pages, so keep them stable.
 * Never capture lists of other people's workspaces: the target database may hold real data, so crop with `clip`.
 */
export async function shot(
  page: Page,
  tutorial: string,
  name: string,
  target?: ReturnType<Page['locator']> | { clip: { x: number; y: number; width: number; height: number } },
): Promise<void> {
  const dir = path.join(IMAGES_DIR, tutorial);
  mkdirSync(dir, { recursive: true });
  await dismissToasts(page);
  await page.waitForTimeout(SETTLE_MS);
  const file = path.join(dir, `${name}.png`);
  if (target && 'clip' in target) {
    await page.screenshot({ path: file, animations: 'disabled', clip: target.clip });
  } else if (target) {
    await target.screenshot({ path: file, animations: 'disabled' });
  } else {
    await page.screenshot({ path: file, animations: 'disabled' });
  }
}

/** Opens the projection picker in the editor footer, optionally captures it, picks `code` and applies. */
export async function setProjection(page: Page, code: string, beforeApply?: () => Promise<void>): Promise<void> {
  await page.getByRole('contentinfo').getByText(/^EPSG:\d+$/).first().click().catch(async () => {
    await page.getByText(/^EPSG:\d+$/).last().click();
  });
  const dialog = page.getByRole('dialog', { name: 'Projection' });
  await expect(dialog).toBeVisible();
  await dialog.getByText(code, { exact: true }).first().click();
  await page.waitForTimeout(600);
  await beforeApply?.();
  await dialog.getByRole('button', { name: 'Apply' }).click();
  await expect(dialog).toBeHidden();
}

/** Closes transient toasts so they (and workspace ids) never end up in a screenshot. */
export async function dismissToasts(page: Page): Promise<void> {
  const buttons = page.locator('.p-toast-close-button');
  for (let i = (await buttons.count()) - 1; i >= 0; i--) {
    await buttons.nth(i).click({ timeout: 2_000 }).catch(() => undefined);
  }
}

/** Renames the workspace from the Workspace panel (rail) and saves. */
export async function renameWorkspace(page: Page, name: string, afterFill?: () => Promise<void>): Promise<void> {
  await page.getByTestId('rail-tab-Workspace').click();
  const field = page.getByTestId('name');
  await expect(field).toBeVisible();
  await field.fill(name);
  await field.blur();
  await afterFill?.();
  await dismissToasts(page); // a toast at the top right can cover the Save button
  const save = page.getByTestId('saveWorkspace');
  if (await save.isVisible().catch(() => false)) {
    await save.click();
    await expect(save).toBeHidden({ timeout: 30_000 });
  } else {
    await page.keyboard.press(process.platform === 'darwin' ? 'Meta+s' : 'Control+s');
    await page.waitForTimeout(800);
  }
  await page.getByTestId('rail-tab-Layers').click();
}

/** Sets EPSG:4326, imports every table of natural_earth.gpkg and leaves the five layers on the map. */
export async function importNaturalEarth(page: Page): Promise<void> {
  await setProjection(page, 'EPSG:4326');
  await importFile(page, DATA.naturalEarth);
  await page.getByRole('button', { name: 'Add to map' }).click();
  await expect(page.getByTestId('layer-row-Natural Earth Countries')).toBeVisible({ timeout: 60_000 });
  await page.waitForTimeout(3000);
  await page.locator('.p-dialog-close-button').first().click();
  await dismissToasts(page);
}

/** Opens the "Add layer" menu unless it is already open. */
export async function openAddLayerMenu(page: Page): Promise<void> {
  await dismissToasts(page);
  if (!(await page.getByTestId('add-layer-action-browse').isVisible().catch(() => false))) {
    await page.getByTestId('addLayer').click();
  }
}

/** Layer names currently listed in the Layers panel, top to bottom. */
export async function layerRows(page: Page): Promise<string[]> {
  return page.locator('[data-cy^="layer-row-"]').evaluateAll(els => els.map(e => e.getAttribute('data-cy')!.replace('layer-row-', '')));
}

/**
 * Drags a layer row by its grip with real mouse events (the panel uses Angular CDK drag & drop).
 * `where` picks the drop spot on the target row: `top`, `middle` (drop into a group), or `bottom`.
 */
export async function dragLayerRow(page: Page, from: string, to: string, where: 'top' | 'middle' | 'bottom'): Promise<void> {
  const handle = page.getByTestId(`layer-row-${from}`).getByRole('button', { name: 'Drag to reorder' });
  const target = page.getByTestId(`layer-row-${to}`);
  const h = (await handle.boundingBox())!;
  const t = (await target.boundingBox())!;
  const y = where === 'top' ? t.y + 3 : where === 'bottom' ? t.y + t.height - 3 : t.y + t.height / 2;
  await page.mouse.move(h.x + h.width / 2, h.y + h.height / 2);
  await page.mouse.down();
  await page.mouse.move(h.x + h.width / 2, h.y + h.height / 2 + 6, { steps: 4 });
  await page.mouse.move(t.x + t.width / 2, y, { steps: 25 });
  await page.waitForTimeout(300);
  await page.mouse.up();
  await page.waitForTimeout(1500);
}
