// src/app/contact/contact.ts

"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getTranslator } from "@/i18n";

const locales = ["en", "ar", "fa"];

export default function Contact() {
  const pathname = usePathname();
  
  // Extract current language from path
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(t("contact.successMessage"));
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/contact.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-4">{t("contact.heroTitle")}</h1>
          <p className="text-xl">{t("contact.heroDescription")}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6">{t("contact.formTitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder={t("contact.fullNamePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t("contact.emailAddress")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder={t("contact.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t("contact.yourMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  {t("contact.sendMessage")}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6">{t("contact.contactInfo")}</h2>
              <p className="text-gray-700 mb-6">{t("contact.contactInfoDescription")}</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <FaPhone className="text-green-700 h-6 w-6" />
                  <a className="text-gray-700"   href={`tel:${t("contact.phone")}`} >{t("contact.phone")}</a>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <FaEnvelope className="text-green-700 h-6 w-6" />
                  <span className="text-gray-700">{t("contact.email")}</span>
                </div>

                {/* <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <FaMapMarkerAlt className="text-green-700 h-6 w-6" />
                  <span className="text-gray-700">{t("contact.address")}</span>
                </div> */}

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <svg className="text-green-700 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a href={t("contact.instagramUrl")} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-700 transition duration-200">
                    RevivoEarth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">{t("contact.letsWorkTogether")}</h2>
          <p className="text-xl mb-8">{t("contact.collaborationDescription")}</p>
          <a href={`mailto:${t("contact.email")}`} className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            {t("contact.emailUs")}
          </a>
        </div>
      </section>
    </div>
  );
}
