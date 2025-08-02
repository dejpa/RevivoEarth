"use client";

import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { getTranslator } from "@/i18n";
import { useState, useEffect } from 'react';

const locales = ["en", "ar", "fa"];

export default function PDFViewer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Extract current language from path
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  useEffect(() => {
    const url = searchParams.get('url');
    if (url) {
      setPdfUrl(decodeURIComponent(url));
    }
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-950 mx-auto mb-4"></div>
          <p className="text-gray-600">{t("pdf.loading")}</p>
        </div>
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("pdf.error")}</h1>
          <p className="text-gray-600 mb-4">{t("pdf.noFile")}</p>
          <button 
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-green-950 text-white rounded-lg hover:bg-green-900 transition"
          >
            {t("pdf.goBack")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">{t("pdf.viewer")}</h1>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.open(pdfUrl, '_blank')}
                className="px-4 py-2 bg-green-950 text-white rounded-lg hover:bg-green-900 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t("pdf.openInNewTab")}
              </button>
              <button 
                onClick={() => window.history.back()}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                {t("pdf.close")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-[80vh] border-0"
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
} 