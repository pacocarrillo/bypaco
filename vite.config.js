import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto ayuda a que las rutas no se rompan
  build: {
    outDir: './', // <--- ¡ESTO ES LA CLAVE! Dice: "Pon los archivos en la raíz"
  }
})