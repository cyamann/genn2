"use client";
import Link from "next/link";
import { useDictionary } from "../providers/dictionary-provider";

type FooterProps = {
  locale: string;
};


export default function Footer({ locale }: FooterProps) {
  const dict = useDictionary();
  const instagramHref = dict.footer.contact.instagramHref;
  const linkedinHref = dict.footer.contact.linkedinHref;

  return (
    <footer className="bg-[#003366] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-white/15 pb-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4DA6FF]">
                {dict.footer.brand}
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                {dict.footer.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                {dict.footer.description}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  {dict.footer.linksTitle}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/70">
                  <Link href={`/${locale}`} className="hover:text-white transition">{dict.footer.links.home}</Link>
                  <Link href={`/${locale}/services`} className="hover:text-white transition">{dict.footer.links.services}</Link>
                  <Link href={`/${locale}/about`} className="hover:text-white transition">{dict.footer.links.about}</Link>
                  <Link href={`/${locale}/careers`} className="hover:text-white transition">{dict.footer.links.careers}</Link>
                  <Link href={`/${locale}/contact`} className="hover:text-white transition">{dict.footer.links.contact}</Link>
                  <Link href={`/${locale}/quote`} className="hover:text-white transition">{dict.footer.links.quote}</Link>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  {dict.footer.contactTitle}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/70">
                  <p>{dict.footer.contact.email}</p>
                  <p>{dict.footer.contact.phone}</p>
                  <p>{dict.footer.contact.address}</p>
                  {instagramHref ? (
                    <Link href={instagramHref} target="_blank" rel="noreferrer" className="hover:text-white transition">
                      {dict.footer.contact.instagramLabel}: {dict.footer.contact.instagramValue}
                    </Link>
                  ) : (
                    <p>
                      {dict.footer.contact.instagramLabel}: {dict.footer.contact.instagramValue}
                    </p>
                  )}
                  {linkedinHref ? (
                    <Link href={linkedinHref} target="_blank" rel="noreferrer" className="hover:text-white transition">
                      {dict.footer.contact.linkedinLabel}: {dict.footer.contact.linkedinValue}
                    </Link>
                  ) : (
                    <p>
                      {dict.footer.contact.linkedinLabel}: {dict.footer.contact.linkedinValue}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>{dict.footer.bottom.copyright}</p>
          <p>{dict.footer.bottom.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
