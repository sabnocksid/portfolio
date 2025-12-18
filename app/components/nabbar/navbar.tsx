"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ResponsiveLogo from "../sections/hero/logo";

interface DockItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

interface NavbarProps {
  items: DockItem[];
}

export default function PillNavbar({ items }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const [active, setActive] = useState<string>("/");
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* ===========================
     Scroll + Hash Active Spy
  ============================ */
  useEffect(() => {
    const updateActive = () => {
      let current = "/";

      items.forEach((item) => {
        if (!item.href || !item.href.startsWith("#")) return;
        const el = document.querySelector(item.href);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = item.href;
        }
      });

      if (pathname !== "/") current = "";
      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive);
    window.addEventListener("hashchange", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [items, pathname]);


  const handleNavClick = (href?: string) => {
    if (!href) return;

    if (href === "/") {
      window.location.href = "/";
      return;
    }

    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
    setActive(href);
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl z-50">
        <div className="flex items-center justify-between px-4 py-2 rounded-full border border-primary-deep bg-card opacity-90 backdrop-blur-xl shadow-lg">
          <ResponsiveLogo />

          <div className="flex items-center gap-2">
            {items.map((item, i) => {
              const isActive = active === item.href;

              return (
                <button
                  key={i}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-3 py-2 text-sm font-semibold"
                >
                  <span
                    className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200
                      ${
                        isActive
                          ? "text-primary-deep"
                          : "text-neutral-gray hover:text-primary-deep"
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="active-line"
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-full rounded-full bg-primary-medium"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {!isActive && (
                    <motion.span
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileHover={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-6 origin-center rounded-full bg-primary-medium/40"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full bg-primary-medium text-white flex items-center justify-center"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <div className="md:hidden fixed top-4 inset-x-4 z-50 flex justify-between items-center">
        <ResponsiveLogo />
        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 rounded-full bg-card border border-primary-medium/40 shadow-md text-primary-medium"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            onClick={() => setDrawerOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: drawerOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="fixed bottom-0 inset-x-0 z-[70] bg-card rounded-t-3xl px-6 pt-4 pb-10 shadow-2xl"
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-neutral-gray/40" />

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-primary-medium text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-full bg-primary-medium text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isActive = active === item.href;

            return (
              <motion.button
                key={i}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl font-semibold text-lg transition-colors
                  ${
                    isActive
                      ? "bg-primary-medium/25 text-primary-deep"
                      : "text-neutral-gray hover:text-primary-deep hover:bg-primary-medium/15"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-active-line"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-full bg-primary-medium"
                  />
                )}
                {item.icon}
                {item.label}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
