'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface ArticleReaderProps {
  title: string
  author: string
  date: string
  edition: string
  content: string
  tags: string[]
}

export default function ArticleReader({ title, author, date, edition, content, tags }: ArticleReaderProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs uppercase tracking-wider font-medium text-foreground/70">
            {edition}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6 font-display text-balance">
          {title}
        </h1>

        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <div>
            <p className="font-medium text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 rounded text-xs bg-secondary/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="prose prose-invert max-w-none mb-12"
      >
        <div
          className="text-lg text-foreground/90 leading-relaxed space-y-6 font-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.div>

      {/* Like & Share Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pt-8 border-t border-border flex items-center justify-between"
      >
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-200"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              liked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`}
          />
          <span className="text-sm text-muted-foreground">
            {likeCount > 0 && likeCount}
          </span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Share</span>
          <div className="flex gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              title="Share on Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              title="Share on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </article>
  )
}
