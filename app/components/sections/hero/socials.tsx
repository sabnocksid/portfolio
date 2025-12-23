"use client";

import { useState, useEffect } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { HolographicIcon } from "./holoIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialLinks() {
  const [show, setShow] = useState(true);

  // Detect scroll to hide after top section
  useEffect(() => {
    const topSectionHeight = 600; // adjust to your top section height

    const handleScroll = () => {
      if (window.scrollY > topSectionHeight) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "https://github.com/sabnocksid", icon: Github },
    { href: "mailto:sidharthpoudel04@gmail.com", icon: Mail },
    { href: "https://www.linkedin.com/in/sid-harth-poudel/", icon: Linkedin },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-0 md:fixed md:right-3 md:top-1/2 md:-translate-y-1/2 w-full sm:w-auto md:z-50"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {links.map((item, i) => (
            <HolographicIcon
              key={i}
              Icon={item.icon}
              color="#2f4fa3"
              hoverColor="#6495ed"
              href={item.href}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
