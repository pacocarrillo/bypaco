/* MODIFICACIÓN: 28-12-2025
   AUTOR: ByPaco
   CAMBIOS: Aumento de visibilidad y tamaño de las luces líquidas.
*/
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      
      {/* LUZ AZUL - Más visible */}
      <motion.div
        animate={{ 
          x: [-50, 150, -50], 
          y: [-50, 50, -50],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 10, // Un poco más rápido para ver el movimiento
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          willChange: "transform",
          position: 'absolute',
          width: '60vw', // Más grande
          height: '60vw',
          backgroundColor: '#3b82f6',
          filter: 'blur(80px)', // Menos blur para que no se "pierda" tanto
          borderRadius: '50%',
          opacity: 0.4, // Subida del 15% al 40%
          top: '5%',
          left: '-10%'
        }}
      />

      {/* LUZ PÚRPURA - Más visible */}
      <motion.div
        animate={{ 
          x: [50, -150, 50], 
          y: [50, -50, 50],
          scale: [1.3, 1, 1.3]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          willChange: "transform",
          position: 'absolute',
          width: '70vw',
          height: '70vw',
          backgroundColor: '#8b5cf6',
          filter: 'blur(90px)',
          borderRadius: '50%',
          opacity: 0.3, // Subida del 10% al 30%
          bottom: '10%',
          right: '-10%'
        }}
      />
    </div>
  );
};

export default Background;