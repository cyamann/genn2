"use client";

import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./locale-switcher";
import { useDictionary } from "../providers/dictionary-provider";

type NavbarProps = {
  locale: string;
  variant?: "overlay" | "solid";
};
export default function Navbar({
  locale,
  variant = "solid",
}: NavbarProps) {
  const dict = useDictionary();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const isOverlay = variant === "overlay";

  const shellClassName = isOverlay
    ? "border-white/20 bg-white/5 text-white"
    : "border-transparent bg-white shadow-sm";

  const menuLinkClassName = "font-medium text-sm transition hover:text-[#4DA6FF]";

  return (
    <nav className={`left-0 right-0 top-0 z-[120] ${isOverlay ? "absolute" : "sticky"}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
        <div
          className={`border px-6 py-3 backdrop-blur rounded-lg ${shellClassName}`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/${locale}`}
              className={`text-lg font-bold tracking-tight ${isOverlay ? "text-white" : "text-[#003366]"}`}
            >
              {dict.navbar.brand}
            </Link>

            <div className={`hidden items-center gap-8 lg:flex ${isOverlay ? "text-white" : "text-[#5A7A99]"}`}>
              <Link href={`/${locale}`} className={menuLinkClassName}>
                {dict.navbar.links.home}
              </Link>

              <Link href={`/${locale}/services`} className={menuLinkClassName}>
                {dict.navbar.links.services}
              </Link>

              <div className="group relative">
                <Link href={`/${locale}/about`} className={menuLinkClassName}>
                  {dict.navbar.links.about}
                </Link>

                <div className="absolute left-0 top-full hidden min-w-[200px] pt-2 group-hover:block">
                  <div className={`rounded-lg border shadow-lg p-2 ${isOverlay ? "bg-[#003366] border-white/20" : "bg-white border-[#D9E8F5]"}`}>
                    <Link
                      href={`/${locale}/about/company`}
                      className={`block rounded px-4 py-2.5 text-sm transition ${isOverlay ? "hover:bg-white/10" : "text-[#003366] hover:bg-[#F8FAFC]"}`}
                    >
                      {dict.navbar.aboutMenu.company}
                    </Link>

                    <Link
                      href={`/${locale}/about/mission`}
                      className={`block rounded px-4 py-2.5 text-sm transition ${isOverlay ? "hover:bg-white/10" : "text-[#003366] hover:bg-[#F8FAFC]"}`}
                    >
                      {dict.navbar.aboutMenu.mission}
                    </Link>

                    <Link
                      href={`/${locale}/about/partners`}
                      className={`block rounded px-4 py-2.5 text-sm transition ${isOverlay ? "hover:bg-white/10" : "text-[#003366] hover:bg-[#F8FAFC]"}`}
                    >
                      {dict.navbar.aboutMenu.partners}
                    </Link>
                  </div>
                </div>
              </div>

              <Link href={`/${locale}/careers`} className={menuLinkClassName}>
                {dict.navbar.links.careers}
              </Link>

              <Link href={`/${locale}/contact`} className={menuLinkClassName}>
                {dict.navbar.links.contact}
              </Link>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <LocaleSwitcher locale={locale} inverted={isOverlay} />
              <Link
                href={`/${locale}/quote`}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${isOverlay
                    ? "bg-white text-[#0052A3] hover:bg-[#F0F4F8]"
                    : "bg-[#0052A3] text-white hover:bg-[#003D7A]"
                  }`}
              >
                {dict.navbar.links.quote}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${isOverlay ? "border-white/30 bg-white/10" : "border-[#D9E8F5] bg-[#F8FAFC]"
                }`}
              aria-label={dict.navbar.mobileMenuLabel}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-5 rounded-[24px] border border-[#D9E8F5] bg-[#E8F0F8] text-[#003366] p-4 lg:hidden">
              <div className="grid gap-3 text-sm font-medium">
                <Link href={`/${locale}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.home}
                </Link>

                <Link href={`/${locale}/services`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.services}
                </Link>

                <button
                  type="button"
                  onClick={() => setIsAboutOpen((current) => !current)}
                  className="flex items-center justify-between"
                >
                  <span>{dict.navbar.links.about}</span>
                  <span>{isAboutOpen ? "-" : "+"}</span>
                </button>

                {isAboutOpen ? (
                  <div className="grid gap-2 rounded-[20px] bg-[#D9E8F5] p-3 text-[#003366]">
                    <Link
                      href={`/${locale}/about/company`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dict.navbar.aboutMenu.company}
                    </Link>

                    <Link
                      href={`/${locale}/about/mission`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dict.navbar.aboutMenu.mission}
                    </Link>

                    <Link
                      href={`/${locale}/about/partners`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dict.navbar.aboutMenu.partners}
                    </Link>
                  </div>
                ) : null}

                <Link href={`/${locale}/careers`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.careers}
                </Link>

                <Link href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.contact}
                </Link>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <LocaleSwitcher locale={locale} inverted={isOverlay} />
                <Link
                  href={`/${locale}/quote`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-full px-5 py-3 text-center text-sm font-semibold transition ${isOverlay
                      ? "bg-white text-[#0052A3]"
                      : "bg-[#0052A3] text-white"
                    }`}
                >
                  {dict.navbar.links.quote}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}