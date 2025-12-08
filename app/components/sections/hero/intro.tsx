"use client";

import React from "react";
import BubbleName from "./bubbleName";

export default function HeroIntro() {
  return (
    <div className="text-center space-y-4">
  <BubbleName />

      <p className="text-2xl font-semibold text-center font-light text-neutral-gray dark:text-neutral-gray">
        Fullstack Developer Based in Kathmandu
      </p>
    </div>
  );
}
