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
  { href: `/${currentLocale}/about-us`,label: t("header.about") },
  { href: `/${currentLocale}/contact`, label: t("header.contact") }
];

const NavItem = ({ link, openDropdown, setOpenDropdown, isMobile = false }: {
  link: NavLink;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
  isMobile?: boolean;
}) => {
  const isOpen = openDropdown === link.href;
  const menuRef = useRef<HTMLDivElement | null>(null);

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
    <div ref={menuRef} className={` ${isMobile ? "w-full" : ""}`}>
      <Link
        href={link.href}
        onClick={() => setOpenDropdown(isOpen ? null : link.href)}
        className={`flex items-center justify-between w-full font-medium text-green-950 hover:text-white transition ${
          isMobile ? "py-2 px-4" : ""
        }`}
      >
        {link.label} {link.subLinks && <ChevronDownIcon className="w-4 h-4 ml-1" />}
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
    <header className="w-full bg-zinc-200 text-green-950 p-4 flex justify-between items-center drop-shadow-md fixed z-50">
      <div className="flex items-center">
        <Link href="/${currentLocale}">
          <img src="/logo.png" alt="Company Logo" className="h-24" />
        </Link>
      </div>

      <nav className="hidden lg:flex space-x-6">
        {navLinks.map((link) => (
          <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        ))}
      </nav>

      <div className="hidden lg:flex items-center">
        {/* <Link href="/request-consulation">
          <button className="bg-green-950 text-white px-4 py-2 rounded hover:bg-white hover:text-green-950">
            {t("requestConsultation")}
          </button>
        </Link> */}
        <div className="ml-4">
          <select
            className="bg-zinc-100 text-green-950 border-none"
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

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-950">
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 right-0 bg-zinc-200 w-full p-4 ">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isMobile />
            ))}
          </nav>
          <div className="mt-4">
            <Link href="/request-consulation">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-green-950 text-white px-4 py-2 rounded hover:bg-white hover:text-green-950 w-full"
              >
                {t("requestConsultation")}
              </button>
            </Link>
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
