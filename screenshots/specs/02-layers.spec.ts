import { test, expect } from '@playwright/test';
import { createWorkspace, deleteWorkspace, dismissToasts, dragLayerRow, importNaturalEarth, layerRows, login, openAddLayerMenu, renameWorkspace, shot } from '../helpers';

const T = '02-layers';

test('layers: base map, empty layer, group, grid, XYZ, row actions', async ({ page, request }) => {
  test.setTimeout(240_000);
  // "Empty Layer" and "Layer Group" ask for a name with the browser's native prompt.
  let promptAnswer = '';
  page.on('dialog', dialog => void dialog.accept(promptAnswer));

  await login(page);
  const id = await createWorkspace(page);
  try {
    await renameWorkspace(page, 'World atlas');
    await importNaturalEarth(page);
    // Hide the labelled cities so the base map and layer order stay readable in the captures.
    await page.getByTestId('layer-row-Natural Earth Populated Places').getByRole('checkbox').uncheck();
    await page.waitForTimeout(800);
    await shot(page, T, '01-starting-point');

    // Base map
    await openAddLayerMenu(page);
    await shot(page, T, '02-add-layer-menu');
    await page.getByText(/^Open Street/).first().click();
    await expect(page.getByTestId('layer-row-Open Street Map')).toBeVisible();
    await page.waitForTimeout(2500);
    await dismissToasts(page);
    // New layers are added on top, so the opaque base map now hides the vector layers.
    await shot(page, T, '03-basemap-on-top');
    await dragLayerRow(page, 'Open Street Map', 'Natural Earth Boundary Lines Land', 'bottom');
    await dismissToasts(page);
    console.log('ROWS after basemap move:', (await layerRows(page)).join(' | '));
    await shot(page, T, '03b-basemap-at-bottom');

    // Empty vector layer
    promptAnswer = 'Notes';
    await openAddLayerMenu(page);
    await page.getByText(/^Empty Layer/).first().click();
    await expect(page.getByTestId('layer-row-Notes')).toBeVisible({ timeout: 30_000 });
    await dismissToasts(page);
    await shot(page, T, '04-empty-layer');

    // Layer group
    promptAnswer = 'Reference data';
    await openAddLayerMenu(page);
    await page.getByText(/^Layer Group/).first().click();
    await expect(page.getByTestId('layer-row-Reference data')).toBeVisible({ timeout: 30_000 });
    await dismissToasts(page);
    await shot(page, T, '05-layer-group');
    console.log('ROWS after group:', (await layerRows(page)).join(' | '));

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
    console.log('ROWS after move:', (await layerRows(page)).join(' | '));
    await shot(page, T, '05c-layer-in-group');

    // Grid
    await openAddLayerMenu(page);
    await page.getByText(/^Grid/).first().click();
    const grid = page.getByRole('dialog', { name: 'Create Grid Layer' });
    await expect(grid).toBeVisible();
    await page.waitForTimeout(800);
    await shot(page, T, '06-grid-dialog');
    console.log('GRID', (await grid.first().innerText()).replace(/\n+/g, ' | '));
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

    // Text layer
    await openAddLayerMenu(page);
    await page.getByText(/^Text$/).first().click();
    await expect(page.getByRole('dialog', { name: 'Text Layer' })).toBeVisible();
    await shot(page, T, '07c-text-layer-dialog');
    await page.locator('.p-dialog-close-button').first().click();

    // Row actions
    const row = page.getByTestId('layer-row-Natural Earth Countries');
    await row.hover();
    await shot(page, T, '08-layer-row', row);
  } finally {
    await deleteWorkspace(page, request, id);
  }
});
