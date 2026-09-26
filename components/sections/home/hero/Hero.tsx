import type { FC } from "react";
import Button from "@/components/buttons/Button";
import HeroVideo from "./HeroVideo";
import ScrollCue from "./ScrollCue";
import { HERO_ACTIONS, HERO_EYEBROW, HERO_TITLE, HERO_TITLE_ACCENT } from "./heroContent";

const Hero: FC = () => (
  <section
    id="top"
    aria-labelledby="hero-title"
    className="hero-open relative m-2 flex min-h-[calc(100svh-16px)] flex-col justify-end mphone:justify-center overflow-hidden rounded-block border border-white/40 bg-ink-deep"
  >
    <HeroVideo/>
    <span aria-hidden="true" className="hero-scan pointer-events-none absolute inset-x-0 top-[calc(50%-1px)] block h-0.5 bg-accent"/>
    <header className="hero-focus relative mx-3 mphone:mx-auto mphone:my-auto flex w-container flex-col items-start pb-15 mphone:pt-32 mphone:pb-12 mphone:items-center tablet:pt-36">
      <p className="mb-6 text-eyebrow italic uppercase tracking-[0.12em] text-accent-text mphone:text-center stablet:mb-8 stablet:tracking-eyebrow">
        {HERO_EYEBROW}
      </p>
      <h1
        id="hero-title"
        className="mb-1 max-w-300 text-display leading-[1.12] tracking-step text-white mphone:text-center"
      >
        {HERO_TITLE}
        <span className="block text-accent-text">{HERO_TITLE_ACCENT}</span>
      </h1>
      <p className="mb-9 max-w-[42ch] leading-[1.7] mphone:text-center laptop:mb-10 laptop:leading-[1.85]">
        Měříme na vlastním dynu před úpravou i po ní. Odjíždíte{" "}
        <span className="text-accent-text">s protokolem</span>, ne se slibem.
      </p>
      <div className="flex flex-col items-start gap-4 mphone:items-center stablet:flex-row">
        <Button href={HERO_ACTIONS.primary.href} size="lg" ariaLabel="Nezávazná poptávka">
          {HERO_ACTIONS.primary.label}
        </Button>
        <Button
          href={HERO_ACTIONS.secondary.href}
          variant="outline"
          size="lg"
          isArrow={false}
          ariaLabel="Spočítat zisk výkonu"
        >
          {HERO_ACTIONS.secondary.label}
        </Button>
      </div>
    </header>
    <div className="hero-focus relative flex justify-center pb-6 desktop:pb-8">
      <ScrollCue/>
    </div>
  </section>
);
export default Hero;