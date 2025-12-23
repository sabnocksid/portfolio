"use client";

import Halftone from "./about/halftone";


export default function AboutSection() {
  return (
    <section className="relative w-full h-screen px-4 overflow-hidden flex items-center">
        <Halftone rows={22} cols={36} imageSrc="/sid.svg"/>
            </section>
  );
}
