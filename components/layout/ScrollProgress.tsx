import type { FC } from "react";

const RAIL = "pointer-events-none fixed inset-y-2 z-60 w-0.75 overflow-hidden rounded-pill bg-line-track";
const FILL = "absolute inset-x-0 block h-0 rounded-pill bg-accent";
const ScrollProgress: FC = () => (
  <>
    <div data-om-rail aria-hidden="true" className={`${RAIL} left-0.5`}>
      <span className={`${FILL} top-0`}/>
    </div>
    <div data-om-rail aria-hidden="true" className={`${RAIL} right-0.5`}>
      <span className={`${FILL} bottom-0`}/>
    </div>
  </>
);
export default ScrollProgress;