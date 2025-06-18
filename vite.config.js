import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/accounting/',
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
  }
})
