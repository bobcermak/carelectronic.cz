import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import Wordmark from "./Wordmark";

const LogoLoader: FC<{ className?: string }> = ({ className }) => (
  <div className={twMerge("grid place-items-center gap-5 bg-ink", className)}>
    <Wordmark/>
    <span aria-hidden="true" className="block h-px w-30 overflow-hidden bg-line-track">
      <span className="block h-full w-1/3 bg-accent motion-safe:animate-[loadSweep_1.1s_var(--ease-om)_infinite]"/>
    </span>
    <span className="sr-only">Načítání</span>
  </div>
);
export default LogoLoader;