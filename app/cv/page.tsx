'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function CVPage() {
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
    <div className="h-[calc(100vh-120px)] overflow-auto">
      <main ref={contentRef} className="px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-black dark:text-white">George Karani</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Software Engineer & Systems Architect</p>
            </div>
            <Link
              href="/cv.pdf"
              target="_blank"
              className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:opacity-80 transition-opacity"
            >
              Download CV (PDF)
            </Link>
          </div>

          <div className="space-y-12">
            {/* Summary */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Summary</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Software engineer and systems architect with deep expertise across the entire stack: from low-level hardware (RISC-V, ESP8266) and firmware to high-level agentic AI. Expert in applying first principles to design and deploy scalable systems and high-performance software engineering solutions. Focused on building strong, high-utility applications that bridge the gap between digital intelligence and physical reality.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">Experience</h2>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-black dark:bg-white" />
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-black dark:text-white">Founder, Front Forum Focus</h3>
                    <span className="text-xs text-gray-500">Aug 2020 – Present</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Nairobi</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Leverage podcast hosting platforms and cross-channel distribution workflows to optimize content reach, generating 10,000+ cumulative views.</li>
                    <li>Grow newsletter subscriber base to 233+ and secure 5+ corporate partnerships.</li>
                    <li>Implement data-driven data acquisition methodologies and content pipelines to convert ecosystem relationships into featured interviews.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-black dark:bg-white" />
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-black dark:text-white">Software Engineer, Afriorbit</h3>
                    <span className="text-xs text-gray-500">Jan 2023 – Present</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Nairobi</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Engineered the company website using Squarespace, optimizing for rapid load times.</li>
                    <li>Led the application development of an internal tool to visualize nano satellite sensor telemetry.</li>
                    <li>Implemented Zoho suite for centralized email and cloud storage, streamlining team collaboration.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-black dark:bg-white" />
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-black dark:text-white">Chapter Director, Startup Grind Kabarak</h3>
                    <span className="text-xs text-gray-500">Jan 2023 – Present</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Remote</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Driving ecosystem growth by designing high-engagement programming, including competitive pitch battles and structured startup cohorts.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-black dark:bg-white" />
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-black dark:text-white">Ambassador, Omi</h3>
                    <span className="text-xs text-gray-500">Jan 2026</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Nairobi</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Leading community-driven growth through hands-on sprints and product demos to integrate Omi into the African builder ecosystem.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-black dark:bg-white" />
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-black dark:text-white">Chapter Director, CMX Connect Nairobi</h3>
                    <span className="text-xs text-gray-500">Dec 2024</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Nairobi</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Architecting high-signal engagement models, including founder-expert collision events and technical workshops.
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-black dark:text-white">Kabarak University</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Science in Information Technology</p>
                </div>
                <span className="text-xs text-gray-500">2020 – 2026</span>
              </div>
            </section>

            {/* Skills & Certs */}
            <section>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Skills & Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-black dark:text-white mb-2">Technical Skills</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React, TypeScript, Nodejs, Expo, React Native</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-black dark:text-white mb-2">Certifications</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Satellite Engineering</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
