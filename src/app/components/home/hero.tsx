"use client";

import Link from "next/link";
import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";

type HeroProps = {
  locale: string;
};

export default function Hero({ locale }: HeroProps) {
  const dict = useDictionary();

  return (
    <section className="relative overflow-hidden bg-[#001F4D] px-4 pb-12 pt-28 text-white sm:px-6 sm:pb-14 sm:pt-32 md:px-8 md:pt-28 lg:px-12 lg:pb-16 lg:pt-32 xl:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,166,255,0.15),_transparent_26%),radial-gradient(circle_at_80%_24%,_rgba(0,82,163,0.20),_transparent_24%)]" />
      <div className="absolute left-1/2 top-6 hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/6 xl:block" />

      <SectionReveal className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#fff] mb-6">
              {dict.hero.eyebrow}
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
              {dict.hero.title}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/75 max-w-2xl">
              {dict.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#0052A3] text-white font-semibold rounded-lg hover:bg-[#0066CC] transition-colors"
              >
                {dict.hero.primaryCta}
              </Link>

              <Link
                href={`/${locale}/quote`}
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {dict.hero.secondaryCta}
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {dict.hero.stats.map((stat) => (
                <div key={stat.value + stat.label} className="border-l border-white/20 pl-4">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-[#90B7DB] bg-[#DCE8F4] p-8 shadow-[0_20px_45px_rgba(0,31,77,0.12)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C7DCF0] text-[#0052A3]">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003366]">
                    {dict.hero.card.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A7A99]">
                    {dict.hero.card.focusValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-[#90B7DB] bg-[#DCE8F4] p-6 shadow-[0_18px_36px_rgba(0,31,77,0.1)]">
                <p className="text-xs font-semibold text-[#4DA6FF] uppercase tracking-wider">
                  {dict.hero.card.planningLabel}
                </p>
                <p className="mt-3 text-2xl font-bold text-[#003366]">
                  {dict.hero.card.planningValue}
                </p>
              </div>

              <div className="rounded-lg border border-[#90B7DB] bg-[#DCE8F4] p-6 shadow-[0_18px_36px_rgba(0,31,77,0.1)]">
                <p className="text-xs font-semibold text-[#4DA6FF] uppercase tracking-wider">
                  {dict.hero.card.supportLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {dict.hero.card.supportItems.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#5A7A99]">
                      <span className="text-[#4DA6FF] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-[#8CB3D7] bg-gradient-to-br from-[#DCE8F4] via-[#D2E1EF] to-[#C4D7E9] p-6 shadow-[0_18px_36px_rgba(0,31,77,0.1)]">
              <p className="text-xs font-semibold text-[#0052A3] uppercase tracking-wider">
                {dict.hero.card.workStyleLabel}
              </p>
              <p className="mt-3 text-xl font-semibold text-[#003366]">
                {dict.hero.card.workStyleValue}
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
