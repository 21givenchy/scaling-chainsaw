import type React from "react"
import "./globals.css"
import Header from "@/components/Header"
import { PageLoader } from "@/components/PageLoader"

export const metadata = {
  title: "George Karani – Product & Impact Partner",
  description: "Product & impact partner for mission-driven organisations. Founder of frontforumfocus.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--fg-primary)] antialiased overflow-x-hidden">
        <PageLoader />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <footer className="py-12 border-t border-[var(--border-primary)]">
          <div className="container-main">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[var(--fg-tertiary)]">
                © {new Date().getFullYear()} George Karani. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="https://twitter.com/21givenchy" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-tertiary)] hover:text-[var(--fg-brand)] transition-colors">Twitter</a>
                <a href="https://github.com/palontologist" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-tertiary)] hover:text-[var(--fg-brand)] transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/georgekarani" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-tertiary)] hover:text-[var(--fg-brand)] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
