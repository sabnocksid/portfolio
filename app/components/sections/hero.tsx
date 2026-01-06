"use client";

import { useRef } from "react";
import ProfileImage from "./hero/image";
import HeroIntro from "./hero/intro";
import CTAButtons from "./hero/cta";
import FlickerGrid from "./hero/bg-overlay";
import VerticalSocialLinks from "./hero/verticle";
import SocialLinks from "./hero/socials";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      <FlickerGrid
        squareSize={25}
        gap={4}
        color="bg-fg"
        maxOpacity={0.1}
      />

      <ProfileImage />
      

      <VerticalSocialLinks heroRef={heroRef} />

      <div className="mt-2 md:mt-6">
        <HeroIntro />
      </div>

      <div className="md:mt-8 flex flex-wrap justify-center gap-4">
        <CTAButtons />
      </div>
    </section>
  );
}
