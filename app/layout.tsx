import type React from "react"
import "./globals.css"
import Providers from "@/components/Providers"
import Header from "@/components/Header"
// import RetroBootSequence from "@/components/RetroBootSequence"

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
    <html lang="en" suppressHydrationWarning>
      <body className="grid grid-rows-[auto_1fr] min-h-screen">
        <Providers>
          {/* <RetroBootSequence /> */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

