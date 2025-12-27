import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark">
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Luz Azul */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} // 12 segundos
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-liquid-blue rounded-full mix-blend-screen filter blur-[100px] opacity-40"
      />

      {/* Luz Púrpura */}
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} // 15 segundos
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-liquid-purple rounded-full mix-blend-screen filter blur-[120px] opacity-30"
      />

      {/* Luz Cian */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }} // 10 segundos
        className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-liquid-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-20"
      />
    </div>
  );
};

export default Background;