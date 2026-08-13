import { translationsEn } from "./translations-en";
import { translationsId } from "./translations-id";

export type Language = "id" | "en";

export const translations: Record<Language, Record<string, string>> = {
  id: translationsId,
  en: translationsEn,
};
