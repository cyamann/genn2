import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: "en" | "tr" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <div className="inner-page-hero-inner">
            <span className="inner-page-eyebrow">{dict.services.title}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.services.heading}
            </h1>
          </div>
        </section>

        <section className="inner-page-surface">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dict.services.items.map((item: string) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#D9E8F5] bg-white/95 p-6 shadow-[0_24px_50px_rgba(0,31,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#4DA6FF] hover:shadow-[0_28px_60px_rgba(0,82,163,0.16)]"
                >
                  <p className="text-base font-semibold text-[#003366]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
