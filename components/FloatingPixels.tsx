"use client"

import { useEffect, useRef } from "react"

interface Pixel {
  x: number
  y: number
  speed: number
  size: number
  opacity: number
}

export default function FloatingPixels() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create pixels
    const pixels: Pixel[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.5 + 0.1,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pixels.forEach((pixel) => {
        // Update position
        pixel.y -= pixel.speed
        if (pixel.y + pixel.size < 0) {
          pixel.y = canvas.height + pixel.size
          pixel.x = Math.random() * canvas.width
        }

        // Add some horizontal movement
        pixel.x += Math.sin(pixel.y * 0.01) * 0.5

        // Draw pixel
        ctx.fillStyle = `rgba(74, 222, 128, ${pixel.opacity})`
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

