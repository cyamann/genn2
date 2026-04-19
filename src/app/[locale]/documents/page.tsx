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
      <Navbar locale={locale} />
      <main className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto max-w-5xl">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
            {dict.documents.eyebrow}
          </span>

          <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
            {dict.documents.title}
          </h1>

          <p className="mt-8 text-base leading-relaxed text-[#5A7A99] max-w-3xl">
            {dict.documents.description}
          </p>
        </SectionReveal>

        {/* Export Documents Section */}
        <SectionReveal className="mx-auto max-w-5xl mt-20" delay={80}>
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

        {/* Import Documents Section */}
        <SectionReveal className="mx-auto max-w-5xl mt-20" delay={120}>
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

        {/* CTA Section */}
        <SectionReveal className="mx-auto max-w-5xl mt-20" delay={160}>
          <div className="rounded-2xl bg-gradient-to-br from-[#4DA6FF]/10 to-[#E8F0F8] border border-[#D9E8F5] p-8 sm:p-10">
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
      </main>
      <Footer locale={locale} />
    </>
  );
}
