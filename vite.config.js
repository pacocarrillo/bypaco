import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './',
    emptyOutDir: false, // Importante para no borrar tu código fuente al compilar
  }
})