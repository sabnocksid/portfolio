"use client";

import Lottie from "lottie-react";
import animationData from "./arrow.json"; 

export default function Arrow() {
  return (
    <div className="w-64 h-64">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
      />
    </div>
  );
}
