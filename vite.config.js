import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: "/shinle-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Remove the problematic rollupOptions entirely
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // Optional server config for development
  server: {
    historyApiFallback: true,
  }
});