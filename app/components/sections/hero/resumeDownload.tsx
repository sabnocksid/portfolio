"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const bgVariants = {
  initial: { right: "-100%" },
  hover: { right: "0%" },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.08, rotate: [0, -8, 8, 0] },
};

const iconBgVariants = {
  initial: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1 },
};

interface AnimatedThemedButtonProps {
  cvUrl: string;
}

export default function AnimatedThemedButton({ cvUrl }: AnimatedThemedButtonProps) {
  return (
    <a href={cvUrl} download>
      <motion.button
        className="
          relative px-4 py-2.5  md:px-10 md:py-3.5
          text-sm sm:text-base md:text-md font-bold 
          bg-card border border-primary-light
          text-primary-deep md:rounded-full 
          overflow-hidden z-10 shadow-md 
          flex items-center gap-3
        "
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.92 }}
      >
        <motion.span
          className="absolute top-0 w-full h-full rounded-full bg-gradient-to-r from-[#6d8f79]/20 to-[#4c745f]/20 -z-10"
          variants={bgVariants}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        />

        <span className="relative z-10">Download CV</span>

        <motion.span
          className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7"
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-primary-light/20 -z-10"
            variants={iconBgVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          <Download className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
        </motion.span>
      </motion.button>
    </a>
  );
}
