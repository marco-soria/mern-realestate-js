import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// https://vitejs.dev/config/
const rootDir = dirname(fileURLToPath(new URL(import.meta.url)));

export default defineConfig({
  // Force Vite to operate relative to the client folder on CI/Render
  root: rootDir,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:27017",
        secure: false,
      },
    },
  },
  // Keep cache inside client so dependencies resolve from client/node_modules
  cacheDir: "node_modules/.vite-temp",
  plugins: [react()],
});
