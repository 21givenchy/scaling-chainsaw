"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { staggerContainer, fadeInUp } from "@/lib/motion"

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

interface ItemRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ItemReveal({ children, className, delay = 0 }: ItemRevealProps) {
  return (
    <motion.div className={className} variants={fadeInUp} custom={delay}>
      {children}
    </motion.div>
  )
}

// Fade in with scale effect
export function ScaleReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
