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
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <SectionReveal className="inner-page-hero-inner">
            <span className="inner-page-eyebrow">{dict.about.eyebrow}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.about.title}
            </h1>
            <p className="inner-page-description text-base leading-relaxed">
              {dict.about.description}
            </p>
          </SectionReveal>
        </section>

        <section className="inner-page-surface">
          <SectionReveal className="mx-auto max-w-5xl">
            <AboutCarousel slides={dict.about.slides} />
          </SectionReveal>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
