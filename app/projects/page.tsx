'use client';

import { useEffect, useRef } from 'react';
import ProjectCards from "@/components/ProjectCards"
import ImpactCounter from "@/components/ImpactCounter"
import AboutSection from "@/components/AboutSection"
import FloatingPixels from "@/components/FloatingPixels"
import SoundEffects from "@/components/SoundEffects"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import gsap from 'gsap';

export default function ProjectsPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-900 text-green-400 overflow-hidden">
      <FloatingPixels />
      <SoundEffects />

      <main ref={contentRef} className="h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-pixel mb-8 flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-green-400" />
              Impact Projects
            </h2>
            <ProjectCards />
          </section>

          <section className="mb-12">
            <ImpactCounter />
          </section>

          <section className="mb-12">
            <AboutSection />
          </section>

          <section id="skills" className="mb-12">
            <div className="flex flex-col gap-y-3">
              <BlurFade>
                <h2 className="text-xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-1 relative">
                {[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Node.js',
                  'Python',
                  'Go',
                  'Supabase',
                  'Docker',
                  'Kubernetes',
                  'React Native',
                  'C++'
                ].map((skill, id) => (
                  <BlurFade key={skill} delay={id * 0.1}>
                    <Badge>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
