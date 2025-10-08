import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// ⚙️ Configuration Vite pour GitHub Pages + build lib
export default defineConfig({
  // 👇 base = chemin du repo GitHub (important pour les assets sur GitHub Pages)
  base: '/my-ui-lib/',

  plugins: [react(), tsconfigPaths()],

  build: {
    outDir: 'dist',

    // ⚙️ Build de la lib
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUiLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
      preserveModules: false
    },

    // ⚙️ Exclure les dépendances externes du bundle final
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

    // 🎨 Options supplémentaires
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
