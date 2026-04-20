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
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <SectionReveal className="inner-page-hero-inner grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="inner-page-eyebrow">{dict.quote.eyebrow}</span>
              <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
                {dict.quote.title}
              </h1>
              <p className="inner-page-description text-base leading-relaxed">
                {dict.quote.description}
              </p>
            </div>

            <MailtoForm
              email="teklif@sirket.com"
              subjectPrefix={dict.quote.form.subjectPrefix}
              title={dict.quote.form.title}
              description={dict.quote.form.description}
              buttonLabel={dict.quote.form.buttonLabel}
              theme="dark"
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
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
