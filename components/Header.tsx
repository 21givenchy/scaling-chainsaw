"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4" aria-label="Site header">
      <Link 
        href="/" 
        className="text-lg font-medium hover:opacity-70 transition-opacity"
      >
        <span className="italic">Karani</span>, George
      </Link>
      <ThemeToggle />
    </header>
  )
}
