"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import { HolographicIcon } from "./holoIcon";

export default function SocialLinks() {
  const links = [
    { href: "https://github.com/sabnocksid", icon: Github },
    { href: "mailto:sidharthpoudel04@gmail.com", icon: Mail },
    { href: "https://www.linkedin.com/in/sid-harth-poudel/", icon: Linkedin },
  ];

  return (
    <div className="flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-0 md:fixed md:right-3 md:top-1/2 md:-translate-y-1/2 w-full sm:w-auto md:z-50">
      {links.map((item, i) => (
        <HolographicIcon
          key={i}
          Icon={item.icon}
          color="#2f4fa3"
          hoverColor="#6495ed"
          href={item.href}
        />
      ))}
    </div>
  );
}
