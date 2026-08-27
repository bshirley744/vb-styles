import Image from "next/image";
import type { PortfolioImage } from "@/content";

export default function PortfolioGrid({
  images,
  priority = false,
}: {
  images: PortfolioImage[];
  /** Eager-load the first row — use on the topmost grid only. */
  priority?: boolean;
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, i) => (
        <li key={image.src}>
          <div className="relative aspect-4/5 overflow-hidden bg-sand">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              priority={priority && i < 3}
            />
          </div>
          {image.caption && (
            <p className="mt-3 text-xs leading-relaxed tracking-wide text-muted">
              {image.caption}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
