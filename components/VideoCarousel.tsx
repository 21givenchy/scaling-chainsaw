'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoCarouselProps {
  videos: Video[];
  onSelect: (video: Video) => void;
}

export default function VideoCarousel({ videos, onSelect }: VideoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current || videos.length === 0) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: videos.length * 8,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          return x % totalWidth;
        }),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [videos]);

  useEffect(() => {
    if (tweenRef.current) {
      isPaused ? tweenRef.current.pause() : tweenRef.current.resume();
    }
  }, [isPaused]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-foreground/[0.03] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-foreground/[0.03] to-transparent z-10 pointer-events-none" />

      <div ref={trackRef} className="flex gap-4 md:gap-6 w-max">
        {/* Duplicate for seamless loop */}
        {[...videos, ...videos].map((video, i) => (
          <button
            key={`${video.id}-${i}`}
            onClick={() => onSelect(video)}
            className="group relative flex-shrink-0 w-64 md:w-80 aspect-video rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-foreground/20"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              crossOrigin="anonymous"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                <svg className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xs md:text-sm font-sans font-light leading-snug line-clamp-2 text-left">
                {video.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
