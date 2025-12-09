"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import ResponsiveLogo from "../sections/hero/logo";

interface DockItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

interface NavbarProps {
  items: DockItem[];
  logo?: string;
}

export default function PillNavbar({ items }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      items.forEach((item) => {
        if (!item.href) return;
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 120) current = item.href;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (href?: string) => {
    if (!href) return;
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false); // close drawer on navigation
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="
          hidden md:block
          fixed top-4 left-1/2 -translate-x-1/2
          z-50 w-[92%] max-w-3xl
        "
      >
        <div
          className="
            flex items-center justify-between
            px-4 py-2 
            rounded-full border border-primary-deep bg-card backdrop-blur-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.07)]
          "
        >
          <div className="flex items-center gap-2 font-semibold text-lg text-primary-deep dark:text-primary-light">
            <ResponsiveLogo />
          </div>

          <div className="relative flex items-center gap-2 px-2">
            {items.map((item, i) => {
              const isActive = active === item.href;
              return (
<button
  key={i}
  onClick={() => handleClick(item.href)}
  className="relative px-3 py-1.5 text-sm font-medium rounded-full"
>
  {isActive && (
    <motion.span
      layoutId="active-pill"
      className="absolute inset-0 rounded-full bg-primary-light/40 backdrop-blur-xl"
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  )}

  {!isActive && (
    <motion.span
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 rounded-full bg-primary-light/20"
    />
  )}

  <motion.span
    className="relative z-10 flex items-center gap-1.5"
    whileHover={{ scale: 1.07 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <span
      className={`${
        isActive
          ? "text-primary-deep"
          : "text-primary-deep group-hover:text-primary-deep"
      }`}
    >
      {item.icon}
    </span>

    <span
      className={`font-bold ${
        isActive
          ? "text-primary-deep"
          : "text-neutral-gray group-hover:text-primary-deep"
      }`}
    >
      {item.label}
    </span>
  </motion.span>
</button>

              );
            })}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <div className="md:hidden fixed top-4 left-0 right-0 px-4 z-50 flex justify-between items-center">
        <ResponsiveLogo />


        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 rounded-full bg-card shadow-lg border text-primary-light border-primary-light"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: drawerOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="
          fixed bottom-0 left-0 right-0 
          bg-card rounded-t-3xl p-6 pb-10 z-[70]
          shadow-[0_-8px_32px_rgba(0,0,0,0.15)]
        "
      >
        <button
          className="absolute top-4 left-4 p-2 bg-primary-light rounded-full"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button
          className="absolute top-4 right-4 p-2 bg-primary-light rounded-full"
          onClick={() => setDrawerOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col gap-4 mt-6">
          {items.map((item, i) => {
            const isActive = active === item.href;
            return (
              <button
                key={i}
                onClick={() => handleClick(item.href)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                  ${isActive ? "bg-primary-light/30" : "bg-transparent"}
                `}
              >
                <span className="text-primary-deep">{item.icon}</span>
                <span className="text-neutral-gray font-bold text-lg">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
