'use client';

import { useEffect, useRef } from 'react';
import ProjectCards from "@/components/ProjectCards"
import AboutSection from "@/components/AboutSection"
import PodcastPlayer from "@/components/PodcastPlayer"
import SocialLinks from "@/components/SocialLinks"
import FloatingPixels from "@/components/FloatingPixels"
import SoundEffects from "@/components/SoundEffects"
import ImpactCounter from "@/components/ImpactCounter"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import TextPressure from "@/components/TextPressure"
import Threads from "@/components/Threads"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background color transition
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        backgroundColor: '#ffffff',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }

    // Hero animations
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
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Projects section animation
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current,
        {
          opacity: 0,
          y: 100,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Impact section animation
    if (impactRef.current) {
      gsap.fromTo(
        impactRef.current,
        {
          opacity: 0,
          y: 80,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: impactRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // About section animation
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        {
          opacity: 0,
          y: 80,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Skills section animation
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        {
          opacity: 0,
          y: 80,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={bgRef}
      className="min-h-screen bg-[#000000] text-green-400 relative"
    >
      {/* Threads background */}
      <Threads amplitude={50} distance={100} enableMouseInteraction={true} />
      
      <FloatingPixels />
      <SoundEffects />

      <main className="max-w-4xl mx-auto px-4 py-4 relative z-10">
        {/* Hero Section with TextPressure */}
        <section ref={heroRef} className="relative px-4 sm:px-6 lg:px-8">
          {/* Desktop version */}
          <div className="hidden md:flex justify-center items-center" style={{ minHeight: '400px', maxWidth: '1200px', marginTop: '340px', margin: '340px auto 0' }}>
            <TextPressure
              text="21GIVENCHY"
              minFontSize={320}
              textColor="#FFFFFF"
            />
          </div>

          {/* Mobile version */}
          <div className="md:hidden flex flex-col justify-center items-center gap-4 pt-32">
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

        <section ref={projectsRef} className="mt-16">
          <h2 className="text-2xl font-pixel mb-8 flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-green-400" />
            Impact Projects
          </h2>
          <ProjectCards />
        </section>

        <section ref={impactRef} className="mt-16">
          <ImpactCounter />
        </section>

        <section ref={aboutRef} className="mt-16">
          <AboutSection />
        </section>

        <section ref={skillsRef} id="skills">
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

        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <PodcastPlayer />
          <SocialLinks />
        </section>
      </main>
    </div>
  )
}

