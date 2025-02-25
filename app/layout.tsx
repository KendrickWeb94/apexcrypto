import type { Metadata } from "next";
import "./globals.css";

import "../node_modules/@fontsource/dm-sans/400.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react"

// If using Next.js 13+ App Router

export const metadata: Metadata = {
  title: "ApexCrypto - Fast and Secure Cryptocurrency Exchange", // More descriptive title
  description:
    "Trade Bitcoin, Ethereum, and other cryptocurrencies quickly and securely on ApexCrypto.  Low fees, advanced trading tools, and 24/7 support.", // Expanded description
  keywords: [
    "cryptocurrency",
    "bitcoin",
    "ethereum",
    "exchange",
    "trade",
    "crypto",
    "blockchain",
    "digital assets",
    "secure",
    "fast",
    "united states",
    "crypto exchange usa",
  ], // Add relevant keywords
  openGraph: {
    title: "ApexCrypto - Fast and Secure Cryptocurrency Exchange",
    description:
      "Trade Bitcoin, Ethereum, and other cryptocurrencies quickly and securely on ApexCrypto.  Low fees, advanced trading tools, and 24/7 support.",
    url: "https://www.yourwebsite.com", // Replace with your website URL
    type: "website",
    images: [
      {
        url: "https://www.yourwebsite.com/images/og-image.jpg", // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "ApexCrypto Logo", // Add alt text for accessibility
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Or "summary"
    site: "@ApexCrypto", // Your Twitter handle
  },
  robots: {
    index: true, // Allow search engines to index the page
    follow: true, // Allow search engines to follow links on the page
  },

  // ... other meta tags as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <Analytics />
        <body className="min-h-screen w-full bg-background  text-white">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
