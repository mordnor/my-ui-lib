import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  base: '/my-ui-lib/',

  plugins: [
    react(),
    tsconfigPaths(),
  ],

  build: {
    outDir: 'dist',

    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUiLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'primereact',
        'primeicons',
        'clsx',
        'chart.js',
        'framer-motion',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: false,
      },
    },

    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@theme': path.resolve(__dirname, 'src/theme'), // ✅ bon chemin
    },
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
}as UserConfig)
