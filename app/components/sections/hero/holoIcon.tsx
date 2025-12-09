"use client";

import { motion } from "framer-motion";

export const HolographicIcon = ({ Icon, color, hoverColor, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center cursor-pointer"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        whileHover={{
          y: -6,
          rotateX: 15,
          transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }
        }}
        initial={{ y: 0, rotateX: 0 }}
      >
        <motion.div
          className="absolute -bottom-2 left-[5%] w-[90%] h-[20%] bg-black/30 rounded-full blur-md"
          style={{ transform: 'rotateX(80deg) translateZ(-20px)' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
        />

        <motion.div
          className="absolute w-full h-full rounded-full border-2 opacity-70"
          style={{
            borderColor: color,
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className="absolute w-full h-full rounded-full opacity-0"
          style={{
            background: `radial-gradient(circle, transparent 20%, ${color} 20%, ${color} 30%, transparent 30%, transparent 40%, ${color} 40%, ${color} 50%, transparent 50%)`,
            backgroundSize: '15px 15px',
          }}
          initial={{ opacity: 0, backgroundPosition: '0 0' }}
          whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
          animate={{ backgroundPosition: ['0 0', '30px 30px'] }}
          transition={{
            backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' }
          }}
        />

        <motion.div
          className="relative z-10"
          style={{ color, filter: `drop-shadow(0 0 4px ${color})` }}
          whileHover={{ scale: 1.1, rotate: 8, color: hoverColor, transition: { duration: 0.3 } }}
        >
          <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          className="absolute w-full h-full rounded-full opacity-0"
          style={{ boxShadow: `0 0 12px ${color}` }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{
            opacity: [0.5, 0.2, 0],
            scale: [0.8, 1.05, 1.2],
            transition: { duration: 2, repeat: Infinity, ease: 'easeOut' }
          }}
        />
      </motion.div>
    </a>
  );
};
