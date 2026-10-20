"use client"

import Image from "next/image"
import { X, Check } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const currentSystem: Record<Locale, string[]> = {
  tr: [
    "Müşteriler, kasa ve POS ile aynı interneti kullanıyor",
    "Güvenlik duvarı yok veya yetersiz",
    "5651 log kaydı tutulmuyor",
    "Yazılım güncellemesi otomatik değil",
    "Proaktif izleme yok, ağdaki cihazlar korumasız",
    "Dokümantasyon ve destek yok",
  ],
  en: [
    "Customers use the same network as the till and POS",
    "No firewall, or an inadequate one",
    "No 5651 log records kept",
    "Software updates aren't automatic",
    "No proactive monitoring — devices on the network are unprotected",
    "No documentation or support",
  ],
}

const withH3S: Record<Locale, string[]> = {
  tr: [
    "Ağlar tamamen ayrılmış",
    "Kurumsal güvenlik duvarı aktif",
    "5651 uyumlu log kaydı",
    "Otomatik firmware güncelleme",
    "7/24 proaktif izleme",
    "Tam dokümantasyon ve destek",
  ],
  en: [
    "Networks fully separated",
    "Enterprise-grade firewall active",
    "5651-compliant log records",
    "Automatic firmware updates",
    "24/7 proactive monitoring",
    "Full documentation and support",
  ],
}

const content: Record<Locale, {
  alt: string
  heading: string
  headingHighlight: string
  subtitle: string
  currentTitle: string
  withTitle: string
}> = {
  tr: {
    alt: "Otel resepsiyonunda misafir Wi-Fi ile bağlanan konuklar",
    heading: "Farkı",
    headingHighlight: "Görün",
    subtitle: "Mevcut sisteminiz ile H3S çözümü arasındaki fark",
    currentTitle: "Mevcut Sisteminiz",
    withTitle: "H3S ile",
  },
  en: {
    alt: "Hotel guests connecting to Wi-Fi at the front desk",
    heading: "See the",
    headingHighlight: "Difference",
    subtitle: "The difference between your current system and the H3S solution",
    currentTitle: "Your Current System",
    withTitle: "With H3S",
  },
}

/** "Farkı Görün" karşılaştırması: ana sayfada Güvenlik bölümünün içinde, sektör sayfalarında kendi bölümünde kullanılır. */
export function ComparisonCards({ level = 2 }: { level?: 2 | 3 }) {
  const { locale } = useLanguage()
  const t = content[locale]
  const Heading = level === 2 ? "h2" : "h3"
  const CardHeading = level === 2 ? "h3" : "h4"
  const headingClass =
    level === 2
      ? "text-2xl sm:text-3xl lg:text-4xl mb-4"
      : "text-2xl sm:text-3xl mb-3"

  return (
    <>
      <Reveal className={level === 2 ? "text-center mb-12" : "text-center mt-16 lg:mt-20 mb-10"}>
        <Heading className={`font-[family-name:var(--font-heading)] font-bold text-foreground ${headingClass}`}>
          {t.heading} <span className="text-primary">{t.headingHighlight}</span>
        </Heading>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Current System */}
        <Reveal direction="left">
          <div className="bg-card border border-destructive/30 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-destructive/15 hover:border-destructive/60 hover:shadow-[0_15px_40px_rgba(220,38,38,0.2)] cursor-pointer h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <CardHeading className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground leading-none">
                {t.currentTitle}
              </CardHeading>
            </div>
            <ul className="space-y-4">
              {currentSystem[locale].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* With H3S */}
        <Reveal direction="right" delay={150}>
          <div className="bg-card border border-success/30 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-success/15 hover:border-success/60 hover:shadow-[0_15px_40px_rgba(34,197,94,0.2)] cursor-pointer h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-success-ink" />
              </div>
              <CardHeading className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground leading-none">
                {t.withTitle}
              </CardHeading>
            </div>
            <ul className="space-y-4">
              {withH3S[locale].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success-ink flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </>
  )
}

export function ComparisonSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section className="flow-compare py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="flow-photo-fade absolute inset-0 z-0">
        <Image
          src="/images/happy-guests-2.jpg"
          alt={t.alt}
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ComparisonCards level={2} />
      </div>
    </section>
  )
}
