import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      provider: "v8",
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        "**/integrations/**",
        "**/node_modules/**",
        "app/**",
        "*.config.{ts,js,mjs}",
        "vite.config.{ts,js,mjs}",
        "stories/**",
        "playwright-report/**",
      ],
    },
    exclude: ["./integrations/**", "./node_modules/**/*"],
  },
});
