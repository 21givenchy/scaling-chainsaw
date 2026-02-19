'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BlurFade } from "@/components/magicui/blur-fade"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "frontforumfocus",
    subtitle: "impact tools for founders and teams",
    description: [
      "Built and shipped a platform that helps founders track alignment between daily work and mission, with tools like Greta and impact dashboards.",
      "Focused on sustainability, people, and planet metrics, turning them into investor-ready narratives and reports."
    ],
    role: "founder, product, full-stack dev",
    link: "https://frontforumfocus.com",
    linkText: "frontforumfocus.com",
  },
  {
    title: "Greta",
    subtitle: "mission OS for founders",
    description: [
      "A web app that lets founders tag tasks to their core mission and OKRs, then surfaces simple, honest insights on where their time is going.",
      "Built experiments with agents (e.g. greta-productivity-agent) to observe work and give feedback in real time."
    ],
    role: "product design, TypeScript/Next.js, AI integration",
    link: "https://greta-v2.vercel.app",
    linkText: "greta-v2.vercel.app",
    repos: ["greta-productivity-agent", "greta-v1"],
  },
  {
    title: "Impact Dash",
    subtitle: "AI impact analytics",
    description: [
      "An AI-powered dashboard to generate impact reports and visualise how work maps to outcomes on people and planet.",
      "Built around flexible metrics so founders and investors can share a common story of progress."
    ],
    role: "architecture, data modelling, front-end",
    repo: "impact-dash",
  },
  {
    title: "greenchic.store",
    subtitle: "sustainable commerce experiment",
    description: [
      "Concept + build for a store that foregrounds sustainability and impact in everyday purchasing.",
      "Used as a sandbox to explore green consumer UX and impact messaging."
    ],
    role: "founder, product, front-end",
    link: "https://greenchic.store",
    linkText: "greenchic.store",
    comingSoon: true,
  },
  {
    title: "african-commodity-markets",
    subtitle: "prediction & RWA experiments",
    description: [
      "Experimenting with agriculture, prediction markets, and RWAs for African commodity markets.",
      "Exploring how better price signals could support farmers, MSMEs, and local resilience."
    ],
    role: "protocol design, TypeScript, research",
    repo: "african-commodity-markets",
  },
  {
    title: "finance",
    subtitle: "AI-powered financial consulting",
    description: [
      "Built an AI layer to streamline financial consulting workflows for small businesses.",
      "Focused on making complex insights accessible via simple interfaces."
    ],
    role: "product & dev",
    repo: "finance",
  },
];

const experiments = [
  { name: "sapience-dual-agent", desc: "forecasting & trading agent experiments" },
  { name: "ai-partner-generator", desc: "playful agent to simulate cofounders/partners" },
  { name: "v0-gcse-student-wellbeing-app", desc: "wellbeing tooling for students" },
];

export default function ProjectsPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clip-path reveal on the heading — text slides up from below, jasonbergh-style
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, y: 20 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }

      // Staggered scroll-triggered reveal for each project row
      projectRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, clipPath: 'inset(0% 0% 100% 0%)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              scroller: contentRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            delay: i < 2 ? i * 0.12 : 0,
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[calc(100vh-120px)] overflow-hidden">
      <main ref={contentRef} className="h-full overflow-y-auto px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-4xl">
          <h1
            ref={headingRef}
            className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-10"
            style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          >
            Projects
          </h1>

          {/* Main Projects */}
          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <BlurFade key={project.title} delay={index * 0.08}>
                <div
                  ref={(el) => { projectRefs.current[index] = el; }}
                  className="border-b border-gray-200 dark:border-gray-800 pb-6"
                  style={{ opacity: 0 }}
                >
                  <div className="flex flex-col gap-2">
                    <div>
                      {project.link ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <span className="font-medium text-black dark:text-white">{project.title}</span>
                          <span className="text-gray-600 dark:text-gray-400"> – {project.subtitle}</span>
                        </Link>
                      ) : (
                        <>
                          <span className="font-medium text-black dark:text-white">{project.title}</span>
                          <span className="text-gray-600 dark:text-gray-400"> – {project.subtitle}</span>
                        </>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mt-2">
                      {project.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      <span className="font-medium">Role:</span> {project.role}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-1">
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black dark:text-white underline hover:opacity-70 transition-opacity"
                        >
                          {project.linkText}
                          {project.comingSoon && <span className="text-gray-500 ml-1">(coming soon)</span>}
                        </Link>
                      )}
                      {project.repo && (
                        <Link
                          href={`https://github.com/21givenchy/${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          repo: {project.repo}
                        </Link>
                      )}
                      {project.repos && project.repos.map((repo) => (
                        <Link
                          key={repo}
                          href={`https://github.com/21givenchy/${repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          {repo}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Experiments Section */}
          <BlurFade delay={0.5}>
            <section className="mt-12">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Experiments
              </h2>
              <div className="space-y-2">
                {experiments.map((exp) => (
                  <div key={exp.name} className="text-sm">
                    <Link
                      href={`https://github.com/21givenchy/${exp.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
                    >
                      {exp.name}
                    </Link>
                    <span className="text-gray-600 dark:text-gray-400"> – {exp.desc}</span>
                  </div>
                ))}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  plus many more in my{' '}
                  <Link
                    href="https://github.com/21givenchy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline hover:opacity-70 transition-opacity"
                  >
                    GitHub lab
                  </Link>
                  .
                </p>
              </div>
            </section>
          </BlurFade>
        </div>
      </main>
    </div>
  );
}
