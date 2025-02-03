// src/app/components/Header.ts
"use client"; 
import Link from "next/link";
import { useState , useTransition } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";

const locales = [ "en","fa", "ar"]; 

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const {t} = useTranslation();

    // استخراج زبان فعلی از مسیر
    const pathSegments = pathname.split("/");
    const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
 
     // تغییر زبان
      const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;

        let newPathname;
        if (newLocale === "en") {
            // اگر مسیر شامل زبان بود، فقط زبان رو حذف کن، بقیه مسیر بمونه
            newPathname = `/${pathSegments.slice(2).join("/")}` || "/";
        } else {
            // اگر مسیر زبان نداره، اضافه کن
            if (locales.includes(pathSegments[1])) {
                newPathname = `/${newLocale}/${pathSegments.slice(2).join("/")}`;
            } else {
                newPathname = `/${newLocale}${pathname}`;
            }
        }

        startTransition(() => {
            router.push(newPathname);
        });
    };


    const navLinks = [
        { href: "/", label: t("Home") },
        { href: "/about-us", label: t("About") },
        { href: "/applications", label: t("Applications") },
        { href: "/environmental-impact", label: t("Environmental Impact") },
        { href: "/case-studies", label: t("Case Studies") },
        { href: "/contact", label: t("Contact") }
    ];

    return (
        <header className="w-full bg-zinc-200 text-green-950 p-4 flex justify-between items-center drop-shadow-md fixed z-50 blur-xs">
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="flex items-center">
                <Link href="/" ><img src="/logo.jpg" alt="Company Logo" className="h-12" /></Link>
            </div>


            <nav className="hidden lg:flex space-x-6">
                {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-white">
                    {label}
                </Link>
                ))}
            </nav>

            {/* دکمه‌های سمت راست (زبان و CTA) */}
            <div className="hidden lg:flex items-center">
                <button className="bg-green-950 text-white px-4 py-2 rounded hover:bg-white hover:text-green-950">
                 {t("Request Quote")}
                </button>
                <div className="ml-4">
                    <select 
                        className="bg-zinc-100 text-green-950 border-none"
                        onChange={changeLanguage}
                        value={currentLocale}
                        disabled={isPending}>
                    {locales.map((locale) => (
                        <option key={locale} value={locale}>
                            {locale === "en" ? "English" : locale === "fa" ? "فارسی" : "العربية"}
                        </option>
                    ))}
                    </select>
                </div>
            </div>

            {/* آیکون همبرگر برای موبایل */}
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-950">
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>

            {/* منوی موبایل */}
            {isMenuOpen && (
            <div className="lg:hidden fixed top-16 right-0 bg-zinc-200 w-full p-4 ">
                <nav className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                    <Link key={href} onClick={() => setIsMenuOpen(false)} href={href} className="hover:text-white">
                        {label}
                    </Link>
                    ))}
                </nav>
                <div className="mt-4">
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-green-950 text-white px-4 py-2 rounded hover:bg-white hover:text-green-950 w-full"
                    >
                    Request a Quote
                </button>
                </div>
                <div className="mt-4">
                    <select
                        className="bg-green-700 text-white border-none p-2 rounded w-full"
                        onChange={changeLanguage}
                        value={currentLocale}
                        disabled={isPending}
                    >
                    {locales.map((locale) => (
                        <option key={locale} value={locale}>
                        {locale === "en" ? "English" : locale === "fa" ? "فارسی" : "العربية"}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
            )}
        </header>
    );
}
