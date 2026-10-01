import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', testMatch: '**/*.spec.ts', fullyParallel: false,
  workers: 1, retries: 0, timeout: 45000,
  use: { baseURL: 'http://127.0.0.1:3002', channel: 'chrome', headless: true, trace: 'retain-on-failure' },
  webServer: { command: 'node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3002', url: 'http://127.0.0.1:3002', reuseExistingServer: !process.env.CI, timeout: 120000 },
});
