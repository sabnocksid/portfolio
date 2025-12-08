"use client";

import { Dot } from "lucide-react";
import React from "react";
import AnimatedButton from "./viewProjectButton";
import ViewProjectsButton from "./viewProjectButton";

interface CTAButtonsProps {
  cvLink?: string;
  projectsLink?: string;
}

export default function CTAButtons({
  cvLink = "/Siddhartha_CV.pdf",
  projectsLink = "#projects",
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <a
        href={cvLink}
        download
        className="
          px-6 py-3 rounded-full
          bg-primary-light dark:bg-primary-medium
          text-white font-semibold
          hover:bg-primary-dark dark:hover:bg-primary-light
          transition-colors duration-200
          shadow-md
        "
      >
        Download CV
      </a>

<ViewProjectsButton projectsLink={projectsLink} />
    </div>
  );
}
