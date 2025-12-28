/* MODIFICACIÓN: 28-12-2025
   AUTOR: ByPaco
   CAMBIOS: Esferas más pequeñas, mayor desenfoque y velocidad duplicada para iPhone y Mac.
*/
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      
      {/* Luz Azul: Más pequeña y muy rápida */}
      <motion.div
        animate={{ 
          x: [0, 180, -120, 0], 
          y: [0, -200, 150, 0],
          scale: [1, 1.5, 0.7, 1] 
        }}
        transition={{ 
          duration: 5, // Muy rápida (antes 12s)
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60"
      />

      {/* Luz Púrpura: Movimiento errático */}
      <motion.div
        animate={{ 
          x: [0, -250, 200, 0], 
          y: [0, 180, -200, 0],
          scale: [1, 0.8, 1.3, 1] 
        }}
        transition={{ 
          duration: 7, // Antes 15s
          repeat: Infinity, 
          ease: "linear"
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-50"
      />

      {/* Luz Cian: El destello rápido */}
      <motion.div
        animate={{ 
          x: [0, 200, -200, 0], 
          y: [100, -150, 100, 100] 
        }}
        transition={{ 
          duration: 4, // Súper rápida
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[10%] left-[20%] w-[200px] h-[200px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px] opacity-40"
      />
    </div>
  );
};

export default Background;