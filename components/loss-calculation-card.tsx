"use client"

import { useLanguage, type Locale } from "@/lib/i18n/language-context"

// Ana sayfadan kaldırıldı; /isletmeler sayfasında kullanılacak.
const content: Record<
  Locale,
  {
    label: string
    cards: { label: string; value: string; unit: string }[]
    formula: string
    assumptions: string
    cta: string
  }
> = {
  tr: {
    label: "Örnek hesap: 50 sandalyeli bir kafe",
    cards: [
      { label: "Günlük misafir", value: "~100 Kişi", unit: "kişi bağlanıyor" },
      { label: "Tanınmayan misafir", value: "%35", unit: "bir daha gelmiyor" },
      { label: "Yıllık kayıp potansiyel", value: "1.4M ₺", unit: "geri kazanılabilir ciro" },
    ],
    formula: "35 kayıp müşteri/gün × %50 geri dönüş × 220 ₺ sepet × 365 gün.",
    assumptions:
      "Varsayımlar: günde ~100 misafir, %35'i tekrar gelmiyor, bunların yarısı kampanyayla geri kazanılıyor, ortalama sepet 220 ₺. Sonuçlar işletmeye göre değişir.",
    cta: "Sizin rakamlarınızla hesaplayalım →",
  },
  en: {
    label: "Sample calculation: a 50-seat café",
    cards: [
      { label: "Daily guests", value: "~100 people", unit: "connect per day" },
      { label: "Unrecognized guests", value: "35%", unit: "never come back" },
      { label: "Annual lost potential", value: "1.4M ₺", unit: "recoverable revenue" },
    ],
    formula: "35 lost customers/day × 50% return rate × 220 ₺ average check × 365 days.",
    assumptions:
      "Assumptions: ~100 guests per day, 35% never return, half of them are won back through campaigns, average check 220 ₺. Results vary by business.",
    cta: "Let's calculate with your numbers →",
  },
}

export function LossCalculationCard({ className = "" }: { className?: string }) {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <div className={`bg-[#FCEBEB] border border-[#F09595] rounded-2xl px-6 py-5 ${className}`}>
      <p className="text-[11px] font-medium text-[#791F1F] uppercase tracking-wide mb-4">{t.label}</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {t.cards.map((c, i) => (
          <div key={i} className="bg-white border border-[#F7C1C1] rounded-xl p-3.5">
            <p className="text-[11px] text-[#A32D2D] mb-1">{c.label}</p>
            <p className="text-[22px] font-medium text-[#A32D2D] leading-none">{c.value}</p>
            <p className="text-[11px] text-[#791F1F] mt-1">{c.unit}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-[#F7C1C1] pt-3 space-y-2">
        <p className="text-[12px] text-[#791F1F]">{t.formula}</p>
        <p className="text-[11px] text-[#791F1F]/80 leading-relaxed">{t.assumptions}</p>
        <a href="#iletisim" className="inline-block text-[13px] font-semibold text-[#501313] hover:underline">
          {t.cta}
        </a>
      </div>
    </div>
  )
}
