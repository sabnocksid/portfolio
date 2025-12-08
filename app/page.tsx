"use client";
import { useEffect, useState } from "react";
import Hero from "./components/sections/hero";
import Dock from "./components/nabbar/navbar";

import { Home, User, FolderKanban, Mail, ContactIcon, HomeIcon } from "lucide-react";
import ThemeToggle from "./components/nabbar/toggle";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

const dockItems = [
  {
    icon: <HomeIcon />,
    label: "Home",
    href: "#home",
    isActive: activeSection === "#home"
  },
  {
    icon: <User />,
    label: "About",
    href: "#about",
    isActive: activeSection === "#about"
  },
  {
    icon: <FolderKanban />,
    label: "Projects",
    href: "#projects",
    isActive: activeSection === "#projects"
  },
  {
    icon: <ContactIcon />,
    label: "Contact",
    href: "#contact",
    isActive: activeSection === "#contact",
    onClick: () => setActiveSection("#contact")
  }
];


  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-page dark:bg-[#1b1b1b] text-black dark:text-white
                    transition-colors duration-300 font-manrope">
<ThemeToggle />
<Dock items={dockItems} />
      <Hero />
    </div>
  );
}
