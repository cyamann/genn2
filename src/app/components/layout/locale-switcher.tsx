"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type LocaleSwitcherProps = {
  locale: string;
  inverted?: boolean;
};

const locales = {
  tr: { label: "Türkçe", shortLabel: "TR", flag: "🇹🇷" },
  en: { label: "English", shortLabel: "EN", flag: "🇬🇧" },
} as const;

export default function LocaleSwitcher({
  locale,
  inverted = false,
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function buildHref(targetLocale: keyof typeof locales) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${targetLocale}`;
    }

    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  const currentLocale = locales[locale as keyof typeof locales] ?? locales.tr;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
          inverted
            ? "border-white/15 bg-white/8 text-white"
            : "border-[#D9E8F5] bg-[#F0F4F8] text-[#003366]"
        }`}
      >
        <span className="text-sm">{currentLocale.flag}</span>
        <span>{currentLocale.shortLabel}</span>
        <span className="text-[10px]">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen ? (
        <div
          className={`absolute right-0 top-full z-[140] mt-3 min-w-[180px] rounded-[24px] border p-2 shadow-[0_24px_70px_rgba(0,51,102,0.14)] ${
            inverted
              ? "border-white/12 bg-[#003366] text-white"
              : "border-[#D9E8F5] bg-white text-[#003366]"
          }`}
        >
          {(Object.entries(locales) as Array<[keyof typeof locales, (typeof locales)[keyof typeof locales]]>).map(
            ([key, value]) => {
              const isActive = key === locale;

              return (
                <Link
                  key={key}
                  href={buildHref(key)}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
                    isActive
                      ? inverted
                        ? "bg-white/10"
                        : "bg-[#E8F0F8]"
                      : inverted
                        ? "hover:bg-white/6"
                        : "hover:bg-[#F0F4F8]"
                  }`}
                >
                  <span className="text-base">{value.flag}</span>
                  <span className="font-medium">{value.label}</span>
                </Link>
              );
            }
          )}
        </div>
      ) : null}
    </div>
  );
}
