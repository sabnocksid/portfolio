"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    setChecked(theme === "dark");
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChecked(!checked);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <label className="relative inline-block w-14 h-7 sm:w-16 sm:h-8 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}
          className="absolute opacity-0 w-0 h-0"
        />

        {/* Toggle background */}
        <div
          className={`absolute inset-0 rounded-full transition-colors duration-200 ${
            checked ? "bg-gray-800" : "bg-gray-200"
          }`}
        ></div>

        {/* Slider */}
        <motion.div
          className="absolute top-[2px] left-[2px] w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md z-10"
          animate={{ x: checked ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            backgroundColor: checked ? "#485367" : "#ffeccf",
            boxShadow: checked
              ? "inset 0 0 0 0.5em white"
              : "inset 0 0 0 0.5em #ffbb52",
          }}
        />
      </label>
    </div>
  );
}
