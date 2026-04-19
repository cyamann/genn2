"use client";

import { useEffect, useState } from "react";
import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";

export default function ServiceCarousel() {
  const dict = useDictionary();
  const slides = dict.serviceCarousel.slides;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <SectionReveal className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-4">
            {dict.serviceCarousel.eyebrow}
          </span>
          <h2 className="text-4xl font-bold text-[#003366] sm:text-5xl">
            {dict.serviceCarousel.title}
          </h2>
          <p className="mt-4 text-base text-[#5A7A99] max-w-2xl">
            {dict.serviceCarousel.description}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-6 py-4 rounded-lg border-l-4 transition ${
                  isActive
                    ? "bg-[#E8F0F8] border-[#0052A3] shadow-sm"
                    : "bg-white border-transparent hover:bg-[#F8FAFC]"
                }`}
              >
                <h3 className={`font-semibold ${isActive ? "text-[#0052A3]" : "text-[#003366]"}`}>
                  {slide.tag}
                </h3>
                <p className="text-sm text-[#5A7A99] mt-1">{slide.title}</p>
              </button>
            );
          })}
        </div>

        {activeSlide && (
          <div className="mt-12 rounded-xl border border-[#D9E8F5] bg-[#F8FAFC] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <div className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-4">
                  {activeSlide.tag}
                </div>
                <h3 className="text-3xl font-bold text-[#003366] mt-4">
                  {activeSlide.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-[#5A7A99]">
                  {activeSlide.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {activeSlide.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="inline-flex items-center gap-2 rounded-full bg-white border border-[#D9E8F5] px-4 py-2 text-sm text-[#0052A3]"
                    >
                      ✓ {bullet}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0052A3]/10 to-[#4DA6FF]/10 p-8 lg:p-10 flex flex-col justify-center">
                <div className="space-y-6">
                  {dict.serviceCarousel.approach.steps.map((item, index) => (
                    <div key={item} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0052A3] text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-[#003366]">{`Adım ${index + 1}`}</p>
                        <p className="text-sm text-[#5A7A99] mt-1">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#003366] text-white px-8 lg:px-10 py-6 grid sm:grid-cols-2 gap-6">
              {dict.serviceCarousel.focus.stats.map((stat) => (
                <div key={stat.value + stat.label}>
                  <p className="text-xs font-semibold text-[#4DA6FF] uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionReveal>
  );
}