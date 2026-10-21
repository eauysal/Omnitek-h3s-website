"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const content: Record<Locale, { h1Before: string; h1Highlight: string; subtitle: string; cta: string; chainLink: string }> = {
  tr: {
    h1Before: "Wi-Fi'ınız çalışsın, ",
    h1Highlight: "müşteriniz geri gelsin.",
    subtitle: "Kasa ve POS kesintisiz, misafir Wi-Fi yasal ve müşteri kazandıran bir sistemde.",
    cta: "Görüşme planlayın →",
    chainLink: "Birden fazla şubeniz mi var? →",
  },
  en: {
    h1Before: "Keep your Wi-Fi running, ",
    h1Highlight: "and your customers coming back.",
    subtitle: "The till and POS keep running without interruption, and guest Wi-Fi is both legal and a source of new customers.",
    cta: "Plan a call →",
    chainLink: "Do you have more than one branch? →",
  },
}

export function IsletmelerHero() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section className="flow-sector-hero pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
      <Reveal immediate className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          {t.h1Before}
          <span className="text-primary">{t.h1Highlight}</span>
        </h1>
        <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">{t.subtitle}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 pt-2">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
          >
            <a href="#iletisim">{t.cta}</a>
          </Button>
          <Link href="/" className="text-sm font-semibold text-primary hover:underline underline-offset-4">
            {t.chainLink}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
