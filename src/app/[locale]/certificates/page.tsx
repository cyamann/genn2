import Link from "next/link";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const documents = [
    {
      id: 1,
      title: dict.certificates.documents[0].title,
      description: dict.certificates.documents[0].description,
      icon: "📋",
      fileUrl: "/sample-document-1.pdf",
      fileSize: "2.4 MB",
    },
    {
      id: 2,
      title: dict.certificates.documents[1].title,
      description: dict.certificates.documents[1].description,
      icon: "📦",
      fileUrl: "/sample-document-2.pdf",
      fileSize: "1.8 MB",
    },
  ];

  return (
    <>
      <Navbar locale={locale} variant="overlay" />
      <main className="inner-page-shell">
        <section className="inner-page-hero">
          <SectionReveal className="inner-page-hero-inner">
            <span className="inner-page-eyebrow">{dict.certificates.eyebrow}</span>
            <h1 className="inner-page-title text-5xl font-bold sm:text-6xl">
              {dict.certificates.title}
            </h1>
            <p className="inner-page-description text-base leading-relaxed">
              {dict.certificates.description}
            </p>
          </SectionReveal>
        </section>

        <section className="inner-page-surface">
        <SectionReveal className="mx-auto max-w-5xl" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="group rounded-[28px] border border-[#D9E8F5] bg-gradient-to-br from-white via-[#F8FBFE] to-[#EDF4FB] p-8 shadow-[0_24px_50px_rgba(0,31,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#4DA6FF] hover:shadow-[0_28px_60px_rgba(0,82,163,0.14)]"
              >
                {/* Icon */}
                <div className="text-4xl mb-6 transition duration-300 group-hover:scale-110 inline-block">
                  {doc.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#003366] mb-3">
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-[#5A7A99] mb-6">
                  {doc.description}
                </p>

                {/* File Info */}
                <div className="py-4 border-t border-[#E8F0F8] mb-6">
                  <p className="text-sm text-[#5A7A99]">
                    <span className="font-semibold">Dosya Boyutu:</span> {doc.fileSize}
                  </p>
                </div>

                {/* Download Button */}
                <Link
                  href={doc.fileUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0052A3] to-[#003D7A] text-white font-semibold rounded-lg transition duration-300 hover:shadow-lg hover:shadow-[#0052A3]/30"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {dict.certificates.downloadButton}
                </Link>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-20 max-w-5xl" delay={120}>
          <div className="rounded-[28px] border border-[#D9E8F5] bg-white/95 p-8 shadow-[0_24px_50px_rgba(0,31,77,0.08)] sm:p-10">
            <h3 className="text-2xl font-bold text-[#003366] mb-4">
              {dict.certificates.info.title}
            </h3>
            <p className="text-base leading-relaxed text-[#5A7A99] mb-6">
              {dict.certificates.info.description}
            </p>
            <ul className="space-y-3">
              {dict.certificates.info.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#4DA6FF] font-bold text-lg mt-0.5">✓</span>
                  <span className="text-[#5A7A99]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
