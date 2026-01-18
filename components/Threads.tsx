'use client';

import { useEffect, useRef } from 'react';

interface ThreadsProps {
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

const CANVAS_HEIGHT = 600;
const CANVAS_TOP_OFFSET = -100;

export default function Threads({
  amplitude = 50,
  distance = 100,
  enableMouseInteraction = true,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = CANVAS_HEIGHT;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const lines: Array<{
      y: number;
      offset: number;
      speed: number;
      color: string;
    }> = [];

    // Create multiple thread lines
    for (let i = 0; i < 8; i++) {
      lines.push({
        y: (canvas.height / 8) * i,
        offset: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.002,
        color: `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x += 5) {
          const mouseDistance = enableMouseInteraction
            ? Math.sqrt(
                Math.pow(x - mousePos.current.x, 2) +
                  Math.pow(line.y - mousePos.current.y, 2)
              )
            : distance * 2;

          const mouseEffect =
            mouseDistance < distance
              ? ((distance - mouseDistance) / distance) * amplitude
              : 0;

          const y =
            line.y +
            Math.sin((x * 0.01 + time + line.offset) * line.speed * 100) *
              amplitude +
            mouseEffect;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [amplitude, distance, enableMouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: `${CANVAS_TOP_OFFSET}px`,
        left: 0,
        width: '100%',
        height: `${CANVAS_HEIGHT}px`,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
