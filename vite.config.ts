import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindCSS from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindCSS()],

  // absolute imports usando o alias '@' para a pasta 'src'
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
