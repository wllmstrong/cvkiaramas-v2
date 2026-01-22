import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/'
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: true
    }
  }
});