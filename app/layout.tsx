import type React from "react"
import "./globals.css"
import Providers from "@/components/Providers"
import Header from "@/components/Header"

// Fallback font configuration when Google Fonts are unavailable
const fontStyles = `
  :root {
    --font-poppins: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    --font-gruppo: Georgia, 'Times New Roman', serif;
  }
`

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
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

