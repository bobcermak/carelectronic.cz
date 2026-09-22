import type { FC } from "react";

const ScrollProgress: FC = () => (
  <div
    data-om-progress
    aria-hidden="true"
    className="pointer-events-none fixed inset-x-0 top-0 z-60 h-[3px] bg-line-track"
  >
    <span className="block h-full w-0 bg-accent"/>
  </div>
);
export default ScrollProgress;