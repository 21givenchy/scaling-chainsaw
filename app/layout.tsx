import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Gruppo } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { PageLoader } from "@/components/PageLoader"

const siteUrl = "https://georgekarani.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "George Karani | Product & Impact Partner in Africa",
    template: "%s | George Karani",
  },
  description:
    "George Karani is a product and impact partner, founder, writer, event host, and podcast creator helping mission-driven organisations build impactful products across Africa.",
  keywords: [
    "George Karani",
    "product and impact partner",
    "startup ecosystem Africa",
    "African founders",
    "frontforumfocus",
    "startup events Nairobi",
    "fundraising in Africa",
  ],
  authors: [{ name: "George Karani", url: siteUrl }],
  creator: "George Karani",
  publisher: "George Karani",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "George Karani",
    title: "George Karani | Product & Impact Partner in Africa",
    description:
      "Product, impact, events, writing, and conversations for mission-driven builders across Africa.",
    images: [{ url: "/george.jpeg", width: 1200, height: 1200, alt: "George Karani" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "George Karani | Product & Impact Partner in Africa",
    description: "Building impactful products and communities with mission-driven organisations across Africa.",
    images: ["/george.jpeg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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
                <a href="https://instagram.com/21givenchy" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-tertiary)] hover:text-[var(--fg-brand)] transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "George Karani",
              url: siteUrl,
              image: `${siteUrl}/george.jpeg`,
              jobTitle: "Product & Impact Partner",
              sameAs: ["https://21givenchy.substack.com/", "https://www.youtube.com/@frontforumfocus", "https://www.twitch.tv/21givenchy", "https://github.com/georgekarani", "https://linkedin.com/in/georgekarani", "https://instagram.com/21givenchy", "https://frontforumfocus.com"],
              knowsAbout: ["Product strategy", "Impact innovation", "African startup ecosystems", "Fundraising", "Community building"],
            }),
          }}
        />
      </body>
    </html>
  )
}
