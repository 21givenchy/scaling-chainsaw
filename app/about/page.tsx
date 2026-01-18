'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="h-[calc(100vh-120px)] overflow-hidden">
      <main ref={contentRef} className="h-full px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Hi, I&apos;m George Karani – a software engineer and founder passionate about building tools for a better planet.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Currently working on Front Forum Focus, Greta, and other impact-driven projects that help founders align their work with their mission.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Based in London, available for work on sustainability, AI, and purpose-driven tech.
          </p>
        </div>
      </main>
    </div>
  );
}
