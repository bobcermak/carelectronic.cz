"use client";

import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import Hamburger from "./Hamburger";

type NavbarClientProps = {
  logo: ReactNode,
  cta: ReactNode,
  children: ReactNode
};
const NavbarClient: FC<NavbarClientProps> = ({ logo, cta, children }) => {
  const DESKTOP_MQ = "(min-width: 1281px)";
  const MENU_ID = "hlavni-menu";
  //Hooks
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);
  useEffect(() => {
    if (!isOpen) return;
    lockScroll();
    return unlockScroll;
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    const desktop = window.matchMedia(DESKTOP_MQ);
    const onDesktop = () => {
      if (desktop.matches) close();
    };
    const root = rootRef.current;
    const onLinkClick = (e: Event) => {
      if ((e.target as HTMLElement).closest("a")) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    desktop.addEventListener("change", onDesktop);
    root?.addEventListener("click", onLinkClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
      desktop.removeEventListener("change", onDesktop);
      root?.removeEventListener("click", onLinkClick);
    };
  }, [isOpen]);
  return (
    <>
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm transition-[opacity,visibility] duration-300 laptop:hidden
          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      />
      <header className="fixed inset-x-0 top-0 z-50">
        <div ref={rootRef} className="relative mx-auto w-container pt-4 stablet:pt-5 laptop:pt-6">
          <nav
            aria-label="Hlavní navigace"
            className="flex items-center justify-between gap-4 py-1.5 pl-4 pr-1.5 laptop:-mx-5 laptop:gap-6 laptop:py-2 laptop:pl-5 laptop:pr-2"
          >
            {logo}
            <div className="flex items-center gap-3 laptop:gap-10.5">
              <ul
                id={MENU_ID}
                className={`flex list-none flex-col
                  absolute inset-x-0 top-[calc(100%+12px)] rounded-block border border-line bg-ink-soft p-2 shadow-panel
                  transition-[opacity,translate] duration-250 ease-om
                  laptop:static laptop:flex-row laptop:items-center laptop:gap-8.5
                  laptop:rounded-none laptop:border-0 laptop:bg-transparent laptop:p-0 laptop:shadow-none
                  laptop:pointer-events-auto laptop:translate-y-0 laptop:opacity-100
                  ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
              >
                {children}
              </ul>
              {cta}
              <Hamburger
                isOpen={isOpen}
                onToggle={() => setIsOpen((prev) => !prev)}
                controls={MENU_ID}
                className="laptop:hidden"
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default NavbarClient;