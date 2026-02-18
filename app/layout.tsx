import type React from "react"
import { Poppins, Gruppo } from "next/font/google"
import "./globals.css"
import Providers from "@/components/Providers"
import Header from "@/components/Header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const gruppo = Gruppo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gruppo",
})

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
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${gruppo.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

