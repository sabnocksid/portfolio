"use client";

import Profile from "./about/aboutTexts";
import ImageCardWithLogo from "./about/card";
import Halftone from "./about/halftone";
import WorkExperienceTimeline from "./about/timeLine";

export default function AboutSection() {
  return (
    <section className="flex flex-col">
 <div className="relative w-full min-h-screen px-[100px] flex items-center gap-16">
   
      <div className="flex-1 space-y-10">

    <Profile />

      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <ImageCardWithLogo />
      </div>
  </div>  
  <div>
    <WorkExperienceTimeline />

  </div>

    </section>
  );
}
