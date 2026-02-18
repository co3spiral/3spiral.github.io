
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 'base' como './' torna os caminhos dos arquivos relativos, 
  // permitindo que o site funcione em qualquer subpasta ou domínio.
  base: './',
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
