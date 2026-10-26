import { defineConfig, devices } from '@playwright/test';

/**
 * Tutorial screenshots, captured from a running Gaia stack (`./mvnw` + `npm start` in gaia-api).
 * Does not start Spring or `ng serve`. See screenshots/README.md.
 */
export default defineConfig({
  testDir: './specs',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 180_000,
  expect: { timeout: 20_000 },
  reporter: [['list']],
  outputDir: './.output',
  globalTeardown: './global-teardown.ts',
  use: {
    baseURL: process.env.GAIA_URL ?? 'http://localhost:4200',
    testIdAttribute: 'data-cy',
    actionTimeout: 15_000,
    ...devices['Desktop Chrome'],
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    locale: 'en-US',
    colorScheme: 'light',
  },
});
