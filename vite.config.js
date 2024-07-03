import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,  // Abilita i sourcemaps per la build di produzione
    rollupOptions: {
      // Configura Rollup per gestire avvisi e dipendenze esterne
      external: [],  // Aggiungi pacchetti esterni se necessario
      onwarn(warning, warn) {
        // Ignora l'avviso di importazione esterna non utilizzata
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') {
          return;
        }
        // Ignora avvisi di rollup relativi ai sourcemaps
        if (warning.code === 'SOURCE_MAP_ERROR') {
          return;
        }
        warn(warning);
      },
    },
  },
});
