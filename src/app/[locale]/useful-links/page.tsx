import Link from 'next/link';
import SectionReveal from '../../components/ui/section-reveal';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import { getDictionary } from '@/src/lib/getDictionaries';

export default async function UsefulLinksPage({
  params,
}: {
  params: Promise<{ locale: 'tr' | 'en' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const links = dict.usefulLinks?.links || [];

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <SectionReveal>
            <div className="mb-16">
              <div className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
                {dict.usefulLinks?.eyebrow}
              </div>
              <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mb-6">
                {dict.usefulLinks?.title}
              </h1>
              <p className="text-base leading-relaxed text-[#5A7A99] max-w-2xl">
                {dict.usefulLinks?.description}
              </p>
            </div>
          </SectionReveal>

          {/* Government Links Section */}
          <SectionReveal delay={80}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#003366] mb-8">
                {dict.usefulLinks?.sections?.government}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.filter((link: any) => link.category === 'government').map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#D9E8F5] bg-gradient-to-br from-white to-[#F8FAFC] p-6 hover:shadow-lg transition duration-300 hover:border-[#4DA6FF]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🏛️</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#003366] mb-1.5 group-hover:text-[#0052A3] transition duration-300">
                          {link.name}
                        </h3>
                        <p className="text-xs text-[#5A7A99] line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Business & Industry Links Section */}
          <SectionReveal delay={120}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#003366] mb-8">
                {dict.usefulLinks?.sections?.business}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.filter((link: any) => link.category === 'business').map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#D9E8F5] bg-gradient-to-br from-white to-[#F8FAFC] p-6 hover:shadow-lg transition duration-300 hover:border-[#4DA6FF]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📊</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#003366] mb-1.5 group-hover:text-[#0052A3] transition duration-300">
                          {link.name}
                        </h3>
                        <p className="text-xs text-[#5A7A99] line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Professional Organizations Section */}
          <SectionReveal delay={160}>
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-8">
                {dict.usefulLinks?.sections?.organizations}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.filter((link: any) => link.category === 'organizations').map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-[#D9E8F5] bg-gradient-to-br from-white to-[#F8FAFC] p-6 hover:shadow-lg transition duration-300 hover:border-[#4DA6FF]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🤝</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#003366] mb-1.5 group-hover:text-[#0052A3] transition duration-300">
                          {link.name}
                        </h3>
                        <p className="text-xs text-[#5A7A99] line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Info Section */}
          <SectionReveal delay={200}>
            <div className="mt-16 rounded-2xl border border-[#D9E8F5] bg-gradient-to-br from-[#E8F0F8] to-[#F0F4F8] p-8 md:p-12">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">ℹ️</div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    {dict.usefulLinks?.info?.title}
                  </h3>
                  <p className="text-[#5A7A99] leading-relaxed mb-4">
                    {dict.usefulLinks?.info?.description}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-block font-semibold text-[#0052A3] hover:text-[#003366] transition duration-300"
                  >
                    {dict.usefulLinks?.info?.link} →
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}
