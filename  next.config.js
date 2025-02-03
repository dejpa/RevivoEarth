/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['en', 'fa', 'ar'], // زبان‌های پشتیبانی شده
      defaultLocale: 'en', // زبان پیش‌فرض
      localeDetection: true, // تشخیص خودکار زبان مرورگر
    },
  };
  
  module.exports = nextConfig;