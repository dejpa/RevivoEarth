export type AparatVideo = {
  uid: string;
  title: string;
  embedUrl: string;
  description?: string;
  thumbnail?: string;
  uploadDate?: string;
};

export type AparatApiItem = {
  uid?: string;
  id?: string | number;
  hash?: string;
  title?: string;
  description?: string;
  small_poster?: string;
  big_poster?: string;
  frame?: string;
  create_date?: string;
};

export const APARAT_USERNAME =
  process.env.NEXT_PUBLIC_APARAT_USERNAME || "revivoearth";

export const APARAT_API_URL = `https://www.aparat.com/etc/api/videoByUser/username/${APARAT_USERNAME}`;

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, "").trim();
}

function getAparatItems(data: any): AparatApiItem[] {
  if (Array.isArray(data?.videobyuser)) return data.videobyuser;
  if (Array.isArray(data?.videos)) return data.videos;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.videobyuser?.videos)) return data.videobyuser.videos;

  return [];
}

export function mapAparatVideos(items: AparatApiItem[]): AparatVideo[] {
  return items
    .map((item) => {
      const videoHash = item.hash || item.uid || String(item.id || "");

      if (!videoHash) return null;

      return {
        uid: videoHash,
        title: item.title || "RevivoEarth Media",
        description: item.description ? stripHtml(item.description) : "",
        thumbnail: item.small_poster || item.big_poster || item.frame || "",
        uploadDate: item.create_date || "",
        embedUrl: `https://www.aparat.com/video/video/embed/videohash/${videoHash}/vt/frame`,
      };
    })
    .filter(Boolean) as AparatVideo[];
}

export async function getAparatVideos(): Promise<AparatVideo[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(APARAT_API_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 RevivoEarthBot/1.0",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error("Aparat API failed:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    const items = getAparatItems(data);

    return mapAparatVideos(items);
  } catch (error) {
    clearTimeout(timeoutId);
    console.error("Aparat fetch error:", error);
    return [];
  }
}