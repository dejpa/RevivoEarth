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
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/about-us.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-bold mb-4"> {t("aboutUs.aboutUs")}</h1>
          <p className="md:text-xl">
            {t("aboutUs.description")}
          </p>
        </div>
      </section>

      {/* معرفی شرکت */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("aboutUs.whoWeAreTitle")}</h2>
          <p className="text-gray-600 mb-8">
            {t("aboutUs.whoWeAreText")}
          </p>
        </div>
      </section>

      {/* تاریخچه شرکت */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("aboutUs.historyTitle")}</h2>
          <p className="md:text-xl text-gray-600 mb-8">
           {t("aboutUs.historyText")}
          </p>
        </div>
      </section>

      {/* ماموریت و ارزش‌ها */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("aboutUs.missionValuesTitle")}</h2>
          <p className="md:text-xl text-gray-600 mb-8">
            {t("aboutUs.missionText")}
          </p>
          <ul className="list-inside text-gray-600">
            <li>❇️  {t("aboutUs.valuesList.socialResponsibility")}</li>
            <li>❇️  {t("aboutUs.valuesList.scienceBased")}</li>
            <li>❇️  {t("aboutUs.valuesList.transparency")}</li>
            <li>❇️  {t("aboutUs.valuesList.innovation")}</li>
            <li>❇️  {t("aboutUs.valuesList.collaboration")}</li>
          </ul>
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
     <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("aboutUs.ourTeam")}</h2>
          <p className="md:text-xl text-gray-600 mb-8">
            {t("aboutUs.ourTeamDescription")}
          </p>
        </div>
      </section> 

    
      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            {t("home.makeChange")}
          </h2>
          <p className="md:text-xl mb-8">
            {t("home.contactUsDescription")}
          </p>
          <a
            href="/contact"
            className="md:text-xl bg-white text-green-950 px-2 md:px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            {t("home.contactUs")}
          </a>
        </div>
      </section>
    </div>
  );
}