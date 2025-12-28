import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist', // Cocinamos en una carpeta limpia
    emptyOutDir: true,
  }
})