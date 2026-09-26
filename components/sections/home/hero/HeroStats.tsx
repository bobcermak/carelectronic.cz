import { HERO_PARTNER, HERO_STATS } from "./heroContent";

const HeroStats = () => (
  <section aria-label="CarElectronic v číslech" className="mx-auto w-container py-10 laptop:py-14">
    <div className="flex flex-wrap items-baseline justify-center gap-x-10 gap-y-6 tablet:gap-x-16">
      <ul className="contents">
        {HERO_STATS.map((stat) => (
          <li key={stat.label} className="flex items-baseline gap-3">
            <span className="text-stat font-medium leading-none text-white">{stat.value}</span>
            <span className="text-caption leading-snug text-slate">{stat.label}</span>
          </li>
        ))}
      </ul>
      <p className="w-full text-eyebrow uppercase tracking-[0.18em] text-accent-text text-center tablet:w-auto">
        {HERO_PARTNER}
      </p>
    </div>
  </section>
);
export default HeroStats;