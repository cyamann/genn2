import Link from 'next/link';
import SectionReveal from '../../components/ui/section-reveal';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import { getDictionary } from '@/src/lib/getDictionaries';

type UsefulLink = {
  category: 'government' | 'business' | 'organizations';
  description: string;
  name: string;
  url: string;
};

export default async function UsefulLinksPage({
  params,
}: {
  params: Promise<{ locale: 'tr' | 'en' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const links = (dict.usefulLinks?.links ?? []) as UsefulLink[];

  return (
    <>
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <SectionReveal className="inner-page-hero-inner">
            <span className="inner-page-eyebrow">{dict.usefulLinks?.eyebrow}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.usefulLinks?.title}
            </h1>
            <p className="inner-page-description text-base leading-relaxed">
              {dict.usefulLinks?.description}
            </p>
          </SectionReveal>
        </section>

        <section className="inner-page-surface">
          <div className="mx-auto max-w-6xl">
            <SectionReveal delay={80}>
              <div className="mb-16">
                <h2 className="mb-8 text-3xl font-bold text-[#003366]">
                  {dict.usefulLinks?.sections?.government}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {links.filter((link) => link.category === 'government').map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[24px] border border-[#D9E8F5] bg-white/95 p-6 shadow-[0_20px_45px_rgba(0,31,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#4DA6FF] hover:shadow-[0_26px_55px_rgba(0,82,163,0.14)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">🏛️</div>
                        <div className="flex-1">
                          <h3 className="mb-1.5 font-semibold text-[#003366] transition duration-300 group-hover:text-[#0052A3]">
                            {link.name}
                          </h3>
                          <p className="line-clamp-2 text-xs text-[#5A7A99]">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={120}>
              <div className="mb-16">
                <h2 className="mb-8 text-3xl font-bold text-[#003366]">
                  {dict.usefulLinks?.sections?.business}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {links.filter((link) => link.category === 'business').map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[24px] border border-[#D9E8F5] bg-white/95 p-6 shadow-[0_20px_45px_rgba(0,31,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#4DA6FF] hover:shadow-[0_26px_55px_rgba(0,82,163,0.14)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">📊</div>
                        <div className="flex-1">
                          <h3 className="mb-1.5 font-semibold text-[#003366] transition duration-300 group-hover:text-[#0052A3]">
                            {link.name}
                          </h3>
                          <p className="line-clamp-2 text-xs text-[#5A7A99]">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={160}>
              <div>
                <h2 className="mb-8 text-3xl font-bold text-[#003366]">
                  {dict.usefulLinks?.sections?.organizations}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {links.filter((link) => link.category === 'organizations').map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[24px] border border-[#D9E8F5] bg-white/95 p-6 shadow-[0_20px_45px_rgba(0,31,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#4DA6FF] hover:shadow-[0_26px_55px_rgba(0,82,163,0.14)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">🤝</div>
                        <div className="flex-1">
                          <h3 className="mb-1.5 font-semibold text-[#003366] transition duration-300 group-hover:text-[#0052A3]">
                            {link.name}
                          </h3>
                          <p className="line-clamp-2 text-xs text-[#5A7A99]">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="mt-16 rounded-[28px] border border-[#D9E8F5] bg-gradient-to-br from-white via-[#F7FBFF] to-[#E8F1FA] p-8 shadow-[0_24px_50px_rgba(0,31,77,0.08)] md:p-12">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">ℹ️</div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-[#003366]">
                      {dict.usefulLinks?.info?.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-[#5A7A99]">
                      {dict.usefulLinks?.info?.description}
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-block font-semibold text-[#0052A3] transition duration-300 hover:text-[#003366]"
                    >
                      {dict.usefulLinks?.info?.link} →
                    </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
