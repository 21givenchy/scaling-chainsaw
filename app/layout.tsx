import type React from "react"
import "./globals.css"
import Providers from "@/components/Providers"
// import Header from "@/components/Header"
// import RetroBootSequence from "@/components/RetroBootSequence"

export const metadata = {
  title: "George Karani – Product & Impact Partner",
  description: "Product & impact partner for mission‑driven organisations. Founder of frontforumfocus.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
          {/* <RetroBootSequence /> */}
          {/* <Header /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}

