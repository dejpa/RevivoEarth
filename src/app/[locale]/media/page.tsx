"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getTranslator } from "@/i18n";
import { videos, photos, getYouTubeEmbedUrl } from "@/data/media";
import type { AparatVideo } from "@/lib/aparat";

const locales = ["en", "ar", "fa"];

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="card-modern p-10 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}

function AparatVideoGrid({ t }: { t: (key: string) => string }) {
  const [aparatVideos, setAparatVideos] = useState<AparatVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/aparat")
      .then((res) => res.json())
      .then((data) => setAparatVideos(data.videos ?? []))
      .catch(() => setAparatVideos([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-600">{t("media.loadingReels")}</p>
      </div>
    );
  }

  if (aparatVideos.length === 0) {
    return (
      <div className="space-y-6">
        <EmptyState message={t("media.emptyReels")} />
        <div className="text-center">
          <a
            href={t("media.aparatUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
          >
            {t("media.followAparat")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {aparatVideos.map((video) => (
        <div key={video.uid} className="card-modern overflow-hidden hover-lift">
          <div className="aspect-video bg-gray-100">
            <iframe
              src={video.embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title={video.title}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 line-clamp-2">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MediaPage() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const getItemTitle = (titleKey: string) =>
    t(`media.items.${titleKey}.title`) || titleKey;
  const getItemDescription = (titleKey: string) =>
    t(`media.items.${titleKey}.description`) || "";

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/img/media.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto text-center relative z-10 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            {t("media.title")}
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto text-shadow">
            {t("media.subtitle")}
          </p>
        </div>
      </section>

      {/* Aparat Videos */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50" data-reveal>
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("media.reelsTitle")}
            description={t("media.reelsDescription")}
          />
          <AparatVideoGrid t={t} />
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white" data-reveal>
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("media.videosTitle")}
            description={t("media.videosDescription")}
          />

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videos.map((video) => (
                <div key={video.id} className="card-modern overflow-hidden hover-lift">
                  <div className="aspect-video bg-gray-100">
                    <iframe
                      src={getYouTubeEmbedUrl(video.youtubeId)}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      title={getItemTitle(video.titleKey)}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {getItemTitle(video.titleKey)}
                    </h3>
                    {getItemDescription(video.titleKey) && (
                      <p className="text-gray-600">{getItemDescription(video.titleKey)}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <EmptyState message={t("media.emptyVideos")} />
              <div className="text-center">
                <a
                  href={t("media.youtubeUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-200"
                >
                  {t("media.subscribeYoutube")}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Photo Gallery */}
      {photos.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50" data-reveal>
          <div className="container mx-auto px-4">
            <SectionHeader
              title={t("media.photosTitle")}
              description={t("media.photosDescription")}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {photos.map((photo) => (
                <div key={photo.id} className="card-modern overflow-hidden hover-lift group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={getItemTitle(photo.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">
                      {getItemTitle(photo.titleKey)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
