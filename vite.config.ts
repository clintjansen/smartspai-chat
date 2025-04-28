import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.tsx'),
      name: 'SmartspyChat',
      fileName: (format) => `smartspai.${format}.js`,
      formats: ['es', 'iife'],
    },
    rollupOptions: {
      // output: { assetFileNames: 'smartspai.[ext]' },
      external: [],
    },
    // sourcemap: true,
  },
  define: {
    'process.env': { NODE_ENV: 'production' },
  },
})
