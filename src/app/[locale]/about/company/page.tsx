import AboutCarousel from "../../../components/about/about-carousel";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";
export default async function AboutCompanyPage({
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
            {dict.about.eyebrow}
          </span>

          <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
            {dict.about.title}
          </h1>

          <p className="mt-8 text-base leading-relaxed text-[#5A7A99] max-w-3xl">
            {dict.about.description}
          </p>

          <div className="mt-16">
            <AboutCarousel slides={dict.about.slides} />
          </div>
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}