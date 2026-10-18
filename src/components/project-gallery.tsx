"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { ChevronLeft, ChevronRight, Expand, ImageOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectPhoto } from "@/lib/projects";

interface ProjectGalleryProps {
  photos: ProjectPhoto[];
  coverImage: string;
  title: string;
  description?: string;
}

function GalleryImage({
  photo,
  sizes,
  priority = false,
  contain = false,
  thumbnail = false,
}: {
  photo: ProjectPhoto;
  sizes: string;
  priority?: boolean;
  contain?: boolean;
  thumbnail?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        role="img"
        aria-label={`${photo.alt} Image unavailable.`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted text-sm text-muted-foreground"
      >
        <ImageOff className="size-5" aria-hidden="true" />
        {!thumbnail && <span>Image unavailable</span>}
      </span>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={thumbnail ? "lazy" : "eager"}
      className={contain ? "object-contain" : "object-cover"}
      onError={() => setFailed(true)}
    />
  );
}

export function ProjectGallery({
  photos,
  coverImage,
  title,
  description,
}: ProjectGalleryProps) {
  const initialIndex = Math.max(0, photos.findIndex((photo) => photo.src === coverImage));
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const photo = photos[selectedIndex];

  function navigate(direction: number) {
    setSelectedIndex((current) => (current + direction + photos.length) % photos.length);
  }

  if (!photo) return null;

  return (
    <section className="mt-8 sm:mt-10" aria-label={`${title} photo gallery`}>
      <Dialog.Root>
        <figure>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label={`Enlarge photo ${selectedIndex + 1} of ${photos.length}: ${photo.alt}`}
              className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg border border-border/60 bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GalleryImage
                key={photo.src}
                photo={photo}
                priority={selectedIndex === initialIndex}
                sizes="(max-width: 768px) 100vw, 720px"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-background/95 px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors group-hover:bg-background">
                <Expand className="size-3.5" aria-hidden="true" />
                Enlarge
              </span>
            </button>
          </Dialog.Trigger>

          <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm" aria-live="polite" aria-atomic="true">
            <div>
              {description && <p className="font-medium text-foreground">{description}</p>}
              <p className="mt-1 text-muted-foreground">{photo.caption}</p>
            </div>
            <span className="shrink-0 pt-0.5 text-xs tabular-nums text-muted-foreground">
              {selectedIndex + 1} / {photos.length}
            </span>
          </figcaption>
        </figure>

        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3" role="group" aria-label="Choose a photo">
          {photos.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show photo ${index + 1}: ${item.alt}`}
              aria-pressed={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-video min-h-11 cursor-pointer overflow-hidden rounded-md border-2 border-transparent bg-muted outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-pressed:border-primary aria-pressed:ring-1 aria-pressed:ring-primary"
            >
              <GalleryImage key={item.src} photo={item} sizes="(max-width: 768px) 25vw, 180px" thumbnail />
            </button>
          ))}
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-(--z-backdrop) bg-black/80" />
          <Dialog.Content
            className="fixed inset-x-3 top-1/2 z-(--z-dialog) mx-auto flex max-h-[calc(100dvh-2rem)] max-w-6xl -translate-y-1/2 flex-col overflow-y-auto rounded-lg border border-border bg-background p-3 shadow-xl outline-none sm:inset-x-6 sm:p-5"
            onKeyDown={(event) => {
              if (photos.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                navigate(event.key === "ArrowLeft" ? -1 : 1);
              }
            }}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Dialog.Title className="text-sm font-semibold text-foreground sm:text-base">
                {title} photos
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" className="size-11 cursor-pointer" aria-label="Close photo viewer" title="Close photo viewer">
                  <X aria-hidden="true" />
                </Button>
              </Dialog.Close>
            </div>

            <div className="relative aspect-video max-h-[58dvh] w-full shrink-0 overflow-hidden rounded-md bg-muted">
              <GalleryImage key={photo.src} photo={photo} sizes="(max-width: 1280px) 100vw, 1152px" contain />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <Button variant="outline" size="icon" className="size-11 shrink-0 cursor-pointer" onClick={() => navigate(-1)} disabled={photos.length < 2} aria-label="Previous photo" title="Previous photo">
                <ChevronLeft aria-hidden="true" />
              </Button>
              <div className="min-w-0 text-center" aria-live="polite" aria-atomic="true">
                <p className="text-xs tabular-nums text-muted-foreground">{selectedIndex + 1} / {photos.length}</p>
                <Dialog.Description className="mt-1 text-sm text-foreground">
                  {photo.caption}
                </Dialog.Description>
                {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
              </div>
              <Button variant="outline" size="icon" className="size-11 shrink-0 cursor-pointer" onClick={() => navigate(1)} disabled={photos.length < 2} aria-label="Next photo" title="Next photo">
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
