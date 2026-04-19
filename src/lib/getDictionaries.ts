import { Dictionary } from "./dictionary.type";

const dictionaries = {
  en: () => import("../messages/en.json").then((module) => module.default),
  tr: () => import("../messages/tr.json").then((module) => module.default),
} as const;

export async function getDictionary(locale: string): Promise<Dictionary> {
  const safeLocale = locale === "tr" ? "tr" : "en";
  return dictionaries[safeLocale]();
}