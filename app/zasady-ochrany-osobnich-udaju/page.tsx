import Link from "next/link";
import LegalPage from "@/components/layout/legal/LegalPage";
import { pageMetadata } from "@/lib/seo/pageMeta";
import { ADDRESS_BILLING, BUSINESS_EMAIL, BUSINESS_ICO_DISPLAY, BUSINESS_OWNER, BUSINESS_PHONE, BUSINESS_PHONE_HREF, REPLY_WITHIN_HOURS, formatAddress } from "@/types/business";

export const metadata = pageMetadata("/zasady-ochrany-osobnich-udaju");
const PrivacyPage = () => (
  <LegalPage
    title="Zásady ochrany osobních údajů"
    updated="14. 9. 2026"
    path="/zasady-ochrany-osobnich-udaju"
  >
    <p>
      Když nám přes formulář pošlete poptávku, zpracováváme vaše údaje jako správce. Níž je
      popsané přesně to, co se s nimi děje — žádné obecné fráze.
    </p>
    <h2>Kdo je správce</h2>
    <p>
      {BUSINESS_OWNER}, IČO {BUSINESS_ICO_DISPLAY}, se sídlem {formatAddress(ADDRESS_BILLING)}.
      Kontakt: <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>, telefon{" "}
      <a href={BUSINESS_PHONE_HREF}>{BUSINESS_PHONE}</a>.
    </p>
    <h2>Jaké údaje sbíráme</h2>
    <ul>
      <li>
        <strong>Poptávkový formulář:</strong> značka a model vozu, motor, rok výroby, volný popis,
        telefon a e-mail.
      </li>
      <li>
        <strong>Technické údaje:</strong> IP adresa a typ prohlížeče při odeslání formuláře —
        kvůli ochraně proti spamu.
      </li>
    </ul>
    <p>
      Nad rámec formuláře se měří návštěvnost — ale <strong>jen pokud k tomu dáte souhlas</strong>{" "}
      v liště, která vyskočí při první návštěvě. Měření je anonymní, neváže se na vaše jméno ani
      e-mail a nepoužívá se k profilování ani k reklamě. Podrobnosti a přepínač souhlasu najdete
      na stránce <Link href="/cookies">Cookies</Link>.
    </p>
    <h2>Proč je zpracováváme</h2>
    <p>
      Jediný důvod je odpovědět vám na poptávku — obvykle do {REPLY_WITHIN_HOURS} hodin — a
      případně se domluvit na zakázce. Právním základem je váš souhlas udělený odesláním
      formuláře. Souhlas můžete kdykoli odvolat e-mailem, údaje pak smažeme. Pokud z poptávky
      vznikne zakázka, přechází zpracování na plnění smlouvy a na zákonné povinnosti
      (daňové doklady).
    </p>
    <h2>Komu se dostanou</h2>
    <p>Používáme služby, které fungují jako zpracovatelé:</p>
    <ul>
      <li>
        <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">Supabase</a> —
        databáze, ve které je poptávka uložená. Server ve Frankfurtu (EU).
      </li>
      <li>
        <a href="https://resend.com" target="_blank" rel="noopener noreferrer">Resend</a> —
        odeslání potvrzovacího e-mailu. Server v Irsku (EU).
      </li>
      <li>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> —
        hosting webu.
      </li>
      <li>
        <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer">
          Microsoft Clarity
        </a>{" "}
        — anonymní měření návštěvnosti, jen se souhlasem.
      </li>
    </ul>
    <p>
      Nikomu dalšímu se údaje nepředávají a neprodávají. Nepoužíváme je k automatizovanému
      rozhodování ani k profilování.
    </p>
    <h2>Jak dlouho je držíme</h2>
    <p>
      Poptávku, ze které nevznikne zakázka, mažeme nejpozději do dvou let od posledního kontaktu.
      U zakázek se doklady uchovávají po dobu, kterou ukládá zákon. Souhlas s měřením
      návštěvnosti platí 13 měsíců, pak se vás web zeptá znovu.
    </p>
    <h2>Vaše práva</h2>
    <ul>
      <li>Vědět, jaké údaje o vás máme, a dostat jejich kopii.</li>
      <li>Nechat je opravit, doplnit nebo smazat.</li>
      <li>Odvolat souhlas — od té chvíle je přestaneme zpracovávat.</li>
      <li>Omezit zpracování nebo proti němu podat námitku.</li>
      <li>
        Podat stížnost u{" "}
        <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">
          Úřadu pro ochranu osobních údajů
        </a>
        .
      </li>
    </ul>
    <p>
      Stačí napsat na <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>. Ozveme se
      nejpozději do měsíce.
    </p>
  </LegalPage>
);
export default PrivacyPage;