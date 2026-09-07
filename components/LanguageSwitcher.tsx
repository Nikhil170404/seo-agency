"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

const DEFAULT_LOCALE = "en";
const LOCALES = LANGUAGES.map((l) => l.code);

function getLocaleFromPath(pathname: string): string {
  const segment = pathname.split("/")[1];
  return LOCALES.includes(segment) ? segment : DEFAULT_LOCALE;
}

function buildLocalePath(currentPath: string, targetLocale: string): string {
  const currentLocale = getLocaleFromPath(currentPath);
  let pathWithoutLocale = currentPath;
  if (currentLocale !== DEFAULT_LOCALE) {
    pathWithoutLocale = currentPath.replace(`/${currentLocale}`, "") || "/";
  }
  if (targetLocale === DEFAULT_LOCALE) {
    return pathWithoutLocale || "/";
  }
  return `/${targetLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const current = LANGUAGES.find((l) => l.code === currentLocale) ?? LANGUAGES[0];
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(code: string) {
    setOpen(false);
    const target = buildLocalePath(pathname, code);
    router.push(target);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors px-2 py-1.5 rounded-lg hover:bg-[#F1F5F9]"
        aria-label="Change language"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:block">{current.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-48 bg-white border border-[#E2E8F0] rounded-xl shadow-lg shadow-black/5 z-50 py-1 overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm hover:bg-[#F8FAFC] transition-colors text-left ${
                lang.code === currentLocale
                  ? "text-[#059669] font-semibold bg-[#F0FDF4]"
                  : "text-[#374151]"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === currentLocale && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#059669]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
