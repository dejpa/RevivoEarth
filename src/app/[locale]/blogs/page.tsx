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
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Number of articles to show per page

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
      date: t("articles.articlesName.article1.date"),
      category: t("articles.articlesName.article1.categories"),
      categoryKey: "environment",
      readTime: t("articles.articlesName.article1.readTime"),
      image: "/articles/National Geographic Magazine November 1979.webp",
      pdfUrl: "/articles/National Geographic Magazine November 1979.pdf"
    },
    {
      id: 2,
      title: t("articles.articlesName.article2.title"),
      excerpt: t("articles.articlesName.article2.excerpt"),
      date: t("articles.articlesName.article2.date"),
      category: t("articles.articlesName.article2.categories"),
      categoryKey: "oilMulch",
      readTime: t("articles.articlesName.article2.readTime"),
      image: "/articles/Short-term effect of oil-mulch on vegetation dynamic.webp",
      pdfUrl: "/articles/Short-term effect of oil-mulch on vegetation dynamic.pdf"
    },
    {
      id: 3,
      title: t("articles.articlesName.article3.title"),
      excerpt: t("articles.articlesName.article3.excerpt"),
      date: t("articles.articlesName.article3.date"),
      category: t("articles.articlesName.article3.categories"),
      categoryKey: "oilMulch",
      readTime: t("articles.articlesName.article3.readTime"),
      image: "/articles/Petroleum mulch studies for row crops in California.webp",
      pdfUrl: "/articles/Petroleum mulch studies for row crops in California.pdf"
    },
    {
      id: 4,
      title: t("articles.articlesName.article4.title"),
      excerpt: t("articles.articlesName.article4.excerpt"),
      date: t("articles.articlesName.article4.date"),
      category: t("articles.articlesName.article4.categories"),
      categoryKey: "oilMulch",
      readTime: t("articles.articlesName.article3.readTime"),
      image: "/articles/SandDunesFixation_Fadhil2002.webp",
      pdfUrl: "/articles/SandDunesFixation_Fadhil2002.pdf"
    },

  ];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.categoryKey === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle page navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages around current page
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);
      
      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };


  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/img/articles.webp')",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">{t("articles.title")}</h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto text-shadow">
            {t("articles.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50" data-reveal>
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            <button 
              onClick={() => handleCategorySelect("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                selectedCategory === "all" 
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg" 
                  : "border-2 border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {t("articles.allCategories")}
            </button>
            <button 
              onClick={() => handleCategorySelect("oilMulch")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                selectedCategory === "oilMulch" 
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg" 
                  : "border-2 border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {t("articles.categories.oilMulch")}
            </button>
            <button 
              onClick={() => handleCategorySelect("environment")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                selectedCategory === "environment" 
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg" 
                  : "border-2 border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {t("articles.categories.environment")}
            </button>
            <button 
              onClick={() => handleCategorySelect("innovation")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                selectedCategory === "innovation" 
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg" 
                  : "border-2 border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {t("articles.categories.innovation")}
            </button>
            <button 
              onClick={() => handleCategorySelect("sustainability")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                selectedCategory === "sustainability" 
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg" 
                  : "border-2 border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
              }`}
            >
              {t("articles.categories.sustainability")}
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <article 
                key={article.id} 
                className="card-modern overflow-hidden cursor-pointer hover-lift group"
                onClick={() => window.open(`/${currentLocale}/pdf-viewer?url=${encodeURIComponent(article.pdfUrl)}`, '_blank')}
                data-hover
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <span className="text-sm text-emerald-600 font-medium">{article.readTime} {t("articles.read")}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{article.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300">
                      {t("articles.readMore")}
                    </span>
                    <svg className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <nav className="flex items-center gap-3">
                {/* Previous Button */}
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                    currentPage === 1 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white hover-lift"
                  }`}
                >
                  {currentLocale === "en" ? "←" : "→"}
              </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <div key={index}>
                    {page === '...' ? (
                      <span className="px-3 text-gray-500 text-lg">...</span>
                    ) : (
                      <button 
                        onClick={() => handlePageChange(page as number)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                          currentPage === page 
                            ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg" 
                            : "border-2 border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-600 hover-lift"
                        }`}
                      >
                        {page}
              </button>
                    )}
                  </div>
                ))}

                {/* Next Button */}
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                    currentPage === totalPages 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white hover-lift"
                  }`}
                >
                  {currentLocale === "en" ? "→" : "←"}
              </button>
            </nav>
          </div>
          )}

          {/* Results Info */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-6 text-gray-600 text-lg">
              {t("articles.showing")} {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} {t("articles.of")} {filteredArticles.length} {t("articles.articles")}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50" data-reveal>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{t("articles.newsletterTitle")}</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">{t("articles.newsletterSubtitle")}</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder={t("articles.emailPlaceholder")}
              className="input-modern flex-grow"
            />
            <button className="btn-modern px-8 py-4 hover-lift">
              {t("articles.subscribe")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}