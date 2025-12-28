"use client";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

interface ImageCardWithLogoProps {
  mainImageSrc?: string;
  logoSrc?: string;
  bgColor?: string;
}

export default function ImageCardWithLogo({
  mainImageSrc = "https://res.cloudinary.com/ds4dcblvw/image/upload/v1766891491/about_cnyr6i.svg",
  logoSrc = "https://res.cloudinary.com/ds4dcblvw/image/upload/v1766891270/sidveriticle_m9ua3s.svg",
  bgColor = "bg-primary-light",
}: ImageCardWithLogoProps) {
  return (
    <div className="relative w-full flex justify-center">
      <div
        className="relative"
        style={{
          width: "clamp(250px, 50vw, 600px)",
          height: "clamp(250px, 50vw, 600px)",
        }}
      >
        <div
          className={`${bgColor} absolute top-0 left-0 w-full h-full`}
          style={{ zIndex: 5 }}
        />

        <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-10">
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

        <img
          src={logoSrc}
          alt="Logo"
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{
            width: "clamp(80px, 20vw, 150px)",
            left: "clamp(-30px, -8vw, -50px)",
            zIndex: 20,
          }}
        />

        <div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 text-primary-medium z-30"
        >
          <a
            href="https://www.linkedin.com/in/sid-harth-poudel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/sabnocksid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:sidharthpoudel04@gmail.com"
            className="hover:scale-110 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
