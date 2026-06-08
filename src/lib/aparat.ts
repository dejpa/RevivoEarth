export const APARAT_CHANNEL_USERNAME = "revivoearth";

export type AparatVideo = {
  uid: string;
  title: string;
  embedUrl: string;
  poster?: string;
  duration?: string;
};

type AparatVideoRaw = {
  uid: string;
  title: string;
  frame?: string;
  big_poster?: string;
  duration?: string;
};

export function getAparatEmbedUrl(videohash: string): string {
  return `https://www.aparat.com/video/video/embed/videohash/${videohash}/vt/frame`;
}

export async function fetchAparatVideos(
  username: string,
  perPage = 50
): Promise<AparatVideo[]> {
  const url = `https://www.aparat.com/etc/api/videoByUser/username/${encodeURIComponent(username)}/perpage/${perPage}`;

  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Aparat API error: ${res.status}`);
  }

  const data = await res.json();
  const list: AparatVideoRaw[] = data.videobyuser ?? [];

  return list.map((item) => ({
    uid: item.uid,
    title: item.title,
    embedUrl: item.frame || getAparatEmbedUrl(item.uid),
    poster: item.big_poster,
    duration: item.duration,
  }));
}
