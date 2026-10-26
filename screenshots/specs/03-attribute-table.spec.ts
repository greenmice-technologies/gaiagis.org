import { test, expect } from '@playwright/test';
import { createWorkspace, dismissToasts, importNaturalEarth, login, renameWorkspace, shot } from '../helpers';

const T = '03-attribute-table';

test('attribute table: open, column select, filter, row select, edit, geometric operations, export', async ({ page }) => {
  test.setTimeout(240_000);
  await login(page);
  await createWorkspace(page);
  await renameWorkspace(page, 'World atlas');
  await importNaturalEarth(page);
  await page.getByTestId('layer-row-Natural Earth Populated Places').getByRole('checkbox').uncheck();

  // Open the table from the layer menu
  const row = page.getByTestId('layer-row-Natural Earth Countries');
  await row.hover();
  await row.getByTestId('layerRowActions').click();
  await shot(page, T, '01-open-from-menu');
  await page.getByRole('menuitem', { name: 'Attribute table' }).click();
  await expect(page.locator('.tabulator-row').first()).toBeVisible({ timeout: 30_000 });
  await page.waitForTimeout(2500);
  await dismissToasts(page);
  await shot(page, T, '02-table');

  // The toolbar buttons keep their order: Save, Add Column, Add Row, Export
  const buttons = page.locator('.editor-panel-toolbar button');

  // Clicking a header selects the column
  await page.locator('.tabulator-col-title', { hasText: /^SOVEREIGNT$/ }).click();
  await page.waitForTimeout(800);
  await shot(page, T, '03-column-selected');

  // Filter
  const filter = page.getByPlaceholder('Filter');
  await filter.fill('Italy');
  await filter.press('Enter');
  await expect(page.locator('.tabulator-row')).toHaveCount(1);
  await shot(page, T, '04-filter');

  // Select the row: its geometry is highlighted on the map
  await page.locator('.tabulator-row').first().locator('input[type=checkbox]').check();
  await page.waitForTimeout(800);
  await shot(page, T, '05-selection');

  // Geometric operations (shown only when rows are selected)
  const geoOps = page.locator('.editor-panel-toolbar button').nth(5);
  await geoOps.click();
  await page.waitForTimeout(600);
  await shot(page, T, '06-geometric-operations');
  // Close the menu by toggling its button again (Esc would collapse the side panel).
  // Note: "Buffer..." was not reliably openable in automated runs, so its dialog is not documented.
  await geoOps.click();
  await page.waitForTimeout(400);

  // Edit a cell
  const cell = page.locator('.tabulator-row').first().locator('.tabulator-cell').nth(3);
  await cell.dblclick();
  await page.waitForTimeout(500);
  await shot(page, T, '08-edit-cell');
  await page.getByPlaceholder('Filter').click();

  // Export menu
  await buttons.nth(3).click();
  await page.waitForTimeout(500);
  await shot(page, T, '10-export-menu');
});
