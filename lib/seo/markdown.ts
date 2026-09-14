import { ADDRESS_BILLING, ADDRESS_SHOP, BUSINESS_EMAIL, BUSINESS_FOUNDED, BUSINESS_ICO_DISPLAY, BUSINESS_OWNER, BUSINESS_PHONE, DPF_NAME, DPF_URL, OPENING_HOURS_LABEL, REPLY_WITHIN_HOURS, formatAddress, yearsInBusiness } from "@/types/business";
import { PROCESS_STEPS } from "@/types/inquiry";
import { SERVICES } from "@/types/services";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_ROUTES, SITE_TAGLINE } from "@/types/site";

const contactBlock = () => [
  `- Provozovna: ${formatAddress(ADDRESS_SHOP)}`,
  `- Sídlo (fakturační): ${formatAddress(ADDRESS_BILLING)}`,
  `- IČO: ${BUSINESS_ICO_DISPLAY}`,
  `- Telefon: ${BUSINESS_PHONE}`,
  `- E-mail: ${BUSINESS_EMAIL}`,
  `- Otevírací doba: ${OPENING_HOURS_LABEL}`,
  `- Odpověď na poptávku: do ${REPLY_WITHIN_HOURS} hodin`,
  `- Sesterský web: ${DPF_NAME} — ${DPF_URL}`,
];
export const buildLlmsIndex = (): string =>
  [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `${SITE_NAME} je dílna ${BUSINESS_OWNER} v Liberci — ${SITE_TAGLINE.toLowerCase()}.`,
    `Na trhu od roku ${BUSINESS_FOUNDED}, ${yearsInBusiness()} let na stejné adrese.`,
    "Web je v češtině a slouží jako prezentace dílny a poptávkový kanál.",
    "",
    "## Stránky",
    "",
    ...SITE_ROUTES.map((route) => `- [${route.label}](${absoluteUrl(route.path)}): ${route.summary}`),
    "",
    "## Kompletní obsah",
    "",
    `- [Vše v jednom souboru](${absoluteUrl("/llms-full.txt")}): služby, proces, údaje a kontakt v Markdownu.`,
    "",
    "## Kontakt",
    "",
    ...contactBlock(),
    "",
  ].join("\n");
const servicesSection = () => [
  "## Služby",
  "",
  ...SERVICES.flatMap((service) => [
    `### ${service.title}`,
    "",
    service.desc,
    "",
    `- Odkaz: ${service.external ? service.href : absoluteUrl(service.href)}`,
    "",
  ]),
];
const processSection = () => [
  "## Jak zakázka probíhá",
  "",
  "Čtyři kroky, obvykle jeden den.",
  "",
  ...PROCESS_STEPS.map((step, index) => `${index + 1}. **${step.title}** — ${step.desc}`),
  "",
];
const principlesSection = () => [
  "## Čím se řídíme",
  "",
  "- Měříme, neslibujeme. Výkon a moment vždy vychází z protokolu, ne z katalogu.",
  "- Měření před a po běží na stejné výkonové brzdě — jediné v Libereckém kraji.",
  "- Úprava výkonu se zapisuje do technického průkazu.",
  "- Cena, kterou řekneme, je konečná.",
  "- Na vůz s neřešenou závadou se mapa nenahrává.",
  `- ${DPF_NAME}: renovace DPF filtru technologií BioFlash, záruka 100 000 km, protokol o průtoku.`,
  "",
];
export const buildLlmsFull = (): string =>
  [
    `# ${SITE_NAME} — kompletní obsah`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## O dílně",
    "",
    `${SITE_NAME} vede ${BUSINESS_OWNER}. Dílna funguje od roku ${BUSINESS_FOUNDED} a za ${yearsInBusiness()} let se nepřestěhovala —`,
    `pořád stojí na adrese ${formatAddress(ADDRESS_SHOP)}. Dělá dvě věci: chiptuning a autoelektroniku.`,
    "Obojí stojí na vlastní výkonové brzdě, protokol před a po dostane zákazník ke každé úpravě.",
    "",
    ...servicesSection(),
    ...processSection(),
    ...principlesSection(),
    "## Kontakt",
    "",
    ...contactBlock(),
    "",
  ].join("\n");