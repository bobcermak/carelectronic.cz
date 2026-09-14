import { LEGAL_LINKS } from "./legal";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carelectronic.cz";
export const SITE_NAME = "CarElectronic";
export const SITE_NAME_LEGAL = "Viktor Šeda — CarElectronic";
export const SITE_NAME_ALTS = ["Car Electronic", "CarElectronic Liberec", "CarElectronic Šeda"];
export const SITE_TAGLINE = "Chiptuning a autoelektronika Liberec";
export const SITE_DESCRIPTION =
  "Chiptuning se zápisem do technického průkazu a autoelektronika v Liberci. Vlastní výkonová brzda, měření před a po, protokol ke každé úpravě. Od roku 2003 na stejné adrese.";
export const SITE_LOCALE = "cs_CZ";
export const SITE_LANG = "cs";
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export type SiteRoute = {
  path: string;
  label: string;
  nav?: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  summary: string;
};
export const SITE_ROUTES: SiteRoute[] = [
  {
    path: "/",
    label: "Úvod",
    nav: "úvod",
    priority: 1,
    changeFrequency: "monthly",
    summary:
      "Dvě oblasti jedné dílny — chiptuning a autoelektronika. Měření na vlastní výkonové brzdě, proces ve čtyřech krocích, reference, FAQ a poptávkový formulář.",
  },
  {
    path: "/chiptuning",
    label: "Chiptuning",
    nav: "chiptuning",
    priority: 0.9,
    changeFrequency: "monthly",
    summary:
      "Typy úprav řídicí jednotky, zisk výkonu a momentu měřený na dynu, zápis změny do technického průkazu a průběh zakázky.",
  },
  {
    path: "/autoelektronika",
    label: "Autoelektronika",
    nav: "autoelektronika",
    priority: 0.9,
    changeFrequency: "monthly",
    summary:
      "Diagnostika a opravy elektroniky vozu — imobilizéry, klíče, airbagy, přístrojové panely, rádia a navigace. Závady, které jinde vzdali.",
  },
  {
    path: "/mereni",
    label: "Měření na dynu",
    nav: "měření",
    priority: 0.8,
    changeFrequency: "monthly",
    summary:
      "Jediná výkonová brzda v Libereckém kraji. Měření před a po na stejném stroji, protokol s křivkou výkonu a momentu, možnost objednat samostatné měření.",
  },
  {
    path: "/kontakt",
    label: "Kontakt a poptávka",
    nav: "kontakt",
    priority: 0.8,
    changeFrequency: "yearly",
    summary:
      "Adresa provozovny v Liberci, otevírací doba, telefon a e-mail. Poptávkový formulář — parametry vozu a ozveme se do 24 hodin.",
  },
  ...LEGAL_LINKS.map((link) => ({
    path: link.href,
    label: link.label,
    priority: 0.2,
    changeFrequency: "yearly" as const,
    summary: `Právní dokument: ${link.label.toLowerCase()}.`,
  })),
];
export const NAV_ROUTES = SITE_ROUTES.filter((route) => route.nav && route.path !== "/");