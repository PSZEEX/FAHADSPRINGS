import type { GalleryCategory } from "@/lib/site-content";

// Real school photos are picked up automatically from src/assets/gallery/<folder>/.
// Drop image files into the matching folder; the file name becomes the caption
// (e.g. "sports-day-2026.jpg" shows as "Sports day 2026").
const FOLDER_TO_CATEGORY: Record<string, GalleryCategory> = {
  "classroom-life": "Classroom life",
  "islamic-studies": "Islamic studies",
  "school-life": "School life",
  "co-curricular": "Co-curricular",
  events: "Events",
};

const DEFAULT_CATEGORY: GalleryCategory = "School life";

export type GalleryPhoto = { src: string; caption: string; category: GalleryCategory };

const files = import.meta.glob<string>("../assets/gallery/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
});

function captionFromFileName(fileName: string): string {
  const words = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function toPhoto(path: string, src: string): GalleryPhoto {
  const parts = path.split("/");
  const fileName = parts.at(-1) ?? "";
  const folder = parts.at(-2) ?? "";
  return {
    src,
    caption: captionFromFileName(fileName),
    category: FOLDER_TO_CATEGORY[folder] ?? DEFAULT_CATEGORY,
  };
}

export const GALLERY_PHOTOS: GalleryPhoto[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => toPhoto(path, src));
