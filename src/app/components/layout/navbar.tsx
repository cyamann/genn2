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
    ? "border-white/10 bg-white/8 backdrop-blur-md text-white"
    : "border-b border-[#E8F0F8] bg-white/80 backdrop-blur-sm shadow-sm";

  const menuLinkClassName = isOverlay 
    ? "font-medium text-sm transition duration-300 text-white/80 hover:text-white relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/40 after:transition after:duration-300 group-hover:after:w-full"
    : "font-medium text-sm transition duration-300 text-[#5A7A99] hover:text-[#0052A3] relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4DA6FF] after:transition after:duration-300 group-hover:after:w-full";

  return (
    <nav className={`left-0 right-0 top-0 z-[120] ${isOverlay ? "absolute" : "sticky"}`}>
      <div className="mx-auto max-w-7xl px-6 py-3 lg:px-12">
        <div
          className={`px-6 py-3.5 rounded-xl ${shellClassName}`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <Link
              href={`/${locale}`}
              className={`text-lg font-bold tracking-tight flex-shrink-0 ${isOverlay ? "text-white" : "text-[#003366]"}`}
            >
              {dict.navbar.brand}
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center gap-8 ${isOverlay ? "text-white" : "text-[#5A7A99]"}`}>
              {/* Primary Navigation */}
              <div className="flex items-center gap-6">
                <Link href={`/${locale}`} className={menuLinkClassName}>
                  {dict.navbar.links.home}
                </Link>

                <Link href={`/${locale}/services`} className={menuLinkClassName}>
                  {dict.navbar.links.services}
                </Link>
              </div>

              {/* Divider */}
              <div className={`w-px h-5 transition duration-300 ${isOverlay ? "bg-white/20" : "bg-[#D9E8F5]"}`}></div>

              {/* About Dropdown */}
              <div className="group relative">
                <button className={`${menuLinkClassName} flex items-center gap-1.5`}>
                  {dict.navbar.links.about}
                  <svg className="w-3.5 h-3.5 transition duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden min-w-[380px] pt-4 group-hover:block z-50">
                  <div className={`rounded-2xl border backdrop-blur-xl shadow-2xl p-6 ${isOverlay ? "bg-[#0A3F66]/90 border-white/20" : "bg-white/95 border-white"}`}>
                    <div className="space-y-3">
                      <Link
                        href={`/${locale}/about/company`}
                        className={`block rounded-xl px-4 py-3.5 transition duration-300 group/item ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}
                      >
                        <p className={`font-semibold text-sm leading-tight ${isOverlay ? "text-white" : "text-[#003366]"}`}>
                          {dict.navbar.aboutMenu.company}
                        </p>
                        <p className={`text-xs mt-1.5 leading-relaxed ${isOverlay ? "text-white/50" : "text-[#5A7A99]"}`}>
                          Kurumsal değerlerimiz ve vizyonumuz
                        </p>
                      </Link>

                      <Link
                        href={`/${locale}/about/mission`}
                        className={`block rounded-xl px-4 py-3.5 transition duration-300 group/item ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}
                      >
                        <p className={`font-semibold text-sm leading-tight ${isOverlay ? "text-white" : "text-[#003366]"}`}>
                          {dict.navbar.aboutMenu.mission}
                        </p>
                        <p className={`text-xs mt-1.5 leading-relaxed ${isOverlay ? "text-white/50" : "text-[#5A7A99]"}`}>
                          Misyonumuz ve stratejik hedeflerimiz
                        </p>
                      </Link>

                      <Link
                        href={`/${locale}/about/partners`}
                        className={`block rounded-xl px-4 py-3.5 transition duration-300 group/item ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}
                      >
                        <p className={`font-semibold text-sm leading-tight ${isOverlay ? "text-white" : "text-[#003366]"}`}>
                          {dict.navbar.aboutMenu.partners}
                        </p>
                        <p className={`text-xs mt-1.5 leading-relaxed ${isOverlay ? "text-white/50" : "text-[#5A7A99]"}`}>
                          Güvenilir iş ortaklarımız
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className={`w-px h-5 transition duration-300 ${isOverlay ? "bg-white/20" : "bg-[#D9E8F5]"}`}></div>

              {/* Secondary Navigation */}
              <div className="flex items-center gap-6">
                <Link href={`/${locale}/careers`} className={menuLinkClassName}>
                  {dict.navbar.links.careers}
                </Link>

                <Link href={`/${locale}/contact`} className={menuLinkClassName}>
                  {dict.navbar.links.contact}
                </Link>
              </div>
            </div>

            {/* Right Section - Locale & CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <LocaleSwitcher locale={locale} inverted={isOverlay} />
              <div className="w-px h-5 bg-current opacity-10"></div>
              <Link
                href={`/${locale}/quote`}
                className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition duration-300 flex-shrink-0 ${isOverlay
                    ? "bg-white/90 text-[#003366] hover:bg-white shadow-lg hover:shadow-xl"
                    : "bg-gradient-to-br from-[#0052A3] to-[#003D7A] text-white hover:shadow-xl hover:shadow-[#0052A3]/30"
                  }`}
              >
                {dict.navbar.links.quote}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden flex-shrink-0 transition duration-300 ${isOverlay ? "border-white/30 bg-white/10 hover:bg-white/15" : "border-[#D9E8F5] bg-[#F0F4F8] hover:bg-[#E8F0F8]"
                }`}
              aria-label={dict.navbar.mobileMenuLabel}
            >
              <span className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen ? (
            <div className={`mt-4 rounded-2xl border backdrop-blur-xl p-5 lg:hidden animate-in fade-in duration-300 ${isOverlay ? "border-white/20 bg-white/8" : "border-[#E8F0F8] bg-white/80"}`}>
              <div className={`grid gap-0.5 text-sm font-medium ${isOverlay ? "text-white" : "text-[#003366]"}`}>
                <Link href={`/${locale}`} onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}>
                  {dict.navbar.links.home}
                </Link>

                <Link href={`/${locale}/services`} onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}>
                  {dict.navbar.links.services}
                </Link>

                <button
                  type="button"
                  onClick={() => setIsAboutOpen((current) => !current)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}
                >
                  <span>{dict.navbar.links.about}</span>
                  <svg className={`w-4 h-4 transition duration-300 ${isAboutOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {isAboutOpen ? (
                  <div className={`rounded-lg px-2 py-2 ml-2 border-l-2 space-y-1 ${isOverlay ? "border-[#4DA6FF] bg-white/5" : "border-[#4DA6FF] bg-[#E8F0F8]"}`}>
                    <Link
                      href={`/${locale}/about/company`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded text-sm transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-white/60"}`}
                    >
                      {dict.navbar.aboutMenu.company}
                    </Link>

                    <Link
                      href={`/${locale}/about/mission`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded text-sm transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-white/60"}`}
                    >
                      {dict.navbar.aboutMenu.mission}
                    </Link>

                    <Link
                      href={`/${locale}/about/partners`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded text-sm transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-white/60"}`}
                    >
                      {dict.navbar.aboutMenu.partners}
                    </Link>
                  </div>
                ) : null}

                <Link href={`/${locale}/careers`} onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}>
                  {dict.navbar.links.careers}
                </Link>

                <Link href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg transition duration-300 ${isOverlay ? "hover:bg-white/10" : "hover:bg-[#4DA6FF]/8"}`}>
                  {dict.navbar.links.contact}
                </Link>
              </div>

              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-current/10">
                <LocaleSwitcher locale={locale} inverted={isOverlay} />
                <Link
                  href={`/${locale}/quote`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-center text-sm font-semibold transition duration-300 ${isOverlay
                      ? "bg-white/90 text-[#003366] hover:bg-white"
                      : "bg-gradient-to-br from-[#0052A3] to-[#003D7A] text-white"
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