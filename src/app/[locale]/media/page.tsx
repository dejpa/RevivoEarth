import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { getTranslator } from "@/i18n";
import { videos, photos, getYouTubeEmbedUrl } from "@/data/media";
import AparatVideoGrid from "./AparatVideoGrid";

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revivoearth.com";

const locales = ["en", "ar", "fa"] as const;
type Locale = (typeof locales)[number];

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Environmental Media & Videos",
    fa: "رسانه و ویدئوهای محیط زیستی",
    ar: "الوسائط والفيديوهات البيئية",
  };

  const descriptions = {
    en: "Watch RevivoEarth media and educational videos about environmental awareness, ecosystem restoration, desertification control, soil recovery, and land rehabilitation.",
    fa: "ویدئوها و محتوای رسانه‌ای RevivoEarth درباره آگاهی محیط‌زیستی، احیای اکوسیستم، کنترل بیابان‌زایی، بازسازی خاک و احیای زمین.",
    ar: "شاهد محتوى RevivoEarth الإعلامي والفيديوهات التعليمية حول الوعي البيئي واستعادة النظم البيئية ومكافحة التصحر وإصلاح التربة.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}/media`,
      languages: {
        en: "/en/media",
        fa: "/fa/media",
        ar: "/ar/media",
        "x-default": "/en/media",
      },
    },
    openGraph: {
      title: `${titles[locale]} | RevivoEarth`,
      description: descriptions[locale],
      url: `/${locale}/media`,
      type: "website",
      images: [
        {
          url: "/media-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "RevivoEarth Environmental Media",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titles[locale]} | RevivoEarth`,
      description: descriptions[locale],
      images: ["/media-og-image.jpg"],
    },
  };
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="card-modern p-10 text-center max-w-2xl mx-auto">
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
}

function buildMediaSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name:
      locale === "fa"
        ? "رسانه و ویدئوهای محیط زیستی RevivoEarth"
        : locale === "ar"
          ? "الوسائط والفيديوهات البيئية من RevivoEarth"
          : "RevivoEarth Environmental Media & Videos",
    url: `${siteUrl}/${locale}/media`,
    inLanguage: locale,
    description:
      locale === "fa"
        ? "ویدئوها و محتوای رسانه‌ای RevivoEarth درباره آگاهی محیط‌زیستی و احیای زمین."
        : locale === "ar"
          ? "محتوى RevivoEarth الإعلامي حول الوعي البيئي واستعادة الأراضي."
          : "RevivoEarth media content about environmental awareness and land restoration.",
    publisher: {
      "@type": "Organization",
      name: "RevivoEarth",
      url: siteUrl,
    },
  };
}

export default async function MediaPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslator(locale);

  const getItemTitle = (titleKey: string) =>
    t(`media.items.${titleKey}.title`) || titleKey;

  const getItemDescription = (titleKey: string) =>
    t(`media.items.${titleKey}.description`) || "";

  const mediaSchema = buildMediaSchema(locale);

  return (
    <main id="main-content" className="bg-white text-gray-800">
      <Script
        id="media-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mediaSchema),
        }}
      />

      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/media.webp"
            alt={t("media.title")}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

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

      <section
        className="py-20 bg-gradient-to-br from-white to-emerald-50"
        data-reveal
      >
        <div className="container mx-auto px-4">
          <SectionHeader title={t("media.reelsTitle")} />

          <AparatVideoGrid
            emptyMessage={t("media.emptyReels")}
            followText={t("media.followAparat")}
            aparatUrl={t("media.aparatUrl")}
            loadingText={t("media.loadingReels")}
          />
        </div>
      </section>

      <section className="py-20 bg-white" data-reveal>
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("media.videosTitle")}
            description={t("media.videosDescription")}
          />

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videos.map((video) => (
                <article
                  key={video.id}
                  className="card-modern overflow-hidden hover-lift"
                >
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
                      <p className="text-gray-600">
                        {getItemDescription(video.titleKey)}
                      </p>
                    )}
                  </div>
                </article>
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

      {photos.length > 0 && (
        <section
          className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
          data-reveal
        >
          <div className="container mx-auto px-4">
            <SectionHeader
              title={t("media.photosTitle")}
              description={t("media.photosDescription")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {photos.map((photo) => (
                <article
                  key={photo.id}
                  className="card-modern overflow-hidden hover-lift group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={photo.src}
                      alt={getItemTitle(photo.titleKey)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">
                      {getItemTitle(photo.titleKey)}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}