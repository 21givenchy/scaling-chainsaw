"use client"

import { useEffect, useRef } from "react"

export default function SoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()

    const playRetroSound = () => {
      if (!audioContextRef.current) return

      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.type = "square"
      oscillator.frequency.setValueAtTime(440, audioContextRef.current.currentTime)
      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1)

      oscillator.start()
      oscillator.stop(audioContextRef.current.currentTime + 0.1)
    }

    const buttons = document.querySelectorAll("button, a")
    buttons.forEach((button) => {
      button.addEventListener("click", playRetroSound)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", playRetroSound)
      })
      audioContextRef.current?.close()
    }
  }, [])

  return null
}

