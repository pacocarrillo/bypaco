/* MODIFICACIÓN: 28-12-2025
   AUTOR: ByPaco
   CAMBIOS: Aumento de velocidad (x2), mayor amplitud de movimiento y optimización GPU para iPhone.
*/

import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark">
      {/* Efecto de grano/ruido - Mantenido para textura */}
      <div className="absolute inset-0 opacity-15 mix-blend-soft-light pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Luz Azul - Movimiento más agresivo */}
      <motion.div
        animate={{ 
          x: [0, 250, -100, 0], 
          y: [0, -150, 100, 0], 
          scale: [1, 1.4, 0.8, 1] 
        }}
        transition={{ 
          duration: 8, // Bajado de 12s a 8s para más velocidad
          repeat: Infinity, 
          ease: "linear" // Cambio a linear para un movimiento constante y fluido
        }}
        style={{ willChange: "transform" }} // Optimización para iPhone
        className="absolute top-[-15%] left-[-15%] w-[450px] h-[450px] bg-liquid-blue rounded-full mix-blend-screen filter blur-[90px] opacity-50"
      />

      {/* Luz Púrpura - Mayor amplitud */}
      <motion.div
        animate={{ 
          x: [0, -200, 150, 0], 
          y: [0, 200, -100, 0], 
          scale: [1, 1.3, 1.1, 1] 
        }}
        transition={{ 
          duration: 10, // Bajado de 15s a 10s
          repeat: Infinity, 
          ease: "linear",
          delay: 1 
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[10%] right-[-15%] w-[550px] h-[550px] bg-liquid-purple rounded-full mix-blend-screen filter blur-[110px] opacity-40"
      />

      {/* Luz Cian - Contrapunto rápido */}
      <motion.div
        animate={{ 
          x: [0, 150, -150, 0], 
          y: [0, -120, 150, 0] 
        }}
        transition={{ 
          duration: 6, // Bajado de 10s a 6s para notar el "baile"
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[-10%] left-[10%] w-[350px] h-[350px] bg-liquid-cyan rounded-full mix-blend-screen filter blur-[80px] opacity-30"
      />
    </div>
  );
};

export default Background;