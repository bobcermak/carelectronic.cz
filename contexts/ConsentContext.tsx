"use client";

import { createContext, useCallback, useContext, useSyncExternalStore, type FC, type ReactNode } from "react";
import { CONSENT_STORAGE_KEY, type ConsentDecision, type ConsentState, type ConsentValue } from "@/types/consent";

const readStored = (): ConsentState | null => {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return parsed.analytics === "granted" || parsed.analytics === "denied"
      ? { analytics: parsed.analytics, decidedAt: parsed.decidedAt ?? "" }
      : null;
  } catch {
    return null;
  }
};
let snapshot: ConsentState | null = null;
let initialised = false;
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
const getSnapshot = (): ConsentState | null => {
  if (!initialised) {
    snapshot = readStored();
    initialised = true;
  }
  return snapshot;
};
const getServerSnapshot = (): ConsentState | null => null;
const publish = (next: ConsentState | null) => {
  snapshot = next;
  initialised = true;
  listeners.forEach((listener) => listener());
};
const ConsentContext = createContext<ConsentValue>({
  state: null,
  accept: () => {},
  reject: () => {},
  reopen: () => {},
});
const ConsentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  //Hooks
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const decide = useCallback((analytics: ConsentDecision) => {
    const next: ConsentState = { analytics, decidedAt: new Date().toISOString() };
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
    } catch {
    }
    publish(next);
  }, []);
  const accept = useCallback(() => decide("granted"), [decide]);
  const reject = useCallback(() => decide("denied"), [decide]);
  const reopen = useCallback(() => {
    try {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
    }
    publish(null);
  }, []);
  return <ConsentContext value={{ state, accept, reject, reopen }}>{children}</ConsentContext>;
};
export const useConsent = (): ConsentValue => useContext(ConsentContext);
export default ConsentProvider;