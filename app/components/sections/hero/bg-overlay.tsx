"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FlickerGridProps {
  rows?: number;
  cols?: number;
  squareSize?: number;
  gap?: number;
  flickerChance?: number; 
  color?: string;
  maxOpacity?: number;
}

export default function FlickerGrid({
  rows = 20,
  cols = 50,
  squareSize = 10,
  gap = 6,
  flickerChance = 0.3,
  color = "bg-black",
  maxOpacity = 0.3,
}: FlickerGridProps) {
  const squares = useMemo(() => {
    const arr = [];
    for (let i = 0; i < rows * cols; i++) {
      arr.push(Math.random() * maxOpacity);
    }
    return arr;
  }, [rows, cols, maxOpacity]);

  return (
    <div
      className={`absolute inset-0 grid pointer-events-none`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {squares.map((opacity, idx) => (
        <motion.div
          key={idx}
          className={`${color} rounded-sm`}
          style={{ width: squareSize, height: squareSize, opacity }}
          animate={{
            opacity: [
              opacity,
              Math.random() * maxOpacity,
              opacity,
              Math.random() * maxOpacity,
            ],
          }}
          transition={{
            duration: 1 + Math.random(), 
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}
