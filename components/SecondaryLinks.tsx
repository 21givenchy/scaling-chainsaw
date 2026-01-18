"use client"

import Link from "next/link"

const secondaryLinks = [
  { href: "https://twitter.com/21givenchy", label: "Twitter", external: true },
  { href: "https://instagram.com/21givenchy", label: "Instagram", external: true },
  { href: "https://linkedin.com/in/georgekarani", label: "LinkedIn", external: true },
  { href: "https://github.com/21givenchy", label: "Github", external: true },
  { href: "https://music.apple.com", label: "Apple Music", external: true },
  { href: "mailto:george.karani@cmxhub.com", label: "Email", external: false },
  { href: "/cv", label: "CV", external: false },
]

export default function SecondaryLinks() {
  return (
    <nav className="flex flex-wrap items-center text-sm" aria-label="Secondary navigation">
      {secondaryLinks.map((link, index) => (
        <span key={link.href} className="flex items-center">
          <Link
            href={link.href}
            className="hover:underline transition-all text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </Link>
          {index < secondaryLinks.length - 1 && (
            <span className="mx-1 text-gray-400 dark:text-gray-600" aria-hidden="true">
              •
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
