// src/app/components/Header.tsx
"use client";

import Link from "next/link";
import { useState, useTransition, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
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
  { href: `/${currentLocale}/media`, label: t("header.media") },
  { href: `/${currentLocale}/solutions`, label: t("header.solutions") },
  { href: `/${currentLocale}/about-us`,label: t("header.about") },
  { href: `/${currentLocale}/contact`, label: t("header.contact") },
];

const NavItem = ({ link, openDropdown, setOpenDropdown, isMobile = false, onMobileLinkClick }: {
  link: NavLink;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
  isMobile?: boolean;
  onMobileLinkClick?: () => void;
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

  const handleLinkClick = () => {
    if (isMobile && onMobileLinkClick) {
      onMobileLinkClick();
    }
    setOpenDropdown(isOpen ? null : link.href);
  };

  return (
    <div ref={menuRef} className={`relative ${isMobile ? "w-full" : ""}`}>
      <Link
        href={link.href}
        onClick={handleLinkClick}
        className={`flex items-center justify-between w-full font-medium transition-all duration-300 relative group ${
          isMobile 
            ? `py-4 px-5 rounded-2xl hover:bg-black/5 active:bg-black/10 ${
                isActive ? "bg-black/8 text-black font-semibold" : "text-gray-800"
              }` 
            : `text-gray-700 hover:text-black px-4 py-2.5 rounded-xl text-[15px] font-medium ${
                isActive ? "bg-gray-100 text-black font-semibold" : "hover:bg-gray-50"
              }`
        }`}
      >
        <span className="relative z-10">{link.label}</span>
        {link.subLinks && (
          <ChevronDownIcon className={`h-4 w-4 ml-2 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`} />
        )}
        {!isMobile && (
          <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full ${
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
    <header className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 fixed z-50 top-0 left-0 right-0">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="group">
              <img 
                src="/logo.png" 
                alt="RevivoEarth Logo" 
                className="h-16 w-auto transition-all duration-300 group-hover:scale-105 group-active:scale-95" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} onMobileLinkClick={() => setIsMenuOpen(false)} />
            ))}
          </nav>

          {/* Desktop Language Selector & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dynamic Island-inspired Language Selector */}
            <div className="relative group">
              <div className="bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2.5 hover:bg-gray-200/80 transition-all duration-300 cursor-pointer">
                <select
                  className="bg-transparent text-gray-700 text-sm font-medium focus:outline-none appearance-none cursor-pointer pr-6"
                  onChange={changeLanguage}
                  value={currentLocale}
                  disabled={isPending}
                >
                  {locales.map((locale) => (
                    <option key={locale} value={locale}>
                      {locale === "en" ? "🇺🇸" : locale === "fa" ? "🇮🇷" : "🇸🇦"}
                    </option>
                  ))}
                </select>
                <GlobeAltIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
            
            {/* iOS-style CTA Button
            <Link 
              href={`/${currentLocale}/contact`}
              className="bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 active:bg-gray-900 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            >
              {t("header.getStarted") || "Get Started"}
            </Link> */}
          </div>

          {/* Mobile Menu Button - iOS Style */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="relative p-2.5 rounded-full bg-gray-100/80 backdrop-blur-sm text-gray-700 hover:bg-gray-200/80 active:bg-gray-300/80 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - iOS Style */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl">
          <div className="container mx-auto px-6 py-8">
            <nav className="flex flex-col space-y-1 mb-8">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isMobile onMobileLinkClick={() => setIsMenuOpen(false)} />
              ))}
            </nav>
            
            <div className="border-t border-gray-200/50 pt-6">
              <div className="flex flex-col gap-4">
                {/* iOS-style Language Selector */}
                <div className="relative">
                  <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl px-5 py-4">
                    <select
                      className="w-full bg-transparent text-gray-700 text-base font-medium focus:outline-none appearance-none cursor-pointer"
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
                    <GlobeAltIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                
                {/* iOS-style CTA Button */}
                <Link 
                  href={`/${currentLocale}/contact`}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-black text-white px-6 py-4 rounded-2xl font-semibold text-base text-center hover:bg-gray-800 active:bg-gray-900 transition-all duration-200 active:scale-95"
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
