"use client"

import { Github, Mail, Linkedin } from "lucide-react"

export default function SocialLinks() {
  const links = [
    {
      href: "https://github.com/sabnocksid",
      icon: <Github size={22} />,
    },
    {
      href: "mailto:sidharthpoudel04@gmail.com",
      icon: <Mail size={22} />,
    },
    {
      href: "https://www.linkedin.com/in/sid-harth-poudel/",
      icon: <Linkedin size={22} />,
    },
  ]

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            w-12 h-12 rounded-full
            bg-primary-light dark:bg-primary-medium
            text-white dark:text-white
            transition-all duration-200
            shadow-sm
            hover:shadow-md hover:scale-105
            hover:bg-primary-dark dark:hover:bg-primary-light
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
