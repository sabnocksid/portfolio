"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-page text-black dark:bg-page-dark dark:text-white 
                 transition-colors duration-300 font-marope"
    >
      <h1
        className="text-3xl font-extrabold mb-4 
                   text-primary-deep dark:text-primary-deep-dark"
      >
        Hi There, I'm <span className="text-white dark:text-black">Sidharth</span>!
      </h1>

      <p
        className="text-lg font-light text-neutral-gray 
                   dark:text-neutral-gray-dark mb-6"
      >
        Fullstack Developer based in Kathmandu, Nepal
      </p>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-6 py-3 rounded font-medium bg-primary-medium text-white 
                   dark:bg-primary-dark transition-colors duration-300"
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}
