// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

// ✅ ساختار متا دیتا
export const metadata: Metadata = {
  title: "RevivoEarth | Sustainable & Innovative Soil Protection",
  description:
    "Discover how our Bio-Oil Mulch revolutionizes dust control with an environmentally friendly and sustainable solution. Learn how it benefits industries, agriculture, and construction sites.",
  keywords:
    "bio-oil mulch, dust , sustainable mulch, eco-friendly dust suppression, soil stabilization, organic mulch, environment-friendly mulch, best mulch for dust sustainability, resilience, creativity, ambition, eco-friendly soil protection, dust control, environmental solutions",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "RevivoEarth| The Best Eco-Friendly Solution for Dust Control",
    description:
      "Discover how our innovative bio-oil mulch enhances land resilience, supports sustainability, and embodies creativity in environmental solutions.",
    url: "https://mulch.yourdomain.com",
    siteName: "Bio-Oil Mulch",
    images: [
      {
        url: "https://mulch.yourdomain.com/images/og-mulch.jpg",
        width: 1200,
        height: 630,
        alt: "Eco-Friendly Bio-Oil Mulch"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@DejpaOfficial",
    title: "Revolutionizing Dust Control with Bio-Oil Mulch",
    description:
      "Discover the power of Bio-Oil Mulch in sustainable dust control. Learn more and visit Dejpa for more details."
    // image: "https://mulch.yourdomain.com/images/twitter-card.jpg",
  }
};

// ✅ تعیین زبان و جهت متن با fallback
export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const locale = params.locale || "en";
  const direction = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
