import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUiLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
      preserveModules: false
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'primereact',
        'primeicons',
        'clsx',
        'chart.js',
        'framer-motion'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@theme': path.resolve(__dirname, 'theme')
    }
  },

  define: {
    'process.env.NODE_ENV': '"production"'
  }
})
