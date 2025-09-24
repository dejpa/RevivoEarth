import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GAListener } from "./ga-listener";
import LoadingOverlay from "./components/LoadingOverlay";
import ClientEnhancements from "./components/ClientEnhancements";

// Optimize font loading with display swap and preload
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
  preload: true,
});

// Enhanced metadata for better SEO and social sharing
export const metadata: Metadata = {
  title: {
    default: "RevivoEarth | Environmental Awareness & Ecosystem Restoration",
    template: "%s | RevivoEarth"
  },
  description: "RevivoEarth is a global movement focused on raising awareness, promoting action, and restoring degraded lands through science-based environmental solutions.",
  keywords: ["environment", "sustainability", "ecosystem restoration", "climate action", "environmental awareness"],
  authors: [{ name: "RevivoEarth Team" }],
  creator: "RevivoEarth",
  publisher: "RevivoEarth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://revivoearth.com'),
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'fa': '/fa', 
      'ar': '/ar',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "RevivoEarth | Environmental Awareness & Ecosystem Restoration",
    description: "RevivoEarth is a global movement focused on raising awareness, promoting action, and restoring degraded lands through science-based environmental solutions.",
    siteName: "RevivoEarth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RevivoEarth - Environmental Awareness & Ecosystem Restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RevivoEarth | Environmental Awareness & Ecosystem Restoration",
    description: "RevivoEarth is a global movement focused on raising awareness, promoting action, and restoring degraded lands through science-based environmental solutions.",
    images: ["/og-image.jpg"],
    creator: "@revivoearth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { 
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

// Viewport configuration for better mobile experience
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/iransans/IRANSansWeb.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        
        {/* Google Analytics */}
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
                  page_path: window.location.pathname,
                  send_page_view: true,
                  anonymize_ip: true,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-gray-900 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full z-50 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
        >
          Skip to main content
        </a>

        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-4 w-72 h-72 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Client-side components */}
        <LoadingOverlay />
        <ClientEnhancements />
        
        {children}
        {GA_ID && <GAListener />}

      </body>
    </html>
  );
}
