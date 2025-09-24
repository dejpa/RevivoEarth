// src/app/about-us/AboutUs.ts
"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslator } from "@/i18n";

const locales = ["en", "ar", "fa"];

export default function AboutUs() {

  const pathname = usePathname();


    // استخراج زبان فعلی از مسیر
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  return (
    <div className="bg-white text-gray-800">
      {/* hero section  */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/img/about-us.webp')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow"> {t("aboutUs.aboutUs")}</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-shadow">
            {t("aboutUs.description")}
          </p>
        </div>
      </section>

      {/* معرفی شرکت */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50" data-reveal>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient text-center">{t("aboutUs.whoWeAreTitle")}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-center">
            {t("aboutUs.whoWeAreText")}
          </p>
          </div>
        </div>
      </section>

      {/* تاریخچه شرکت */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" data-reveal>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient text-center">{t("aboutUs.historyTitle")}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-center">
           {t("aboutUs.historyText")}
          </p>
          </div>
        </div>
      </section>

      {/* ماموریت و ارزش‌ها */}
      <section className="py-20 bg-white" data-reveal>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient text-center">{t("aboutUs.missionValuesTitle")}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed text-center">
            {t("aboutUs.missionText")}
          </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-modern p-6 hover-lift" data-hover>
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-950 text-xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 text-center">{t("aboutUs.valuesList.socialResponsibility")}</h3>
              </div>
              <div className="card-modern p-6 hover-lift" data-hover>
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-950 text-xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 text-center">{t("aboutUs.valuesList.scienceBased")}</h3>
              </div>
              <div className="card-modern p-6 hover-lift" data-hover>
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-950 text-xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 text-center">{t("aboutUs.valuesList.transparency")}</h3>
              </div>
              <div className="card-modern p-6 hover-lift" data-hover>
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-950 text-xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 text-center">{t("aboutUs.valuesList.innovation")}</h3>
              </div>
              <div className="card-modern p-6 hover-lift" data-hover>
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 text-center">{t("aboutUs.valuesList.collaboration")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* محصولات و خدمات */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">Our Product: Bio-Oil Mulch</h2>
          <p className="text-gray-600 mb-8">
            Bio-Oil Mulch is a revolutionary product designed to protect soil, control dust, and promote sustainable land management. Here are some of its key benefits:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong className="text-green-950">Eco-Friendly:</strong> Made from biodegradable materials, it is safe for the environment.</li>
            <li><strong className="text-green-950">Effective Dust Control:</strong> Reduces airborne dust particles, improving air quality.</li>
            <li><strong className="text-green-950">Soil Stabilization:</strong> Prevents soil erosion and promotes plant growth.</li>
            <li><strong className="text-green-950">Cost-Effective:</strong> Reduces maintenance costs and improves soil health.</li>
          </ul>
        </div>
      </section> */}

      {/* تیم ما */}
     <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50" data-reveal>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient text-center">{t("aboutUs.ourTeam")}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8 text-center leading-relaxed">
            {t("aboutUs.ourTeamDescription")}
          </p>
          </div>
        </div>
      </section> 

    
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-950 via-emerald-900 to-green-800 text-white" data-reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-shadow">
            {t("home.makeChange")}
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-shadow">
            {t("home.contactUsDescription")}
          </p>
          <a
            href={`/${currentLocale}/contact`}
            className="btn-modern px-8 py-4 text-lg font-semibold hover-lift"
          >
            {t("home.contactUs")}
          </a>
        </div>
      </section>
    </div>
  );
}