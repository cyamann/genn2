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
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <SectionReveal className="inner-page-hero-inner">
            <span className="inner-page-eyebrow">{dict.partners.eyebrow}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.partners.title}
            </h1>
          </SectionReveal>
        </section>

        <section className="inner-page-surface">
          <SectionReveal className="mx-auto max-w-6xl">
            <PartnersShowcase dictionary={dict.partners.showcase} />
          </SectionReveal>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
