import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";

export default async function CareersPage({
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
              <span className="inner-page-eyebrow">{dict.careers.eyebrow}</span>
              <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
                {dict.careers.title}
              </h1>
              <p className="inner-page-description text-base leading-relaxed">
                {dict.careers.description}
              </p>

              <div className="mt-12 space-y-4">
                {dict.careers.highlights.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 text-white/72"
                  >
                    <span className="font-bold text-[#4DA6FF]">✓</span>
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <MailtoForm
              email="kariyer@sirket.com"
              subjectPrefix={dict.careers.form.subjectPrefix}
              title={dict.careers.form.title}
              description={dict.careers.form.description}
              buttonLabel={dict.careers.form.buttonLabel}
              theme="dark"
              fields={[
                {
                  id: "fullName",
                  label: dict.careers.form.fields.fullName.label,
                  placeholder: dict.careers.form.fields.fullName.placeholder,
                },
                {
                  id: "email",
                  label: dict.careers.form.fields.email.label,
                  type: "email",
                  placeholder: dict.careers.form.fields.email.placeholder,
                },
                {
                  id: "position",
                  label: dict.careers.form.fields.position.label,
                  placeholder: dict.careers.form.fields.position.placeholder,
                },
                {
                  id: "experience",
                  label: dict.careers.form.fields.experience.label,
                  placeholder: dict.careers.form.fields.experience.placeholder,
                },
                {
                  id: "cv",
                  label: dict.careers.form.fields.cv.label,
                  type: "file",
                  placeholder: dict.careers.form.fields.cv.placeholder,
                },
                {
                  id: "message",
                  label: dict.careers.form.fields.message.label,
                  type: "textarea",
                  placeholder: dict.careers.form.fields.message.placeholder,
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
