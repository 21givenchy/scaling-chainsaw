'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '@/components/Header';
import DesktopIcons from '@/components/DesktopIcons';

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in animations
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.2 }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3 }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4 }
      );
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* Header */}
      <div ref={navRef}>
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          {/* Desktop Icons */}


          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Left Column - Image and Bio */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start" ref={imageRef}>
              {/* Profile Image */}
              <div className="w-48 md:w-56 mb-6 md:mb-8">
                <div className="aspect-square bg-secondary rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/george.jpeg"
                    alt="George Karani"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Tagline */}
              <div className="text-center md:text-left mb-4">
                <a
                  href="https://frontforumfocus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-haas text-sm md:text-base font-medium text-foreground hover:text-muted-foreground transition-colors duration-200 underline underline-offset-2"
                >
                  founder frontforumfocus
                </a>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="md:col-span-3" ref={textRef}>
              {/* Main Intro */}
              <div className="mb-12">
                <p className="text-xl md:text-2xl leading-relaxed font-sans text-foreground font-light tracking-wide">
                  Partnering with mission-driven organizations to build impactful products.
                </p>
              </div>

              {/* About Section */}
              <div className="mb-12">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light mb-4">
                  I partner with mission-driven organizations to build products that drive real impact. With deep experience in product strategy, technology architecture, and user-centric design, I help founders and teams navigate complex challenges while maintaining focus on what matters most.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
                  Currently exploring opportunities at the intersection of technology, impact, and sustainable markets across Africa.
                </p>
              </div>

              {/* Projects Section */}
              <div>
                <h2 className="font-haas text-lg md:text-xl font-medium text-foreground mb-6 tracking-wide">
                  Recent Projects
                </h2>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="group">
                    <a
                      href="https://afrifutures.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                      <span className="font-sans">african-commodity-markets</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </a>
                    <p className="text-sm text-muted-foreground mt-1 font-light">
                      Commodity markets platform
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="group">
                    <a
                      href="https://greta.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                      <span className="font-sans">greta</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </a>
                    <p className="text-sm text-muted-foreground mt-1 font-light">
                      Impact measurement tool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

