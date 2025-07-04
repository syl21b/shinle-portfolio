import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Don't forget to import path

export default defineConfig({
  base: "/shinle-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // This line tells Vite that "@" maps to your "src" directory
    },
  },
});