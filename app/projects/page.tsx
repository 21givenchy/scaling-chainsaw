'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/magicui/blur-fade"
import gsap from 'gsap';

const workItems = [
  {
    title: "frontforumfocus (greta)",
    description: "mission OS for founders and teams to align their day with their mission and see live impact.",
    href: "https://frontforumfocus.com",
  },
  {
    title: "community & podcasts",
    description: "conversations with builders on purpose, impact, and the reality of shipping from the continent.",
    href: "/podcast",
  },
  {
    title: "experiments",
    description: "small AI/product tests around focus, storytelling, and impact (agents, dashboards, niche apps).",
    href: "/projects",
  },
];

export default function ProjectsPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <main ref={contentRef} className="max-w-2xl">
        <div className="flex flex-col">
          {workItems.map((item, index) => (
            <BlurFade key={item.title} delay={index * 0.1}>
              <Link
                href={item.href}
                className="group py-4 border-b border-gray-200 dark:border-gray-800 block hover:opacity-70 transition-opacity"
                {...(item.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-black dark:text-white">
                    {item.title}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </span>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>

        <section className="mt-16">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={0.3}>
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
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
                <BlurFade key={skill} delay={0.4 + id * 0.05}>
                  <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
