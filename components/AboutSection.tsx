"use client"

import { motion } from "framer-motion"
import { TreeDeciduous, Code2, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg pixelated-border"
    >
      <h2 className="font-pixel text-2xl mb-6">About Me</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="font-mono leading-relaxed">
            Hey there! I&apos;m George, an indie developer with a passion for creating technology that makes a positive
            impact on our planet. Through frontforumfocus, I&apos;m helping organizations track and improve their
            sustainability efforts.
          </p>
          <p className="font-mono leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring nature, recording podcast episodes, or brainstorming new ways
            to use tech for  good.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: TreeDeciduous,
              label: "Nature Enthusiast",
              color: "bg-emerald-500",
            },
            {
              icon: Code2,
              label: "Tech Builder",
              color: "bg-green-500",
            },
            {
              icon: Heart,
              label: "Impact Driven",
              color: "bg-lime-500",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded ${index === 2 ? "col-span-2" : ""}`}
            >
              <div className={`w-12 h-12 ${item.color} rounded p-2 mb-2`}>
                <item.icon className="w-full h-full text-black" />
              </div>
              <p className="font-pixel text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

