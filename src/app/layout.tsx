import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GAListener } from "./ga-listener";

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
        {/* Modern loading overlay */}
        <div id="loading-overlay" className="fixed inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-200 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">RevivoEarth</h2>
            <p className="text-emerald-100 text-sm animate-pulse">Loading your sustainable future...</p>
            <div className="mt-4 w-32 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-white/60 rounded-full animate-pulse" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>

        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full z-50 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
        >
          Skip to main content
        </a>

        {/* Modern cursor follower */}
        <div id="cursor-follower" className="fixed w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"></div>
        
        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-4 w-72 h-72 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {children}
        {GA_ID && <GAListener />}

        {/* Modern scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 z-50 transform -translate-y-full transition-transform duration-150" id="scroll-progress"></div>

        {/* Modern JavaScript for enhanced UX */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple and reliable loading animation
              function hideLoadingOverlay() {
                const overlay = document.getElementById('loading-overlay');
                if (overlay) {
                  overlay.style.opacity = '0';
                  overlay.style.transform = 'scale(0.95)';
                  overlay.style.transition = 'all 0.5s ease-out';
                  setTimeout(() => {
                    overlay.style.display = 'none';
                    overlay.remove();
                  }, 500);
                }
              }
              
              // Hide loading after a short delay to ensure smooth transition
              setTimeout(() => {
                if (document.readyState === 'complete') {
                  hideLoadingOverlay();
                } else {
                  window.addEventListener('load', hideLoadingOverlay);
                }
              }, 2000); // 2 second minimum loading time
              
              // Fallback: hide after 5 seconds maximum
              setTimeout(hideLoadingOverlay, 5000);

              // Custom cursor follower
              let cursor = { x: 0, y: 0 };
              let cursorFollower = { x: 0, y: 0 };
              
              document.addEventListener('mousemove', (e) => {
                cursor.x = e.clientX;
                cursor.y = e.clientY;
              });
              
              function animateCursor() {
                const diffX = cursor.x - cursorFollower.x;
                const diffY = cursor.y - cursorFollower.y;
                
                cursorFollower.x += diffX * 0.1;
                cursorFollower.y += diffY * 0.1;
                
                const follower = document.getElementById('cursor-follower');
                if (follower) {
                  follower.style.left = cursorFollower.x - 12 + 'px';
                  follower.style.top = cursorFollower.y - 12 + 'px';
                }
                
                requestAnimationFrame(animateCursor);
              }
              animateCursor();

              // Scroll progress indicator
              window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                
                const progressBar = document.getElementById('scroll-progress');
                if (progressBar) {
                  progressBar.style.transform = \`translateX(\${scrollPercent - 100}%)\`;
                }
              });

              // Smooth reveal animations
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                  }
                });
              }, observerOptions);

              // Observe all elements with reveal class
              document.addEventListener('DOMContentLoaded', () => {
                const revealElements = document.querySelectorAll('[data-reveal]');
                revealElements.forEach(el => {
                  el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
                  observer.observe(el);
                });
              });

              // Modern hover effects
              document.addEventListener('DOMContentLoaded', () => {
                const hoverElements = document.querySelectorAll('[data-hover]');
                hoverElements.forEach(el => {
                  el.addEventListener('mouseenter', () => {
                    el.style.transform = 'translateY(-4px) scale(1.02)';
                    el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  });
                  
                  el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translateY(0) scale(1)';
                    el.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                  });
                });
              });

              // Parallax scrolling effect
              window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('[data-parallax]');
                
                parallaxElements.forEach(el => {
                  const speed = el.dataset.parallax || 0.5;
                  el.style.transform = \`translateY(\${scrolled * speed}px)\`;
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
