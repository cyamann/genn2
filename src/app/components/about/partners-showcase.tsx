"use client";

import { useEffect, useState } from "react";

const logos = [
  { name: "MAERSK", accent: "bg-[#d9ecf7] text-[#0b4d72]" },
  { name: "MSC", accent: "bg-[#f2e7d2] text-[#6f4f22]" },
  { name: "CMA CGM", accent: "bg-[#dce6f9] text-[#244c8f]" },
  { name: "HAPAG-LLOYD", accent: "bg-[#f5ddcf] text-[#934726]" },
  { name: "DSV", accent: "bg-[#efe7f6] text-[#5a2b79]" },
  { name: "DB SCHENKER", accent: "bg-[#f7dbdb] text-[#8d1f1f]" },
  { name: "DHL", accent: "bg-[#fff0b8] text-[#7a4d00]" },
  { name: "CEVA", accent: "bg-[#e1f3eb] text-[#1f5f4a]" },
  { name: "KUEHNE+NAGEL", accent: "bg-[#dae9fb] text-[#214c85]" },
  { name: "BOLLORE", accent: "bg-[#ece6de] text-[#574636]" },
  { name: "EKOL", accent: "bg-[#dff0ff] text-[#0d5a95]" },
  { name: "GEODIS", accent: "bg-[#f6ddd8] text-[#914334]" },
];

type PartnersShowcaseProps = {
  dictionary: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export default function PartnersShowcase({ dictionary }: PartnersShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % logos.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="rounded-xl border border-[#D9E8F5] bg-white p-8">
        <div className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-4">
          {dictionary.eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-bold text-[#003366]">
          {dictionary.title}
        </h2>
        <p className="mt-4 text-base text-[#5A7A99]">
          {dictionary.description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs font-semibold text-center ${logo.accent}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-[#D9E8F5] bg-gradient-to-br from-[#E8F0F8] to-[#F8FAFC] p-8">
        <h3 className="text-lg font-bold text-[#003366] mb-6">Ortağımız Kurumlar</h3>
        <div className="grid gap-3">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`flex items-center gap-4 p-4 rounded-lg border-l-4 transition cursor-pointer ${
                activeIndex === index
                  ? "border-[#0052A3] bg-white shadow-sm"
                  : "border-transparent bg-white/50 hover:bg-white"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${logos[activeIndex].accent}`}>
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-[#003366]">{logo.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}