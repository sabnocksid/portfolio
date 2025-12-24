"use client";

import { Player } from "lottie-react";
import animationData from "./arrow.json"; 

export default function LottieAnimation() {
  return (
    <div className="w-64 h-64">
      <Player 
        animationData={animationData} 
        loop 
        autoplay 
      />
    </div>
  );
}
