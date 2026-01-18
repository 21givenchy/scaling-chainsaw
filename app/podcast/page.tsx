'use client';

import { useEffect, useRef } from 'react';
import PodcastPlayer from "@/components/PodcastPlayer"
import FloatingPixels from "@/components/FloatingPixels"
import SoundEffects from "@/components/SoundEffects"
import gsap from 'gsap';

export default function PodcastPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-[#000000] text-green-400 overflow-hidden flex items-center justify-center">
      <FloatingPixels />
      <SoundEffects />

      <main ref={contentRef} className="max-w-2xl w-full px-4">
        <PodcastPlayer />
      </main>
    </div>
  );
}
