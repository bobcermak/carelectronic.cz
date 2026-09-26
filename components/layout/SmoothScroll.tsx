"use client";

import { useEffect, type FC } from "react";
import gsap from "gsap";

const EASE = 0.105;
const SNAP = 0.4;
const LINE = 16;
const OWN = 2;
const SmoothScroll: FC = () => {
  //Hooks
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(hover: none)");
    if (reduced.matches || coarse.matches) return;

    let target = window.scrollY;
    let expected = -1;
    let running = false;

    const limit = () => document.documentElement.scrollHeight - window.innerHeight;
    const isLocked = () => document.body.style.position === "fixed";
    const write = (value: number) => {
      expected = value;
      window.scrollTo(0, value);
    };
    const tick = () => {
      const from = window.scrollY;
      const rest = target - from;
      if (Math.abs(rest) < SNAP) {
        write(target);
        halt();
        return;
      }
      write(from + rest * (1 - Math.pow(1 - EASE, gsap.ticker.deltaRatio())));
    };
    const halt = () => {
      if (!running) return;
      running = false;
      gsap.ticker.remove(tick);
    };
    const run = () => {
      if (running) return;
      running = true;
      gsap.ticker.add(tick);
    };
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || isLocked()) return;
      e.preventDefault();
      const step = e.deltaMode === 1
        ? e.deltaY * LINE
        : e.deltaMode === 2
          ? e.deltaY * window.innerHeight
          : e.deltaY;
      target = gsap.utils.clamp(0, limit(), (running ? target : window.scrollY) + step);
      run();
    };
    const onScroll = () => {
      if (Math.abs(window.scrollY - expected) <= OWN) return;
      target = window.scrollY;
      halt();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      halt();
    };
  }, []);
  return null;
};
export default SmoothScroll;