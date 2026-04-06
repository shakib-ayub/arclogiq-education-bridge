import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true, // better than "::" for compatibility
    port: 8080,

    allowedHosts: [
      "arclogiqshiksha.org",
      "www.arclogiqshiksha.org",
      ".arclogiqshiksha.org",
      "localhost",
      "127.0.0.1",
    ],

    hmr: {
      overlay: false,
    },

    watch: {
      usePolling: true,
      interval: 100,
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/.idea/**",
        "**/.vscode/**",
      ],
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  optimizeDeps: {
    exclude: ["lovable-tagger"],
  },
}));
