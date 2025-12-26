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
      company: "Seekshya Academy",
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
        "Assisted in web development, database management, and optimizing design workflows.",
    },
  ];

  return (
    <section className="relative w-full mx-auto px-4 py-16">

      <Halftone imageSrc="/sidhorizontal.svg" />

      <div className="relative z-10">
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="relative border-l-2 border-primary-deep pl-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute -left-5 top-0 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>

              <h3 className="text-primary-deep text-xl md:text-2xl font-semibold mb-1">
                {exp.role}
              </h3>
              <p className="text-primary-medium text-sm md:text-base">{exp.company}</p>
              <p className="text-primary-medium text-sm md:text-base mb-2">{exp.duration}</p>
              <p className="text-primary text-base md:text-lg leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceTimeline;
