"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronRight, BarChart, SmartphoneIcon as Mobile } from "lucide-react"

const projects = [
  {
    title: "frontforumfocus Dashboard",
    description: "Impact measurement tool for sustainability reporting",
    icon: BarChart,
    features: [
      "AI-powered analytics",
      "ESG metrics tracking",
      "Automated report generation",
      "Real-time data visualization",
    ],
    color: "bg-emerald-500",
  },
  {
    title: "Impact Tracker App",
    description: "Personal sustainability impact monitoring",
    icon: Mobile,
    features: ["SDG activity mapping", "Carbon footprint tracking", "Community challenges", "Impact visualization"],
    color: "bg-green-500",
  },
]

export default function ProjectCards() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group"
        >
          <div
            className="bg-gray-800 p-6 rounded-lg pixelated-border cursor-pointer"
            onClick={() => setActiveProject(activeProject === index ? null : index)}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded ${project.color}`}>
                <project.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-pixel text-lg mb-2">{project.title}</h3>
                <p className="font-mono text-sm text-gray-400">{project.description}</p>
              </div>
              <ChevronRight
                className={`w-6 h-6 ml-auto transition-transform ${
                  activeProject === index ? "rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </div>

            <motion.div
              initial={false}
              animate={{ height: activeProject === index ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-700">
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-mono text-sm">
                      <span className="w-2 h-2 bg-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

