export type AparatVideo = {
  uid: string;
  title: string;
  embedUrl: string;
  description?: string;
  thumbnail?: string;
  uploadDate?: string;
};

export const APARAT_CHANNEL_USERNAME = process.env.APARAT_USERNAME || "YOUR_APARAT_USERNAME";

export async function fetchAparatVideos(username: string): Promise<AparatVideo[]> {
  try {
    const res = await fetch(
      `https://www.aparat.com/etc/api/videoByUser/username/${username}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) return [];

    const data = await res.json();
    const items = data.videobyuser || [];

    return items.map((item: any) => {
      const uid = item.uid || item.id || item.hash;

      return {
        uid,
        title: item.title || "RevivoEarth Media",
        description: item.description || "",
        thumbnail: item.small_poster || item.big_poster || item.frame || "",
        uploadDate: item.create_date || "",
        embedUrl: `https://www.aparat.com/video/video/embed/videohash/${uid}/vt/frame`,
      };
    });
  } catch {
    return [];
  }
}

export async function getAparatVideos(): Promise<AparatVideo[]> {
  return fetchAparatVideos(APARAT_CHANNEL_USERNAME);
}

