# CONTEXT — o webu CarElectronic + DPF Renovace

Referenční dokument pro **obsah**. Barvy, typografie, animace a technická pravidla řeší
[`CLAUDE.md`](CLAUDE.md). Tenhle soubor drží **co** na webu je a **proč**.

## Firma

**CarElectronic** — Viktor Šeda, chiptuning a autoelektronika, Liberec. Na trhu od roku 2003,
stále na jedné adrese.
**DPF Renovace** — sesterská služba / micro-site na vlastní doméně, renovace DPF filtrů
technologií BioFlash se zárukou 100 000 km.

Hlavní argument obou značek je **měření, ne slib**: vlastní výkonová brzda (jediná v Libereckém
kraji), protokol před a po, u DPF protokol o průtoku.

### Údaje (musí být identické na všech stránkách)

Jediný zdroj pravdy je [`types/business.ts`](types/business.ts) — nikde jinde se tyhle hodnoty
nepíšou ručně.

| Položka | Hodnota |
|---|---|
| Provozovna | Hodkovická 102, 463 12 Liberec 25 |
| Sídlo (fakturační) | Vrbová 372, 463 12 Šimonovice |
| IČO | 725 838 43 |
| Telefon | +420 603 513 643 — **čeká na potvrzení Šedou** (staré 602 44 33 33 bylo zástupné) |
| E-mail CE | info@carelectronic.cz |
| Otevírací doba | PO—PÁ 8:00—17:00 |
| Sesterský web | dpfrenovace.cz |
| Facebook | odkaz **chybí** |

## Struktura webu

### CarElectronic (hlavní web, tenhle repozitář)

| Routa | Soubor | Stránka | H1 | Stav |
|---|---|---|---|---|
| `/` | `app/page.tsx` | Úvod | Výkon, který jsme vám naměřili. | rozestavěno |
| `/chiptuning` | `app/chiptuning/page.tsx` | Chiptuning | Chiptuning se zápisem do TP. | rozestavěno |
| `/autoelektronika` | `app/autoelektronika/page.tsx` | Autoelektronika | Závady, které jinde vzdali. | rozestavěno |
| `/mereni` | `app/mereni/page.tsx` | Měření na dynu | Měříme. Neslibujeme. | rozestavěno |
| `/kontakt` | `app/kontakt/page.tsx` | Kontakt a poptávka | Napište parametry vozu, ozveme se do 24 hodin. | rozestavěno |

Právní stránky: `/zasady-ochrany-osobnich-udaju`, `/cookies`, `/obchodni-podminky`.
Strojové výstupy: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`.

Routy, jejich popisky a priority žijí v [`types/site.ts`](types/site.ts) — sitemap, navigace,
patička i `llms.txt` čtou ze stejného seznamu.

Navigace (vždy stejná, lowercase): chiptuning · autoelektronika · měření · kontakt
+ odkaz na dpf renovace + CTA pilulka „poptávka“.

### DPF Renovace (micro-site)

Samostatná doména `dpfrenovace.cz`, **není součástí tohohle repozitáře**. Z CE na ni vede jeden
odkaz v navigaci a jeden v patičce — jediné místo, kde se v CE potkává oranžová se zelenou.
H1 micro-site: *Svítí kontrolka DPF? Nekupujte nový.*

## Sekce a jejich role

### Homepage CE (pořadí)

1. **Hero** — foto vozu na dynu, H1, dvě CTA, pás statů (2003 / 1× dyno v kraji / TP zápis / Xtuning partner). ✅
2. **Statement** — jedna věta s ink-in animací: tuning se dá slíbit v katalogu, my ho naměříme. ✅
3. **Dvě oblasti, jedna dílna** — 01 Chiptuning / 02 Autoelektronika (+ měření a DPF), každá s odkazem na svou stránku. ✅
4. **Jediné dyno v kraji** — typografický graf výkon/moment (110→150 kW, 340→400 Nm), bez SVG vektorů. ⬜
5. **Dvacet tři let stejná adresa** — Viktor Šeda + horizontální track `why` (4 karty: zkušenost, vybavení, legalita, partnerství). ⬜
6. **Čtyři kroky, jeden den** — proces 01–04 (vstupní měření → mapa → kontrolní měření → homologace). ✅
7. **Naměřeno u nás na dynu** — horizontální track `refs` (7 měření) + souhrn 1 400+ vozů. ⬜
8. **FAQ** — 5 otázek (poškození motoru, záruka, zápis do TP, doba, dodávky a stroje). ⬜
9. **Poptávkový formulář** — značka, motor, rok, doplnění, telefon, e-mail. ⬜
10. **Recenze** — Google rating + karusel. ⬜ (**vzorová data, nutno vyměnit**)
11. **Kontaktní panel** — živé hodiny Liberec, status otevřeno/zavřeno, týdenní rozpis, adresa. ⬜
12. **CTA + patička** — odkaz na sesterský web, stránky, kontakt, právní odkazy. ✅

### Ostatní stránky

- **Chiptuning**: 6 typů úprav ⬜, kalkulačka zisku ⬜ (data chybí), proces 4 kroky ✅, poptávka ⬜.
- **Autoelektronika**: seznam služeb ✅ (imobilizéry, klíče, airbagy, přístrojové panely, rádia, navigace), rada „vezměte s sebou popis závady“ ✅, poptávka ⬜.
- **Měření**: „dvakrát na stejné brzdě“ ✅, ukázkový protokol VW Golf VII 2.0 TDI ⬜, výběr měření ⬜, objednání samostatného měření ⬜.
- **Kontakt**: údaje provozovny a otevírací doba ✅, poptávkový formulář ⬜, živé hodiny ⬜.

## Tón a copy

- Čeština, **vykání**, tón montéra: konkrétní čísla a postupy, žádná superlativa.
- UI labely lowercase, nadpisy věcné a krátké, často dvouslovné konstatování s tečkou.
- Vždy platí: co neumíme naměřit, netvrdíme. Cena je konečná. Na vůz s neřešenou závadou se mapa
  nenahrává.
- Nikdy nevymýšlet čísla, ceny, hodnocení ani recenze — chybí-li data, `<ImageSlot>` placeholder,
  `TODO` komentář nebo dotaz na Šedu.

## Vzorová (= dosud nepotvrzená) data

Nic z toho **není** v kódu — dokud to nepotvrdí Šeda, na web to nepatří:

- Google 4,9 / 148 hodnocení a 6 recenzí v karuselu.
- Konkrétní kW/Nm u referencí a v grafu (vychází z reálných obvyklých hodnot, ale nejsou to
  ověřené protokoly).
- Kalkulačka chiptuningu — tabulka vozů zcela chybí.

## Čeká se na klienta

| Co | Kde to bude chybět |
|---|---|
| Potvrzení telefonního čísla | `types/business.ts` |
| Odkaz na Facebook | `types/business.ts` → `FACEBOOK_URL` |
| Finální loga a fotky z dílny | `public/images`, `components/layout/ImageSlot.tsx` |
| Reálné protokoly z dyna | sekce 4 a 7 homepage, stránka měření |
| Tabulka vozů pro kalkulačku | stránka chiptuning |
| Google recenze | sekce 10 homepage |
| 6 typů úprav — popisy | stránka chiptuning |
| Plátcovství DPH, záruka, splatnost | `app/obchodni-podminky/page.tsx` (`TODO` v kódu) |