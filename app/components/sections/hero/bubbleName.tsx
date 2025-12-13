"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const text = "Hello World, I'm Siddhartha!";
const name = "Siddhartha";
const nameStartIndex = text.indexOf(name);
const nameEndIndex = nameStartIndex + name.length - 1;

export default function BubbleText() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div className="inline-flex text-2xl md:text-5xl flex-wrap font-manrope">
      {text.split("").map((char, idx) => {
        const isName = idx >= nameStartIndex && idx <= nameEndIndex;

        const outlineColor = isName
          ? "#4a73c9"
          : theme === "dark"
          ? "white"
          : "black";

        let fill = isName
          ? "#4a73c9"
          : theme === "dark"
          ? "white"
          : "black";

        let weight = isName ? "font-semibold md:font-normal" : "font-thin md:font-thin";

        if (hoveredIndex === idx) {
          fill = "#2f4fa3";
          weight = "font-extrabold";
        } else if (hoveredIndex === idx - 1 || hoveredIndex === idx + 1) {
          fill = "#4a73c9";
          weight = "font-semibold";
        } else if (hoveredIndex === idx - 2 || hoveredIndex === idx + 2) {
          fill = "#6495ed";
          weight = "font-medium";
        }

        const displayChar = char === " " ? "\u00A0" : char;

        return (
          <motion.span
            key={idx}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`cursor-default relative transition-all duration-300 ${weight}`}
            style={{
              color: fill,
              WebkitTextStroke: `1px ${outlineColor}`,
            }}
            whileHover={{ scale: 1.15 }}
          >
            {displayChar}
          </motion.span>
        );
      })}
    </div>
  );
}
