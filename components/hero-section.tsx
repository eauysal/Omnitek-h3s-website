"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { PartnersMarquee } from "@/components/partners-marquee"
import { TrustStrip } from "@/components/trust-strip"
import { Check, ShieldCheck } from "lucide-react"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const badges: Record<Locale, string[]> = {
  tr: [
    "7/24 izleme",
    "Tüm şubeler tek panelde",
    // TODO: TEYİT — kurulum süresi: "6-8 saat" mi "1 gün" mü (süre yazılmadan "hızlı" olarak bırakıldı)
    "Şube başı hızlı kurulum",
  ],
  en: [
    "24/7 monitoring",
    "All branches in one panel",
    // TODO: TEYİT — setup time: "6-8 hours" or "1 day" (left as "fast" until confirmed)
    "Fast setup per branch",
  ],
}

const content = {
  tr: {
    h1Line1: "Şubelerinizdeki Wi-Fi,",
    h1Line2: "en büyük müşteri veri kaynağınız.",
    h1Scale: 6.3,
    subtitle:
      "H3S, tüm şubelerdeki misafir bağlantılarını izinli müşteri verisine, ölçülebilir kampanyalara ve geri dönen müşteriye dönüştürür. Kurumsal güvenlik ve 5651/KVKK uyumu altyapıda hazır gelir.",
    pilotButton: "Pilot planlayın →",
    singleBranchLink: "Tek şubeli işletmeler için →",
    diagramAlt: "Omnitek H3S - Siber Güvenlik Kalkanı, KVKK/İYS Kaydı (5651) ve Wi-Fi Pazarlama",
    trustBadgeStrong: "1986'dan beri",
    trustBadgeLink: "Omnitek Telekom",
    trustBadgeEnd: " güvencesiyle",
  },
  en: {
    h1Line1: "The Wi-Fi in your branches is",
    h1Line2: "your biggest source of customer data.",
    h1Scale: 5.35,
    subtitle:
      "H3S turns guest connections across all your branches into consented customer data, measurable campaigns and returning customers. Enterprise security and 5651/KVKK compliance come built into the infrastructure.",
    pilotButton: "Plan a pilot →",
    singleBranchLink: "For single-branch businesses →",
    diagramAlt: "Omnitek H3S - Cyber Security Shield, KVKK/IYS Records (5651) and Wi-Fi Marketing",
    trustBadgeStrong: "Since 1986,",
    trustBadgeLink: "Omnitek Telekom",
    trustBadgeEnd: " backed and guaranteed",
  },
} satisfies Record<Locale, Record<string, string | number>>

export function HeroSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  return (
    <>
      <section className="flow-hero min-h-screen pt-24 lg:pt-28 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          {/* Başlık: her genişlikte tam iki satır. İkinci satırın taşmaması için yazı boyutu kapsayıcı genişliğine göre ölçeklenir. */}
          <Reveal direction="left" className="[container-type:inline-size]">
            <h1
              className="font-[family-name:var(--font-heading)] font-bold leading-[1.12] tracking-tight"
              style={{ fontSize: `clamp(1rem, ${t.h1Scale}cqw, 4rem)` }}
            >
              <span className="block whitespace-nowrap">{t.h1Line1}</span>
              <span className="block whitespace-nowrap text-primary">{t.h1Line2}</span>
            </h1>
          </Reveal>

          <div className="mt-6 lg:mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <Reveal direction="left" className="space-y-8">
              <p className="text-muted-foreground text-lg lg:text-xl max-w-xl">
                {t.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
                >
                  <a href="#pilot">{t.pilotButton}</a>
                </Button>
                <Link
                  href="/isletmeler"
                  className="text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  {t.singleBranchLink}
                </Link>
              </div>

              {/* Badges */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {badges[locale].map((badge) => (
                  <li key={badge} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 text-success-ink shrink-0" />
                    {badge}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Right Column - H3S Diagram */}
            <Reveal direction="right" delay={150} className="relative flex items-center justify-center">
              {/* Soft brand-colored glow behind the card */}
              <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-cyan-400/20 to-success/30 blur-3xl" />

              {/* TODO: GÖRSEL — Arda onayı (hero diyagramı henüz zincir/pazarlama mesajına göre yenilenmedi) */}
              <div className="relative w-full aspect-[1600/1312] rounded-2xl bg-gradient-to-br from-primary via-cyan-400 to-success p-[2px] shadow-2xl">
                <div className="relative w-full h-full rounded-[calc(1rem-2px)] overflow-hidden">
                  <Image
                    src={locale === "en" ? "/images/h3s-hero-en.webp" : "/images/h3s-hero.webp"}
                    alt={t.diagramAlt}
                    width={1600}
                    height={1312}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 lg:mt-16 flex items-center justify-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">{t.trustBadgeStrong}</span>{" "}
              <a
                href="https://www.omnitek.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline transition-colors"
              >
                {t.trustBadgeLink}
              </a>
              {t.trustBadgeEnd}
            </span>
          </div>
        </div>

        <PartnersMarquee />
      </section>

      {/* Trust strip - below hero */}
      <section className="flow-proof py-12 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustStrip />
        </div>
      </section>
    </>
  )
}
