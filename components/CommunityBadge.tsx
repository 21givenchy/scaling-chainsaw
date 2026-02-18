'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface CommunityBadgeProps {
  name: string
  link: string
  index: number
}

export default function CommunityBadge({ name, link, index }: CommunityBadgeProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-sm text-foreground hover:border-foreground/30 transition-colors duration-200"
    >
      {name}
      <ExternalLink className="w-3 h-3 text-muted-foreground" />
    </motion.a>
  )
}
