# CarElectronic + DPF Renovace — projektová pravidla

Next.js 16 (App Router) + TypeScript + Tailwind v4. Dvě značky, jeden systém.
**CarElectronic** = hlavní web v tomhle repozitáři (chiptuning, autoelektronika, měření na dynu,
kontakt). **DPF Renovace** = samostatná micro-site na `dpfrenovace.cz`, stejná typografie a
rozvržení, jiná akcentní barva a jiný znak.

Obsah, struktura stránek a stav rozpracovanosti jsou v [CONTEXT.md](CONTEXT.md).

## Barvy — používej POUZE tyto tokeny

Všechny žijí v `@theme` v [app/globals.css](app/globals.css). V komponentách se píšou jako
Tailwind třídy (`text-ink`, `bg-cream`, `border-line`), **nikdy jako hex v JSX**. Výjimka jsou
e-maily — v [components/emails/emailTheme.ts](components/emails/emailTheme.ts) musí být hexy inline.

### Společný základ (obě značky)
| Token | Hex | Použití |
|---|---|---|
| `ink` | `#1E1712` | text, tmavé sekce, znak na světlém |
| `ink-80` | `#3A2F26` | navigační odkazy, sekundární text na krému |
| `mokka` | `#7A6A5C` | tlumený text, druhá polovina wordmarku |
| `latte` | `#C9B9A6` | text na tmavém pozadí |
| `sand` | `#C6B9AB` | popisky statů na tmavém |
| `bone` | `#CBBFB0` | výchozí stav `omInk` animace (nedopsaný text) |
| `cream` | `#F7F1E9` | základní pozadí celého webu |
| `white` | `#FFFFFF` | karty, modály, nav pill |

Alpha varianty — jen tyhle tři, další neinventuj:
`line` = `rgba(30,23,18,0.08)` (linky, tracky, okraje), `pill` = `rgba(255,255,255,0.88)`
(nav pill), `line-dark` = `rgba(247,241,233,0.22)` (dělící linka na tmavém).

### CarElectronic — oranžová
`accent` = `#FF6A38`. Nese: CTA tlačítka, progress bar, eyebrow labely, 30px linku před labelem,
odkazy, `::selection`, znak. **Text na oranžové je vždy `ink`, nikdy bílý.**

### DPF Renovace — zelená
`dpf` `#0E8F63` · `dpf-dark` `#0A6B4A` · `dpf-bright` `#2FCB93` (jen jako akcent na tmavém) ·
`dpf-ink` `#0A1A14` (tmavé pozadí DPF místo `ink`).
Na zelené `#0E8F63` je text **bílý** — na rozdíl od oranžové.

### Zakázané
Žádné gradienty jako pozadí sekcí, žádné neonové duhy, žádná druhá akcentní barva navíc, žádné
mixování oranžové a zelené na jedné stránce (výjimka: odkaz „DPF renovace“ v navigaci a patičce).
Max 2 barvy pozadí na stránku: `cream` + `ink`.

## Typografie
- Jediné písmo: **Montserrat** (300/400/500/600/700) přes `next/font/google`,
  `font-variant-numeric: tabular-nums` na rootu. Žádný druhý font.
- Velikosti jsou tokeny, ne libovolné hodnoty: `text-display` (H1), `text-heading` (H2),
  `text-title`, `text-sub`, `text-body`, `text-ui` (14px, UI a labely), `text-eyebrow` (12px).
- H1/H2: váha 500, `letter-spacing: -0.03em`. Výchozí styly nadpisů, odstavců a seznamů jsou
  v `@layer components` — v JSX je neopakuj.
- Eyebrow: třída `.eyebrow` (12px, `0.2em`, uppercase, akcent, 30×1px linka přes `::before`).
- Navigace a UI labely: lowercase, `text-ui`.
- Wordmark: `car` (600) + `electronic` (400, mokka) — komponenta
  [Wordmark](components/layout/Wordmark.tsx). Stejný princip pro `dpf` + `renovace`.

## Rytmus a rozvržení
- Sekce: `py-section` (= `clamp(110px, 13vw, 170px)`), hero a statementy `min-h-svh`.
- Obsahová šířka: `w-container` (90vw) + `max-w-[1180px]`, u text-heavy `max-w-[var(--width-text)]`
  (1080px).
- Radius: `rounded-block` (15px) pro velké bloky a fotky, `rounded-pill` pro tlačítka a kolečka.
- Layout vždy flex/grid + `gap`. Nikdy inline mezery ani per-element marginy u skupin.
- Nové sekce stav na [Section](components/layout/Section.tsx) — drží rytmus eyebrow → nadpis →
  lead → obsah a umí tmavou variantu (`dark`).
- Ikonografie: jen tenké tažené šipky (Phosphor `weight="light"`, resp. `stroke-width: 1.5`,
  `stroke-linecap: round`) a technické linie. **Žádné ilustrace kreslené v SVG, žádné emoji.**
- Fotky: [ImageSlot](components/layout/ImageSlot.tsx) s českým `placeholder` popisem toho, co tam
  patří. Dokud fotka není, drží se poměr stran — stocková náhrada se nesází nikdy.

## Animace — kánon projektu

