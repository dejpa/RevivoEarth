'use client';

import { getTranslator } from "@/i18n";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const locales = ["en", "ar", "fa"];

export default function LearnMorePage() {
  const pathname = usePathname();
  
  // استخراج زبان فعلی از مسیر
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);
  
  const isRTL = ['fa', 'ar'].includes(currentLocale);

  return (
    <div className="bg-white text-gray-800">
    {/* hero section */}
    <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/learnMore.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-bold mb-4"> {t("learnMore.heroTitle")}</h1>
          <p className="md:text-xl">
            {t("learnMore.heroDescription")}
          </p>
        </div>
    </section>
    {/* Campaign Clip Section */}
    <section className="mb-20 py-16">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('learnMore.campaignTitle')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('learnMore.campaignDescription')}
        </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-gray-500 text-lg">
                {t('learnMore.videoPlaceholder')}
            </p>
            </div>
        </div>
        </div>
    </section>

    {/* YouTube & Podcast Section */}
    <section className="mb-20 py-16 bg-gray-50 ">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('learnMore.mediaTitle')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('learnMore.mediaDescription')}
        </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* YouTube Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('learnMore.youtubeTitle')}
            </h3>
            <p className="text-gray-600">
                {t('learnMore.youtubeDescription')}
            </p>
            </div>
        </div>

        {/* Podcast Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('learnMore.podcastTitle')}
            </h3>
            <p className="text-gray-600">
                {t('learnMore.podcastDescription')}
            </p>
            </div>
        </div>
        </div>
    </section>

    {/* Social Media Section */}
    <section className="mb-20 py-16">
        <div className="text-center mb-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('learnMore.socialTitle')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('learnMore.socialDescription')}
        </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instagram */}
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Instagram</h3>
            <a 
                href="https://instagram.com/revivoearth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
                {t('learnMore.instagramFollow')}
            </a>
            </div>

            {/* Twitter/X */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">X</h3>
            <a 
                href="https://twitter.com/revivoearth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
                {t('learnMore.twitterFollow')}
            </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
            <a 
                href="https://linkedin.com/company/revivoearth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
                {t('learnMore.linkedinFollow')}
            </a>
            </div>

            {/* YouTube */}
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">YouTube</h3>
            <a 
                href="https://youtube.com/@revivoearth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
                {t('learnMore.youtubeSocialFollow')}
            </a>
            </div>
        </div>
        </div>
    </section>

    {/* Back to Home Button */}
    <div className="text-center pb-16">
        <Link 
        href={`/${currentLocale}`}
        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 space-x-3 space-x-reverse"
        >
        <svg className={`w-5 h-5  ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{t('learnMore.backToHome')}</span>
        </Link>
    </div>

    </div>
  );
}
