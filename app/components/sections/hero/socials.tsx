"use client";

import { Github, Mail, Linkedin } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      href: "https://github.com/sabnocksid",
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
    {
      href: "mailto:sidharthpoudel04@gmail.com",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
    {
      href: "https://www.linkedin.com/in/sid-harth-poudel/",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
    },
  ];

  return (
    <div
      className="
        flex flex-row sm:flex-col items-center justify-center 
        gap-3 sm:gap-4 md:gap-5
        mt-4 sm:mt-0
        md:fixed md:right-3 md:top-1/2 md:-translate-y-1/2
        w-full sm:w-auto
        z-50
      "
    >
      {links.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
            rounded-full
            bg-primary-light dark:bg-primary-medium
            text-white
            shadow-sm transition-all duration-200
            hover:scale-110 hover:shadow-md
            hover:bg-primary-dark dark:hover:bg-primary-light
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
