export type HeroStat = {
  value: string;
  label: string;
};
export const HERO_VIDEO = {
  src: "/videos/homepage-video.mov",
  type: "video/mp4",
};
export const HERO_EYEBROW = "Chiptuning a autoelektronika · Liberec";
export const HERO_TITLE = "Výkon, který jsme vám";
export const HERO_TITLE_ACCENT = "naměřili.";
export const HERO_ACTIONS = {
  primary: { href: `/konfigurator`, label: "nezávazná poptávka" },
  secondary: { href: "#", label: "jak to funguje" },
};
export const HERO_STATS: HeroStat[] = [
  { value: "2003", label: "na trhu" },
  { value: "1x", label: "dyno v kraji" },
  { value: "TP", label: "homologovaný zápis" },
];
export const HERO_PARTNER = "Xtuning partner";