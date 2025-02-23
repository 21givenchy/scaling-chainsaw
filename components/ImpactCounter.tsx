"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const metrics = [
  {
    label: "Organizations Helped",
    value: 50,
    icon: "🏢",
  },
  {
    label: "CO2 Tracked (tons)",
    value: 1000,
    icon: "🌱",
  },
  {
    label: "SDGs Impacted",
    value: 17,
    icon: "🎯",
  },
]

export default function ImpactCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.2 }}
          className="bg-gray-800 p-6 rounded-lg pixelated-border text-center"
        >
          <div className="text-4xl mb-4">{metric.icon}</div>
          <Counter value={metric.value} />
          <p className="font-pixel text-sm mt-2">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += 1
      setCount(Math.min(Math.floor(current * stepValue), value))
      if (current >= steps) clearInterval(timer)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return <div className="font-pixel text-2xl text-green-400">{count.toLocaleString()}</div>
}

