import Image from "next/image";

interface MdxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function MdxImage({
  src,
  alt,
  width = 800,
  height = 450,
}: MdxImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg border border-border/60"
      />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
