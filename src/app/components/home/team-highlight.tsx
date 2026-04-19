"use client";

import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";
export default function TeamHighlight() {
  const dict = useDictionary();

  return (
    <SectionReveal className="bg-[#F8FAFC] px-6 py-16 md:px-10 lg:px-16 lg:py-20" delay={140}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-4">
              {dict.teamHighlight.eyebrow}
            </span>
            <h2 className="text-4xl font-bold text-[#003366] sm:text-5xl mt-4">
              {dict.teamHighlight.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5A7A99] max-w-2xl">
              {dict.teamHighlight.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {dict.teamHighlight.stats.map((stat) => (
                <div
                  key={stat.value + stat.label}
                  className="rounded-lg border border-[#D9E8F5] bg-white p-6"
                >
                  <p className="text-3xl font-bold text-[#0052A3]">{stat.value}</p>
                  <p className="mt-2 text-sm text-[#5A7A99]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#4DA6FF]/30 bg-gradient-to-br from-[#4DA6FF]/10 to-[#0052A3]/10 p-8">
            <div className="text-center">
              <p className="text-xs font-semibold text-[#0052A3] uppercase tracking-wider">
                {dict.teamHighlight.workStyle.label}
              </p>
              <p className="mt-6 text-3xl font-bold text-[#003366]">
                {dict.teamHighlight.workStyle.value}
              </p>
              <div className="mt-8 inline-flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-[#4DA6FF]">
                <span className="text-2xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}