import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import SiteFooter from "@/components/site-footer"
import ScrollReveal from "@/components/scroll-reveal"
import { ThemeProvider } from "@/components/theme-provider"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" })

export const metadata: Metadata = {
  title: "College of Computer Studies | T.I.P. Manila",
  description:
    "Computer Science, Information Technology, Entertainment & Multimedia Computing, and Data Science & Analytics programs at T.I.P. Manila.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS can reveal it again */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only z-[60] rounded-md bg-gold px-4 py-2 font-bold text-gold-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main">{children}</main>
          <SiteFooter />
          <ScrollReveal />
        </ThemeProvider>
      </body>
    </html>
  )
}
