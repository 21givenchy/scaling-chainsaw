'use client';

import { useEffect, useRef } from 'react';
import TextPressure from "@/components/TextPressure"
import Threads from "@/components/Threads"
import FloatingPixels from "@/components/FloatingPixels"
import SoundEffects from "@/components/SoundEffects"
import gsap from 'gsap';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero text animation with GSAP
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          y: 80,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-[#000000] text-green-400 relative overflow-hidden">
      {/* Threads background */}
      <Threads amplitude={50} distance={100} enableMouseInteraction={true} />
      
      <FloatingPixels />
      <SoundEffects />

      {/* Hero Section with TextPressure - Centered */}
      <div className="h-full w-full flex items-center justify-center relative z-10">
        <section ref={heroRef} className="relative px-4 sm:px-6 lg:px-8">
          {/* Desktop version */}
          <div className="hidden md:flex justify-center items-center">
            <TextPressure
              text="21GIVENCHY"
              minFontSize={320}
              textColor="#FFFFFF"
            />
          </div>

          {/* Mobile version */}
          <div className="md:hidden flex flex-col justify-center items-center gap-4">
            <div>
              <TextPressure
                text="21GIVEN"
                minFontSize={100}
                textColor="#FFFFFF"
              />
            </div>
            <div>
              <TextPressure
                text="CHY"
                minFontSize={100}
                textColor="#FFFFFF"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

