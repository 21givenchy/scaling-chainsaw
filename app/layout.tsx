import type React from "react"
import "./globals.css"
import RetroBootSequence from "@/components/RetroBootSequence"

export const metadata = {
  title: "George Karani -  SWE & founder",
  description: "Building tools for a better planet. Founder of frontforumfocus.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RetroBootSequence />
        {children}
      </body>
    </html>
  )
}

