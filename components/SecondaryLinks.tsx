"use client"

import Link from "next/link"

const secondaryLinks = [
  { href: "https://twitter.com/21givenchy", label: "Twitter", external: true },
  { href: "https://instagram.com/21givenchy", label: "Instagram", external: true },
  { href: "https://linkedin.com/in/georgekarani", label: "LinkedIn", external: true },
  { href: "https://github.com/21givenchy", label: "GitHub", external: true },
  { href: "mailto:george@example.com", label: "Email", external: false },
  { href: "/cv", label: "CV", external: false },
]

export default function SecondaryLinks() {
  return (
    <nav className="flex flex-wrap items-center gap-x-2 text-sm" aria-label="Secondary navigation">
      {secondaryLinks.map((link, index) => (
        <div key={link.href} className="flex items-center gap-x-2">
          {index > 0 && (
            <span className="text-gray-400 dark:text-gray-600" aria-hidden="true">
              •
            </span>
          )}
          <Link
            href={link.href}
            className="hover:underline transition-all"
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}
