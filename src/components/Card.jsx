import { motion } from "framer-motion";

const Card = ({ children, className = "", noHover = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={noHover ? {} : { scale: 1.02 }}
    className={`relative overflow-hidden p-6 rounded-3xl bg-glass-200 border border-glass-300 backdrop-blur-md shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;