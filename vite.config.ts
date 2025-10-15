import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

/**
 * 🎨 Vite Configuration — Boilerplate Ready
 * Simple setup for React + Tailwind + Design System
 */
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: true,
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@dorian-ui/my-ui-lib': path.resolve(__dirname, 'src/index.ts'),
    },
  },

  // Test config
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
} as UserConfig)
