import type React from "react"
import "./globals.css"
import Providers from "@/components/Providers"
import Header from "@/components/Header"

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

