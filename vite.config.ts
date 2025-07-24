import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Critical path optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React chunk (critical)
          react: ['react', 'react-dom'],
          // Router chunk (critical)
          router: ['react-router-dom'],
          // Animation chunk (deferred)
          animations: ['framer-motion'],
          // UI components (deferred)
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          // Icons (deferred)
          icons: ['lucide-react'],
        },
      },
    },
    // Minimize initial bundle
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Pre-bundle critical dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['framer-motion', 'lucide-react'],
  },
}));
