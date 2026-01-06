"use client";

import Profile from "./about/aboutTexts";
import ImageCardWithLogo from "./about/card";
import WorkExperienceTimeline from "./about/timeLine";

export default function AboutSection() {
  return (
    <section className="flex flex-col w-full">
      <div className="relative w-full  min-h-screen px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-4 md:gap-16">

        <div className="flex-1 w-full md:hidden py-10">
          <ImageCardWithLogo />
        </div>

        <div className="flex-1 w-full md:w-auto  md:space-y-10">
          <Profile />
        </div>

  <div className="flex-1 w-full hidden md:flex items-center justify-center">
    <ImageCardWithLogo />
  </div>
      </div>

      <div className="w-full px-4 md:px-[100px]  mt-10 md:mt-16">
        <WorkExperienceTimeline />
      </div>
                </section>
  );
}
