import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroAvatarProps {
  imageSrc?: string;
  initials: string;
  size?: "md" | "lg";
  alt: string;
  accentClass?: string;
  imageFit?: "cover" | "contain";
}

const sizes = {
  md: "h-32 w-32 sm:h-40 sm:w-40",
  lg: "h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-56 lg:w-56",
};

export function HeroAvatar({
  imageSrc,
  initials,
  size = "lg",
  alt,
  accentClass,
  imageFit = "cover",
}: HeroAvatarProps) {
  const sizeClass = sizes[size];

  return (
    <div className="relative flex items-center justify-center">
      {/* Energy beam — faint arc toward the left */}
      <div
        className="pointer-events-none absolute right-1/2 top-1/2 -z-10 h-px w-32 -translate-y-1/2 sm:w-40 md:w-52"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-gradient-to-l from-primary/25 via-primary/8 to-transparent blur-[2px] motion-reduce:opacity-60" />
      </div>

      {/* Outer glow — radial, behind everything */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-6 -z-20 rounded-full opacity-0 blur-2xl transition-opacity dark:opacity-100",
          "bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)]",
          "dark:opacity-20 dark:animate-glow-pulse",
          accentClass,
        )}
        aria-hidden="true"
      />

      {/* Secondary softer glow layer for depth */}
      <div
        className="pointer-events-none absolute -inset-10 -z-30 rounded-full bg-primary/5 opacity-0 blur-3xl dark:opacity-100"
        aria-hidden="true"
      />

      {/* Orbit ring */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-3 rounded-full border border-primary/10 dark:border-primary/25",
          "hover:animate-orbit-spin",
        )}
        aria-hidden="true"
      />

      {/* Avatar */}
      <div
        className={cn(
          "relative overflow-hidden rounded-full border border-border/40 bg-muted shadow-sm",
          "dark:border-white/[0.08] dark:shadow-none",
          sizeClass,
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={imageFit === "contain" ? "object-contain" : "object-cover object-top"}
            priority
            sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 224px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-muted-foreground sm:text-4xl">
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}
