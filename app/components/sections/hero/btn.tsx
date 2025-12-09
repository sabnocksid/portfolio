"use client";

import { ArrowBigDown, ChevronDown, ChevronDownCircle } from "lucide-react";
import React from "react";

interface HoverButtonProps {
  href?: string;
  id?: string;
}

export default function HoverButton({ href, id }: HoverButtonProps) {
  const ButtonContent = (
    <div
      className="
        group relative cursor-pointer overflow-hidden md:rounded-full 
        border border-gray-200 bg-primary-deep 
        px-6 py-3  sm:py-4 md:px-10 md:py-4
        text-center font-bold text-gray-900 shadow-md
        transition-all duration-300 hover:shadow-lg 
        dark:border-gray-800 dark:text-white 
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-primary-light 
            transition-all duration-300 
            group-hover:scale-110 
          "
        ></div>

        <span
          className="
            inline-block text-sm sm:text-base md:text-md 
            transition-all duration-300 
            group-hover:translate-x-5 group-hover:opacity-0 font-bold
          "
        >
          View Projects
        </span>
      </div>

      <div
        className="
          absolute inset-0 z-10 flex items-center justify-center 
          translate-x-5 opacity-0
          bg-gray-900/90 text-primary-deep bg-card 
          transition-all duration-300 
          group-hover:translate-x-0 group-hover:opacity-100
        "
      >
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className=" font-bold leading-none text-sm sm:text-base md:text-lg">
            View Projects
          </span>


          <ChevronDownCircle/>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} id={id}>
        {ButtonContent}
      </a>
    );
  }

  return <div id={id}>{ButtonContent}</div>;
}
