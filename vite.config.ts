import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: { jsx: "automatic" },
  resolve: {
    alias: [
      { find: "@/assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) },
      { find: "@", replacement: fileURLToPath(new URL(".", import.meta.url)) },
    ],
  },
});
