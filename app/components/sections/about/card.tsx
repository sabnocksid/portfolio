"use client";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Arrow from "./animation/arrow";
import AnimatedSVG from "./animation/path";

interface ImageCardWithLogoProps {
  mainImageSrc?: string; 
  logoSrc?: string;      
  bgColor?: string;      
  socials?: {            
    icon: React.ReactNode;
    href: string;
    label: string;
  }[];
}

export default function ImageCardWithLogo({
  mainImageSrc = "https://res.cloudinary.com/ds4dcblvw/image/upload/v1766891491/about_cnyr6i.svg",
  logoSrc = "https://res.cloudinary.com/ds4dcblvw/image/upload/v1766891270/sidveriticle_m9ua3s.svg",
  bgColor = "bg-primary-light",
  socials = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/sid-harth-poudel/", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/sabnocksid", label: "GitHub" },
    { icon: <FaEnvelope />, href: "mailto:sidharthpoudel04@gmail.com", label: "Email" },
  ],
}: ImageCardWithLogoProps) {
  return (
    <div className="relative w-full  flex justify-center ">
      <div
        className="relative"
        style={{
          width: "clamp(250px, 50vw, 650px)",
          height: "clamp(250px, 50vw, 650px)",
        }}
      >
        <div className={`${bgColor} absolute inset-0 z-5`} />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={mainImageSrc}
            alt="Main"
            className="w-full h-full object-contain opacity-80"
          />

          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.75)",
              mixBlendMode: "multiply",
            }}
          />
        </div>
        {/* <div className="absolute z">
         <AnimatedSVG />
        </div> */}

{logoSrc && (
  <img
    src={logoSrc}
    alt="Logo"
    className="absolute top-1/2 transform -translate-y-1/2
               -left-10 md:-left-16 lg:-left-18"
    style={{
      width: "clamp(80px, 20vw, 150px)",  
      zIndex: 20,
    }}
  />
)}
{/* <div className="absolute">

<Arrow />
</div> */}



<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-30 text-primary-medium">
  {socials.map(({ icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
      aria-label={label}
      style={{ fontSize: "clamp(18px, 2vw, 28px)" }} 
    >
      {icon}
    </a>
  ))}
</div>

      </div>
    </div>
  );
}
