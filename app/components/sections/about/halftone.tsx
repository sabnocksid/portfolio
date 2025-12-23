"use client";

import { useRef, useEffect } from "react";

interface HalftoneProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  influenceRadius?: number;
  imageSrc: string;
}

export default function Halftone({
  rows = 10,
  cols = 20,
  dotSize = 6,
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

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gap + gap / 2;
          const y = row * gap + gap / 2;

          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const scale = distance < influenceRadius ? 1.6 - (distance / influenceRadius) : 0.6;

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
      canvas.width = cols * gap;
      canvas.height = rows * gap;
      render();
    };

    return () => cancelAnimationFrame(animationFrameId);
  }, [rows, cols, gap, dotSize, influenceRadius, imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      className="block"
      onMouseMove={(e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => {
        mousePos.current = { x: -1000, y: -1000 };
      }}
    />
  );
}
