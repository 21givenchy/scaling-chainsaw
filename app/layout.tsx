import type React from "react"
import type { Metadata, Viewport } from "next"
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
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${gruppo.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <Providers>
          <Header />
          {children}
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
                description: "Product and impact partner, founder, writer, event host, and podcast creator working with mission-driven organisations across Africa.",
                worksFor: { "@type": "Organization", name: "frontforumfocus", url: "https://frontforumfocus.com" },
                sameAs: [
                  "https://21givenchy.substack.com/",
                  "https://www.youtube.com/@frontforumfocus",
                  "https://www.twitch.tv/21givenchy",
                  "https://github.com/georgekarani",
                  "https://linkedin.com/in/georgekarani",
                  "https://chat.whatsapp.com/IPyovK0eXwoKFdfUlpCMOA",
                  "https://discord.gg/PH4jtued4b",
                ],
                knowsAbout: ["Product strategy", "Impact innovation", "African startup ecosystems", "Fundraising", "Community building"],
              }),
            }}
          />
        </Providers>
      </body>
    </html>
  )
}

