import Link from "next/link";
import type { FC } from "react";
import Wordmark from "@/components/layout/Wordmark";
import {
  ADDRESS_BILLING,
  ADDRESS_SHOP,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_HREF,
  BUSINESS_ICO_DISPLAY,
  BUSINESS_PHONE,
  BUSINESS_PHONE_HREF,
  DPF_NAME,
  DPF_URL,
  OPENING_HOURS_LABEL,
  formatAddress,
} from "@/types/business";
import { LEGAL_LINKS } from "@/types/legal";
import { NAV_ROUTES, SITE_NAME } from "@/types/site";

const Footer: FC = () => (
  <footer className="mt-auto bg-ink text-latte">
    <div className="mx-auto flex w-container max-w-[1180px] flex-col gap-14 py-20">
      <div className="grid gap-12 tablet:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Wordmark onDark/>
          <p className="text-ui text-sand">
            Chiptuning a autoelektronika v Liberci. Měříme, neslibujeme — ke každé úpravě protokol
            z vlastní výkonové brzdy.
          </p>
          <a
            href={DPF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-ui lowercase text-dpf-bright transition-colors duration-200 ease-om hover:text-cream"
          >
            {DPF_NAME.toLowerCase()} — sesterská dílna
          </a>
        </div>
        <nav aria-label="Stránky" className="flex flex-col gap-3">
          <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-sand">Stránky</p>
          {NAV_ROUTES.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-ui lowercase text-latte transition-colors duration-200 ease-om hover:text-cream"
            >
              {route.nav}
            </Link>
          ))}
        </nav>
        <address className="flex flex-col gap-3 not-italic">
          <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-sand">Kontakt</p>
          <a
            href={BUSINESS_PHONE_HREF}
            className="text-ui text-latte transition-colors duration-200 ease-om hover:text-cream"
          >
            {BUSINESS_PHONE}
          </a>
          <a
            href={BUSINESS_EMAIL_HREF}
            className="text-ui text-latte transition-colors duration-200 ease-om hover:text-cream"
          >
            {BUSINESS_EMAIL}
          </a>
          <p className="text-ui text-sand">{formatAddress(ADDRESS_SHOP)}</p>
          <p className="text-ui text-sand">{OPENING_HOURS_LABEL}</p>
        </address>
      </div>
      <div className="flex flex-col gap-6 border-t border-line-dark pt-8 tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-ui text-sand">
            © {new Date().getFullYear()} {SITE_NAME} · IČO {BUSINESS_ICO_DISPLAY}
          </p>
          <p className="text-ui text-sand">Sídlo: {formatAddress(ADDRESS_BILLING)}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ui text-sand transition-colors duration-200 ease-om hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
export default Footer;
