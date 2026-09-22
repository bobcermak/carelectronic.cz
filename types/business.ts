export const BUSINESS_BRAND = "CarElectronic";
export const BUSINESS_OWNER = "Viktor Šeda";
export const BUSINESS_LEGAL_NAME = "Viktor Šeda";
export const BUSINESS_FOUNDED = 2003;
export const BUSINESS_ICO = "72583843";
export const BUSINESS_ICO_DISPLAY = "725 838 43";
export type PostalAddress = {
  street: string;
  city: string;
  zip: string;
  country: string;
  countryCode: string;
};
export const ADDRESS_SHOP: PostalAddress = {
  street: "Hodkovická 102",
  city: "Liberec 25",
  zip: "463 12",
  country: "Česko",
  countryCode: "CZ",
};
export const ADDRESS_BILLING: PostalAddress = {
  street: "Vrbová 372",
  city: "Šimonovice",
  zip: "463 12",
  country: "Česko",
  countryCode: "CZ",
};
export const formatAddress = (address: PostalAddress) => `${address.street}, ${address.zip} ${address.city}`;
export const BUSINESS_PHONE = "+420 603 513 643";
export const BUSINESS_PHONE_HREF = `tel:${BUSINESS_PHONE.replace(/\s/g, "")}`;
export const BUSINESS_EMAIL = "info@carelectronic.cz";
export const BUSINESS_EMAIL_HREF = `mailto:${BUSINESS_EMAIL}`;
export const FACEBOOK_URL = "";
export type OpeningDay = {
  day: number;
  label: string;
  short: string;
  open: string | null;
  close: string | null;
};
export const OPENING_HOURS: OpeningDay[] = [
  { day: 1, label: "Pondělí", short: "po", open: "08:00", close: "17:00" },
  { day: 2, label: "Úterý", short: "út", open: "08:00", close: "17:00" },
  { day: 3, label: "Středa", short: "st", open: "08:00", close: "17:00" },
  { day: 4, label: "Čtvrtek", short: "čt", open: "08:00", close: "17:00" },
  { day: 5, label: "Pátek", short: "pá", open: "08:00", close: "17:00" },
  { day: 6, label: "Sobota", short: "so", open: null, close: null },
  { day: 7, label: "Neděle", short: "ne", open: null, close: null },
];
export const OPENING_HOURS_LABEL = "PO—PÁ 8:00—17:00";
export const BUSINESS_TIMEZONE = "Europe/Prague";
export const REPLY_WITHIN_HOURS = 24;
export const yearsInBusiness = (now: Date = new Date()) => now.getFullYear() - BUSINESS_FOUNDED;