// src/app/articles/Articles.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslator } from "@/i18n";
import { useState } from "react";

const locales = ["en", "ar", "fa"];

export default function Articles() {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extract current language from path
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  // Sample articles data - replace with your actual data source
  const articles = [
    {
      id: 1,
      title: t("articles.articlesName.article1.title"),
      excerpt: t("articles.articlesName.article1.excerpt"),
      date: "1979-11-01",
      category: t("articles.articlesName.article1.categories"),
      categoryKey: "oilMulch",
      image: "/articles/National Geographic Magazine November 1979.webp",
      readTime: "20"
    },
    {
      id: 2,
      title: t("articles.article2.title"),
      excerpt: t("articles.article2.excerpt"),
      date: "2023-09-28",
      category: t("articles.categories.environment"),
      categoryKey: "environment",
      image: "/article2.webp",
      readTime: "7 min"
    },
    {
      id: 3,
      title: t("articles.article3.title"),
      excerpt: t("articles.article3.excerpt"),
      date: "2023-08-12",
      category: t("articles.categories.innovation"),
      categoryKey: "innovation",
      image: "/article3.webp",
      readTime: "4 min"
    },
    {
      id: 4,
      title: t("articles.article4.title"),
      excerpt: t("articles.article4.excerpt"),
      date: "2023-07-05",
      category: t("articles.categories.sustainability"),
      categoryKey: "sustainability",
      image: "/article4.webp",
      readTime: "6 min"
    }
  ];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.categoryKey === selectedCategory);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/articles.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">{t("articles.title")}</h1>
          <p className="md:text-xl max-w-3xl mx-auto">
            {t("articles.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={() => handleCategorySelect("all")}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === "all" 
                  ? "bg-green-950 text-white" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {t("articles.allCategories")}
            </button>
            <button 
              onClick={() => handleCategorySelect("oilMulch")}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === "oilMulch" 
                  ? "bg-green-950 text-white" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {t("articles.categories.oilMulch")}
            </button>
            <button 
              onClick={() => handleCategorySelect("environment")}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === "environment" 
                  ? "bg-green-950 text-white" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {t("articles.categories.environment")}
            </button>
            <button 
              onClick={() => handleCategorySelect("innovation")}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === "innovation" 
                  ? "bg-green-950 text-white" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {t("articles.categories.innovation")}
            </button>
            <button 
              onClick={() => handleCategorySelect("sustainability")}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === "sustainability" 
                  ? "bg-green-950 text-white" 
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {t("articles.categories.sustainability")}
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-green-950 font-medium">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.readTime} {t("articles.read")}</span>
                    <Link 
                      href={`/${currentLocale}/articles/${article.id}`}
                      className="text-green-950 font-medium hover:underline"
                    >
                      {t("articles.readMore")}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                8
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("articles.newsletterTitle")}</h2>
          <p className="text-gray-600 mb-8">{t("articles.newsletterSubtitle")}</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder={t("articles.emailPlaceholder")}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
            />
            <button className="px-6 py-3 bg-green-950 text-white rounded-lg hover:bg-green-900 transition">
              {t("articles.subscribe")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}