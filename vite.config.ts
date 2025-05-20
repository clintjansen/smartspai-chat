import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// import { libInjectCss } from 'vite-plugin-lib-inject-css'




// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.tsx'),
      name: 'SmartspyChat',
      fileName: (format) => `smartspai.${format}.js`,
      formats: ['iife'],
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
