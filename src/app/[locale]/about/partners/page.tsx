import PartnersShowcase from "../../../components/about/partners-showcase";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function AboutPartnersPage({
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
        <SectionReveal className="mx-auto max-w-6xl">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
            {dict.partners.eyebrow}
          </span>

          <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
            {dict.partners.title}
          </h1>

          <div className="mt-16">
            <PartnersShowcase dictionary={dict.partners.showcase} />
          </div>
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}