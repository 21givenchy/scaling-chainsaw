"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { staggerContainer, fadeInUp } from "@/lib/motion"

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "georgekarani44@gmail.com",
    href: "mailto:georgekarani44@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    label: "Twitter",
    value: "@21givenchy",
    href: "https://twitter.com/21givenchy",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 9h4v12H6z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "George Karani",
    href: "https://linkedin.com/in/georgekarani",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container-main py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="section-label mb-4 block">Get in Touch</span>
          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Let's build something <span className="text-[var(--fg-brand)]">together</span>
          </h1>
          <p className="text-body text-xl text-[var(--fg-secondary)] leading-relaxed">
            Whether it's a quick chat about your project, a collaboration opportunity, or just want to say hello — I'm all ears.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container-main pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-12">
              {/* Contact Methods */}
              <div>
                <h2 className="text-heading text-2xl mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, i) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--fg-brand)] transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 rounded-lg bg-[var(--bg-brand-solid)] text-white">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--fg-tertiary)]">{method.label}</p>
                        <p className="font-medium text-[var(--fg-primary)] group-hover:text-[var(--fg-brand)] transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Schedule Call */}
              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--bg-brand-solid)] to-[var(--color-brand-600)] text-white">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-1">Schedule a Call</h3>
                      <p className="text-white/80 text-sm">
                        Prefer real-time conversation? Let's set up a time to chat.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[var(--bg-brand-solid)] font-medium hover:bg-white/90 transition-colors group"
                  >
                    <span>Book a 30-min call</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>

              {/* Availability */}
              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl border border-[var(--border-primary)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-accent text-sm">Currently Available</span>
                  </div>
                  <p className="text-[var(--fg-secondary)] text-sm leading-relaxed">
                    I'm currently open to freelance projects, consulting engagements, and full-time opportunities. Response time is usually within 24 hours.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 md:p-8 border border-[var(--border-primary)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-heading text-2xl mb-2">Message Sent!</h3>
                  <p className="text-[var(--fg-secondary)]">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] focus:border-[var(--fg-brand)] focus:ring-2 focus:ring-[var(--fg-brand)]/20 transition-all outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] focus:border-[var(--fg-brand)] focus:ring-2 focus:ring-[var(--fg-brand)]/20 transition-all outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] focus:border-[var(--fg-brand)] focus:ring-2 focus:ring-[var(--fg-brand)]/20 transition-all outline-none"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-primary)] focus:border-[var(--fg-brand)] focus:ring-2 focus:ring-[var(--fg-brand)]/20 transition-all outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
