"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"

const projects = [
  {
    title: "Synthesis Markets",
    subtitle: "Web3 RWA Financial Layer",
    description: "Prediction market infrastructure connecting African farmers and miners with global buyers. Insurance against price volatility using on-chain hedging.",
    tags: ["Web3", "DeFi", "Base", "Smart Contracts"],
    color: "from-orange-500 to-red-500",
    link: "https://afrifutures.vercel.app",
    stats: "$3.62M TVL",
    year: "2024",
  },
  {
    title: "Greta",
    subtitle: "Impact Measurement for Changemakers",
    description: "Track the value of your activities against your mission. AI-powered insights showing where your time goes and its real-world impact.",
    tags: ["Productivity", "AI", "Mission Tracking"],
    color: "from-blue-500 to-cyan-500",
    link: "https://greta.frontforumfocus.com",
    stats: "100+ Active Users",
    year: "2024",
  },
  {
    title: "GCSease",
    subtitle: "Student Wellbeing Platform",
    description: "Task-first UX for exam preparation. Helping students manage stress and stay focused during critical study periods.",
    tags: ["EdTech", "Wellbeing", "Mobile"],
    color: "from-green-500 to-emerald-500",
    link: "https://gcsease.vercel.app",
    stats: "Student Focus Mode",
    year: "2024",
  },
  {
    title: "Front Forum Focus",
    subtitle: "Impact Tools for Founders",
    description: "Community platform helping founders track alignment between daily work and mission. Sustainability, people, and planet metrics.",
    tags: ["Community", "Impact", "Founder Tools"],
    color: "from-purple-500 to-pink-500",
    link: "https://frontforumfocus.com",
    stats: "Community Platform",
    year: "2023",
  },
]

const experiments = [
  { name: "Sapience Dual Agent", desc: "Arbitrage & trading on Ethereal/Arbitrum", lang: "Rust" },
  { name: "OMI Voice Agent", desc: "Standalone voice AI for OMI DevKit", lang: "Python" },
  { name: "HaDes-V", desc: "RISC-V processor in SystemVerilog", lang: "Verilog" },
]

// Magnetic cursor component
function MagneticCursor({ children, className }: { children: React.ReactNode, className?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const rect = cursorRef.current.getBoundingClientRect()
        rawX.set(e.clientX - rect.left - 40)
        rawY.set(e.clientY - rect.top - 40)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [rawX, rawY])

  return (
    <div
      ref={cursorRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Magnetic field */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x,
          y,
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(254, 81, 2, 0.15) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </div>
  )
}

// Scramble text effect
function ScrambleText({ children, className }: { children: string, className?: string }) {
  const [displayed, setDisplayed] = useState(children)
  const [isHovering, setIsHovering] = useState(false)
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!isHovering) {
      setDisplayed(children)
      return
    }

    const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?`~abcdefghijklmnopqrstuvwxyz"
    let frame = 0
    const maxFrames = 15

    const animate = () => {
      if (frame < maxFrames) {
        setDisplayed(
          children
            .split("")
            .map((char, i) => {
              if (i < (frame / maxFrames) * children.length) return char
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
        )
        frame++
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    animate()
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isHovering, children])

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayed}
    </span>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container-main py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-label mb-4 block">Work</span>
          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured <span className="text-[var(--fg-brand)]">Projects</span>
          </h1>
          <p className="text-body text-xl text-[var(--fg-secondary)] leading-relaxed max-w-2xl">
            From Web3 prediction markets to productivity tools — building things that matter at the intersection of technology, impact, and sustainable markets.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container-main pb-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <MagneticCursor className="group cursor-none">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--fg-brand)] transition-all duration-300"
                >
                  {/* Gradient Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    {/* Abstract shapes */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
                    </div>
                    
                    {/* Project title overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ScrambleText
                        className="text-white text-3xl md:text-4xl font-bold opacity-90"
                      >
                        {project.title.toUpperCase()}
                      </ScrambleText>
                    </div>

                    {/* Stats badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-medium">
                      {project.stats}
                    </div>

                    {/* Year */}
                    <div className="absolute bottom-4 left-4 text-white/70 text-sm">
                      {project.year}
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-heading text-xl mb-1 group-hover:text-[var(--fg-brand)] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[var(--fg-brand)] mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-body text-[var(--fg-secondary)] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-[var(--bg-tertiary)] text-[var(--fg-tertiary)] border border-[var(--border-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="flex items-center gap-2 text-[var(--fg-brand)]"
                      >
                        <span className="text-sm font-medium">Visit</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </MagneticCursor>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experiments Section */}
      <section className="container-main pb-24">
        <ScrollReveal>
          <div className="border-t border-[var(--border-primary)] pt-16">
            <span className="section-label mb-4 block">Experiments</span>
            <h2 className="text-heading text-3xl mb-8">
              Lab & Side Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {experiments.map((exp, i) => (
                <motion.a
                  key={exp.name}
                  href={`https://github.com/palontologist/${exp.name.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--fg-brand)] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-lg group-hover:text-[var(--fg-brand)] transition-colors">
                      {exp.name}
                    </h3>
                    <svg className="w-4 h-4 text-[var(--fg-tertiary)] group-hover:text-[var(--fg-brand)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--fg-secondary)] mb-3">
                    {exp.desc}
                  </p>
                  <span className="inline-block px-2 py-1 text-xs rounded bg-[var(--bg-tertiary)] text-[var(--fg-tertiary)] border border-[var(--border-secondary)]">
                    {exp.lang}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/palontologist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--fg-secondary)] hover:text-[var(--fg-brand)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View all on GitHub</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
