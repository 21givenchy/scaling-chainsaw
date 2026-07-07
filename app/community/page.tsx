'use client';

import { useEffect, useRef } from 'react';
import SocialLinks from "@/components/SocialLinks"
import FloatingPixels from "@/components/FloatingPixels"
import SoundEffects from "@/components/SoundEffects"
import gsap from 'gsap';

export default function CommunityPage() {
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

  const featuredVideos = [
    { id: 'Uvp88nfPNdU', title: 'How Gamification Reinvents Education' },
    { id: '5Ft5Sc1UtXw', title: 'Building the Impact Economy' },
    { id: 'GVRhOS85R6s', title: 'Future of AI & Open Models' },
    { id: 'SIGN_VIDEO_ID', title: 'Speech-to-Sign Demo' }, // Placeholder as ID wasn't provided
    { id: 'GRETA_PIVOT_ID', title: 'Greta: The Value Pivot' }, // Placeholder as ID wasn't provided
  ];

  return (
    <div className="h-screen w-screen bg-[#000000] text-green-400 overflow-hidden flex items-center justify-center">
      <FloatingPixels />
      <SoundEffects />

      <main ref={contentRef} className="max-w-4xl w-full px-4 flex flex-col items-center gap-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <a 
              key={video.id} 
              href={`https://youtube.com/watch?v=${video.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-video border border-green-900/50 hover:border-green-400 transition-all duration-300 overflow-hidden rounded-sm bg-green-900/10"
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 p-3 flex items-end">
                <p className="text-xs font-mono leading-tight group-hover:text-white transition-colors">
                  {`> ${video.title}`}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
