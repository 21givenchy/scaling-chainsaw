"use client"

import Link from "next/link"

const topLinks = [
  { href: "https://twitter.com/21givenchy", label: "Twitter", external: true },
  { href: "https://instagram.com/21givenchy", label: "Instagram", external: true },
  { href: "https://linkedin.com/in/georgekarani", label: "LinkedIn", external: true },
  { href: "https://github.com/21givenchy", label: "Github", external: true },
  { href: "https://music.apple.com", label: "Apple Music", external: true },
]

const bottomLinks = [
  { href: "mailto:george.karani@cmxhub.com", label: "Email", external: false },
  { href: "/cv", label: "CV", external: false },
]

function LinkRow({ links }: { links: typeof topLinks }) {
  return (
    <div className="flex flex-wrap items-center">
      {links.map((link, index) => (
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
          {index < links.length - 1 && (
            <span className="mx-1.5 text-gray-400 dark:text-gray-600" aria-hidden="true">
              •
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

export default function SecondaryLinks() {
  return (
    <nav className="flex flex-col gap-1 text-sm" aria-label="Secondary navigation">
      <LinkRow links={topLinks} />
      <LinkRow links={bottomLinks} />
    </nav>
  )
}
