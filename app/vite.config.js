import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "lib",
        replacement: resolve(__dirname, "../", "lib"),
      },
    ],
  },
  plugins: [react()],
});
