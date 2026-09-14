import type { FC } from "react";

/**
 * Progress rail — 3 px lišta nahoře, roste scroll-driven CSS animací.
 * Žádný JS listener, žádný requestAnimationFrame.
 */
const ScrollProgress: FC = () => (
  <div
    data-om-progress
    aria-hidden="true"
    className="pointer-events-none fixed inset-x-0 top-0 z-60 h-[3px] bg-line"
  >
    <span className="block h-full w-0 bg-accent"/>
  </div>
);
export default ScrollProgress;
