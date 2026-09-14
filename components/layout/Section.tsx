import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  /** Tmavá sekce — druhé z povolených pozadí. */
  dark?: boolean;
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
};
/** Sekce s jednotným rytmem: eyebrow → nadpis → lead → obsah. */
const Section: FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  lead,
  dark = false,
  className,
  children,
  ...rest
}) => (
  <section
    id={id}
    {...rest}
    className={twMerge("py-section", dark ? "bg-ink text-latte" : "bg-cream", className)}
  >
    <div className="mx-auto flex w-container max-w-[1180px] flex-col gap-8">
      {eyebrow && (
        <p data-reveal="y" className="eyebrow">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 data-reveal="y" style={{ animationRange: "entry 12% cover 30%" }} className={dark ? "text-cream" : ""}>
          {title}
        </h2>
      )}
      {lead && (
        <p
          data-reveal="y"
          style={{ animationRange: "entry 16% cover 30%" }}
          className={twMerge("max-w-[62ch]", dark ? "text-sand" : "")}
        >
          {lead}
        </p>
      )}
      {children}
    </div>
  </section>
);
export default Section;
