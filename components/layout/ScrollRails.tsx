import type { FC } from "react";

const ScrollRails: FC = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 hidden laptop:block">
    <div
      data-om-rail
      className="absolute left-0 top-0 flex h-full w-0.75 flex-col justify-start bg-line-track"
    >
      <span className="block h-0 w-full bg-accent"/>
    </div>
    <div
      data-om-rail
      className="absolute right-0 top-0 flex h-full w-0.75 flex-col justify-end bg-line-track"
    >
      <span className="block h-0 w-full bg-accent"/>
    </div>
  </div>
);
export default ScrollRails;