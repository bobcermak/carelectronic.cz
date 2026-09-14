import LegalPage from "@/components/layout/legal/LegalPage";
import { pageMetadata } from "@/lib/seo/pageMeta";
import { ADDRESS_BILLING, ADDRESS_SHOP, BUSINESS_EMAIL, BUSINESS_ICO_DISPLAY, BUSINESS_OWNER, OPENING_HOURS_LABEL, REPLY_WITHIN_HOURS, formatAddress } from "@/types/business";

export const metadata = pageMetadata("/obchodni-podminky");
const TermsPage = () => (
  <LegalPage title="Obchodní podmínky" updated="14. 9. 2026" path="/obchodni-podminky">
    <p>
      Tenhle text popisuje, jak u nás probíhá zakázka. Nenahrazuje zakázkový list ani smlouvu —
      ty se uzavírají ke konkrétnímu vozu a mají přednost před tím, co je tady.
    </p>
    <h2>Kdo je dodavatel</h2>
    <p>
      {BUSINESS_OWNER}, IČO {BUSINESS_ICO_DISPLAY}, sídlo {formatAddress(ADDRESS_BILLING)}.
      Provozovna: {formatAddress(ADDRESS_SHOP)}, otevřeno {OPENING_HOURS_LABEL}. Kontakt:{" "}
      <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
    </p>
    {/* TODO: doplnit, zda je Viktor Šeda plátce DPH — bez potvrzení se o DPH netvrdí nic. */}
    <h2>Poptávka nic nezavazuje</h2>
    <p>
      Odesláním formuláře si nic neobjednáváte. Ozveme se do {REPLY_WITHIN_HOURS} hodin a
      řekneme, co se s vozem dá dělat a za kolik. Závazek vzniká až odsouhlasením konkrétní
      nabídky a převzetím vozu do zakázky.
    </p>
    <h2>Cena je konečná</h2>
    <p>
      Částka, na které se domluvíme před zahájením práce, platí. Když se v průběhu ukáže něco, co
      v zadání nebylo, zavoláme dřív, než na tom začneme dělat — nic se nepřifakturuje bez
      předchozí domluvy.
    </p>
    <h2>Jak zakázka běží</h2>
    <ul>
      <li>Napíšete parametry vozu přes formulář nebo zavoláte.</li>
      <li>Domluvíme termín a co se bude dělat.</li>
      <li>Vůz jde na vstupní měření na výkonovou brzdu.</li>
      <li>Provedeme dohodnutou úpravu nebo opravu.</li>
      <li>Kontrolní měření na stejné brzdě a protokol pro zákazníka.</li>
      <li>U změny výkonu následuje zápis do technického průkazu.</li>
    </ul>
    <h2>Stav vozu</h2>
    <p>
      Na vůz s neřešenou závadou se mapa nenahrává. Pokud se při vstupní diagnostice objeví
      závada, která úpravu vylučuje, řekneme to a domluvíme se, co dál — úprava se v takovém
      případě neprovede.
    </p>
    <h2>Měření a protokol</h2>
    <p>
      Naměřené hodnoty pocházejí z naší válcové zkušebny. Měření před úpravou i po ní probíhá na
      stejném stroji, aby byla obě čísla srovnatelná. Hodnoty naměřené na jiné brzdě s našimi
      porovnávat nelze.
    </p>
    <h2>Zápis do technického průkazu</h2>
    <p>
      Změnu výkonu zapisujeme do technického průkazu. K tomu je potřeba součinnost majitele vozu
      a doklady, které si vyžádáme předem.
    </p>
    {/* TODO: záruční podmínky na práci a díly, splatnost a případná záloha — čeká se na potvrzení od Viktora Šedy. */}
    <h2>Reklamace</h2>
    <p>
      Když něco nesedí, ozvěte se co nejdřív na{" "}
      <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a> nebo telefonem a domluvíme termín
      prohlídky vozu. Reklamace se řídí občanským zákoníkem.
    </p>
    <h2>Platnost</h2>
    <p>Tyto podmínky platí od data uvedeného nahoře pro zakázky sjednané po tomto datu.</p>
  </LegalPage>
);
export default TermsPage;