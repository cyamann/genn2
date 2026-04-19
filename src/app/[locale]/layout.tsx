import { getDictionary } from "@/src/lib/getDictionaries";
import type { ReactNode } from "react";
import { DictionaryProvider } from "../components/providers/dictionary-provider";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}