"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import NavLinks from "./NavLinks"
import SecondaryLinks from "./SecondaryLinks"

export default function Header() {
  return (
    <header className="px-6 py-4" aria-label="Site header">
      <div className="flex justify-between items-start">
        {/* Left side - Name and Nav */}
        <div className="flex flex-col">
          <Link 
            href="/" 
            className="text-lg font-medium hover:opacity-70 transition-opacity mb-6"
          >
            Karani, <span className="italic">George</span>
          </Link>
          <NavLinks />
        </div>
        
        {/* Right side - Social Links and Theme Toggle */}
        <div className="flex items-start gap-4">
          <SecondaryLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
