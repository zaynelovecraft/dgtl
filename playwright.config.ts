import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    baseURL: "http://localhost:3000", // Set to your Next.js dev server
    trace: "on-first-retry", // Collect trace on failures
  },
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    timeout: 120000, // Wait for server to start
    reuseExistingServer: !process.env.CI, // Reuse server in dev mode
  },
});
