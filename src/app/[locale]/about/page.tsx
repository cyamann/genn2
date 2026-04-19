import AboutCarousel from "../../components/about/about-carousel";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function AboutPage({
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
        <SectionReveal className="mx-auto max-w-7xl">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
            {dict.aboutPage.eyebrow}
          </span>

          <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
            {dict.aboutPage.title}
          </h1>

          <div className="mt-16">
            <AboutCarousel slides={dict.aboutPage.slides} />
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {dict.aboutPage.sections.map((section: any) => (
              <article
                key={section.title}
                className="rounded-lg border border-[#D9E8F5] bg-white p-6"
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
      </main>
      <Footer locale={locale} />
    </>
  );
}