// src/app/components/Footer.tsx
"use client"; 

import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; 
import { getTranslator } from "@/i18n";
import { usePathname } from "next/navigation";

const locales = ["en", "ar", "fa"];

export default function Footer() {
    const pathname = usePathname();


    // استخراج زبان فعلی از مسیر
    const pathSegments = pathname.split("/");
    const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
    const t = getTranslator(currentLocale);


    return (
        <footer className="bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200 text-green-950 border-t border-zinc-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <img src="/logo.png" alt="RevivoEarth Logo" className="h-16 w-auto mb-4" />
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {t("footer.companyDescription") || "Leading sustainable environmental solutions for a greener future."}
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-green-950 mb-4 border-b-2 border-emerald-500 pb-2 w-fit">
                            {t("footer.contactUs")}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <span className="text-white text-xs">📧</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">{t("footer.email")}</p>
                                    <a href={`mailto:${t("footer.emailDetails")}`} className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors">
                                        {t("footer.emailDetails")}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ">
                                    <span className="text-white text-xs">📞</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">{t("footer.phone")}</p>
                                    <a href={`tel:${t("footer.phoneDetails")}`} className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors">
                                        {t("footer.phoneDetails") || "+989104516070"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-green-950 mb-4 border-b-2 border-emerald-500 pb-2 w-fit">
                            {t("footer.quickLinks")}
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a 
                                    href={`/${currentLocale}/about-us`} 
                                    className="text-sm text-gray-700 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:bg-emerald-600 transition-colors"></span>
                                    {t("footer.aboutUs")}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={`/${currentLocale}/solutions`} 
                                    className="text-sm text-gray-700 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:bg-emerald-600 transition-colors"></span>
                                    {t("footer.solutions") || "Our Solutions"}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href={`/${currentLocale}/contact`} 
                                    className="text-sm text-gray-700 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:bg-emerald-600 transition-colors"></span>
                                    {t("footer.contactUs")}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/privacy" 
                                    className="text-sm text-gray-700 hover:text-emerald-600 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:bg-emerald-600 transition-colors"></span>
                                    {t("footer.privacyPolicy")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-green-950 mb-4 border-b-2 border-emerald-500 pb-2 w-fit">
                            {t("footer.followUs")}
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/revivoearth?igsh=Zzc0NzYyaW95anNx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/revivoearth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com/revivoearth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                                aria-label="Twitter/X"
                            >
                                <FaXTwitter className="h-5 w-5" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-600 mt-4">
                            {t("footer.socialDescription") || "Follow us for the latest updates on environmental solutions"}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-zinc-300 bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600 text-center md:text-left">
                            {t("footer.rights")}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>🌱</span>
                            <span>{t("footer.sustainabilityMessage") || "Committed to a sustainable future"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }