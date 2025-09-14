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
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/img/contact.webp')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="container mx-auto text-center z-10 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">{t("contact.heroTitle")}</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-shadow">{t("contact.heroDescription")}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-modern p-8 hover-lift">
              <h2 className="text-3xl font-bold text-gradient mb-8">{t("contact.formTitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="label block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-modern"
                    placeholder={t("contact.fullNamePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.emailAddress")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-modern"
                    placeholder={t("contact.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.yourMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-modern min-h-[120px] resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-modern w-full py-4 text-lg font-semibold hover-lift"
                >
                  {t("contact.sendMessage")}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="card-modern p-8 hover-lift">
              <h2 className="text-3xl font-bold text-gradient mb-8">{t("contact.contactInfo")}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("contact.contactInfoDescription")}</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white h-6 w-6" />
                  </div>
                  <a 
                    className="text-lg text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium" 
                    href={`tel:${t("contact.phone")}`}
                  >
                    {t("contact.phone")}
                  </a>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white h-6 w-6" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{t("contact.email")}</span>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="text-white h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <a 
                    href={t("contact.instagramUrl")} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                  >
                    {t("contact.instagram")}
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
