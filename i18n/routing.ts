import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "pt", "hi", "de", "fr", "ja", "zh", "ar", "ru"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
