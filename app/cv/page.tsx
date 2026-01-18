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
    <div className="h-[calc(100vh-120px)] overflow-hidden">
      <main ref={contentRef} className="h-full px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Download my CV or view my work history below.
          </p>
          
          <Link
            href="/cv.pdf"
            target="_blank"
            className="inline-block text-black dark:text-white underline hover:opacity-70 transition-opacity mb-8"
          >
            Download CV (PDF)
          </Link>

          <div className="space-y-6 mt-8">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <h3 className="font-medium text-black dark:text-white">Front Forum Focus</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">Founder • 2023 – Present</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Building impact tools for founders and teams.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
