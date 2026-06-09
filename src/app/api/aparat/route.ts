import { NextResponse } from "next/server";
import {
  APARAT_API_URL,
  APARAT_USERNAME,
  getAparatVideos,
} from "@/lib/aparat";
import { aparatFallbackVideos } from "@/data/aparatFallbackVideos";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const debug = searchParams.get("debug") === "1";

  if (debug) {
    try {
      const res = await fetch(APARAT_API_URL, {
        cache: "no-store",
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 RevivoEarthBot/1.0",
        },
      });

      const text = await res.text();

      let parsed: any = null;

      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = null;
      }

      const rawItems =
        parsed?.videobyuser ||
        parsed?.videos ||
        parsed?.data ||
        parsed?.videobyuser?.videos ||
        [];

      return NextResponse.json({
        username: APARAT_USERNAME,
        apiUrl: APARAT_API_URL,
        status: res.status,
        statusText: res.statusText,
        contentType: res.headers.get("content-type"),
        isJson: Boolean(parsed),
        topLevelKeys: parsed ? Object.keys(parsed) : [],
        rawItemsLength: Array.isArray(rawItems) ? rawItems.length : 0,
        firstRawItem: Array.isArray(rawItems) ? rawItems[0] || null : null,
        fallbackCount: aparatFallbackVideos.length,
        bodyPreview: text.slice(0, 1000),
      });
    } catch (error) {
      return NextResponse.json(
        {
          username: APARAT_USERNAME,
          apiUrl: APARAT_API_URL,
          error: error instanceof Error ? error.message : "Unknown error",
          fallbackCount: aparatFallbackVideos.length,
        },
        { status: 200 }
      );
    }
  }

  const videos = await getAparatVideos();
  const finalVideos = videos.length > 0 ? videos : aparatFallbackVideos;

  return NextResponse.json({
    username: APARAT_USERNAME,
    source: videos.length > 0 ? "aparat-api" : "fallback",
    count: finalVideos.length,
    videos: finalVideos,
  });
}