'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MaskedLineProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export default function MaskedLine({
  className = '',
  delay = 0,
  duration = 0.8,
}: MaskedLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.fromTo(
      line,
      {
        scaleX: 0,
        transformOrigin: 'left center',
      },
      {
        scaleX: 1,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === line) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration]);

  return <div ref={lineRef} className={className} />;
}
