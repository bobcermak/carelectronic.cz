# Designový soupis — aktuální stav (22. 9. 2026)

Skutečné hodnoty z kódu, ne původní záměr. Kde se to během práce změnilo, je to označené **změna**.
Zdroj pravdy pro barvy a pravidla zůstává `CLAUDE.md`; tento soubor je přesný výpis velikostí, řezů a rozměrů.

---

## 1. Písmo

Jediné písmo **Montserrat**, řezy 300 / 400 / 500 / 600 / 700.
Na rootu každé stránky: `font-variant-numeric: tabular-nums`.

## 2. Typografická stupnice

| Prvek | Velikost | Weight | Letter-spacing | Line-height | Pozn. |
|---|---|---|---|---|---|
| H1 homepage | `88px` | **700** | `-0.035em` | 1.14 | uppercase |
| H1 podstránky | `88px` | **700** | `-0.035em` | 1.14 | uppercase |
| H1 konfigurátor (výsledek) | `clamp(26px, 3.8vw, 58px)` | 700 | `-0.035em` | 1 | uppercase, bílá |
| H2 sekce | `64px` | **700** | `-0.035em` | 1.08–1.14 | uppercase |
| H2 CTA blok | `88px` | 700 | `-0.035em` | 1.14 | uppercase |
| H3 / krok | `clamp(24px, 4.3vh, 50px)` | 700 | `-0.04em` | 1.06 | uppercase |
| Statement (omInk) | `clamp(24px, 3.2vw, 46px)` | 400 | `-0.025em` | 1.4 | |
| Velké číslo v pozadí kroku | `clamp(96px, 17vh, 280px)` | 700 | `-0.05em` | 0.8 | `rgba(255,255,255,0.05)` |
| Stat číslo | `clamp(44px, 4.8vw, 66px)` | 500 | `-0.045em` | 1 | |
| Perex / body | `clamp(17px, 1.3vw, 20px)` | 400 | — | 1.6–1.85 | `#D8D5D1` |
| Body v kroku | `clamp(14px, 1.9vh, 18px)` | 400 | — | 1.7 | |
| Kratší odstavec | `17px` | 400 | — | 1.8 | |
| Eyebrow | `12px` | 400 | `0.2em` | — | uppercase, **italic**, `#FF4136` |
| Eyebrow v konfigurátoru | `12px` | 400 | `0.24em` | — | uppercase, italic |
| Label / jednotka | `11px` | 400–500 | `0.24em` | — | uppercase, `#A8A5A0` |
| Číslo výčtu `01` | `11px` | 500 | `0.14em` | — | `#55534F` / `#FF4136` |
| Wordmark v navigaci | `18px` | 600 + 400 | `-0.03em` | — | |
| Navigační odkazy | `16px` | 400 | — | — | lowercase |
| Pilulka / chip | `13px` | 400 | — | — | |
| Popisek statu | `13.5px` | 400 | — | — | **italic**, `#8A8782` |

### Změny proti původnímu zadání
- **Nadpisy jsou 700, ne 500.** H1 i H2 mají plný bold, protože 500 se na fotkách ztrácel.
- **H1 je fixních `88px`**, ne `clamp(44px, 5.6vw, 84px)` — nadpisy měly na velkém monitoru kolísat příliš.
- **Nadpisy jsou uppercase.** Původně mixed case.
- **Eyebrow a popisky statů jsou italic.** Přidaný rys, který nebyl v původní specifikaci.
- **Navigace je 16px**, ne 14px.
- Stat čísla mají letter-spacing `-0.045em` (agresivnější než obecné `-0.04em`).

---

## 3. Barvy — skutečně používané

### Základ
| Hex | Kde |
|---|---|
| `#1D1D1B` | pozadí body, běžné sekce, karty statů |
| `#191917` | levý panel konfigurátoru, fotosekce pod překryvem |
| `#232321` | karty a panely v konfigurátoru, vyvýšené bloky |
| `#262624` | výplň drobných pilulek a tracků |
| `#F2F0ED` | hlavní text na tmavém, znak v logu, světlé vložené sekce |
| `#FFFFFF` | text na červené/zelené, čísla ve výsledku konfigurátoru, bordery |
| `#D8D5D1` | delší odstavce, chipy |
| `#B5B2AE` | navigační odkazy |
| `#A8A5A0` | jednotky, metadata, labely |
| `#8A8782` | druhá část wordmarku, popisky statů, „krok NN" |
| `#55534F` | neaktivní číslo výčtu, výchozí stav `omInk` |

### CarElectronic
- Plochy: `#E30B17` — CTA, progress, 30×1 px a 22×1 px linky, znak, výplně grafů, rámečky fotek u kroků (`1px solid #E30B17`).
- Text: `#FF4136` — eyebrow, aktivní čísla, `+kW`, odkazy.
- Text na červené: vždy `#FFFFFF`.

### DPF Renovace
- Plochy `#0E8F63`, tmavší `#0A6B4A`, text na tmavém `#2FCB93`, zelený grafit `#14201C`.

### Bordery
`rgba(255,255,255,0.16)` základní · `0.22–0.45` na fotce/v hero · `0.38` výrazné dělení a obtahovaná CTA · `0.12` tracky · `1px solid #E30B17` u fotek kroků · nav pill `rgba(26,26,24,0.9)` + `rgba(255,255,255,0.18)`.

