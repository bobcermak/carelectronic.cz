"use client";

import { useRef, type FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const TRAVEL = 56;
const ScrollCue: FC = () => {
  //Hooks
  const cueRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cue = cueRef.current;
      gsap.fromTo(cue, { y: 0, autoAlpha: 1 }, {
        y: -TRAVEL,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: cue?.closest("section"),
          start: "top top",
          end: "bottom 15%",
          scrub: 0.8,
        },
      });
    });
  }, { scope: cueRef });
  return (
    <div ref={cueRef} aria-hidden="true" className="hidden flex-col items-center gap-2.5 will-change-transform tablet:flex">
      <span className="text-label uppercase tracking-[0.32em] text-steel">scroll</span>
      <span className="grid h-10.5 w-6.5 place-items-center rounded-pill border border-line-strong">
        <span className="size-1.25 rounded-pill bg-accent motion-safe:animate-[omCueIdle_1.6s_cubic-bezier(.16,.84,.24,1)_infinite]"/>
      </span>
    </div>
  );
};
export default ScrollCue;