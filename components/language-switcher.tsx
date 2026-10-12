"use client"

import { useLanguage } from "@/lib/i18n/language-context"

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-semibold shrink-0 ${className}`}
      role="group"
      aria-label="Dil seçimi / Language"
    >
      <button
        type="button"
        onClick={() => setLocale("tr")}
        aria-pressed={locale === "tr"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === "tr"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
