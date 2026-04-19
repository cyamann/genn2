import Link from "next/link";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MapEmbed from "../../components/ui/map-embed";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const instagramHref = dict.contact.info.instagramHref;
  const linkedinHref = dict.contact.info.linkedinHref;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
              {dict.contact.eyebrow}
            </span>

            <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
              {dict.contact.title}
            </h1>

            <p className="mt-8 text-base leading-relaxed text-[#5A7A99] max-w-2xl">
              {dict.contact.description}
            </p>
          </div>

          <MailtoForm
            email="info@sirket.com"
            subjectPrefix={dict.contact.form.subjectPrefix}
            title={dict.contact.form.title}
            description={dict.contact.form.description}
            buttonLabel={dict.contact.form.buttonLabel}
            fields={[
              {
                id: "name",
                label: dict.contact.form.fields.name.label,
                placeholder: dict.contact.form.fields.name.placeholder,
              },
              {
                id: "email",
                label: dict.contact.form.fields.email.label,
                type: "email",
                placeholder: dict.contact.form.fields.email.placeholder,
              },
              {
                id: "phone",
                label: dict.contact.form.fields.phone.label,
                type: "tel",
                placeholder: dict.contact.form.fields.phone.placeholder,
              },
              {
                id: "message",
                label: dict.contact.form.fields.message.label,
                type: "textarea",
                placeholder: dict.contact.form.fields.message.placeholder,
              },
            ]}
            theme="light"
          />
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-5"
          delay={120}
        >
          <div className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6">
            <p className="text-sm text-[#5A7A99]">{dict.contact.info.emailLabel}</p>
            <p className="mt-2 text-lg font-semibold text-[#003366]">info@sirket.com</p>
          </div>

          <div className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6">
            <p className="text-sm text-[#5A7A99]">{dict.contact.info.phoneLabel}</p>
            <p className="mt-2 text-lg font-semibold text-[#003366]">+90 212 000 00 00</p>
          </div>

          <div className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6">
            <p className="text-sm text-[#5A7A99]">{dict.contact.info.addressLabel}</p>
            <p className="mt-2 text-lg font-semibold text-[#003366]">{dict.contact.info.addressValue}</p>
          </div>

          {instagramHref ? (
            <Link
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6 transition hover:bg-[#F0F4F8] hover:border-[#4DA6FF]"
            >
              <p className="text-sm text-[#5A7A99]">{dict.contact.info.instagramLabel}</p>
              <p className="mt-2 text-lg font-semibold text-[#003366]">{dict.contact.info.instagramValue}</p>
            </Link>
          ) : (
            <div className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6">
              <p className="text-sm text-[#5A7A99]">{dict.contact.info.instagramLabel}</p>
              <p className="mt-2 text-lg font-semibold text-[#003366]">{dict.contact.info.instagramValue}</p>
            </div>
          )}

          {linkedinHref ? (
            <Link
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6 transition hover:bg-[#F0F4F8] hover:border-[#4DA6FF]"
            >
              <p className="text-sm text-[#5A7A99]">{dict.contact.info.linkedinLabel}</p>
              <p className="mt-2 text-lg font-semibold text-[#003366]">{dict.contact.info.linkedinValue}</p>
            </Link>
          ) : (
            <div className="rounded-lg border border-[#D9E8F5] bg-[#F8FAFC] p-6">
              <p className="text-sm text-[#5A7A99]">{dict.contact.info.linkedinLabel}</p>
              <p className="mt-2 text-lg font-semibold text-[#003366]">{dict.contact.info.linkedinValue}</p>
            </div>
          )}
        </SectionReveal>

        <SectionReveal className="mx-auto mt-10 max-w-6xl" delay={160}>
          <div className="mb-5">
            <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-2">
              {dict.contact.location.eyebrow}
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#003366] sm:text-4xl">
              {dict.contact.location.title}
            </h2>
          </div>

          <MapEmbed
            title={dict.contact.location.mapTitle}
            query={dict.contact.location.mapQuery}
          />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
