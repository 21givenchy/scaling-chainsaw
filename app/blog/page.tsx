'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BlogPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div className="min-h-screen bg-background text-foreground">
      <main ref={contentRef} className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Coming soon... Check back later for articles and insights.
        </p>
      </main>
    </div>
  );
}
