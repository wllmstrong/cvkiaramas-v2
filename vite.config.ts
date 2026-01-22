
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Menentukan secara eksplisit bahwa folder 'public' di root adalah direktori statis
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
