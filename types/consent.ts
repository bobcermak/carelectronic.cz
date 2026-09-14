export const CONSENT_STORAGE_KEY = "ce-consent-v1";
export const CONSENT_DELAY_MS = 900;
export type ConsentDecision = "granted" | "denied";
export type ConsentState = {
  analytics: ConsentDecision;
  decidedAt: string;
};
export type ConsentValue = {
  state: ConsentState | null;
  accept: () => void;
  reject: () => void;
  reopen: () => void;
};
export const CONSENT_TEXTS = {
  title: "Cookies",
  lead: "Nezbytné cookies web potřebuje k provozu. Navíc bychom rádi měřili, jak se tu lidem prochází — podle toho web ladíme.",
  detail: "Měření neukládá jméno ani e-mail a data se nikomu neprodávají.",
  accept: "Přijmout vše",
  reject: "Jen nezbytné",
  more: "Co se ukládá",
} as const;