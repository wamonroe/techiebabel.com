import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
