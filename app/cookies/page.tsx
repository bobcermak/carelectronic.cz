import LegalPage from "@/components/layout/legal/LegalPage";
import ConsentControls from "@/components/layout/legal/ConsentControls";
import { pageMetadata } from "@/lib/seo/pageMeta";
import { BUSINESS_EMAIL } from "@/types/business";

export const metadata = pageMetadata("/cookies");
const CookiesPage = () => (
  <LegalPage title="Cookies" updated="14. 9. 2026" path="/cookies">
    <p>
      Krátká verze: <strong>bez vašeho souhlasu se tu nic neměří.</strong> Nezbytné věci web
      potřebuje k provozu, všechno ostatní se načte, až když kliknete na „Přijmout vše“.
    </p>
    <ConsentControls/>
    <h2>Co je nezbytné</h2>
    <p>
      Tyhle položky si web ukládá do prohlížeče sám a souhlas na ně nepotřebuje — bez nich by
      nefungoval nebo by se ptal pořád dokola.
    </p>
    <ul>
      <li>
        <strong>Vaše volba u cookies</strong> — aby se web neptal při každém načtení. Ukládá se do
        localStorage prohlížeče, ne do cookie, a neodchází nikam na server.
      </li>
      <li>
        <strong>Technické údaje o požadavku</strong> (IP adresa, typ prohlížeče) zpracovává
        hosting při každém načtení stránky. Bez toho by web nešlo doručit.
      </li>
      <li>
        <strong>Ochrana formuláře</strong> — u odeslané poptávky se krátkodobě eviduje IP adresa,
        aby web nešlo zaplavit spamem.
      </li>
    </ul>
    <h2>Co běží jen se souhlasem</h2>
    <ul>
      <li>
        <strong>Microsoft Clarity</strong> — anonymní měření návštěvnosti a chování na stránce.
        Ukazuje nám, kam lidé klikají a kde se zaseknou, abychom web mohli zlepšovat. Clarity si
        k tomu ukládá cookies do vašeho prohlížeče.
      </li>
    </ul>
    <p>
      Clarity <strong>neukládá jméno, e-mail ani nic, co jste vyplnili do formuláře</strong> —
      texty v polích jsou v nahrávkách maskované. Data se nikomu neprodávají a nepoužívají se
      k reklamnímu cílení. Provozovatelem je Microsoft Ireland Operations Limited, data se
      uchovávají nejdéle 13 měsíců a pak se automaticky mažou.
    </p>
    <h2>Co se nepoužívá vůbec</h2>
    <p>
      Žádné reklamní pixely, žádný remarketing, žádné sdílení dat s inzertními sítěmi. Web
      neprodává ani nepředává vaše údaje třetím stranám k jejich vlastním účelům.
    </p>
    <h2>Jak volbu změnit</h2>
    <p>
      Kdykoli — tlačítky nahoře na této stránce. Změna platí okamžitě. Když souhlas odvoláte,
      měřicí skript se přestane načítat a dostane pokyn smazat svoje cookies.
    </p>
    <h2>Dotazy</h2>
    <p>
      Cokoli k cookies nebo k údajům napište na{" "}
      <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
    </p>
  </LegalPage>
);
export default CookiesPage;