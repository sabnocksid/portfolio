"use client";

import { useState, useEffect, RefObject } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VerticalSocialLinksProps {
  heroRef: RefObject<HTMLElement | null>;
}

export default function VerticalSocialLinks({ heroRef }: VerticalSocialLinksProps) {
  const [show, setShow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setShow(rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef, isMobile]);

  const links = [
    { href: "https://github.com/sabnocksid", icon: Github, label: "GitHub" },
    { href: "mailto:sidharthpoudel04@gmail.com", icon: Mail, label: "Email" },
    { href: "https://www.linkedin.com/in/sid-harth-poudel/", icon: Linkedin, label: "LinkedIn" },
  ];

  if (isMobile) {
    return (
      <div className="flex justify-center gap-4 mt-6">
        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-primary-deep text-primary-deep 
                         hover:bg-primary-light hover:text-white transition"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-primary-medium font-manrope"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              >
                <div className="flex flex-col items-center text-sm font-bold leading-4">
                  {link.label.split("").map((char, idx) => (
                    <span key={idx} className="rotate-90 hidden md:block">
                      {char}
                    </span>
                  ))}
                </div>

                <div
                  className="my-3 border border-primary-deep p-2 rounded-full flex items-center justify-center 
                             text-primary-deep rotate-90
                             transition-all duration-300 
                             hover:bg-primary-light hover:text-white hover:shadow-lg"
                >
                  <Icon size={20} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
