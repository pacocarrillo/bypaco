/* MODIFICACIÓN: 28-12-2025
   CAMBIO: Tamaño dinámico por dispositivo y aceleración GPU.
*/
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      {/* Luz Azul: Rápida y fluida */}
      <motion.div
        animate={{ 
          x: [0, 200, -150, 0], 
          y: [0, -150, 200, 0],
          scale: [1, 1.2, 0.9, 1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
        className="absolute top-[-10%] left-[-10%] 
                   w-[300px] h-[300px] md:w-[600px] md:h-[600px] 
                   bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40"
      />

      {/* Luz Púrpura: Movimiento amplio */}
      <motion.div
        animate={{ 
          x: [0, -250, 150, 0], 
          y: [0, 200, -150, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
        style={{ willChange: "transform" }}
        className="absolute top-[20%] right-[-10%] 
                   w-[350px] h-[350px] md:w-[700px] md:h-[700px] 
                   bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] md:blur-[150px] opacity-30"
      />
    </div>
  );
};

export default Background;