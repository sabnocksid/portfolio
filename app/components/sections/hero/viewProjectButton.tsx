"use client";

import { motion } from "framer-motion";
import { ArrowDown, Dot } from "lucide-react";

interface ViewProjectsButtonProps {
  projectsLink: string;
}

export default function ViewProjectsButton({ projectsLink }: ViewProjectsButtonProps) {
  return (
    <a
      href={projectsLink}
      className="
        group relative inline-flex w-36 sm:w-40 md:w-44 
        cursor-pointer text-sm sm:text-md md:text-base
        overflow-hidden rounded-full border 
        bg-card dark:bg-card-dark p-2 sm:p-3 
        text-center font-semibold text-primary-medium 
        transition-transform duration-300 hover:scale-105 active:scale-95
      "
    >
      <motion.span
        className="flex items-center transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0"
      >
        <Dot size={16} className="mr-1" /> View Projects
      </motion.span>

      <motion.div
        className="
          absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-2 
          -translate-y-8 opacity-0 transition-all duration-500 ease-out 
          group-hover:translate-y-0 group-hover:opacity-100
        "
      >
        <span className="text-sm sm:text-md md:text-base">View Projects</span>
        <motion.div 
          className="
            bg-primary-medium h-5 w-5 rounded-full 
            flex items-center justify-center text-white
          "
          whileHover={{ scale: 1.2, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <motion.div
        className="
          absolute left-[20%] top-[40%] h-2 w-2 scale-100 
          rounded-lg bg-primary transition-all duration-500 ease-in-out 
          group-hover:left-0 group-hover:top-0 
          group-hover:h-full group-hover:w-full 
          group-hover:scale-[1.8] group-hover:rounded-full
        "
      />
    </a>
  );
}
