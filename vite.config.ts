import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: pentru domeniu custom site-ul e servit din rădăcină:
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
