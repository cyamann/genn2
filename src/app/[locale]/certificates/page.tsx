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
      <Navbar locale={locale} />
      <main className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto max-w-5xl">
          <span className="inline-block rounded-lg bg-[#4DA6FF]/15 px-3 py-1.5 text-xs font-semibold text-[#0052A3] mb-6">
            {dict.certificates.eyebrow}
          </span>

          <h1 className="text-5xl font-bold text-[#003366] sm:text-6xl mt-4">
            {dict.certificates.title}
          </h1>

          <p className="mt-8 text-base leading-relaxed text-[#5A7A99] max-w-3xl">
            {dict.certificates.description}
          </p>
        </SectionReveal>

        {/* Documents Grid */}
        <SectionReveal className="mx-auto max-w-5xl mt-20" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="rounded-2xl border border-[#D9E8F5] bg-gradient-to-br from-white to-[#F8FAFC] p-8 hover:shadow-lg transition duration-300 hover:border-[#4DA6FF] group"
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

        {/* Additional Info */}
        <SectionReveal className="mx-auto max-w-5xl mt-20" delay={120}>
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#D9E8F5] p-8 sm:p-10">
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
      </main>
      <Footer locale={locale} />
    </>
  );
}
