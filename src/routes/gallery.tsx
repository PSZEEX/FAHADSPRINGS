import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import { delayStyle } from "@/components/motion";
import { PageHero, meta } from "@/components/site";
import { GALLERY_PHOTOS } from "@/lib/gallery-photos";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const TILE_STAGGER_MS = 60;

type Tile = { caption: string; category: GalleryCategory; src?: string };

// Real photos from src/assets/gallery replace the placeholder tiles as soon as any are added.
const PLACEHOLDER_TILES: Tile[] = GALLERY.map((p) => ({
  caption: p.caption,
  category: p.category,
  ...(p.isHero ? { src: hero } : {}),
}));
const TILES: Tile[] = GALLERY_PHOTOS.length > 0 ? GALLERY_PHOTOS : PLACEHOLDER_TILES;

export const Route = createFileRoute("/gallery")({
  head: () =>
    meta(
      "Gallery | Fahad Springs Junior School",
      "Photos of school life, classes and events at Fahad Springs Junior School.",
    ),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const photos = active === "All" ? TILES : TILES.filter((p) => p.category === active);

  return (
    <>
      <PageHero eyebrow="Gallery" title="A glimpse of life at our school">
        Moments from the classroom, the prayer hall, the playground and our school events.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by category">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                active === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-primary hover:-translate-y-0.5 hover:bg-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Keyed by category so the tiles replay their entrance when the filter changes. */}
        <div key={active} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={p.src ?? p.caption}
              className="animate-fade-up hover-lift group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              style={delayStyle(i * TILE_STAGGER_MS)}
            >
              <div className="overflow-hidden">
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="img-zoom aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div className="pattern-bg img-zoom grid aspect-[4/3] w-full place-items-center text-primary/60">
                    <div className="text-center">
                      <ImageIcon className="mx-auto h-10 w-10" aria-hidden="true" />
                      <p className="mt-2 text-sm">Photo coming soon</p>
                    </div>
                  </div>
                )}
              </div>
              <figcaption className="p-4">
                <p className="text-xs font-semibold tracking-widest text-accent-foreground uppercase">
                  {p.category}
                </p>
                <p className="mt-1 font-semibold text-primary">{p.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
