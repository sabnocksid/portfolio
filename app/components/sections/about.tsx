"use client";

import Halftone from "./about/halftone";

export default function AboutSection() {
  return (
    <section className="relative w-full h-screen px-4 overflow-hidden flex items-center justify-center">
      
      <Halftone rows={22} cols={36} imageSrc="/sid.svg"/>

      <img 
        src="/sid.png" 
        alt="About Image" 
        className="absolute w-32 h-32 object-contain" 
        style={{ zIndex: 10 }}
      />
    </section>
  );
}
