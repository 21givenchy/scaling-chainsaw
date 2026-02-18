'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Check } from 'lucide-react'

interface EventCardProps {
  title: string
  date: string
  location: string
  description: string
  link: string
  cohost?: string
  type: 'past' | 'upcoming'
  index: number
}

export default function EventCard({
  title,
  date,
  location,
  description,
  link,
  cohost,
  type,
  index,
}: EventCardProps) {
  const [interested, setInterested] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-foreground/20 transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        {/* Type badge */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${
              type === 'upcoming'
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {type === 'upcoming' ? 'Upcoming' : 'Past'}
          </span>
          {cohost && (
            <span className="text-xs text-muted-foreground">
              w/ {cohost}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-medium text-foreground leading-snug">
          {title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          {type === 'upcoming' ? (
            <button
              onClick={() => setInterested(!interested)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                interested
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-foreground hover:bg-foreground hover:text-background'
              }`}
            >
              {interested ? (
                <>
                  <Check className="w-4 h-4" />
                  Registered
                </>
              ) : (
                'Interested'
              )}
            </button>
          ) : null}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            View event
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
