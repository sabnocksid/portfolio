"use client";

import { useRef, useEffect } from "react";

interface HalftoneProps {
  dotSize?: number;
  gap?: number;
  influenceRadius?: number;
  imageSrc: string;
}

export default function Halftone({
  dotSize = 8,
  gap = 14,
  influenceRadius = 100,
  imageSrc,
}: HalftoneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = "anonymous";

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / gap);
      const rows = Math.floor(canvas.height / gap);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gap + gap / 2;
          const y = row * gap + gap / 2;

          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const scale = distance < influenceRadius ? 1.6 - distance / influenceRadius : 0.6;

          const radius = dotSize * scale;

          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    img.onload = () => {
      resizeCanvas();
      render();
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dotSize, gap, influenceRadius, imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-25 object-cover z-0"
      onMouseMove={(e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }}
      onMouseLeave={() => {
        mousePos.current = { x: -1000, y: -1000 };
      }}
    />
  );
}
