
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PenTool } from "lucide-react";

export default function GraphicsButton() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div className="flex">
      <div className="relative inline-block p-4">
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-gray-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full w-[1px] bg-gray-400"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-[1px] bg-gray-400"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
        />
        <AnimatePresence>
          {hovered && (
            <>
              <motion.div
                className="absolute w-2 h-2 bg-gray-600 rounded-full top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: -4, y: -4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-gray-600 rounded-full top-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 4, y: -4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-gray-600 rounded-full bottom-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: -4, y: 4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-gray-600 rounded-full bottom-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 4, y: 4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>
        <motion.button
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileTap={{ scale: 0.97 }}
          className="relative flex items-center gap-2 px-6 py-3 text-primary-light font-semibold"
        >
          <span className="uppercase tracking-wide">Graphics</span>
          <PenTool className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

