"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

interface FlickerGridProps {
  color?: string;
  maxOpacity?: number;
  squareSize?: number;
  gap?: number;
}

export default function FlickerGrid({
  color = "bg-primary-medium",
  maxOpacity = 0.1,
  squareSize = 14,
  gap = 4,
}: FlickerGridProps) {
  const [grid, setGrid] = useState<{ rows: number; cols: number } | null>(null);

  useEffect(() => {
    const calculateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const cols = Math.ceil(width / (squareSize + gap));
      const rows = Math.ceil(height / (squareSize + gap));

      setGrid({ rows, cols });
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, [squareSize, gap]);

  // ✅ Hook is ALWAYS called
  const squares = useMemo(() => {
    if (!grid) return [];
    return Array.from(
      { length: grid.rows * grid.cols },
      () => Math.random() * maxOpacity
    );
  }, [grid, maxOpacity]);

  // ✅ Conditional render AFTER hooks
  if (!grid) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 grid pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(${grid.cols}, ${squareSize}px)`,
        gridTemplateRows: `repeat(${grid.rows}, ${squareSize}px)`,
        gap: `${gap}px`,
        width: "100vw",
        height: "100vh",
      }}
    >
      {squares.map((opacity, idx) => (
        <motion.div
          key={idx}
          className={`${color} rounded-sm`}
          style={{ opacity }}
          animate={{
            opacity: [opacity, Math.random() * maxOpacity, opacity],
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
