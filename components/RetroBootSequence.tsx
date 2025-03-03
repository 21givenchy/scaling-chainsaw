"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import profile from "@/public/logo.png"

export default function RetroBootSequence() {
  const [booted, setBooted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setBooted(true), 500)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  if (booted) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-4 p-4">
        <Image src={profile} alt="F^3" className="w-16 h-16 mx-auto" />
        <div className="h-2 bg-[#666666] border border-[#999999]">
          <div className="h-full bg-[#999999]" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-[#999999] font-chicago text-center">Welcome to George Karani&apos;s Portfolio</p>
      </div>
    </div>
  )
}

