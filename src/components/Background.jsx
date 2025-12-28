/* MODIFICACIÓN: 28-12-2025
   AUTOR: ByPaco
   CAMBIOS: Movimiento orbital infinito y eliminación de desenfoque pesado para fluidez en iPhone.
*/
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      {/* Luz Azul - Rotación orbital */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full filter blur-[80px]"
      />

      {/* Luz Púrpura - Sentido contrario */}
      <motion.div
        animate={{ 
          rotate: [360, 0],
          x: [0, -150, 150, 0],
          y: [0, 100, -100, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20 rounded-full filter blur-[100px]"
      />
    </div>
  );
};

export default Background;