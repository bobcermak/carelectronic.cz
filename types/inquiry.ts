import { BUSINESS_EMAIL, REPLY_WITHIN_HOURS } from "./business";

export { REPLY_WITHIN_HOURS };
export const FALLBACK_CONTACT = BUSINESS_EMAIL;
export const MIN_FILL_MS = 800;
export const NOTE_MAX = 2000;
export const INQUIRY_SERVICES = ["chiptuning", "autoelektronika", "měření na dynu", "jiné"] as const;
export type InquiryService = (typeof INQUIRY_SERVICES)[number];
export const DEFAULT_SERVICE: InquiryService = "chiptuning";
export type Inquiry = {
  car: string;
  engine: string;
  year: string;
  note: string;
  phone: string;
  email: string;
  service: InquiryService;
};
export type InquiryField = keyof Inquiry;
export const INQUIRY_LABELS: Record<InquiryField, string> = {
  car: "Značka a model",
  engine: "Motor",
  year: "Rok výroby",
  note: "Doplnění",
  phone: "Telefon",
  email: "E-mail",
  service: "Poptávka k",
};
export const INQUIRY_PLACEHOLDERS: Partial<Record<InquiryField, string>> = {
  car: "Škoda Octavia III",
  engine: "2.0 TDI, 110 kW",
  year: "2016",
  note: "co vás na voze trápí nebo čeho chcete dosáhnout",
};
export type ProcessStep = {
  title: string;
  desc: string;
};
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Vstupní měření",
    desc: "vůz jde na výkonovou brzdu tak, jak přijel — z toho je protokol „před“",
  },
  {
    title: "Úprava mapy",
    desc: "mapa řídicí jednotky se upraví na konkrétní motor, ne podle katalogu",
  },
  {
    title: "Kontrolní měření",
    desc: "druhé měření na stejné brzdě — až ono řekne, co úprava skutečně dala",
  },
  {
    title: "Homologace",
    desc: `zápis změny do technického průkazu, odpověď na poptávku do ${REPLY_WITHIN_HOURS} hodin`,
  },
];