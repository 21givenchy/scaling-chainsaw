"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/podcast", label: "podcast" },
  { href: "/about", label: "About" },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col" aria-label="Main navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`py-2 border-b border-gray-200 dark:border-gray-800 hover:opacity-70 transition-opacity text-sm ${
              isActive ? "font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
