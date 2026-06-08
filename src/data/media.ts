export type VideoItem = {
  id: string;
  /** YouTube video ID or full embed URL */
  youtubeId: string;
  titleKey: string;
};

export type PhotoItem = {
  id: string;
  src: string;
  titleKey: string;
};

/** Add your YouTube video IDs here */
export const videos: VideoItem[] = [
  // { id: "1", youtubeId: "dQw4w9WgXcQ", titleKey: "video1" },
];

/** Add photo/media gallery items here */
export const photos: PhotoItem[] = [
  // { id: "1", src: "/media/example.webp", titleKey: "photo1" },
];

export function getYouTubeEmbedUrl(youtubeId: string): string {
  const id = youtubeId.includes("youtube.com") || youtubeId.includes("youtu.be")
    ? youtubeId.match(/(?:v=|\/embed\/|youtu\.be\/)([\w-]+)/)?.[1] ?? youtubeId
    : youtubeId;
  return `https://www.youtube.com/embed/${id}`;
}
