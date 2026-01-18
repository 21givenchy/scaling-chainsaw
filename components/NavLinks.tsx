"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col" aria-label="Main navigation">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative py-3 px-4 border-b ${
              index === 0 ? "border-t" : ""
            } border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors`}
          >
            <div className="flex items-center justify-between">
              <span className="relative">
                {item.label}
                {/* Underline effect */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-current transition-all duration-100 ease-in-out ${
                    isActive ? "w-4" : "w-0 group-hover:w-4"
                  }`}
                />
              </span>
              {/* Animated arrow */}
              <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                animate={
                  isActive
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: -90 }
                }
                whileHover={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
