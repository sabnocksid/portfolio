"use client";

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
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6">
      <a
        href={cvLink}
        download
        className="
          px-5 py-2 sm:px-6 sm:py-3
          rounded-full
          bg-primary-light dark:bg-primary-medium
          text-sm sm:text-base font-semibold
          text-white
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
