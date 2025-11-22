import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Rails mode = when NOT running inside Replit
const inRails = process.env.REPL_ID === undefined;

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer()
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner()
          ),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  css: {
    postcss: {
      plugins: [],
    },
  },

  // Source code directory
  root: path.resolve(import.meta.dirname, "client"),

  // 🔥 base is /landing/ ONLY when building for Rails
  base: inRails ? "/landing/" : "/",

  build: {
    // 🔥 output to Rails or Replit depending on environment
    outDir: inRails
      ? path.resolve(import.meta.dirname, "../public/landing")
      : path.resolve(import.meta.dirname, "dist/public"),

    assetsDir: "assets",
    emptyOutDir: true,
  },

  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
