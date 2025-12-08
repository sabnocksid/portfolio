"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

interface FlickerGridProps {
  rows?: number;
  cols?: number;
  squareSize?: number;
  gap?: number;
  color?: string;
  maxOpacity?: number;
}

export default function FlickerGrid({
  color = "bg-primary-medium",
  maxOpacity = 0.1,
}: FlickerGridProps) {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(50);
  const [squareSize, setSquareSize] = useState(10);
  const [gap, setGap] = useState(4);

  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width < 640) {
        setCols(25);
        setRows(15);
        setSquareSize(8);
        setGap(2);
      } else if (width < 1024) {
        setCols(50);
        setRows(25);
        setSquareSize(10);
        setGap(3);
      } else {
        setCols(100);
        setRows(50);
        setSquareSize(15);
        setGap(4);
      }
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const squares = useMemo(() => {
    const arr = [];
    for (let i = 0; i < rows * cols; i++) {
      arr.push(Math.random() * maxOpacity);
    }
    return arr;
  }, [rows, cols, maxOpacity]);

  return (
    <div
      className="absolute inset-0 grid pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(${squareSize}px, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(${squareSize}px, 1fr))`,
        gap: `${gap}px`,
        width: "100%",
        height: "100%",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      {squares.map((opacity, idx) => (
        <motion.div
          key={idx}
          className={`${color} rounded-sm`}
          style={{ width: "100%", height: "100%", opacity }}
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
