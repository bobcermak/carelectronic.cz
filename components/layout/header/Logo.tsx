import Link from "next/link";
import type { FC } from "react";

const Logo: FC = () => (
  <Link
    href="/"
    aria-label="CarElectronic — domů"
    className="group inline-flex shrink-0 items-center gap-3.5"
  >
    <span className="grid size-8.5 shrink-0 place-items-center rounded-mark bg-accent">
      <svg viewBox="0 0 64 64" aria-hidden="true" className="size-full" fill="none">
        <path d="M41.4 23A13 13 0 1 0 41.4 41" stroke="#FFFFFF" strokeWidth="4.8" strokeLinecap="round"/>
        <rect x="38" y="30.4" width="9.6" height="3.2" rx="0.8" fill="#FFFFFF"/>
      </svg>
    </span>
    <span className="wordmark text-logo">
      car<span>electronic</span>
    </span>
  </Link>
);
export default Logo;