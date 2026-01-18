'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  blur?: number;
  trigger?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 80,
  x = 0,
  blur = 10,
  trigger = 'top 95%',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y,
        x,
        filter: `blur(${blur}px)`,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: trigger,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, y, x, blur, trigger]);

  return <div ref={elementRef}>{children}</div>;
}
