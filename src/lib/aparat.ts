export type AparatVideo = {
  uid: string;
  title: string;
  embedUrl: string;
  description?: string;
  thumbnail?: string;
  uploadDate?: string;
};

export const APARAT_USERNAME =
  process.env.APARAT_USERNAME || "revivoearth";

type AparatApiItem = {
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

export async function getAparatVideos(): Promise<AparatVideo[]> {
  try {
    const res = await fetch(
      `https://www.aparat.com/etc/api/videoByUser/username/${APARAT_USERNAME}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      console.error("Aparat API failed:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();

    const items: AparatApiItem[] =
      data.videobyuser ||
      data.videos ||
      data.data ||
      [];

    return items
      .map((item) => {
        const videoHash = item.hash || item.uid || String(item.id || "");

        if (!videoHash) {
          return null;
        }

        return {
          uid: videoHash,
          title: item.title || "RevivoEarth Media",
          description: item.description || "",
          thumbnail: item.small_poster || item.big_poster || item.frame || "",
          uploadDate: item.create_date || "",
          embedUrl: `https://www.aparat.com/video/video/embed/videohash/${videoHash}/vt/frame`,
        };
      })
      .filter(Boolean) as AparatVideo[];
  } catch (error) {
    console.error("Aparat fetch error:", error);
    return [];
  }
}