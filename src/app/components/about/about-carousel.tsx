"use client";

import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
};

type AboutCarouselProps = {
  slides: Slide[];
};

export default function AboutCarousel({ slides }: AboutCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="rounded-xl border border-[#D9E8F5] bg-white overflow-hidden">
      <div className="border-b border-[#E8F0F8] p-6 flex gap-2 overflow-x-auto">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap px-4 py-2.5 text-sm font-semibold rounded-lg border transition ${
                isActive
                  ? "bg-[#0052A3] text-white border-[#0052A3]"
                  : "bg-white text-[#5A7A99] border-[#D9E8F5] hover:bg-[#F8FAFC]"
              }`}
            >
              {slide.eyebrow}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="p-8 lg:p-10">
          <div className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-4">
            {activeSlide.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[#003366]">
            {activeSlide.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#5A7A99]">
            {activeSlide.description}
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#E8F0F8] to-[#F0F4F8] p-8 lg:p-10 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white border-2 border-[#4DA6FF]">
              <span className="text-4xl">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
