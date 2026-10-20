import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Design assets live in public/assets, so keep Vite's bundles in their own folder.
  build: { assetsDir: 'static' },
});
