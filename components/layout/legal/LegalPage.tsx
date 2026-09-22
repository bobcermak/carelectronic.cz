import Link from "next/link";
import type { FC, ReactNode } from "react";
import { LEGAL_LINKS } from "@/types/legal";

type LegalPageProps = {
  title: string;
  updated: string;
  path: string;
  children: ReactNode;
};
const PROSE = [
  "flex flex-col gap-5",
  "[&_h2]:mt-10 [&_h2]:text-step [&_h2]:leading-step [&_h2]:tracking-step",
  "[&_ul]:flex [&_ul]:flex-col [&_ul]:gap-3",
  "[&_li]:relative [&_li]:pl-5",
  "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.8em] [&_li]:before:h-px [&_li]:before:w-2.5 [&_li]:before:bg-accent [&_li]:before:content-['']",
  "[&_strong]:font-semibold [&_strong]:text-bone",
  "[&_a]:text-accent-text [&_a]:underline [&_a]:underline-offset-[3px]",
].join(" ");
const LegalPage: FC<LegalPageProps> = ({ title, updated, path, children }) => (
  <article>
    <header className="flex min-h-[60svh] items-end pb-9 pt-hero">
      <div className="mx-auto flex w-container max-w-[var(--width-text)] flex-col gap-6">
        <p data-reveal="y" className="eyebrow">
          Právní dokument
        </p>
        <h1 data-reveal="y" style={{ animationRange: "entry 8% cover 26%" }}>
          {title}
        </h1>
      </div>
    </header>
    <div className="py-section-tight">
      <div className="mx-auto flex w-container max-w-[var(--width-text)] flex-col gap-10">
        <p className="label">aktualizováno {updated}</p>
        <div className={PROSE}>{children}</div>
        <nav
          aria-label="Ostatní dokumenty"
          className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-8"
        >
          {LEGAL_LINKS.filter((link) => link.href !== path).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-chip text-stone transition-colors duration-200 ease-om hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </article>
);
export default LegalPage;