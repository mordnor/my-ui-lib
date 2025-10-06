/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config
// https://vitest.dev/config
export default defineConfig({
  // ⚙️ Base nécessaire pour GitHub Pages
  // Remplace "my-ui-lib" par le nom exact de ton repo GitHub
  base: '/my-ui-lib/',

  plugins: [react(), tsconfigPaths()],

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
