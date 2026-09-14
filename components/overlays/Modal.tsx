"use client";

import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "@phosphor-icons/react";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

const LEAVE_MS = 260;
type Phase = "closed" | "open" | "leaving";
type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  accentClass: string;
  wide?: boolean;
  children: ReactNode;
};
const Modal: FC<ModalProps> = ({ open, onClose, labelledBy, accentClass, wide = false, children }) => {
  //Hooks
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef(onClose);
  const [phase, setPhase] = useState<Phase>(open ? "open" : "closed");
  const [prevOpen, setPrevOpen] = useState<boolean>(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    setPhase(open ? "open" : "leaving");
  }
  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);
  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = window.setTimeout(() => setPhase("closed"), LEAVE_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);
  useEffect(() => {
    if (phase !== "open") return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus({ preventScroll: true });
    lockScroll();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
      restoreRef.current?.focus({ preventScroll: true });
    };
  }, [phase]);
  if (phase === "closed" || typeof document === "undefined") return null;
  const leaving = phase === "leaving";
  return createPortal(
    <div
      className={`fixed inset-0 z-100 grid place-items-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm ${
        leaving
          ? "pointer-events-none motion-safe:animate-[fadeOut_0.26s_ease-in_both]"
          : "motion-safe:animate-[fadeIn_0.2s_ease-out_both]"
      }`}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={`relative w-full overflow-hidden rounded-block border border-line bg-white p-7 text-center shadow-panel outline-none xphone:p-9 ${
          wide ? "my-8 max-w-3xl" : "max-w-[26rem]"
        } ${
          leaving
            ? "motion-safe:animate-[floatDown_0.26s_cubic-bezier(.4,0,.9,.3)_both]"
            : "motion-safe:animate-[floatUp_0.4s_cubic-bezier(.2,.8,.25,1)_both]"
        }`}
      >
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-20 h-1 ${accentClass}`}/>
        <button
          type="button"
          onClick={onClose}
          aria-label="Zavřít"
          className="absolute right-4 top-4 z-20 grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-white text-mokka backdrop-blur-md transition-colors duration-200 hover:border-ink hover:text-ink active:border-ink active:text-ink"
        >
          <XIcon size={18} weight="light"/>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
export default Modal;