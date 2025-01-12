import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Use '/' for custom domains or '/your-repo-name/' for GitHub Pages with repo hosting
  build: {
    outDir: 'dist', // The default output folder
    assetsDir: 'assets', // The folder inside dist where assets are placed
  },
});
