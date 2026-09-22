import Image from "next/image";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

type ImageSlotProps = {
  placeholder: string;
  src?: string;
  alt?: string;
  ratio?: string;
  framed?: boolean;
  className?: string;
  priority?: boolean;
};
const ImageSlot: FC<ImageSlotProps> = ({
  placeholder,
  src,
  alt,
  ratio = "16 / 10",
  framed = false,
  className,
  priority = false,
}) => (
  <div
    style={{ aspectRatio: ratio }}
    className={twMerge(
      "relative w-full max-w-full overflow-hidden rounded-block border bg-ink-soft",
      framed ? "border-accent" : "border-line",
      className
    )}
  >
    {src ? (
      <Image
        src={src}
        alt={alt ?? placeholder}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 760px) 100vw, 60vw"
      />
    ) : (
      <p className="absolute inset-0 grid place-items-center p-6 text-center text-chip lowercase text-stone">
        {placeholder}
      </p>
    )}
  </div>
);
export default ImageSlot;