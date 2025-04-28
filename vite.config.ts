import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), libInjectCss()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Smartspy Chat',
      fileName: (format) => `smartspai.${format}.js`,
      formats: ['es', 'umd', 'iife'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
      },
    },
    cssCodeSplit: true,
  },
})
