"use client";

import React from "react";


interface AboutMeProps {
  name: string;
  bio: string;
}

interface EducationProps {
  degree: string;
  university: string;
  years: string;
  description: string;
}

interface SkillsProps {
  skills: string[];
}


const skillIcons: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  Django: "django",
  Python: "python",
  "REST APIs": "postman",
  PostgreSQL: "postgres",
  MongoDB: "mongodb",
  "Tailwind CSS": "tailwind",
  Git: "git",
  Figma: "figma",
  Phostoshop: "photoshop",
  Illustrator: "illustrator",
};


const AboutMe: React.FC<AboutMeProps> = ({ name, bio }) => (
  <div className="mb-10 md:mb-14">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-primary">
      <span className="text-primary-deep">About</span> Me
    </h1>
    <p className="text-base md:text-lg leading-relaxed text-primary text-justify">
      {bio.replace("{name}", name)}
    </p>
  </div>
);


const Education: React.FC<EducationProps> = ({
  degree,
  university,
  years,
  description,
}) => (
  <div className="mb-10 md:mb-14">
    <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-primary">
      Education
    </h2>
    <div className="space-y-2">
      <h3 className="text-xl font-medium text-primary">{degree}</h3>
      <p className="text-primary">{university}</p>
      <p className="text-sm text-neutral-gray">{years}</p>
      <p className="mt-3 text-primary leading-relaxed text-justify">
        {description}
      </p>
    </div>
  </div>
);


const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <div className="mb-10 md:mb-14">
    <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-primary">
      Familiar Technologies
    </h2>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => {
        const icon = skillIcons[skill];

        return (
          <span
            key={skill}
            className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm rounded-full
                       bg-primary-light/20 dark:bg-primary-dark/20
                       text-primary
                       border border-primary-light dark:border-primary-dark
                       hover:scale-105 transition-all duration-200"
          >
            {icon && (
              <img
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={skill}
                className="w-3 h-3 md:w-5 md:h-5"
                loading="lazy"
              />
            )}
            {skill}
          </span>
        );
      })}
    </div>
  </div>
);



export default function Profile() {
  const profileData = {
    name: "Siddhartha Paudel (Sid)",
    bio: "Hello, my name is {name}. Based in Kathmandu, I design and build full-stack applications where thoughtful UI meets efficient engineering. My journey began in graphic design and UI/UX, later expanding into systems, performance, and a growing interest in AI and machine learning.",    education: {
      degree: "Bachelor’s in Computer Application",
      university: "Tribhuvan University, Nepal",
      years: "2021 – 2025",
      description:
        "Focused on software development, system design, and emerging technologies.",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Git",
      "Figma",
      "Phostoshop",
      "Illustrator",
    ],
  };

  return (
    <section>
      <AboutMe name={profileData.name} bio={profileData.bio} />
      <Education {...profileData.education} />
      <Skills skills={profileData.skills} />
    </section>
  );
}
