"use client"

import { ClipboardList, Clock, QrCode, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface OperationCard {
  icon: LucideIcon
  title: string
  description: string
}

const cards: Record<Locale, OperationCard[]> = {
  tr: [
    {
      icon: Clock,
      title: "Personel giriş-çıkış (PDKS)",
      // TODO: TEYİT — PDKS verisinin müşterinin İK/bordro sistemine aktarımı. Doğrulanırsa karta "Mevcut İK sisteminize aktarılabilir." cümlesi eklenecek
      description: "Vardiya ve mesai takibi şube bazında, tek panelden.",
    },
    {
      icon: ClipboardList,
      title: "Görevlendirme",
      description: "Açılış, kapanış ve temizlik görevleri atanır; tamamlanma durumu merkezden izlenir.",
    },
    {
      icon: QrCode,
      title: "QR menü",
      description: "Tüm şubelerde güncel menü, tek noktadan yönetilir.",
    },
  ],
  en: [
    {
      icon: Clock,
      title: "Staff attendance (PDKS)",
      // TODO: TEYİT — transfer of PDKS data to the customer's HR/payroll system. If confirmed, add "Can be transferred to your existing HR system." to the card
      description: "Shift and working-hours tracking per branch, from a single panel.",
    },
    {
      icon: ClipboardList,
      title: "Task assignment",
      description: "Opening, closing and cleaning tasks are assigned, and completion is tracked centrally.",
    },
    {
      icon: QrCode,
      title: "QR menu",
      description: "The current menu at every branch, managed from a single point.",
    },
  ],
}

const content: Record<Locale, { headingBefore: string; headingHighlight: string; headingAfter: string; subtitle: string; note: string }> = {
  tr: {
    headingBefore: "Şubeleriniz ",
    headingHighlight: "aynı standartta",
    headingAfter: " çalışsın",
    subtitle: "Personel Wi-Fi'ı, operasyonu yöneten bir araca dönüşür. Ek donanım veya ek lisans gerekmez.",
    note: "Aynı altyapı: misafir Wi-Fi pazarlamaya, personel Wi-Fi operasyona çalışır.",
  },
  en: {
    headingBefore: "Let your branches run to ",
    headingHighlight: "the same standard",
    headingAfter: "",
    subtitle: "Staff Wi-Fi becomes a tool that runs your operations. No extra hardware or extra licences needed.",
    note: "One infrastructure: guest Wi-Fi works for marketing, staff Wi-Fi works for operations.",
  },
}

export function OperationsSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section id="operasyon" className="flow-operations py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.headingBefore}
            <span className="text-primary">{t.headingHighlight}</span>
            {t.headingAfter}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards[locale].map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="text-center mt-10">
          <p className="font-medium text-foreground">{t.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
