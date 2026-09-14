import { ADDRESS_SHOP, BUSINESS_EMAIL, BUSINESS_EMAIL_HREF, BUSINESS_PHONE, BUSINESS_PHONE_HREF, OPENING_HOURS_LABEL, REPLY_WITHIN_HOURS, formatAddress } from "./business";

export const CONTACT_SECTION_ID = "poptavka";
export const CONTACT_EMAIL = BUSINESS_EMAIL;
export const CONTACT_EMAIL_HREF = BUSINESS_EMAIL_HREF;
export const CONTACT_PHONE = BUSINESS_PHONE;
export const CONTACT_PHONE_HREF = BUSINESS_PHONE_HREF;
export const CONTACT_EYEBROW = "Poptávka";
export const CONTACT_TITLE = "Napište parametry vozu, ozveme se do 24 hodin.";
export const CONTACT_LEAD = "Značka, motor a rok výroby stačí. Podle toho řekneme, co se s vozem dá dělat a kolik to stojí — cena je konečná.";
export type ContactInfoIcon = "phone" | "mail" | "place" | "clock";
export type ContactInfoItem = {
  icon: ContactInfoIcon;
  label: string;
  href?: string;
};
export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: "phone", label: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
  { icon: "mail", label: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
  { icon: "place", label: formatAddress(ADDRESS_SHOP) },
  { icon: "clock", label: OPENING_HOURS_LABEL },
];
export { REPLY_WITHIN_HOURS };