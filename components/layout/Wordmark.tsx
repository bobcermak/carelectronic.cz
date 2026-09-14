import type { FC } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Znak + wordmark. Znak je technická linie (tenké tažené čáry), wordmark je text:
 * „car“ v 600, „electronic“ ve 400 mokka. Až přijdou finální loga do public/images/brand,
 * nahraď <Mark/> importem SVG — wordmark zůstává textem.
 */
type WordmarkProps = {
  className?: string;
  /** Na tmavém pozadí se překlápí do latte. */
  onDark?: boolean;
};
const Wordmark: FC<WordmarkProps> = ({ className, onDark = false }) => (
  <span className={twMerge("inline-flex items-center gap-2.5", className)}>
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={twMerge("size-6 shrink-0", onDark ? "text-accent" : "text-accent")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 16.5h18"/>
      <path d="M4.5 16.5v-3.2l2.2-5a2 2 0 0 1 1.83-1.2h6.94a2 2 0 0 1 1.83 1.2l2.2 5v3.2"/>
      <path d="M8 20v-3.5M16 20v-3.5"/>
    </svg>
    <span
      className={twMerge(
        "text-[1.05rem] font-semibold lowercase tracking-[-0.02em]",
        onDark ? "text-latte" : "text-ink"
      )}
    >
      car<span className={onDark ? "font-normal text-sand" : "font-normal text-mokka"}>electronic</span>
    </span>
  </span>
);
export default Wordmark;
