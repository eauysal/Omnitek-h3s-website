"use client"

import Link from "next/link"
import { Headset, Rocket, TrendingUp, type LucideIcon } from "lucide-react"
import { BurroCaseStudy } from "@/components/burro-case-study"
import { LossCalculationCard } from "@/components/loss-calculation-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const steps: Record<Locale, { icon: LucideIcon; title: string; description: string }[]> = {
  tr: [
    { icon: Headset, title: "Kısa bir görüşme", description: "İşletmenizi dinler, ihtiyacınıza uygun çözümü birlikte netleştiririz." },
    { icon: Rocket, title: "Kurulum", description: "Kasa ve POS işleyişinizi aksatmayacak şekilde kurulum planlanır." },
    { icon: TrendingUp, title: "Misafir bağlanır, müşteri geri gelir", description: "Bağlanan misafirleri tanır, kampanyalarla geri getirmenin sonuçlarını görürsünüz." },
  ],
  en: [
    { icon: Headset, title: "A short call", description: "We listen to your business and work out the right solution together." },
    { icon: Rocket, title: "Installation", description: "Installation is planned so that your till and POS operations aren't disrupted." },
    { icon: TrendingUp, title: "Guests connect, customers return", description: "You get to know the guests who connect and see the results of bringing them back with campaigns." },
  ],
}

const sectorLinks: { slug: string; tr: string; en: string }[] = [
  { slug: "kafe", tr: "Kafe", en: "Café" },
  { slug: "restoran", tr: "Restoran", en: "Restaurant" },
  { slug: "otel-pansiyon", tr: "Otel & Pansiyon", en: "Hotel & Guesthouse" },
  { slug: "market-perakende", tr: "Market & Perakende", en: "Retail & Grocery" },
]

const content: Record<
  Locale,
  {
    lossHeading: string
    lossHighlight: string
    lossSubtitle: string
    caseHeading: string
    caseHighlight: string
    stepsHeading: string
    stepsHighlight: string
    sectorsLabel: string
  }
> = {
  tr: {
    lossHeading: "Wi-Fi'ınızdan geçen misafirlerin kaçı",
    lossHighlight: "bir daha gelmiyor?",
    lossSubtitle: "Bağlanan ama tanınmayan her misafir, ulaşamadığınız bir müşteri demek.",
    caseHeading: "Gerçek bir işletmeden",
    caseHighlight: "sonuçlar",
    stepsHeading: "Nasıl",
    stepsHighlight: "başlıyoruz?",
    sectorsLabel: "Sektörünüze özel sayfalar:",
  },
  en: {
    lossHeading: "How many of the guests on your Wi-Fi",
    lossHighlight: "never come back?",
    lossSubtitle: "Every guest who connects but isn't recognized is a customer you can't reach.",
    caseHeading: "Results from a real",
    caseHighlight: "business",
    stepsHeading: "How do we",
    stepsHighlight: "get started?",
    sectorsLabel: "Pages for your industry:",
  },
}

export function IsletmelerBody() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <>
      {/* Kayıp hesabı */}
      <section className="flow-problems-sector py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.lossHeading} <span className="text-primary">{t.lossHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.lossSubtitle}</p>
          </Reveal>
          <Reveal delay={100}>
            <LossCalculationCard />
          </Reveal>
        </div>
      </section>

      {/* Burro vakası + Hugg yorumu */}
      {/* TODO: TEYİT — Burro ve Hugg yazılı kullanım izni; Burro rakamları (345 kayıt, %38) */}
      <section className="flow-packages py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
              {t.caseHeading} <span className="text-primary">{t.caseHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <BurroCaseStudy />
          </Reveal>
          <Reveal delay={150} className="mt-6">
            <TestimonialCarousel className="bg-card border border-border md:p-6" />
          </Reveal>
        </div>
      </section>

      {/* Sade süreç + sektör sayfaları */}
      <section className="flow-links py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {t.stepsHeading} <span className="text-primary">{t.stepsHighlight}</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {steps[locale].map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-6 h-full text-center">
                  <div className="relative w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">{t.sectorsLabel}</span>
            {sectorLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/sektorler/${link.slug}`}
                className="text-sm font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
              >
                {locale === "en" ? link.en : link.tr}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
