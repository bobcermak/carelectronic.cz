import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionTone = "base" | "deep" | "light";
type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  tone?: SectionTone;
  tight?: boolean;
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
};
const TONE_STYLES: Record<SectionTone, string> = {
  base: "bg-ink",
  deep: "bg-ink-deep",
  light: "bg-bone",
};
const Section: FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  lead,
  tone = "base",
  tight = false,
  className,
  children,
  ...rest
}) => {
  const onLight = tone === "light";
  return (
    <section
      id={id}
      {...rest}
      className={twMerge(
        tight ? "py-section-tight" : "py-section",
        TONE_STYLES[tone],
        className
      )}
    >
      <div className="mx-auto flex w-container max-w-[1180px] flex-col gap-8">
        {eyebrow && (
          <p data-reveal="y" className="eyebrow">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            data-reveal="y"
            style={{ animationRange: "entry 8% cover 26%" }}
            className={onLight ? "text-ink" : ""}
          >
            {title}
          </h2>
        )}
        {lead && (
          <p
            data-reveal="y"
            style={{ animationRange: "entry 12% cover 26%" }}
            className={twMerge("max-w-[62ch]", onLight ? "text-graphite" : "")}
          >
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
export default Section;