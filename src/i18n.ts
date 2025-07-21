import { createTranslator } from 'next-intl';

import home_en from "@/locales/english/home.json";
import header_en from "@/locales/english/header.json";
import aboutUs_en from "@/locales/english/aboutUs.json";
import footer_en from "@/locales/english/footer.json";
import solutions_en from "@/locales/english/solutions.json"
// import sustainability_en from "@/locales/english/sustainability.json"

import home_fa from "@/locales/persian/home.json";
import header_fa from "@/locales/persian/header.json";
import aboutUs_fa from "@/locales/persian/aboutUs.json";
import footer_fa from "@/locales/persian/footer.json";
import solutions_fa from "@/locales/persian/solutions.json"
// import sustainability_fa from "@/locales/persian/sustainability.json"

import home_ar from "@/locales/arabic/home.json";
import header_ar from "@/locales/arabic/header.json";
import aboutUs_ar from "@/locales/arabic/aboutUs.json";
import footer_ar from "@/locales/arabic/footer.json";
import solutions_ar from "@/locales/arabic/solutions.json"

// تعریف زبان پیش‌فرض
const DEFAULT_LOCALE = "en";

const translations: Partial<Record<string, any>> = {
  en: {
    header: header_en,
    home: home_en,
    aboutUs: aboutUs_en, 
    footer: footer_en,
    solutions: solutions_en
    // sustainability: sustainability_en, 
  },
  fa: {
    header: header_fa,
    home: home_fa,
    aboutUs: aboutUs_fa,
    footer: footer_fa,
    solutions: solutions_fa
    // sustainability: sustainability_fa,
  },
  ar: {
    header: header_ar,
    home: home_ar,
    aboutUs: aboutUs_ar,
    footer: footer_ar,
    solutions: solutions_ar
    // sustainability: sustainability_fa,
  }
};

export function getTranslator(locale: string) {
  // اگر زبان درخواستی وجود نداشت، از زبان پیش‌فرض استفاده کن
  const messages = translations[locale] || translations[DEFAULT_LOCALE];
  return createTranslator({ locale, messages });
}