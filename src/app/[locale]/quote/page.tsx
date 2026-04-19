import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";

export default async function QuotePage({
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
        <SectionReveal className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
              {dict.quote.eyebrow}
            </span>

            <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
              {dict.quote.title}
            </h1>

            <p className="mt-8 text-base leading-relaxed text-[#5A7A99] max-w-2xl">
              {dict.quote.description}
            </p>
          </div>

          <MailtoForm
            email="teklif@sirket.com"
            subjectPrefix={dict.quote.form.subjectPrefix}
            title={dict.quote.form.title}
            description={dict.quote.form.description}
            buttonLabel={dict.quote.form.buttonLabel}
            theme="light"
            fields={[
              {
                id: "company",
                label: dict.quote.form.fields.company.label,
                placeholder: dict.quote.form.fields.company.placeholder,
              },
              {
                id: "name",
                label: dict.quote.form.fields.name.label,
                placeholder: dict.quote.form.fields.name.placeholder,
              },
              {
                id: "email",
                label: dict.quote.form.fields.email.label,
                type: "email",
                placeholder: dict.quote.form.fields.email.placeholder,
              },
              {
                id: "phone",
                label: dict.quote.form.fields.phone.label,
                type: "tel",
                placeholder: dict.quote.form.fields.phone.placeholder,
              },
              {
                id: "service",
                label: dict.quote.form.fields.service.label,
                placeholder: dict.quote.form.fields.service.placeholder,
              },
              {
                id: "message",
                label: dict.quote.form.fields.message.label,
                type: "textarea",
                placeholder: dict.quote.form.fields.message.placeholder,
              },
            ]}
          />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}