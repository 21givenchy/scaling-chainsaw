"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ScrollReveal } from "@/components/ScrollReveal"

const projects = [
  {
    name: "Synthesis Markets",
    href: "https://afrifutures.vercel.app",
    description: "Web3 RWA financial layer for African producers. Agriculture, metals, energy.",
    tags: ["Web3", "DeFi", "Base"],
  },
  {
    name: "Greta",
    href: "https://greta.frontforumfocus.com",
    description: "Impact measurement for changemakers. Track value of your activities.",
    tags: ["Productivity", "AI", "Impact"],
  },
  {
    name: "GCSease",
    href: "https://gcsease.vercel.app",
    description: "Student wellbeing app. Task-first UX for exam preparation.",
    tags: ["EdTech", "Mobile", "Wellbeing"],
  },
]

const skills = [
  "Product Strategy",
  "Web3 / DeFi",
  "AI Agents",
  "Full-Stack Dev",
  "Community Building",
]

// Word reveal animation for hero
const heroWords = ["Building", "tools", "that", "matter"]
const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}
const wordReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-main py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-label mb-6 block"
          >
            Product & Impact Partner
          </motion.span>

          {/* Main heading with word reveal */}
          <h1 className="text-display text-4xl md:text-6xl lg:text-7xl text-[var(--fg-primary)] mb-8 leading-tight">
            <motion.span
              className="inline-block mr-3"
              variants={wordContainer}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-[var(--fg-brand)]"
            >
              matter
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-body text-xl md:text-2xl text-[var(--fg-secondary)] mb-12 max-w-2xl leading-relaxed"
          >
            Partnering with mission-driven organizations to build impactful products at the intersection of technology, impact, and sustainable markets.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projects" className="btn-primary group">
              <span>View Work</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary group">
              <span>Get in Touch</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="container-main py-16 border-t border-[var(--border-secondary)]">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4 block">About</span>
              <h2 className="text-heading text-3xl md:text-4xl mb-6">
                Founder, builder, and problem solver
              </h2>
              <p className="text-body text-[var(--fg-secondary)] mb-6 leading-relaxed">
                Currently exploring opportunities at the intersection of technology, impact, and sustainable markets across Africa. Building prediction market infrastructure and productivity tools for changemakers.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] border border-[var(--border-secondary)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Profile Image placeholder */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] overflow-hidden">
                  <img
                    src="/george.jpeg"
                    alt="George Karani"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--bg-brand-solid)] rounded-xl -z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Section */}
      <section className="container-main py-16 border-t border-[var(--border-secondary)]">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="section-label mb-4 block">Recent Work</span>
              <h2 className="text-heading text-3xl md:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-[var(--fg-brand)] hover:underline group"
            >
              View all
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.1}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--fg-brand)] transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-heading text-xl group-hover:text-[var(--fg-brand)] transition-colors">
                    {project.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-[var(--fg-tertiary)] group-hover:text-[var(--fg-brand)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-body text-[var(--fg-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[var(--fg-tertiary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Link
            href="/projects"
            className="md:hidden inline-flex items-center gap-2 text-[var(--fg-brand)] mt-8 group"
          >
            View all projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="container-main py-24 border-t border-[var(--border-secondary)]">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label mb-4 block">Let's Connect</span>
            <h2 className="text-display text-3xl md:text-5xl mb-6">
              Have a project in mind?
            </h2>
            <p className="text-body text-xl text-[var(--fg-secondary)] mb-8">
              I'm always open to discussing new opportunities, partnerships, and ideas.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group">
              <span>Start a Conversation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
