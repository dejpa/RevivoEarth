import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revivoearth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/en",
    "/fa",
    "/ar",
    "/en/about",
    "/fa/about",
    "/ar/about",
    "/en/media",
    "/fa/media",
    "/ar/media",
    "/en/contact",
    "/fa/contact",
    "/ar/contact",
  ];

  return routes.map((route) => {
    const isHome = route === "" || route === "/en" || route === "/fa" || route === "/ar";
    const isMedia = route.includes("/media");

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: isMedia ? "weekly" : "monthly",
      priority: isHome ? 1 : isMedia ? 0.85 : 0.6,
    };
  });
}