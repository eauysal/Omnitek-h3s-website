"use client"

import { Check, Minus } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Paket } from "@/data/sektorler"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface SectorPackagesProps {
  packages: Paket[]
}

const content: Record<Locale, {
  heading: string
  headingHighlight: string
  subtitle: string
  recommended: string
  excluded: string
}> = {
  tr: {
    heading: "İşletmeniz İçin",
    headingHighlight: "Çözüm Paketleri",
    subtitle: "İhtiyacınıza göre üç seviyede tasarlandı. Size uygun paketi birlikte netleştirelim.",
    recommended: "Tavsiye Edilen",
    excluded: "Pakete dahil değil",
  },
  en: {
    heading: "Solution Packages",
    headingHighlight: "for Your Business",
    subtitle: "Designed across three tiers based on your needs. Let's figure out the right package together.",
    recommended: "Recommended",
    excluded: "Not included",
  },
}

export function SectorPackages({ packages }: SectorPackagesProps) {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section className="flow-packages py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 lg:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg, index) => {
            const name = locale === "en" ? pkg.nameEn : pkg.name
            const description = locale === "en" ? pkg.descriptionEn : pkg.description
            const idealLabel = locale === "en" ? pkg.idealLabelEn : pkg.idealLabel
            const ctaLabel = locale === "en" ? pkg.ctaLabelEn : pkg.ctaLabel
            const included = pkg.features.filter((feature) => feature.included)
            const excluded = pkg.features.filter((feature) => !feature.included)
            return (
            <Reveal key={pkg.name} delay={index * 100} className="h-full">
              <div
                className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  pkg.recommended
                    ? "lg:-translate-y-4 hover:-translate-y-2 lg:hover:-translate-y-7"
                    : "hover:-translate-y-2"
                }`}
              >
                {pkg.recommended && (
                  <div className="rounded-t-xl bg-foreground text-background text-center px-4 py-3">
                    <p className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-wide uppercase">
                      {t.recommended}
                    </p>
                  </div>
                )}
                <div
                  className={`bg-card border p-6 lg:p-8 flex flex-col h-full transition-shadow duration-300 ${
                    pkg.recommended
                      ? "border-2 border-primary rounded-b-xl shadow-[0_20px_50px_rgba(42,129,244,0.18)] hover:shadow-[0_25px_60px_rgba(42,129,244,0.35)]"
                      : "border-border rounded-xl hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(42,129,244,0.18)]"
                  }`}
                >
                  {idealLabel && (
                    <span className="self-start mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {idealLabel}
                    </span>
                  )}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>

                  <div className="mb-8 flex-1 space-y-5">
                    <ul className="space-y-3">
                      {included.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-success-ink flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-snug text-foreground">
                            {locale === "en" ? feature.textEn : feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {excluded.length > 0 && (
                      <div className="border-t border-border pt-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
                          {t.excluded}
                        </p>
                        <ul className="space-y-3">
                          {excluded.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5 opacity-60">
                              <Minus className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-snug text-muted-foreground">
                                {locale === "en" ? feature.textEn : feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button
                    asChild
                    variant={pkg.recommended ? "default" : "outline"}
                    className={
                      pkg.recommended
                        ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        : "w-full"
                    }
                  >
                    <Link href={pkg.ctaHref}>{ctaLabel}</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
