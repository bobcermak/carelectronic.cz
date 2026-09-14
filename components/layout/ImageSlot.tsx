import Image from "next/image";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Místo pro fotku. Dokud fotka není, drží se poměr stran a čte se popis toho,
 * co tam patří — nikdy se nesází stocková náhrada.
 * Až fotka přijde do public/images, doplň `src` a `alt`.
 */
type ImageSlotProps = {
  /** Český popis, co na fotce má být. */
  placeholder: string;
  src?: string;
  alt?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
};
const ImageSlot: FC<ImageSlotProps> = ({
  placeholder,
  src,
  alt,
  ratio = "16 / 10",
  className,
  priority = false,
}) => (
  <div
    style={{ aspectRatio: ratio }}
    className={twMerge(
      "relative w-full max-w-full overflow-hidden rounded-block bg-line",
      className
    )}
  >
    {src ? (
      <Image src={src} alt={alt ?? placeholder} fill priority={priority} className="object-cover" sizes="(max-width: 760px) 100vw, 60vw"/>
    ) : (
      <p className="absolute inset-0 grid place-items-center p-6 text-center text-ui lowercase text-mokka">
        {placeholder}
      </p>
    )}
  </div>
);
export default ImageSlot;
