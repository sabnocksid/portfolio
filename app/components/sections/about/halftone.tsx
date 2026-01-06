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
  influenceRadius = 90,
  imageSrc,
}: HalftoneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mousePos = useRef({ x: -1000, y: -1000 });
  const waveTime = useRef(0);

  const size = useRef({ width: 0, height: 0 });

  const imageCanvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = "anonymous";

    let rafId: number;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      size.current.width = rect.width;
      size.current.height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (imageCanvas.current) {
        imageCanvas.current.width = rect.width;
        imageCanvas.current.height = rect.height;
        const imgCtx = imageCanvas.current.getContext("2d");
        imgCtx?.drawImage(img, 0, 0, rect.width, rect.height);
      }
    };

    const render = () => {
      const { width, height } = size.current;
      ctx.clearRect(0, 0, width, height);

      waveTime.current += 1.5;
      const waveRadius = waveTime.current;

      const cols = Math.floor(width / gap);
      const rows = Math.floor(height / gap);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gap + gap / 2;
          const y = row * gap + gap / 2;

          const dx = x - mousePos.current.x;
          const dy = y - mousePos.current.y;
          const distance = Math.hypot(dx, dy);

          const diff = Math.abs(distance - waveRadius);
          const wave =
            diff < influenceRadius ? 1 - diff / influenceRadius : 0;

          const radius = dotSize * (0.5 + wave * 2);

          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.clip();

          if (imageCanvas.current) {
            ctx.drawImage(imageCanvas.current, 0, 0);
          }

          ctx.restore();
        }
      }

      if (waveRadius > Math.hypot(width, height)) {
        waveTime.current = 0;
      }

      rafId = requestAnimationFrame(render);
    };

    img.onload = () => {
      imageCanvas.current = document.createElement("canvas");
      imageCanvas.current.width = size.current.width;
      imageCanvas.current.height = size.current.height;

      resizeCanvas();

      const imgCtx = imageCanvas.current.getContext("2d");
      imgCtx?.drawImage(
        img,
        0,
        0,
        size.current.width,
        size.current.height
      );

      render();
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dotSize, gap, influenceRadius, imageSrc]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-25 z-0"
      onMouseMove={(e) => {
        const rect = canvasRef.current!.getBoundingClientRect();
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        waveTime.current = 0;
      }}
      onMouseLeave={() => {
        mousePos.current = { x: -1000, y: -1000 };
      }}
    />
  );
}