Vše běží na **scroll-driven CSS animacích** (`animation-timeline: view()` / `scroll()`),
deklarovaných v `@layer utilities` v `globals.css` uvnitř
`@supports (animation-timeline: view())` a `prefers-reduced-motion: no-preference`.
**Nikdy nepiš JS scroll listenery na reveal** — žádný GSAP, žádný Lenis, žádný
`requestAnimationFrame`.

Povolené keyframes (jména neměň): `omReveal`, `omGrowX`, `omSlideX`, `omInk`.
Mikroanimace UI: `fadeIn`, `fadeOut`, `floatUp`, `floatDown`, `navDrop`, `menuIn`, `loadSweep`.

### 1. Vertikální reveal (základ)
`data-reveal="y"` na prvku. Stagger ve skupině se dělá **posunem `animation-range`** po 2–4 %
inline stylem, ne `animation-delay`:

```tsx
<li data-reveal="y" style={{ animationRange: `entry ${8 + index * 4}% cover 30%` }}>
```

### 2. Horizontální scroll-hijack
Vysoká sekce (250–300vh) s `view-timeline-name`, vnitřní `sticky top-0`, track `data-om-track`
s `width: max-content`. Travel se počítá, nehádá:

```
--om-card: calc(min(420px, 74vw) + 64px);
--om-travel: max(0px, calc(N * var(--om-card) + (N-1) * 24px + 5vw - 95vw));
```

Ke každému tracku patří progress bar `data-om-track-bar` na stejné timeline — uživatel musí vidět,
kolik zbývá. Track má `overflow-x: hidden` a zrušený snap, aby se scroll nekřížil.

### 3. Text ink-in
`data-om-ink` na statement větě: `bone → ink` (na DPF `bone → dpf-ink`). Po slovech nebo řádcích,
nikdy po jednotlivých literách.

### 4. Progress rail
[ScrollProgress](components/layout/ScrollProgress.tsx) — `data-om-progress`, 3px lišta nahoře,
`omGrowX` na `scroll(root block)`, akcent na `line`.

### 5. Mikrointerakce
Posun max 2 px nebo změna barvy. Trvání 150–250 ms, easing `ease-om`
(`cubic-bezier(.16,.84,.24,1)`). Žádný bounce, žádné pružiny, žádné otáčení.

### Zakázané animace
Parallax fotek pozadí, fade-in celé stránky po loadu, počítadla čísel, typewriter po literách,
pulzující CTA, `scrollIntoView`.

## Obsah a copy
- Čeština, **vykání**, malá písmena v UI labelech, věcný tón montéra — ne marketing.
- **Nevymýšlej čísla, ceny, hodnocení ani recenze.** Chybí-li data, `ImageSlot` placeholder,
  `TODO` komentář s odkazem na `CONTEXT.md`, nebo dotaz.
- Text, který se opakuje na víc místech, patří do `types/*.ts`, ne do JSX.

## Technická pravidla
- **Server komponenty jsou výchozí.** `"use client"` jen tam, kde je stav, event handler nebo
  `usePathname` — dnes: Navbar, Button, Modal, CookieBanner, ConsentControls, ConsentContext.
- Komponenty jsou arrow funkce s `FC<Props>`, default export na konci souboru. Hooky na začátku
  těla komponenty pod komentářem `//Hooks` — drží se toho zbytek kódu, neměň to.
- Import alias `@/*` míří do kořene repozitáře (`tsconfig.json`).
- Styly jen Tailwind třídy. Inline `style` je povolený **pouze** pro `animationRange`,
  `aspectRatio` a `--om-*` proměnné.
- Barvy, velikosti a mezery ber z tokenů. Libovolná hodnota (`text-[13px]`) jen když token
  opravdu neexistuje.
- **Firemní údaje se nepíšou ručně.** Adresa, telefon, e-mail, IČO a otevírací doba jsou
  v [types/business.ts](types/business.ts), routy a popisky v [types/site.ts](types/site.ts).
  Změna na jednom místě = změna všude, včetně sitemapy, JSON-LD i `llms.txt`.
- SEO: metadata stránky přes [pageMetadata()](lib/seo/pageMeta.ts), strukturovaná data přes
  [lib/seo/structuredData.ts](lib/seo/structuredData.ts) a `JsonLd`. Nová routa = zápis do
  `SITE_ROUTES`, jinak `pageMetadata()` vyhodí chybu.
- Poptávkové e-maily jdou přes Resend ([lib/services/resend](lib/services/resend)), šablona je
  React Email v [components/emails/InquiryEmail.tsx](components/emails/InquiryEmail.tsx).
- Loga: až přijdou finální soubory, patří do `public/images/brand` (varianty `logo-na-svetle`,
  `logo-na-tmave`, `logo-mono-bile`, `logo-mono-cerne`, `znak-*`, `favicon.svg`). V navigaci se
  znak kreslí inline SVG, wordmark textem.
- Po zásahu do kódu spusť `npm run build` a `npm run lint`.

## Otevřené položky (nevyplňuj odhadem)
- Potvrzení telefonního čísla a odkaz na Facebook — `types/business.ts`.
- Data vozů do chiptuning kalkulačky (značka → model → motor → zisk).
- Reálné protokoly z dyna pro sekce „jediné dyno v kraji“ a „naměřeno u nás“.
- Reálné Google hodnocení a recenze.
- Plátcovství DPH, záruka a splatnost pro obchodní podmínky.
- Loga a fotky z dílny.