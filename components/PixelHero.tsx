"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import BlinkingCursor from "./BlinkingCursor"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export default function PixelHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw pixel art tree
    const drawTree = () => {
      ctx.fillStyle = "#4ade80"
      // Tree trunk
      ctx.fillRect(24, 32, 8, 16)
      // Tree leaves
      ctx.fillRect(16, 24, 24, 8)
      ctx.fillRect(20, 16, 16, 8)
      ctx.fillRect(24, 8, 8, 8)
    }

    drawTree()
  }, [])

  return (
    <section id="hero" className="relative px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-2xl space-y-8 pt-20 sm:pt-24 lg:pt-32"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative group mb-8"
          >
            <div className="absolute -inset-2 bg-green-400/50 rounded-full blur-md group-hover:bg-green-400/70 transition-all" />
            <Avatar className="size-28 border-4 border-green-400 pixelated hover:scale-105 transition-transform">
              <AvatarImage src="https://github.com/21givenchy.png" />
              <AvatarFallback>GK</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 space-y-4 text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-pixel tracking-tight text-green-400"
            >
              <span className="text-neutral-200">{}</span> Hi, I&apos;m George Karani 👋
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center items-center gap-2"
            >
              <p className="text-lg sm:text-xl font-pixel text-neutral-300 max-w-2xl leading-relaxed">
                Software Engineer & Founder who loves building tools for planetary impact
                <BlinkingCursor />
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        <div className="p-4 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors">
          <canvas ref={canvasRef} width="48" height="48" className="mb-2 mx-auto" />
          <p className="text-center font-pixel text-sm">Nature Lover</p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
        >
          <div className="w-12 h-12 mx-auto mb-2 relative">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-green-400"
                  style={{
                    opacity: Math.random() > 0.5 ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
          </div>
          <p className="text-center font-pixel text-sm">Tech Builder</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
        >
          <div className="w-12 h-12 mx-auto mb-2 grid grid-cols-3 grid-rows-3 gap-0.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-green-400 animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <p className="text-center font-pixel text-sm">Impact Driven</p>
        </motion.div>
      </div>
    </section>
  )
}

