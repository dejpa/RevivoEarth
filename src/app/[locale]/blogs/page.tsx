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
      categoryKey: "oilMulch",
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
    {
      id: 5,
      title: t("articles.articlesName.article1.title"),
      excerpt: t("articles.articlesName.article1.excerpt"),
      date: "1979-11-01",
      category: t("articles.articlesName.article1.categories"),
      categoryKey: "oilMulch",
      image: "/articles/National Geographic Magazine November 1979.webp",
      readTime: "20",
      pdfUrl: "/articles/National Geographic Magazine November 1979.pdf"
    },
    {
      id: 6,
      title: t("articles.articlesName.article1.title"),
      excerpt: t("articles.articlesName.article1.excerpt"),
      date: "1979-11-01",
      category: t("articles.articlesName.article1.categories"),
      categoryKey: "oilMulch",
      image: "/articles/National Geographic Magazine November 1979.webp",
      readTime: "20",
      pdfUrl: "/articles/National Geographic Magazine November 1979.pdf"
    },
    {
      id: 7,
      title: t("articles.articlesName.article1.title"),
      excerpt: t("articles.articlesName.article1.excerpt"),
      date: "1979-11-01",
      category: t("articles.articlesName.article1.categories"),
      categoryKey: "oilMulch",
      image: "/articles/National Geographic Magazine November 1979.webp",
      readTime: "20",
      pdfUrl: "/articles/National Geographic Magazine November 1979.pdf"
    }
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
            {currentArticles.map((article) => (
              <article 
                key={article.id} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => window.open(`/${currentLocale}/pdf-viewer?url=${encodeURIComponent(article.pdfUrl)}`, '_blank')}
              >
                <div className="h-96 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-green-950 font-medium">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{article.readTime} {t("articles.read")}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-950 font-medium hover:underline">
                        {t("articles.readMore")}
                      </span>
                      <svg className="w-4 h-4 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center gap-2">
                {/* Previous Button */}
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                    currentPage === 1 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {currentLocale === "en" ? "←" : "→"}
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <div key={index}>
                    {page === '...' ? (
                      <span className="px-2 text-gray-500">...</span>
                    ) : (
                      <button 
                        onClick={() => handlePageChange(page as number)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                          currentPage === page 
                            ? "bg-green-950 text-white" 
                            : "border border-gray-300 hover:bg-gray-100"
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
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                    currentPage === totalPages 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {currentLocale === "en" ? "→" : "←"}
                </button>
              </nav>
            </div>
          )}

          {/* Results Info */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-4 text-gray-600">
              {t("articles.showing")} {Math.min(endIndex, filteredArticles.length)} {t("articles.of")} {filteredArticles.length} {t("articles.articles")}
            </div>
          )}
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