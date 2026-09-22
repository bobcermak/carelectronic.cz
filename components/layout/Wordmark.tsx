import type { FC } from "react";
import { twMerge } from "tailwind-merge";

type WordmarkProps = {
  className?: string;
  onLight?: boolean;
};
const Wordmark: FC<WordmarkProps> = ({ className, onLight = false }) => (
  <span className={twMerge("inline-flex items-center gap-2.5", className)}>
    <span className="grid size-8.5 shrink-0 place-items-center rounded-mark bg-accent p-1.75">
      <svg viewBox="0 0 64 64" aria-hidden="true" className="size-full" fill="none">
        <path d="M14 43a18 18 0 0 1 36 0" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round"/>
        <rect x="14" y="48" width="10" height="7" rx="3.5" fill="#FFFFFF"/>
        <rect x="27" y="48" width="8" height="7" rx="3.5" fill="#FFFFFF"/>
        <rect x="38" y="48" width="12" height="7" rx="3.5" fill="#FFFFFF"/>
      </svg>
    </span>
    <span className={twMerge("wordmark", onLight ? "text-ink" : "")}>
      car<span>electronic</span>
    </span>
  </span>
);
export default Wordmark;