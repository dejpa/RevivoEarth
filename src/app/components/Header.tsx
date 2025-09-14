// src/app/components/Header.tsx
"use client";

import Link from "next/link";
import { useState, useTransition, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from "next/navigation";
import { getTranslator } from "@/i18n";

const locales = ["en", "ar", "fa"];

export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

const getNavLinks = (t: (key: string) => string, currentLocale: string): NavLink[] => [
  { href: `/${currentLocale}`, label: t("header.home") },
  { href: `/${currentLocale}/blogs`, label: t("header.blogs") },
  { href: `/${currentLocale}/solutions`, label: t("header.solutions") },
  { href: `/${currentLocale}/about-us`,label: t("header.about") },
  { href: `/${currentLocale}/contact`, label: t("header.contact") },
];

const NavItem = ({ link, openDropdown, setOpenDropdown, isMobile = false }: {
  link: NavLink;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
  isMobile?: boolean;
}) => {
  const isOpen = openDropdown === link.href;
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isActive = pathname === link.href;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenDropdown]);

  return (
    <div ref={menuRef} className={`relative ${isMobile ? "w-full" : ""}`}>
      <Link
        href={link.href}
        onClick={() => setOpenDropdown(isOpen ? null : link.href)}
        className={`flex items-center justify-between w-full text-sm md:text-base font-medium transition-all duration-300 relative group ${
          isMobile 
            ? `py-3 px-4 rounded-lg hover:bg-emerald-500 hover:text-white ${
                isActive ? "bg-emerald-500 text-white" : "text-green-950 hover:text-white"
              }` 
            : `text-green-950 hover:text-emerald-600 px-3 py-2 rounded-md ${
                isActive ? "bg-emerald-50 text-emerald-700 font-semibold" : ""
              }`
        }`}
      >
        <span className="relative z-10">{link.label}</span>
        {link.subLinks && (
          <ChevronDownIcon className={`h-4 w-4 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} />
        )}
        {!isMobile && (
          <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}></span>
        )}
      </Link>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const pathSegments = pathname.split("/").filter(Boolean);
    let newPathname;
    if (locales.includes(pathSegments[0])) {
      newPathname = `/${newLocale}/${pathSegments.slice(1).join("/")}`;
    } else {
      newPathname = `/${newLocale}${pathname}`;
    }
    startTransition(() => {
      router.push(newPathname);
    });
  };

  const navLinks = getNavLinks(t, currentLocale);

  return (
    <header className="w-full bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 text-green-950 backdrop-blur-sm border-b border-zinc-300/50 shadow-lg fixed z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="group">
              <img 
                src="/logo.png" 
                alt="RevivoEarth Logo" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
            ))}
          </nav>

          {/* Desktop Language Selector & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <select
                className="bg-white/80 backdrop-blur-sm border border-zinc-300 rounded-lg px-4 py-2 text-green-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 appearance-none cursor-pointer hover:bg-white hover:shadow-md"
                onChange={changeLanguage}
                value={currentLocale}
                disabled={isPending}
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {locale === "en" ? "🇺🇸 English" : locale === "fa" ? "🇮🇷 فارسی" : "🇸🇦 العربية"}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <ChevronDownIcon className="h-4 w-4 text-green-950" />
              </div>
            </div>
            
            <Link 
              href={`/${currentLocale}/contact`}
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:from-emerald-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("header.getStarted") || "Get Started"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="relative p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-zinc-300 text-green-950 hover:bg-white hover:shadow-md transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-zinc-300 shadow-xl">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col space-y-2 mb-6">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isMobile />
              ))}
            </nav>
            
            <div className="border-t border-zinc-200 pt-6">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <select
                    className="w-full bg-zinc-100 border border-zinc-300 rounded-lg px-4 py-3 text-green-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                    onChange={changeLanguage}
                    value={currentLocale}
                    disabled={isPending}
                  >
                    {locales.map((locale) => (
                      <option key={locale} value={locale}>
                        {locale === "en" ? "🇺🇸 English" : locale === "fa" ? "🇮🇷 فارسی" : "🇸🇦 العربية"}
                      </option>
                    ))}
                  </select>
                </div>
                
                <Link 
                  href={`/${currentLocale}/contact`}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-emerald-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg"
                >
                  {t("header.getStarted") || "Get Started"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
