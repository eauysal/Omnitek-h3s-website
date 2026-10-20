"use client"

import { Building2, ClipboardList, Headset, LayoutDashboard, Scale, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const points: Record<Locale, { icon: LucideIcon; text: string; optional?: boolean }[]> = {
  tr: [
    { icon: LayoutDashboard, text: "Tüm şubelerin Wi-Fi, güvenlik ve misafir verisi tek panelde" },
    { icon: Building2, text: "Franchise dahil her şubede aynı kurulum standardı" },
    { icon: Scale, text: "Şubeler arası kıyas: hangi şube müşteri kazanıyor, hangisi kaybediyor" },
    { icon: Headset, text: "Tek muhatap, tek hizmet seviyesi (SLA)" },
    // Operasyon modülleri ana akıştan çıkarıldı; tek satırlık not olarak kaldı (detay: components/operations-block.tsx)
    { icon: ClipboardList, text: "İsteğe bağlı: QR menü, personel takibi (PDKS) ve görevlendirme aynı panelde.", optional: true },
  ],
  en: [
    { icon: LayoutDashboard, text: "Wi-Fi, security and guest data for every branch in one panel" },
    { icon: Building2, text: "The same installation standard at every branch, franchises included" },
    { icon: Scale, text: "Branch comparison: which branch is winning customers and which is losing them" },
    { icon: Headset, text: "One point of contact, one service level (SLA)" },
    { icon: ClipboardList, text: "Optional: QR menu, staff attendance (PDKS) and task assignment in the same panel.", optional: true },
  ],
}

const content: Record<Locale, { headingBefore: string; headingHighlight: string; subtitle: string; cta: string }> = {
  tr: {
    headingBefore: "Şube sayınız arttıkça,",
    headingHighlight: "standart da önem kazanır",
    subtitle:
      "H3S her şubede aynı altyapıyı ve aynı misafir deneyimini kurar; tüm şubeleri tek ekrandan yönetmenizi sağlar.",
    cta: "Pilot planlayın →",
  },
  en: {
    headingBefore: "The more branches you have,",
    headingHighlight: "the more the standard matters",
    subtitle:
      "H3S sets up the same infrastructure and the same guest experience at every branch, and lets you manage all of them from a single screen.",
    cta: "Plan a pilot →",
  },
}

export function ChainsSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section id="zincirler" className="flow-chains py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <Reveal direction="left" className="lg:col-span-2 space-y-6">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
              {t.headingBefore} <span className="text-primary">{t.headingHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.subtitle}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#pilot">{t.cta}</a>
            </Button>
          </Reveal>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 lg:gap-6">
            {points[locale].map((point, index) => (
              <Reveal key={point.text} delay={index * 80} className={point.optional ? "sm:col-span-2" : ""}>
                <div
                  className={`rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 ${
                    point.optional ? "bg-card/60 border border-dashed border-primary/40" : "bg-card border border-border"
                  }`}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
