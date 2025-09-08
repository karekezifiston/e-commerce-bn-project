import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // only React plugin here
  ],
  css: {
    postcss: './postcss.config.js' // PostCSS handles Tailwind
  }
});
