"use client";

import { useState } from "react";

type MailtoFormProps = {
  email: string;
  subjectPrefix: string;
  title: string;
  description: string;
  fields: Array<{
    id: string;
    label: string;
    type?: "text" | "email" | "tel" | "textarea" | "file";
    placeholder: string;
  }>;
  theme?: "dark" | "light";
  buttonLabel: string;
};

export default function MailtoForm({
  email,
  subjectPrefix,
  title,
  description,
  fields,
  theme = "dark",
  buttonLabel,
}: MailtoFormProps) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((field) => [field.id, ""]))
  );
  const [fileNames, setFileNames] = useState<Record<string, string>>({});

  const isDark = theme === "dark";

  function handleChange(id: string, value: string) {
    setValues((current) => ({
      ...current,
      [id]: value,
    }));
  }

  function handleFileChange(id: string, fileName: string) {
    setFileNames((current) => ({
      ...current,
      [id]: fileName,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const primaryValue = values.name || values.fullName || values.company || "Yeni Talep";
    const subject = `${subjectPrefix}: ${primaryValue}`;
    const body = fields
      .map((field) => {
        if (field.type === "file") {
          return `${field.label}: ${fileNames[field.id] || "Secilmedi"}`;
        }

        return `${field.label}: ${values[field.id] || "-"}`;
      })
      .join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[32px] border p-8 shadow-[0_26px_70px_rgba(0,51,102,0.12)] ${
        isDark ? "border-[#4DA6FF]/30 bg-[#4DA6FF]/5 text-white" : "border-[#D9E8F5] bg-white text-[#003366]"
      }`}
    >
      <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? "text-[#4DA6FF]" : "text-[#4DA6FF]"}`}>
        Mail Form
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h2>
      <p className={`mt-4 text-sm leading-7 ${isDark ? "text-white/70" : "text-[#5A7A99]"}`}>{description}</p>

      <div className="mt-8 grid gap-4">
        {fields.map((field) => {
          const commonClasses = `w-full rounded-[20px] border px-4 py-3 text-sm outline-none transition ${
            isDark
              ? "border-[#4DA6FF]/30 bg-[#4DA6FF]/5 text-white placeholder:text-white/35 focus:border-[#4DA6FF]"
              : "border-[#D9E8F5] bg-[#F0F4F8] text-[#003366] placeholder:text-[#7A94B0] focus:border-[#4DA6FF]"
          }`;

          return (
            <label key={field.id} className="grid gap-2">
              <span className={`text-sm ${isDark ? "text-white/70" : "text-[#5A7A99]"}`}>{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  rows={5}
                  value={values[field.id]}
                  onChange={(event) => handleChange(field.id, event.target.value)}
                  className={commonClasses}
                  placeholder={field.placeholder}
                />
              ) : field.type === "file" ? (
                <div className={`rounded-[20px] border px-4 py-4 ${isDark ? "border-[#4DA6FF]/30 bg-[#4DA6FF]/5" : "border-[#D9E8F5] bg-[#F0F4F8]"}`}>
                  <input
                    type="file"
                    onChange={(event) =>
                      handleFileChange(field.id, event.target.files?.[0]?.name || "")
                    }
                    className={`w-full text-sm ${isDark ? "text-white file:mr-4 file:rounded-full file:border-0 file:bg-[#0052A3] file:px-4 file:py-2 file:text-white" : "text-[#003366] file:mr-4 file:rounded-full file:border-0 file:bg-[#003366] file:px-4 file:py-2 file:text-white"}`}
                  />
                  <p className={`mt-3 text-xs ${isDark ? "text-white/55" : "text-[#5A7A99]"}`}>
                    Secilen dosya mail govdesine yazilir. Dosyayi acilan mail ekranina ekleyebilirsiniz.
                  </p>
                </div>
              ) : (
                <input
                  type={field.type || "text"}
                  value={values[field.id]}
                  onChange={(event) => handleChange(field.id, event.target.value)}
                  className={commonClasses}
                  placeholder={field.placeholder}
                />
              )}
            </label>
          );
        })}
      </div>

      <button
        type="submit"
        className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold transition ${
          isDark
            ? "bg-[#0052A3] text-white hover:bg-[#0066CC]"
            : "bg-[#003366] text-white hover:bg-[#002D55]"
        }`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
