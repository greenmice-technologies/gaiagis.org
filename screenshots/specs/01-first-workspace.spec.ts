import { test, expect } from '@playwright/test';
import { DATA, createWorkspace, dismissToasts, deleteWorkspace, importFile, login, renameWorkspace, setProjection, shot } from '../helpers';

const T = '01-first-workspace';

test('first workspace: create, set EPSG:4326, import GeoPackage, explore', async ({ page, request }) => {
  await login(page);
  // Crop to the greeting and button: the rest of the dashboard lists other users' workspaces.
  await shot(page, T, '01-dashboard', { clip: { x: 230, y: 0, width: 1210, height: 90 } });

  const id = await createWorkspace(page);
  try {
    await shot(page, T, '02-empty-editor');

    await setProjection(page, 'EPSG:4326', async () => shot(page, T, '03-projection-dialog'));

    await renameWorkspace(page, 'World atlas', async () => shot(page, T, '03b-workspace-name'));

    // Clear toasts first: dismissing them later would click outside the menu and close it.
    await dismissToasts(page);
    await page.getByTestId('addLayer').click();
    await shot(page, T, '04-add-layer-menu');

    // Esc would also collapse the sidebar, so importFile reuses the menu if it is still open.
    await importFile(page, DATA.naturalEarth);
    await shot(page, T, '05-import-dialog');

    await page.getByRole('button', { name: 'Add to map' }).click();
    await expect(page.getByTestId('layer-row-Natural Earth Countries')).toBeVisible({ timeout: 60_000 });
    await page.waitForTimeout(3000);
    await page.locator('.p-dialog-close-button').first().click();
    await shot(page, T, '06-layers-added');

    // Hide the labelled cities so the base map is readable; styling them is covered in a later tutorial.
    await page.getByTestId('layer-row-Natural Earth Populated Places').getByRole('checkbox').uncheck();
    const row = page.getByTestId('layer-row-Natural Earth Countries');
    await row.hover();
    await row.getByTestId('layerRowActions').click();
    await shot(page, T, '07-layer-actions');
    await page.getByRole('menuitem', { name: 'Zoom to layer' }).click();
    await page.waitForTimeout(2500);
    await shot(page, T, '08-zoom-to-layer');
  } finally {
    await deleteWorkspace(page, request, id);
  }
});
