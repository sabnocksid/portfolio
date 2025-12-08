"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
}

interface DockProps {
  items: DockItem[];
  panelHeight?: number;
  baseItemSize?: number;
}

export default function Dock({
  items,
  panelHeight = 70,
  baseItemSize = 50,
}: DockProps) {
  const { theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleItemClick = (item: DockItem, e: React.MouseEvent) => {
    if (item.href) {
      e.preventDefault();
      const element = document.querySelector(item.href);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    item.onClick?.();
    setMobileOpen(false);
  };

  return (
    <>
<div className="fixed top-4 left-4 sm:hidden z-50">
  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-primary-light dark:bg-primary-medium text-white"
  >
    <motion.div
      initial={false}
      animate={{ rotate: 0 }}
      className="flex items-center justify-center"
    >
      {mobileOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </motion.div>
  </button>
</div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 left-0 py-20 h-full w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg z-40 flex flex-col items-start py-6 gap-4 sm:hidden"
          >
            {items.map((item, idx) => (
              <motion.button
                key={idx}
                onClick={(e) => handleItemClick(item, e)}
                className={`
                  flex items-center gap-3 w-full px-4 py-3 
                  
                `}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-lg  text-primary-light dark:text-primary-medium ">{item.icon}</div>
                <span className="text-base font-medium">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden sm:flex fixed bottom-6 left-0 w-full justify-center z-50 pointer-events-none">
        <motion.div
          className={`
            pointer-events-auto flex items-end gap-3
            rounded-[24px]
            border border-gray-200/60 dark:border-gray-700/40
            bg-white/80 dark:bg-gray-900/90
            backdrop-blur-2xl px-3 py-2.5
            shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]
            dark:shadow-[0_8px_32px_rgba(0,0,0,0.8),0_1px_2px_rgba(0,0,0,0.5)]
          `}
          style={{ height: panelHeight }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {items.map((item, index) => (
            <motion.button
              key={index}
              onClick={(e) => handleItemClick(item, e)}
              style={{ width: baseItemSize, height: baseItemSize }}
              className={`
                relative flex flex-col items-center justify-center gap-0.5
                rounded-[16px] border transition-all duration-200
                ${item.isActive
                  ? "border-primary-medium/60 dark:border-primary-dark/60 bg-primary-light/15 dark:bg-primary-dark/40"
                  : "border-gray-200/50 dark:border-gray-700/40 bg-gray-50/60 dark:bg-gray-800/60 hover:bg-gray-100/80 dark:hover:bg-gray-700/70"
                }
                backdrop-blur-xl shadow-sm hover:shadow-md cursor-pointer select-none group overflow-visible
              `}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className={`relative z-10 transition-colors ${
                item.isActive
                  ? "text-primary-deep dark:text-primary-light"
                  : "text-gray-700 dark:text-gray-300 group-hover:text-primary-dark dark:group-hover:text-primary-light"
              }`}>
                {item.icon}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </>
  );
}
