// src/app/solutions/OurSolutions.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslator } from "@/i18n";
import { useState } from "react";

const locales = ["en", "ar", "fa"];

export default function OurSolutions() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const caseStudiesPerPage = 2; // Number of case studies to show per page

  // Extract current language from path
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  // Case studies data - you can add more case studies here
  const caseStudies = [
    {
      id: 1,
      title: t("solutions.caseStudy1.title"),
      description: t("solutions.caseStudy1.description"),
      results: [
        t("solutions.caseStudy1.result1"),
        t("solutions.caseStudy1.result2"),
        t("solutions.caseStudy1.result3")
      ],
      image: "/solutions/Post-Mining-regeneration.webp",
      imageAlt: t("solutions.caseStudy1.title"),
      order: "normal" // normal or reverse
    },
    {
      id: 2,
      title: t("solutions.caseStudy2.title"),
      description: t("solutions.caseStudy2.description"),
      results: [
        t("solutions.caseStudy2.result1"),
        t("solutions.caseStudy2.result2"),
        t("solutions.caseStudy2.result3")
      ],
      image: "/solutions/mulch.webp",
      imageAlt: t("solutions.caseStudy2.title"),
      order: "reverse" // normal or reverse
    },
    // Add more case studies here as needed
    {
      id: 3,
      title: t("solutions.caseStudy3.title") || "Agricultural Land Restoration",
      description: t("solutions.caseStudy3.description") || "Comprehensive restoration of degraded agricultural lands using sustainable practices.",
      results: [
        t("solutions.caseStudy3.result1") || "Improved soil fertility by 40%",
        t("solutions.caseStudy3.result2") || "Increased crop yield by 25%",
        t("solutions.caseStudy3.result3") || "Reduced water consumption by 30%"
      ],
      image: "/solutions/Seed Balls.webp",
      imageAlt: t("solutions.caseStudy3.title"),
      order: "normal"
    },
    {
      id: 4,
      title: t("solutions.caseStudy4.title") || "Urban Green Space Development",
      description: t("solutions.caseStudy4.description") || "Transforming urban areas into sustainable green spaces for community benefit.",
      results: [
        t("solutions.caseStudy4.result1") || "Created 5 new community parks",
        t("solutions.caseStudy4.result2") || "Improved air quality by 35%",
        t("solutions.caseStudy4.result3") || "Enhanced biodiversity in urban areas"
      ],
      image: "/img/urban-green.webp",
      imageAlt: "Urban Green Space Development",
      order: "reverse"
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(caseStudies.length / caseStudiesPerPage);
  const startIndex = (currentPage - 1) * caseStudiesPerPage;
  const endIndex = startIndex + caseStudiesPerPage;
  const currentCaseStudies = caseStudies.slice(startIndex, endIndex);

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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/img/solutions.webp')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">{t("solutions.ourSolutions")}</h1>
          <p className="md:text-xl max-w-3xl mx-auto">
            {t("solutions.heroDescription")}
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("solutions.overviewTitle")}</h2>
          <p className="text-gray-600 mb-12">
            {t("solutions.overviewText")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Solution 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-950 text-white p-3 rounded-full mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-950">{t("solutions.solution1.title")}</h3>
              </div>
              <p className="text-gray-600">{t("solutions.solution1.description")}</p>
            </div>

            {/* Solution 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-950 text-white p-3 rounded-full mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-950">{t("solutions.solution2.title")}</h3>
              </div>
              <p className="text-gray-600">{t("solutions.solution2.description")}</p>
            </div>

            {/* Solution 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-950 text-white p-3 rounded-full mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-950">{t("solutions.solution3.title")}</h3>
              </div>
              <p className="text-gray-600">{t("solutions.solution3.description")}</p>
            </div>

            {/* Solution 4 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-950 text-white p-3 rounded-full mx-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-950">{t("solutions.solution4.title")}</h3>
              </div>
              <p className="text-gray-600">{t("solutions.solution4.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("solutions.benefitsTitle")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center p-6">
              <div className="bg-green-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("solutions.benefit1.title")}</h3>
              <p className="text-gray-600">{t("solutions.benefit1.description")}</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-6">
              <div className="bg-green-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("solutions.benefit2.title")}</h3>
              <p className="text-gray-600">{t("solutions.benefit2.description")}</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-6">
              <div className="bg-green-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">$</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("solutions.benefit3.title")}</h3>
              <p className="text-gray-600">{t("solutions.benefit3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies/Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-500">{t("solutions.caseStudiesTitle")}</h2>
          
          {/* Dynamic Case Studies */}
          {currentCaseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index < currentCaseStudies.length - 1 ? 'mb-12' : ''}`}>
              <div className={caseStudy.order === "reverse" ? "md:order-1" : ""}>
                <h3 className="text-xl font-bold text-green-950 mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <ul className="list-inside text-gray-600 space-y-2">
                  {caseStudy.results.map((result, resultIndex) => (
                    <li key={resultIndex}>✅ {result}</li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gray-100 rounded-lg overflow-hidden ${caseStudy.order === "reverse" ? "md:order-2" : ""}`}>
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.imageAlt} 
                  className="w-full h-64 object-cover min-h-[300px]"
                />
              </div>
            </div>
          ))}

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
          {caseStudies.length > 0 && (
            <div className="text-center mt-4 text-gray-600">
              {t("solutions.showing") || "Showing"} {startIndex + 1}-{Math.min(endIndex, caseStudies.length)} {t("solutions.of") || "of"} {caseStudies.length} {t("solutions.caseStudies") || "case studies"}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            {t("home.makeChange")}
          </h2>
          <p className="md:text-xl mb-8">
            {t("home.contactUsDescription")}
          </p>
          <a
            href="/contact"
            className="md:text-xl bg-white text-green-950 px-2 md:px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
           {t("home.contactUs")}
          </a>
        </div>
      </section>
    </div>
  );
}