import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GAListener } from "./ga-listener";
import LoadingOverlay from "./components/LoadingOverlay";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revivoearth.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "RevivoEarth | Environmental Awareness & Ecosystem Restoration",
    template: "%s | RevivoEarth",
  },

  description:
    "RevivoEarth raises environmental awareness and shares science-based insights on ecosystem restoration, land rehabilitation, desertification control, and sustainable soil recovery.",

  applicationName: "RevivoEarth",
  authors: [{ name: "RevivoEarth Team" }],
  creator: "RevivoEarth",
  publisher: "RevivoEarth",

  keywords: [
    "RevivoEarth",
    "ecosystem restoration",
    "land restoration",
    "land rehabilitation",
    "desertification control",
    "soil recovery",
    "environmental awareness",
    "sustainability",
    "climate resilience",
    "nature-based solutions",
  ],

  category: "environment",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_IR", "ar"],
    url: "/",
    siteName: "RevivoEarth",
    title: "RevivoEarth | Environmental Awareness & Ecosystem Restoration",
    description:
      "RevivoEarth raises environmental awareness and shares science-based insights on ecosystem restoration, land rehabilitation, desertification control, and sustainable soil recovery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RevivoEarth - Environmental Awareness and Ecosystem Restoration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RevivoEarth | Environmental Awareness & Ecosystem Restoration",
    description:
      "Science-based environmental awareness, ecosystem restoration, land rehabilitation, and sustainable soil recovery.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RevivoEarth",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RevivoEarth",
  url: siteUrl,
  inLanguage: ["en", "fa", "ar"],
  description:
    "Environmental awareness, ecosystem restoration, land rehabilitation, desertification control, and sustainable soil recovery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-gray-900 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden`}
      >
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />

        <Script
          id="website-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: false,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full z-50 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
        >
          Skip to main content
        </a>

        <div
          className="fixed inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />

          <div
            className="absolute top-1/2 -right-4 w-72 h-72 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <LoadingOverlay />

        {children}

        {GA_ID && <GAListener />}
      </body>
    </html>
  );
}