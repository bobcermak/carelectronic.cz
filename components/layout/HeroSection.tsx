import type { FC } from "react";
import Button from "@/components/buttons/Button";
import ImageSlot from "@/components/layout/ImageSlot";
import { BUSINESS_FOUNDED } from "@/types/business";
import { CONTACT_SECTION_ID } from "@/types/contact";

type Stat = {
  value: string;
  label: string;
};
const STATS: Stat[] = [
  { value: String(BUSINESS_FOUNDED), label: "na trhu od" },
  { value: "1×", label: "dyno v kraji" },
  { value: "TP", label: "zápis do techničáku" },
  { value: "Xtuning", label: "partner" },
];
const HeroSection: FC = () => (
  <section aria-label="Úvod" className="min-h-svh pb-section pt-36 tablet:pt-44">
    <div className="mx-auto flex w-container max-w-[1180px] flex-col gap-12">
      <div className="flex flex-col gap-7">
        <p data-reveal="y" className="eyebrow">
          Chiptuning a autoelektronika · Liberec
        </p>
        <h1 data-reveal="y" style={{ animationRange: "entry 10% cover 30%" }} className="max-w-[16ch]">
          Výkon, který jsme vám naměřili.
        </h1>
        <p data-reveal="y" style={{ animationRange: "entry 14% cover 30%" }} className="max-w-[58ch]">
          Vlastní výkonová brzda, měření před úpravou i po ní a protokol, který si odvezete.
          Co neumíme naměřit, netvrdíme.
        </p>
        <div
          data-reveal="y"
          style={{ animationRange: "entry 18% cover 30%" }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button href={`/kontakt#${CONTACT_SECTION_ID}`} ariaLabel="Poptat úpravu vozu">
            poptat vůz
          </Button>
          <Button href="/mereni" variant="outline" isArrow={false} ariaLabel="Jak měříme na dynu">
            jak měříme
          </Button>
        </div>
      </div>
      <ImageSlot
        placeholder="vůz upnutý na válcové zkušebně, pohled od zadní nápravy"
        ratio="16 / 9"
        priority
      />
      <dl
        data-reveal="y"
        style={{ animationRange: "entry 4% cover 26%" }}
        className="grid gap-8 border-t border-line pt-8 xphone:grid-cols-2 slaptop:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="text-title font-medium tracking-[-0.03em] text-ink">{stat.value}</dt>
            <dd className="text-ui lowercase text-mokka">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
export default HeroSection;