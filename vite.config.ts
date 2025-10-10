import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// Determine if we're building the lib or running dev mode
const isLibBuild = process.env.LIB_BUILD === 'true'

export default defineConfig({
  // Dev server serves from demo/, lib build uses root
  root: isLibBuild ? undefined : 'demo',
  base: isLibBuild ? '/my-ui-lib/' : '/',

  plugins: [
    react(),
    tsconfigPaths(),
  ],

  build: isLibBuild ? {
    // Library build config
    outDir: path.resolve(__dirname, 'dist'),

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
  } : {
    // Demo build config
    outDir: path.resolve(__dirname, 'demo/dist'),
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@dorian-ui/my-ui-lib': path.resolve(__dirname, 'src/index.ts'),
    },
  },

  define: {
    'process.env.NODE_ENV': isLibBuild ? JSON.stringify('production') : undefined,
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
