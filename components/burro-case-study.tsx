"use client"

import { useLanguage, type Locale } from "@/lib/i18n/language-context"

// Ana sayfadan kaldırıldı; /isletmeler sayfasında kullanılacak.
// TODO: TEYİT — Burro Cafe yazılı kullanım izni ve rakamlar (345 kayıt, %38 doluluk artışı)

const IconClockSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
)

const content: Record<
  Locale,
  {
    ownerName: string
    ownerRole: string
    ownerQuote: string
    beforeLabel: string
    afterLabel: string
    before: string[]
    after: string[]
    stats: { num: string; label: string }[]
  }
> = {
  tr: {
    ownerName: "Burak Kaçmaz",
    ownerRole: "İşletme sahibi · Burro Cafe, Kadıköy",
    ownerQuote:
      "\"Omnitek H3S kullanmaya başladıktan sonra sadece ilk haftada 345 kayıt topladık. Hafta sonu doluluğunu ilk kez ölçtük ve kampanyalarımızı müşterilerimizle buluşturduk.\"",
    beforeLabel: "H3S öncesi",
    afterLabel: "H3S sonrası",
    before: [
      "Kafe doluydu, hafta sonu yoğunluk neden düşüyor bilinmiyordu",
      "Wi-Fi vardı, kim bağlandı yoktu",
      "Kaç müşteri geri döndü, hiç ölçülmedi",
    ],
    after: [
      "İlk 7 günde 345 müşteri kaydı toplandı",
      "İlk SMS kampanyası sadece 1 dakikada gönderildi",
      "Hafta sonu doluluk %38 arttı — bu oranı ilk kez ölçtük",
    ],
    stats: [
      { num: "345", label: "İlk haftada kayıt" },
      { num: "%38", label: "Doluluk artışı" },
      { num: "7 gün", label: "İlk sonuç" },
    ],
  },
  en: {
    ownerName: "Burak Kaçmaz",
    ownerRole: "Business owner · Burro Cafe, Kadıköy",
    ownerQuote:
      "\"After we started using Omnitek H3S, we collected 345 sign-ups in the very first week. We measured weekend occupancy for the first time and connected our campaigns directly with our customers.\"",
    beforeLabel: "Before H3S",
    afterLabel: "After H3S",
    before: [
      "The café was busy, but no one knew why weekend traffic dipped",
      "Wi-Fi existed, but there was no record of who connected",
      "How many customers came back was never measured",
    ],
    after: [
      "345 customer records collected in the first 7 days",
      "The first SMS campaign went out in just 1 minute",
      "Weekend occupancy rose 38% — measured for the first time",
    ],
    stats: [
      { num: "345", label: "Sign-ups in week one" },
      { num: "38%", label: "Occupancy increase" },
      { num: "7 days", label: "First result" },
    ],
  },
}

export function BurroCaseStudy({ className = "" }: { className?: string }) {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <div className={`bg-[#13255C] border border-white/15 rounded-2xl overflow-hidden ${className}`}>
      <div className="flex items-center gap-4 px-6 pt-5 pb-4 border-b border-white/10">
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden flex items-center justify-center">
            {/* TODO: GÖRSEL — Arda onayı */}
            <img src="/images/burro_tabela-baski.jpg" alt="Burak Kaçmaz" className="w-full h-full object-cover" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-[#1F3A5F] rounded-full" />
        </div>
        <div>
          <p className="text-white font-medium">{t.ownerName}</p>
          <p className="text-white/60 text-sm">{t.ownerRole}</p>
          <p className="text-white/90 text-[18px] italic mt-1 leading-relaxed">{t.ownerQuote}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="px-5 py-4 sm:border-r border-white/10">
          <span className="inline-flex items-center gap-1.5 bg-[#FCEBEB] text-[#A32D2D] text-[11px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
            <IconClockSVG />
            {t.beforeLabel}
          </span>
          <ul className="space-y-2">
            {t.before.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[14px] text-white leading-snug">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-4">
          <span className="inline-flex items-center gap-1.5 bg-[#EAF3DE] text-[#3B6D11] text-[11px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
            {t.afterLabel}
          </span>
          <ul className="space-y-2">
            {t.after.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[14px] text-white leading-snug">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#639922" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M5 12l5 5l10 -10" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-white/10">
        {t.stats.map((s, i) => (
          <div key={i} className={`py-3.5 text-center ${i < t.stats.length - 1 ? "border-r border-white/10" : ""}`}>
            <p className="text-[#97C459] text-xl font-medium leading-none">{s.num}</p>
            <p className="text-white/90 text-[13px] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
