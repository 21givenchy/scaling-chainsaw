'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Rss } from 'lucide-react'
import ArticleCard from '@/components/ArticleCard'

const articles = [
  {
    title: 'Building for Impact in Emerging Markets',
    excerpt:
      'Exploring the intersection of technology and social impact across African markets. How mission-driven organizations can leverage product thinking to drive sustainable change at scale.',
    date: 'Jan 2025',
    readTime: '6 min',
    link: 'https://21givenchy.substack.com/',
    tags: ['Impact', 'Product'],
    featured: true,
  },
  {
    title: 'The Case for Community-Led Growth in Africa',
    excerpt:
      'Why the most successful startups on the continent are building communities first and products second. Lessons from Startup Grind Kabarak and CMX Nairobi.',
    date: 'Dec 2024',
    readTime: '5 min',
    link: 'https://21givenchy.substack.com/',
    tags: ['Community', 'Growth'],
  },
  {
    title: 'Lessons from Hosting 7+ Tech Events in Kenya',
    excerpt:
      'What I learned about bringing builders together, creating meaningful connections, and the operational side of running community events across three cities.',
    date: 'Nov 2024',
    readTime: '4 min',
    link: 'https://21givenchy.substack.com/',
    tags: ['Events', 'Community'],
  },
  {
    title: 'African Commodity Markets and the Digital Frontier',
    excerpt:
      'A deep dive into the digital transformation of commodity trading across the continent, and why the timing is right for technology-driven solutions in this space.',
    date: 'Oct 2024',
    readTime: '7 min',
    link: 'https://21givenchy.substack.com/',
    tags: ['Markets', 'Africa'],
  },
  {
    title: 'Product Thinking for Mission-Driven Orgs',
    excerpt:
      'How to apply product management frameworks to organizations focused on social impact. Balancing stakeholder needs with user outcomes when the bottom line is not just profit.',
    date: 'Sep 2024',
    readTime: '5 min',
    link: 'https://21givenchy.substack.com/',
    tags: ['Product', 'Strategy'],
  },
  {
    title: 'Early Stage Builders: Stories from the Ground',
    excerpt:
      'Highlights and reflections from the Stories from Early Stage Builders event, featuring founders from Waiter Call and alumni from the All Star Pitch Battle.',
    date: 'Aug 2024',
    readTime: '4 min',
    link: 'https://21givenchy.substack.com/',
    tags: ['Founders', 'Events'],
  },
]

export default function ReadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-light"
        >
          Newsletter & Writing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6 text-balance font-display"
        >
          Read.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-8"
        >
          Thinking out loud about product, impact, community building, and the
          future of technology in Africa. Published on
          frontforumfocus.
        </motion.p>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://21givenchy.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            <Rss className="w-4 h-4" />
            Subscribe on Substack
          </a>
          <a
            href="https://frontforumfocus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors duration-200"
          >
            frontforumfocus.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light"
        >
          Latest Articles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={article.title} {...article} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-secondary/30 p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4 font-display">
            Stay in the loop
          </h3>
          <p className="text-muted-foreground font-light max-w-md mx-auto mb-6 leading-relaxed">
            Get new articles on product, impact, and community building
            delivered to your inbox.
          </p>
          <a
            href="https://21givenchy.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            <Rss className="w-4 h-4" />
            Subscribe for free
          </a>
        </motion.div>
      </section>
    </div>
  )
}
