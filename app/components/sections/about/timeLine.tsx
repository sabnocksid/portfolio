"use client";

import Halftone from "./halftone";

const WorkExperienceTimeline = () => {
  const experiences = [
    {
      role: "Junior Fullstack Developer",
      company: "Techyatra Labs",
      duration: "Jan 2025 - Oct 2025",
      description:
        "Worked on frontend development, API integration, and UI/UX improvements using React, Next.js, and Tailwind CSS.",
    },
    {
      role: "Freelance UI/UX Designer",
      company: "Nutrisnap.io",
      duration: "Jan 2025 - Apr 2025",
      description:
        "Designed interfaces, prototypes, and graphics, improving user experience and product visuals.",
    },
    {
      role: "Graphic Designer & Video Editor",
      company: "Seekshya Academy",
      duration: "Jan 2024 - Mar 2024",
      description:
        "Created graphics, edited videos, and enhanced visual storytelling for projects.",
    },
{
  role: "Associate Graphics Designer",
  company: "Nbels Academy",
  duration: "Jun 2023 - Dec 2023",
  description:
    "Designed marketing materials, social media graphics, and brand assets while supporting web design initiatives and streamlining design workflows for enhanced team productivity.",
}
  ];

  return (
    <section className="relative w-full py-10 md:py-24 overflow-hidden">

      <Halftone imageSrc="https://res.cloudinary.com/ds4dcblvw/image/upload/v1766891270/sidveriticle_m9ua3s.svg" />

      <div className="relative w-full px-[10px] md:max-w-6xl mx-auto md:px-6">
        
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary-deep opacity-40 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col gap-8 md:gap-16">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <span className="absolute left-1/2 -top-2 md:top-8 -translate-x-1/2 w-4 h-4 bg-primary-deep rounded-full border-2 border-primary-light shadow-md z-20" />

                <div
                  className={`
                    w-full sm:w-[80%] md:w-[45%]
                    backdrop-blur-xl bg-card 
                    rounded-2xl p-6 md:p-7
                    shadow-xl
                    hover:bg-white/15 transition-all duration-300
                  `}
                >
                  <h3 className="text-primary-deep text-lg md:text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-primary-medium text-sm mt-1">
                    {exp.company}
                  </p>
                  <p className="text-primary-medium text-xs md:text-sm mb-3">
                    {exp.duration}
                  </p>
                  <p className="text-primary text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceTimeline;
