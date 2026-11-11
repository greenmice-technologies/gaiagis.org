import { test, expect } from '@playwright/test';
import { createWorkspace, deleteWorkspace, dismissToasts, dragLayerRow, importNaturalEarth, layerRows, login, openAddLayerMenu, renameWorkspace, shot } from '../helpers';

const T = '02-layers';

test('layers: order, empty layer, group, grid, tile services, text, row actions', async ({ page, request }) => {
  test.setTimeout(240_000);
  // "Empty Layer" and "Layer Group" ask for a name in a small dialog.
  const nameAndSave = async (name: string, capture?: string): Promise<void> => {
    const dialog = page.getByRole('dialog').last();
    await expect(dialog).toBeVisible();
    await dialog.getByRole('textbox').fill(name);
    if (capture) await shot(page, T, capture);
    await dialog.getByRole('button', { name: 'Save' }).click();
  };

  await login(page);
  const id = await createWorkspace(page);
  try {
    await renameWorkspace(page, 'World atlas');
    await importNaturalEarth(page);
    // Hide the labelled cities so the base map and layer order stay readable in the captures.
    await page.getByTestId('layer-row-Natural Earth Populated Places').getByRole('checkbox').uncheck();
    await page.waitForTimeout(800);
    await shot(page, T, '01-starting-point');

    // Add layer menu. A new workspace already has the Open Street Map base layer.
    await expect(page.getByTestId('layer-row-Open Street Map')).toBeVisible();
    await openAddLayerMenu(page);
    await shot(page, T, '02-add-layer-menu');
    await page.getByTestId('addLayer').click(); // toggles the menu closed (Esc would collapse the side panel)

    // Layer order: drag the first row below the second one
    const before = await layerRows(page);
    await dragLayerRow(page, before[0], before[1], 'bottom');
    await dismissToasts(page);
    await shot(page, T, '03-layer-order');

    // Empty vector layer
    await openAddLayerMenu(page);
    await page.getByText(/^Empty Layer/).first().click();
    await nameAndSave('Notes', '04a-new-layer-name');
    await expect(page.getByTestId('layer-row-Notes')).toBeVisible({ timeout: 30_000 });
    await dismissToasts(page);
    await shot(page, T, '04-empty-layer');

    // Layer group
    await openAddLayerMenu(page);
    await page.getByText(/^Layer Group/).first().click();
    await nameAndSave('Reference data');
    await expect(page.getByTestId('layer-row-Reference data')).toBeVisible({ timeout: 30_000 });
    await dismissToasts(page);
    await shot(page, T, '05-layer-group');

    // Move a layer into the group from its row menu
    const disputed = page.getByTestId('layer-row-Natural Earth Disputed Areas');
    await disputed.hover();
    await disputed.getByTestId('layerRowActions').click();
    await page.getByRole('menuitem', { name: 'Move to group' }).click();
    await page.waitForTimeout(500);
    await shot(page, T, '05b-move-to-group');
    await page.getByRole('menuitem', { name: 'Reference data' }).click();
    await page.waitForTimeout(1500);
    await dismissToasts(page);
    await shot(page, T, '05c-layer-in-group');

    // Grid
    await openAddLayerMenu(page);
    await page.getByText(/^Grid/).first().click();
    const grid = page.getByRole('dialog', { name: 'Create Grid Layer' });
    await expect(grid).toBeVisible();
    await page.waitForTimeout(800);
    await shot(page, T, '06-grid-dialog');
    await page.locator('.p-dialog-close-button').first().click();

    // XYZ
    await openAddLayerMenu(page);
    await page.getByText(/^Add XYZ/).first().click();
    await expect(page.getByRole('dialog', { name: 'Add XYZ' })).toBeVisible();
    await shot(page, T, '07-xyz-dialog');
    await page.locator('.p-dialog-close-button').first().click();

    // Vector tiles
    await openAddLayerMenu(page);
    await page.getByText(/^Add Vector/).first().click();
    await expect(page.getByRole('dialog', { name: 'Add Vector Tiles' })).toBeVisible();
    await shot(page, T, '07b-vector-tiles-dialog');
    await page.locator('.p-dialog-close-button').first().click();

    // Text layer: paste data into the search box of the Layers panel
    const box = page.getByRole('searchbox', { name: /paste GeoJSON/ });
    await box.fill('{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Rome"},"geometry":{"type":"Point","coordinates":[12.49,41.9]}}]}');
    await page.waitForTimeout(600); // let the field recognise the pasted text before Enter
    await box.press('Enter');
    const textDialog = page.getByRole('dialog', { name: 'Text Layer' });
    await expect(textDialog).toBeVisible();
    await shot(page, T, '07c-text-layer-dialog');
    await textDialog.locator('.p-dialog-close-button').click();
    await expect(textDialog).toBeHidden();
    await box.fill('');
    // Emptying the field can reopen the Add layer popover over the rows: toggle it closed.
    await page.waitForTimeout(400);
    if (await page.getByTestId('add-layer-action-browse').isVisible().catch(() => false)) {
      await page.getByTestId('addLayer').click();
    }

    // Row actions
    const row = page.getByTestId('layer-row-Natural Earth Countries');
    await row.hover();
    await shot(page, T, '08-layer-row', row);
  } finally {
    await deleteWorkspace(page, request, id);
  }
});
