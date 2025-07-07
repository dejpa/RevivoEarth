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
        <footer className="bg-zinc-200 text-green-950 p-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className='md-1/3'>
                    <h3 className="text-md md:text-lg font-bold">{t("footer.contactUs")}</h3>
                    {/* <p>{t("footer.address")}: 123 Green St, Eco City</p>
                    <p>{t("footer.phone")}: {t("footer.phoneDetails")}</p> */}
                    <p>{t("footer.email")}: {t("footer.emailDetails")}</p>
                </div>
                <div className='md-1/3'>
                    <h3 className="text-md md:text-lg font-bold">{t("footer.quickLinks")}</h3>
                    <ul>
                        <li><a href="/privacy" className="hover:text-white">{t("footer.privacyPolicy")}</a></li>
                        {/* <li><a href="/terms" className="hover:text-white">Terms of Service</a></li> */}
                        <li><a href="/about" className="hover:text-white">{t("footer.aboutUs")}</a></li>
                        <li><a href="/contact" className="hover:text-white">{t("footer.contactUs")}</a></li>
                    </ul>
                </div>
                <div className='md-1/3'>
                    <h3 className="text-md md:text-lg font-bold">{t("footer.followUs")}</h3>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                        <a
                        href="https://www.instagram.com/@revivoearth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a
                        href="https://www.linkedin.com/company/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                        >
                        <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                        href="https://twitter.com/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                        >
                        <FaXTwitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© 2025 RevivoEarth. All rights reserved.</p>
            </div>
        </footer>
    );
  }