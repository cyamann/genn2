"use client";
import { useDictionary } from "../providers/dictionary-provider";
import SectionReveal from "../ui/section-reveal";

export default function DiscoveryGrid() {
  const dict = useDictionary();

  return (
    <SectionReveal className="bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-20" delay={100}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-4">
            {dict.discovery.eyebrow}
          </span>
          <h2 className="text-4xl font-bold text-[#003366] sm:text-5xl">
            {dict.discovery.title}
          </h2>
        </div>

        <div className="space-y-4">
          {dict.discovery.items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-lg border border-[#D9E8F5] bg-white p-6 transition hover:shadow-lg hover:border-[#4DA6FF]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4DA6FF]/20 text-[#0052A3] font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#003366]">{item.title}</h3>
                  <p className="mt-2 text-[#5A7A99] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}