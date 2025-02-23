"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/palontologist",
    color: "hover:text-[#6e5494]",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/21givenchy",
    color: "hover:text-[#1DA1F2]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/georgekarani",
    color: "hover:text-[#0077b5]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:george.karani@cmxhub.com",
    color: "hover:text-[#EA4335]",
  },
]

export default function SocialLinks() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg pixelated-border">
      <h2 className="font-pixel text-xl mb-4">Connect</h2>

      <div className="grid grid-cols-2 gap-4">
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 p-3 bg-gray-900 rounded ${social.color} transition-colors`}
          >
            <social.icon className="w-5 h-5" />
            <span className="font-pixel text-sm">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

