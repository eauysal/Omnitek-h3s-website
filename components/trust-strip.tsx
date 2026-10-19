"use client"

import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface TrustCard {
  value: string
  text: string
  published: boolean
}

const title: Record<Locale, string> = {
  tr: "Kurumsal altyapı tecrübesi, şimdi şubelerinizde",
  en: "Enterprise infrastructure experience, now at your branches",
}

// published: false olan kartlar teyit gelene kadar yayında görünmez; true yapınca otomatik açılır.
const cards: Record<Locale, TrustCard[]> = {
  tr: [
    { value: "1986'dan beri", text: "Omnitek Telekom güvencesi", published: true },
    // TODO: TEYİT — "CEVA Logistics" adı izinle kullanılabilirse eklenecek; rakamın ve "Ford" ifadesinin de doğrulanması gerekir
    {
      value: "%99,995",
      text: "Ford tedarik zincirinde çalışan lojistik operasyonunda 5 yıllık erişilebilirlik",
      published: false,
    },
    // TODO: TEYİT — "İstanbul Tekstilkent" adı izinle kullanılabilirse eklenecek; rakamların doğrulanması gerekir
    {
      value: "27.000 araç/gün",
      text: "Avrupa'nın en büyük açık otoparkında 10 yıldır kesintisiz bağlantı",
      published: false,
    },
    // TODO: TEYİT — Vodafone ad/logo kullanım izni
    { value: "Vodafone", text: "teknoloji tedarikçisi", published: false },
  ],
  en: [
    { value: "Since 1986", text: "Backed by Omnitek Telekom", published: true },
    // TODO: TEYİT — "CEVA Logistics" adı izinle kullanılabilirse eklenecek; rakamın ve "Ford" ifadesinin de doğrulanması gerekir
    {
      value: "99.995%",
      text: "5 years of availability in a logistics operation serving the Ford supply chain",
      published: false,
    },
    // TODO: TEYİT — "İstanbul Tekstilkent" adı izinle kullanılabilirse eklenecek; rakamların doğrulanması gerekir
    {
      value: "27,000 vehicles/day",
      text: "10 years of uninterrupted connectivity at Europe's largest open-air car park",
      published: false,
    },
    // TODO: TEYİT — Vodafone ad/logo kullanım izni
    { value: "Vodafone", text: "technology supplier", published: false },
  ],
}

export function TrustStrip({ className = "" }: { className?: string }) {
  const { locale } = useLanguage()
  const visible = cards[locale].filter((c) => c.published)

  return (
    <Reveal
      direction="right"
      className={`bg-card border border-primary/20 border-t-4 border-t-success rounded-xl p-6 shadow-[0_24px_60px_-24px_rgba(47,95,240,0.45)] ${className}`}
    >
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-4">
        {title[locale]}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {visible.map((card) => (
          <div key={card.value} className="rounded-lg bg-secondary/60 p-4">
            <p className="text-2xl font-bold text-primary font-mono">{card.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{card.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
