import type { FC } from "react";

const RAIL = "pointer-events-none fixed inset-y-0 z-60 w-0.75";
const ScrollProgress: FC = () => (
  <>
    <div data-om-rail aria-hidden="true" className={`${RAIL} left-0.5`}>
      <span className="absolute inset-x-0 top-0 block h-0 rounded-pill bg-accent"/>
    </div>
    <div data-om-rail aria-hidden="true" className={`${RAIL} right-0.5`}>
      <span className="absolute inset-x-0 bottom-0 block h-0 rounded-pill bg-accent"/>
    </div>
  </>
);
export default ScrollProgress;