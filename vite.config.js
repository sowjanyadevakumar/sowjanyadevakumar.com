import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from repository name to root
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
