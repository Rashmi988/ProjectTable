import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Use jsdom to simulate the browser environment
    setupFiles: "./test/setup.js", // Load the setup file before running tests
    include: ["src/**/*.{test,spec}.jsx"], // Include test files
  },
});
