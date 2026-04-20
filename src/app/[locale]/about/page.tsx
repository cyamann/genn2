import AboutCarousel from "../../components/about/about-carousel";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

type AboutSection = {
  title: string;
  description: string;
};

export default async function AboutPage({
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
            <span className="inner-page-eyebrow">{dict.aboutPage.eyebrow}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.aboutPage.title}
            </h1>
          </SectionReveal>
        </section>

        <section className="inner-page-surface">
          <SectionReveal className="mx-auto max-w-7xl">
            <div>
              <AboutCarousel slides={dict.aboutPage.slides} />
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {(dict.aboutPage.sections as AboutSection[]).map((section) => (
                <article
                  key={section.title}
                  className="rounded-[24px] border border-[#D9E8F5] bg-white/95 p-6 shadow-[0_20px_45px_rgba(0,31,77,0.07)]"
                >
                  <h2 className="text-xl font-bold text-[#003366]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#5A7A99]">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
