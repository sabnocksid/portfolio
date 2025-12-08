"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

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

  return (
    <div className="fixed bottom-6 left-0 w-full flex justify-center z-50 pointer-events-none">
      <motion.div
        className="
          pointer-events-auto flex items-end gap-3
          rounded-[24px] 
          border border-gray-200/60 dark:border-gray-700/40
          bg-white/80 dark:bg-gray-900/90
          backdrop-blur-2xl 
          shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.8),0_1px_2px_rgba(0,0,0,0.5)]
          px-3 py-2.5
        "
        style={{ height: panelHeight }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {items.map((item, index) => {
          const handleClick = (e: React.MouseEvent) => {
            if (item.href) {
              e.preventDefault();
              const element = document.querySelector(item.href);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
            item.onClick?.();
          };

          const Component = item.href ? motion.a : motion.button;
          const componentProps = item.href ? { href: item.href } : {};

          return (
            <Component
              key={index}
              onClick={handleClick}
              style={{ width: baseItemSize, height: baseItemSize }}
              {...componentProps}
              className={`
                relative flex flex-col items-center justify-center gap-0.5
                rounded-[16px] border transition-all duration-200
                ${
                  item.isActive
                    ? 'border-primary-medium/60 dark:border-primary-dark/60 bg-primary-light/15 dark:bg-primary-dark/40'
                    : 'border-gray-200/50 dark:border-gray-700/40 bg-gray-50/60 dark:bg-gray-800/60 hover:bg-gray-100/80 dark:hover:bg-gray-700/70'
                }
                backdrop-blur-xl shadow-sm hover:shadow-md
                cursor-pointer select-none group
                overflow-visible
              `}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Glow effect on hover */}
              <div className={`
                absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${theme === 'dark' ? 'bg-gradient-to-br from-primary-light/15 via-primary-medium/8 to-transparent' : 'bg-gradient-to-br from-primary-light/20 via-transparent to-transparent'}
              `} />

              {/* Active indicator - positioned below the icon */}
              {item.isActive && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary-deep dark:bg-primary-light"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Label tooltip */}
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileHover={{ opacity: 1, y: -10, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`
                  absolute -top-12 left-1/2 -translate-x-1/2
                  whitespace-nowrap rounded-xl 
                  px-3 py-1.5 text-xs font-medium
                  ${theme === 'dark' 
                    ? 'bg-gray-900/95 text-white border border-gray-700/50' 
                    : 'bg-white/95 text-gray-900 border border-gray-200/50'
                  }
                  backdrop-blur-xl shadow-lg pointer-events-none
                  after:content-[''] after:absolute after:top-full after:left-1/2 
                  after:-translate-x-1/2 after:border-[5px] after:border-transparent
                  ${theme === 'dark'
                    ? 'after:border-t-gray-900/95'
                    : 'after:border-t-white/95'
                  }
                `}
              >
                {item.label}
              </motion.span>

              <div className={`relative z-10 transition-colors ${
                item.isActive 
                  ? 'text-primary-deep dark:text-primary-light' 
                  : 'text-gray-700 dark:text-gray-300 group-hover:text-primary-dark dark:group-hover:text-primary-light'
              }`}>
                {item.icon}
              </div>
            </Component>
          );
        })}
      </motion.div>
    </div>
  );
}