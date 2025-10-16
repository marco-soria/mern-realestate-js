import react from "@vitejs/plugin-react-swc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const rootDir = dirname(fileURLToPath(new URL(import.meta.url)));

export default defineConfig({
  // Ensure Vite operates relative to the client folder on platforms like Render
  root: rootDir,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:27017",
        secure: false,
      },
    },
  },
  // Keep Vite's cache inside the client folder to avoid resolving packages from repo root
  cacheDir: "node_modules/.vite-temp",
  plugins: [react()],
});
