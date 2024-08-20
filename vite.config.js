import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/getintegrations": {
        target: "http://localhost:5000", // Your backend server URL
        changeOrigin: true,
        rewrite: (path) => path, // No path rewrite needed
      },
    },
  },
});
