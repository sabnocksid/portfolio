"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

const text = "Hi There, I'm Siddhartha!";
const name = "Siddhartha";
const nameStartIndex = text.indexOf(name);
const nameEndIndex = nameStartIndex + name.length - 1;

export default function BubbleText() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <div className="inline-flex text-3xl md:text-5xl flex-wrap font-manrope">
      {text.split("").map((char, idx) => {
        const isName = idx >= nameStartIndex && idx <= nameEndIndex;

        const outlineColor = isName
          ? "#1b614a" // primary deep outline
          : theme === "dark"
          ? "white"
          : "black";

        // --- INITIAL FILL COLOR ---
        let fill = isName ? "#1b614a" : "transparent"; 
        let weight = isName ? "font-normal" : "font-thin";

        // --- HOVER EFFECT LOGIC ---
        if (hoveredIndex === idx) {
          fill = "#1b614a"; // deep
          weight = "font-extrabold";
        } else if (hoveredIndex === idx - 1 || hoveredIndex === idx + 1) {
          fill = "#325c4b"; // dark
          weight = "font-semibold";
        } else if (hoveredIndex === idx - 2 || hoveredIndex === idx + 2) {
          fill = "#6d8f79"; // light
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
