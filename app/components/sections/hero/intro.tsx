"use client";
import React from "react";
import { motion } from "framer-motion";
import BubbleName from "./bubbleName";

export default function HeroIntro() {
  const roles = [
    "Fullstack Developer",
    "Graphics Designer",
    "UI/UX Designer",
    "AI/ML Enthusiast"
  ];

  return (
    <div className="text-center space-y-6">
      <BubbleName />
      
      <div className="flex flex-wrap items-center justify-center gap-3 px-4">
        {roles.map((role, index) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 text-base font-bold text-primary-medium bg-[#6d8f79]/20 rounded-sm
                       transition-all duration-300 cursor-default
                       shadow-sm hover:shadow-md"
            >
              {role}
            </motion.span>
            
            <motion.div
              className="absolute inset-0 rounded-full 
                         blur-xl transition-all duration-500 -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}