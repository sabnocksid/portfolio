"use client";

import React from "react";

// Props interfaces
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

// Components
const AboutMe: React.FC<AboutMeProps> = ({ name, bio }) => (
  <div>
    <h2 className="text-primary text-xl md:text-5xl font-bold mb-4">
      <span className="text-primary-deep">About </span>Me
    </h2>
    <p className="text-primary text-md md:text-xl leading-relaxed">
      {bio.replace("{name}", name)}
    </p>
  </div>
);

const Education: React.FC<EducationProps> = ({ degree, university, years, description }) => (
  <div className="mt-8">
    <h3 className="text-primary-deep text-md md:text-2xl font-semibold mb-4">
      Education
    </h3>
    <div className="space-y-1">
      <p className="text-primary text-base md:text-lg font-medium">{degree}</p>
      <p className="text-primary-deep text-base">{university}</p>
      <p className="text-primary-medium text-sm md:text-sm">{years}</p>
      <p className="text-primary-medium text-base mt-2 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <div className="mt-8">
    <h3 className="text-primary-deep text-md md:text-2xl font-semibold mb-4">
      Familiar Technologies
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 text-xs md:text-sm rounded-full bg-primary-medium text-substitute font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Profile component
export default function Profile() {
  const profileData = {
    name: "Siddhartha Paudel (Sid)",
    bio: "Hello, my name is {name}. I started my journey in graphic design and UI/UX, shaping how users see and interact with products. Curiosity led me behind the screen to understand systems, logic, and performance and sparked a growing interest in AI and machine learning. Today, I build full-stack applications where thoughtful design meets efficient engineering, while actively exploring intelligent features.",
    education: {
      degree: "Bachelor’s in Computer Application",
      university: "Tribhuvan University, Nepal",
      years: "2021 – 2025",
      description: "Focused on software development, system design, and emerging technologies.",
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
    ],
  };

  return (
    <section className="px-4 sm:px-6 lg:px-16">
      <AboutMe name={profileData.name} bio={profileData.bio} />
      <Education {...profileData.education} />
      <Skills skills={profileData.skills} />
    </section>
  );
}
