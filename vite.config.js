import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        philosophy: resolve(process.cwd(), 'philosophy.html'),
        projects: resolve(process.cwd(), 'projects.html'),
        research: resolve(process.cwd(), 'research.html'),
        contact: resolve(process.cwd(), 'contact.html'),
      },
    },
  },
});
