import { test, expect } from '@playwright/test';
import { createWorkspace, deleteWorkspace, dismissToasts, importNaturalEarth, login, renameWorkspace, shot } from '../helpers';

const T = '03-attribute-table';

test('attribute table: open, column select, filter, row select, geometry actions, edit, export', async ({ page, request }) => {
  test.setTimeout(240_000);
  await login(page);
  const id = await createWorkspace(page);
  try {
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

    // The table toolbar has no test ids: find its buttons by icon or by accessible name.
    const toolbarButton = (icon: string) => page.locator(`.editor-panel-toolbar button:has(svg.lucide-${icon})`).first();

    // Clicking a header selects the column and shows the delete-column button
    await page.locator('.tabulator-col-title', { hasText: /^SOVEREIGNT$/ }).click();
    await expect(toolbarButton('trash')).toBeVisible();
    await page.waitForTimeout(800);
    await shot(page, T, '03-column-selected');

    // Filter
    const filter = page.getByPlaceholder('Filter');
    await filter.fill('Italy');
    await filter.press('Enter');
    await expect(page.locator('.tabulator-row')).toHaveCount(1);
    await shot(page, T, '04-filter');

    // Select the row: the feature is highlighted on the map and its details open on the right
    await page.locator('.tabulator-row').first().locator('input[type=checkbox]').check();
    await expect(page.getByRole('button', { name: 'Delete selected rows' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Switch to vertex editing' })).toBeVisible();
    await page.waitForTimeout(800);
    await shot(page, T, '05-selection');

    // Geometry actions of the row, then the geometric operations inside it
    await page.getByRole('button', { name: 'Geometry actions' }).first().click();
    for (const name of ['Focus on map', 'Edit geometry', 'Replace geometry', 'Geometric operations']) {
      await expect(page.getByRole('menuitem', { name })).toBeVisible();
    }
    await page.waitForTimeout(500);
    await shot(page, T, '06-geometry-actions');
    await page.getByRole('menuitem', { name: 'Geometric operations' }).click();
    for (const name of ['Buffer...', 'Union...', 'Intersection...', 'Difference...', 'Symmetric difference...']) {
      await expect(page.getByRole('menuitem', { name, exact: true })).toBeVisible();
    }
    await page.waitForTimeout(600);
    await shot(page, T, '07-geometric-operations');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);

    // Edit a cell
    await page.locator('.tabulator-row').first().locator('.tabulator-cell').nth(3).dblclick();
    await expect(page.locator('.tabulator-cell.tabulator-editing')).toHaveCount(1);
    await page.waitForTimeout(500);
    await shot(page, T, '08-edit-cell');
    await page.keyboard.press('Escape');

    // Export menu
    await toolbarButton('download').click();
    await expect(page.getByRole('menuitem', { name: 'CSV' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'GeoJSON' })).toBeVisible();
    await page.waitForTimeout(500);
    await shot(page, T, '10-export-menu');
  } finally {
    await deleteWorkspace(page, request, id);
  }
});
