import { ADDRESS_SHOP, BUSINESS_EMAIL, BUSINESS_FOUNDED, BUSINESS_ICO, BUSINESS_LEGAL_NAME, BUSINESS_OWNER, BUSINESS_PHONE, FACEBOOK_URL, OPENING_HOURS } from "@/types/business";
import { SERVICES } from "@/types/services";
import { absoluteUrl, SITE_DESCRIPTION, SITE_LANG, SITE_NAME, SITE_NAME_ALTS, SITE_URL } from "@/types/site";

const BUSINESS_ID = `${SITE_URL}/#provozovna`;
const SITE_ID = `${SITE_URL}/#website`;
const OWNER_ID = `${SITE_URL}/#viktor-seda`;
const DAY_URLS: Record<number, string> = {
  1: "https://schema.org/Monday",
  2: "https://schema.org/Tuesday",
  3: "https://schema.org/Wednesday",
  4: "https://schema.org/Thursday",
  5: "https://schema.org/Friday",
  6: "https://schema.org/Saturday",
  7: "https://schema.org/Sunday",
};
const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: ADDRESS_SHOP.street,
  postalCode: ADDRESS_SHOP.zip,
  addressLocality: ADDRESS_SHOP.city,
  addressCountry: ADDRESS_SHOP.countryCode,
});
const openingHours = () =>
  OPENING_HOURS.filter((day) => day.open && day.close).map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAY_URLS[day.day],
    opens: day.open,
    closes: day.close,
  }));
export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  alternateName: SITE_NAME_ALTS,
  legalName: BUSINESS_LEGAL_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  foundingDate: String(BUSINESS_FOUNDED),
  founder: { "@id": OWNER_ID },
  identifier: { "@type": "PropertyValue", name: "IČO", value: BUSINESS_ICO },
  address: postalAddress(),
  areaServed: [
    { "@type": "AdministrativeArea", name: "Liberecký kraj" },
    { "@type": "Country", name: "Česko" },
  ],
  openingHoursSpecification: openingHours(),
  currenciesAccepted: "CZK",
  knowsLanguage: SITE_LANG,
  sameAs: [FACEBOOK_URL].filter(Boolean),
  hasOfferCatalog: { "@id": `${SITE_URL}/#sluzby` },
});
export const ownerSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": OWNER_ID,
  name: BUSINESS_OWNER,
  jobTitle: "Chiptuning a autoelektronika",
  worksFor: { "@id": BUSINESS_ID },
  url: SITE_URL,
});
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: SITE_LANG,
  publisher: { "@id": BUSINESS_ID },
});
export const servicesSchema = () => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/#sluzby`,
  name: "Služby",
  url: SITE_URL,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      url: service.external ? service.href : absoluteUrl(service.href),
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "AdministrativeArea", name: "Liberecký kraj" },
    },
  })),
});
export const servicePageSchema = (id: string) => {
  const service = SERVICES.find((item) => item.id === id);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.href)}#service`,
    name: service.title,
    description: service.desc,
    url: absoluteUrl(service.href),
    serviceType: service.title,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "AdministrativeArea", name: "Liberecký kraj" },
    isPartOf: { "@id": SITE_ID },
  };
};
export type FaqItem = {
  question: string;
  answer: string;
};
export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: SITE_LANG,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});
export const breadcrumbSchema = (trail: { label: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Úvod", item: SITE_URL },
    ...trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: step.label,
      item: absoluteUrl(step.path),
    })),
  ],
});