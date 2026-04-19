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
      <Navbar locale={locale} />
      <main className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
            {dict.services.title}
          </span>

          <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
            {dict.services.heading}
          </h1>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((item: string) => (
              <div
                key={item}
                className="rounded-lg border border-[#D9E8F5] bg-white p-6 hover:shadow-lg transition"
              >
                <p className="text-base font-semibold text-[#003366]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}