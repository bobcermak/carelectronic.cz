import type { FC } from "react";
import { HERO_VIDEO } from "./heroContent";

const HeroVideo: FC = () => (
  <>
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className="hero-media absolute inset-0 size-full object-cover motion-reduce:hidden"
    >
      <source src={HERO_VIDEO.src} type={HERO_VIDEO.type}/>
    </video>
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/50"/>
    <div aria-hidden="true" className="overlay-home"/>
  </>
);
export default HeroVideo;