import Link from "next/link";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <SectionReveal className="inner-page-hero-inner">
            <span className="inner-page-eyebrow">{dict.documents.eyebrow}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.documents.title}
            </h1>
            <p className="inner-page-description text-base leading-relaxed">
              {dict.documents.description}
            </p>
          </SectionReveal>
        </section>

        <section className="inner-page-surface">
        <SectionReveal className="mx-auto max-w-5xl" delay={80}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl">
              {dict.documents.export.title}
            </h2>
          </div>

          <div className="space-y-3">
            {dict.documents.export.items.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4 pb-3 border-b border-[#E8F0F8] last:border-b-0">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4DA6FF]/15">
                    <svg className="w-3 h-3 text-[#0052A3]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-[#5A7A99]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-20 max-w-5xl" delay={120}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#003366] sm:text-4xl">
              {dict.documents.import.title}
            </h2>
          </div>

          <div className="space-y-3">
            {dict.documents.import.items.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4 pb-3 border-b border-[#E8F0F8] last:border-b-0">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4DA6FF]/15">
                    <svg className="w-3 h-3 text-[#0052A3]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-[#5A7A99]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-20 max-w-5xl" delay={160}>
          <div className="rounded-[28px] border border-[#D9E8F5] bg-gradient-to-br from-white via-[#F7FBFF] to-[#E8F1FA] p-8 shadow-[0_24px_50px_rgba(0,31,77,0.08)] sm:p-10">
            <h3 className="text-2xl font-bold text-[#003366]">
              {dict.documents.cta.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#5A7A99] max-w-2xl">
              {dict.documents.cta.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="mt-6 inline-block px-6 py-3 bg-[#0052A3] text-white font-semibold rounded-lg transition duration-300 hover:bg-[#003D7A] hover:shadow-lg"
            >
              {dict.documents.cta.button}
            </Link>
          </div>
        </SectionReveal>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
