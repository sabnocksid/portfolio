"use client";

import HoverButton from "./btn";
import AnimatedThemedButton from "./resumeDownload";


interface CTAButtonsProps {
  cvLink?: string;
  projectsLink?: string;
}

export default function CTAButtons({

}: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6">
      
<AnimatedThemedButton cvUrl="/resume.pdf" />

<HoverButton href="#projects" />
    </div>
  );
}
