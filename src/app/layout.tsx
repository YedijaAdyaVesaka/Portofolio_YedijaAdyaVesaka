import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { inter, plusJakartaSans } from "@/lib/fonts";
import { jsonLd, organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, plusJakartaSans.variable)}>
      <body className={cn("min-h-screen bg-background font-sans text-foreground")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Keyboard users can jump straight to content */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>

          <SmoothScroll />
          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

        {/* Structured data: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteSchema)}
        />
      </body>
    </html>
  );
}
