"use client"; 
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaLeaf , FaCheckCircle, FaShieldAlt} from "react-icons/fa";
import Link from "next/link";
import { getTranslator } from "@/i18n";

const locales = ["en", "ar", "fa"];

export default function Home() {

  const pathname = usePathname();
  
    // استخراج زبان فعلی از مسیر
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  return (
    <div className="min-h-screen bg-white">

      {/* hero section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/img/cover.webp')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 text-shadow">
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-shadow">
            {t("home.heroDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={`/${currentLocale}/learn-more`} 
              className="btn-modern px-8 py-4 text-lg font-semibold hover-lift"
            >
              {t("home.learnMore")}
            </Link>
            <a 
              href={`/${currentLocale}/contact`} 
              className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-950 transition-all duration-300 hover-lift"
            >
              {t("home.getQuote")}
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-emerald-50" data-reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient">
            {t("home.aboutUs")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("home.aboutUsDescription")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white" data-reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient">
            {t("home.mainTitle")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("home.mainDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card-modern p-8 hover-lift" data-hover>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {t("home.ourVision")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.ourVisionDescription")}
              </p>
            </div>

            {/* Mission */}
            <div className="card-modern p-8 hover-lift" data-hover>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {t("home.ourMission")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.ourMissionDescription")}
              </p>
            </div>

            {/* Values */}
            <div className="card-modern p-8 hover-lift" data-hover>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {t("home.ourValues")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("home.ourValuesIntegrityDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-8">
            {t("home.makeChange")}
          </h2>
          <p className="text-sm md:text-xl mb-8">
            {t("home.contactUsDescription")}
          </p>
          <a
            href="/contact"
            className="bg-white text-green-950 text-sm md:text-lg px-2 md:px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            {t("home.contactUs")}
          </a>
        </div>
      </section>
    </div>
  );
}