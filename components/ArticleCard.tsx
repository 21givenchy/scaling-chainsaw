'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  link: string
  tags: string[]
  index: number
  featured?: boolean
}

export default function ArticleCard({
  title,
  excerpt,
  date,
  readTime,
  link,
  tags,
  index,
  featured = false,
}: ArticleCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group block rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-foreground/20 transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        className={`font-medium text-foreground leading-snug mb-3 group-hover:text-muted-foreground transition-colors duration-200 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
        }`}
      >
        {title}
        <ArrowUpRight className="inline-block w-4 h-4 ml-1.5 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-all duration-200" />
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
        {excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {readTime}
        </span>
      </div>
    </motion.a>
  )
}
