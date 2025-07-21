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
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('img/cover.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            {t("home.heroTitle")}
          </h1>
          <p className="md:text-xl mb-8">
            {t("home.heroDescription")}
          </p>
          <div className="space-x-4 rtl:space-x-reverse">
            <Link href="/about-us" className="text-sm md:text-lg bg-zinc-200 text-green-950 px-2 md:px-6 py-3 rounded-lg hover:bg-lime-600 hover:text-white transition duration-300">
              {t("home.learnMore")}
            </Link>
            <a href="/contact" className="text-sm md:text-lg bg-transparent border border-white text-white px-2 md:px-6 py-3 rounded-lg hover:bg-white hover:text-green-950 transition duration-300">
              {t("home.getQuote")}
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-700">
            {t("home.aboutUs")}
          </h2>
          <p className="md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("home.aboutUsDescription")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-700">
            {t("home.mainTitle")}
          </h2>
          <p className="md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("home.mainDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaLeaf className="text-green-700 h-8 md:h-12 w-12 mx-auto mb-4" />
              <h3 className="md:text-xl font-semibold mb-2 text-gray-600">
                {t("home.ourVision")}
              </h3>
              <p className="text-sm md:text-lg text-gray-600">
                {t("home.ourVisionDescription")}
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaCheckCircle className="text-green-700 h-8 md:h-12 w-12 mx-auto mb-4" />
              <h3 className="md:text-xl font-semibold mb-2 text-gray-600">
                {t("home.ourMission")}
              </h3>
              <p className="text-sm md:text-lg text-gray-600">
                {t("home.ourMissionDescription")}
              </p>
            </div>

            {/* Values */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaShieldAlt className="text-green-700 h-8 md:h-12 w-12 mx-auto mb-4" />
              <h3 className="md:text-xl font-semibold mb-2 text-gray-600">
                {t("home.ourValues")}
              </h3>
              <p className="text-sm md:text-lg text-gray-600">
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