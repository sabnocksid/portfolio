"use client";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

interface ImageCardWithLogoProps {
  mainImageSrc?: string;
  logoSrc?: string;
  cardSize?: number;
  logoSize?: number;
  logoLeftOffset?: number;
  bgColor?: string;
}

export default function ImageCardWithLogo({
  mainImageSrc = "/about.svg",
  logoSrc = "/sidveriticle.svg",
  cardSize = 600,
  logoSize = 150,
  logoLeftOffset = -50,
  bgColor = "bg-primary-light",
}: ImageCardWithLogoProps) {
  return (
    <div
      className="absolute"
      style={{
        width: cardSize,
        height: cardSize,
        top: "50%",
                         
        transform: "translateY(-50%)" 
      }}
    >
      <div
        className={bgColor}
        style={{
          width: cardSize,
          height: cardSize,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
      />

      {/* Image + overlay */}
      <div
        className="absolute"
        style={{
          width: cardSize,
          height: cardSize,
          zIndex: 10,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={mainImageSrc}
          alt="Main Image"
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

      {/* Vertical logo */}
      <img
        src={logoSrc}
        alt="Logo"
        className="absolute object-contain"
        style={{
          width: logoSize,
          zIndex: 20,
          top: "50%",
          left: logoLeftOffset,
          transform: "translateY(-50%)",
        }}
      />

      {/* Social icons */}
      <div
        className="absolute flex gap-4 justify-center items-center text-primary-medium"
        style={{
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
        }}
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
  );
}
