/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // ⚙️ Base utilisée pour GitHub Pages
  base: '/my-ui-lib/',

  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: {
      '@': path.resolve(dirname, './src')
    }
  },

  // ✅ Vitest configuré proprement (sans Storybook plugin)
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/*.test.{ts,tsx}']
  }
})