### Chip border
`1px solid rgba(227,11,23,0.55)` — červená ve 55 % pro pilulky s vlastnostmi. **Změna**: přidaná hodnota, v původním výčtu nebyla.

### Ztmavovací překryvy fotek
Jen černé gradienty:
- hero podstránky: `linear-gradient(176deg, rgba(0,0,0,0.62), rgba(0,0,0,0.66) 45%, rgba(0,0,0,0.96))`
- CTA / poptávkový blok: `linear-gradient(180deg, rgba(0,0,0,0.72), rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.78))`

---

## 4. Rozměry a rytmus

| Věc | Hodnota |
|---|---|
| Hero homepage | `100vh` |
| Hero podstránek | **`60vh`**, bez perexu — jen eyebrow + H1 |
| Padding hero podstránek | `clamp(120px, 15vh, 160px) 0 36px` |
| Padding běžné sekce | `clamp(110px, 13vw, 170px) 0` |
| Padding stažené druhé sekce | **`clamp(70px, 8vw, 110px) 0`** — aby byla vidět hned pod hero |
| Obsahová šířka | `90vw` (hero, footer, sekce) / `max-width: 1080px` (text-heavy) |
| Mezera mezi bloky v gridu | `clamp(80px, 10vw, 150px)` |
| Gap ve dvousloupci kroku | `clamp(24px, 3vw, 64px)` |
| Sticky sekce kroků | `250–300vh` s vnitřním `position: sticky; top: 0` |
| Radius | `15px` velké bloky a fotky · `999px` pilulky a kolečka · `10px` znak v navigaci (34×34) · `59px` znak v exportu (200×200) |

### Konfigurátor
- `height: 100vh`, `overflow: hidden`, grid `72px / minmax(0,1fr) / 56px`.
- Tělo: `minmax(0,1fr)` fotka + `minmax(340px, min(620px, 46%))` panel.
- Levý panel vnitřně `minmax(52%, 1fr) auto`.
- Bez navigace webu, bez patičky, bez progress lišt.

---

## 5. Tlačítka

**Plné červené CTA** — `padding: 9px 9px 9px 30px`, `border-radius: 999px`, `background: #E30B17`, `box-shadow: 0 14px 38px rgba(227,11,23,0.4)`, `gap: 18px`, bílý text. Na konci **bílé kolečko se šipkou** — **změna**, přidané ve všech CTA napříč webem.

**Obtahované CTA** — `padding: 18px 30px`, `border-radius: 999px`, `1px solid rgba(255,255,255,0.38)`, `gap: 16px`, bez stínu.

DPF: stín `rgba(14,143,99,0.38)`.

---

## 6. Animace — co se skutečně používá

Vše scroll-driven CSS v `@supports (animation-timeline: view())`. Žádné JS scroll listenery.

Standardní reveal (na většině bloků):
```
animation: omReveal .9s cubic-bezier(.16,.84,.24,1) both;
animation-timeline: view();
animation-range: entry 4% cover 26%;
```
Stagger posunem rozsahu po 2–4 %: `entry 2%` → `4%` → `8%` → `12%` → `14%`.

Dále: `omGrowX` (progress bary tracků), `omGrowY` (svislé lišty v okrajích — levá shora, pravá zdola, 3px, `rgba(255,255,255,0.12)` track, výplň `#E30B17`), `omInk` (statement, `--stmt` timeline, rozsahy `contain 2%→20%`, `16%→34%`, …), `omSlideX` + vypočtený `--om-travel` (horizontální hijack), `omDrive`/`omRoll`/`omDraw`/`omNeedle`/`omSmoke` (silueta auta, každé max jednou na stránku).

Mikrointerakce: `style-hover` posun max 2 px nebo změna pozadí/borderu, 150–250 ms, `cubic-bezier(.16,.84,.24,1)`.

---

## 7. Detaily, které se změnily během práce

1. **Hero na podstránkách zkráceno na 60vh** a odstraněn perex — nadpis nese vše.
2. **Druhá sekce má stažený horní padding**, aby byla viditelná hned pod hero.
3. **Navigace má aktivní dot** — malá červená tečka pod odkazem aktuální stránky.
4. **Blogový karusel** na homepage má kruhové ovladače (prev/next) místo linkových.
5. **Fotky u kroků mají plný červený border** `1px solid #E30B17`, ne bílý poloprůhledný.
6. **Loga přeexportována do `loga/`** v aktuálních barvách; oranžové sady `brand/` a `brand-dpf/` smazány.
7. **Znak CarElectronic**: červená dlaždice, bílá kresba — oblouk `stroke-width: 7` + tři zakončovací pilulky, viewBox `0 0 64 64`.
8. **Znak DPF**: kroužek `stroke-width: 5` + čtyři buňky substrátu, jedna tmavší `#0A6B4A` (zanesená).

---

## 8. Stále otevřené

Ceník od Šedy (`cenik()` v `data/vozy.js`) · WhatsApp číslo (`WHATSAPP`) · reálné Google hodnocení a recenze · Facebook odkaz · potvrzení telefonu `+420 603 513 643` · 17 fotografických slotů (hero, CTA, blog, autoelektronika) · destinace na mapě.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->