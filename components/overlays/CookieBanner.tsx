"use client";

import { useEffect, useState, type FC } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useConsent } from "@/contexts/ConsentContext";
import { CONSENT_DELAY_MS, CONSENT_TEXTS } from "@/types/consent";
import Button from "../buttons/Button";

const LEAVE_MS = 260;
type Phase = "hidden" | "in" | "out";
const CookieBanner: FC = () => {
  //Hooks
  const { state, accept, reject } = useConsent();
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    if (state) return;
    const timer = window.setTimeout(() => setPhase("in"), CONSENT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [state]);
  useEffect(() => {
    if (phase !== "out") return;
    const timer = window.setTimeout(() => setPhase("hidden"), LEAVE_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);
  const close = (decide: () => void) => () => {
    decide();
    setPhase("out");
  };
  if (phase === "hidden" || typeof document === "undefined") return null;
  const leaving = phase === "out";
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className={`fixed inset-0 z-90 grid place-items-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-md ${
        leaving
          ? "pointer-events-none motion-safe:animate-[fadeOut_0.26s_ease-in_both]"
          : "motion-safe:animate-[fadeIn_0.25s_ease-out_both]"
      }`}
    >
      <div
        className={`relative w-full max-w-[26rem] overflow-hidden rounded-block border border-line bg-ink-soft shadow-panel ${
          leaving
            ? "motion-safe:animate-[floatDown_0.26s_cubic-bezier(.4,0,.9,.3)_both]"
            : "motion-safe:animate-[floatUp_0.45s_var(--ease-om)_both]"
        }`}
      >
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-accent"/>
        <div className="p-7 pt-8 xphone:p-9 xphone:pt-10">
          <p className="eyebrow mb-5">Souhlas</p>
          <h2 id="cookie-title" className="mb-3 text-step">
            {CONSENT_TEXTS.title}
          </h2>
          <p className="mb-2.5 text-chip text-ash">{CONSENT_TEXTS.lead}</p>
          <p className="mb-7 text-chip text-stone">{CONSENT_TEXTS.detail}</p>
          <div className="flex flex-col gap-2.5">
            <Button type="button" onClick={close(accept)} wFull isArrow={false} ariaLabel={CONSENT_TEXTS.accept}>
              {CONSENT_TEXTS.accept}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={close(reject)}
              wFull
              isArrow={false}
              ariaLabel={CONSENT_TEXTS.reject}
            >
              {CONSENT_TEXTS.reject}
            </Button>
          </div>
          <p className="mt-5 text-center text-chip text-stone">
            <Link
              href="/cookies"
              className="font-medium underline underline-offset-[3px] transition-colors duration-200 ease-om hover:text-bone"
            >
              {CONSENT_TEXTS.more}
            </Link>
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default CookieBanner;