import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // In development, forward form submissions to the Express server in /server.
    proxy: { '/api': 'http://localhost:5001' }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'], bootstrap: ['react-bootstrap'] }
      }
    }
  }
});
