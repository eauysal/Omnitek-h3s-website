"use client"

import { BarChart3, Database, MessageCircle, ShieldCheck, Star, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface MarketingCard {
  icon: LucideIcon
  title: string
  description: string
  published: boolean
}

const cards: Record<Locale, MarketingCard[]> = {
  tr: [
    {
      icon: ShieldCheck,
      title: "İzinli müşteri verisi",
      description: "Her bağlantı KVKK ve İYS uyumlu, iletişime açık bir kayıt.",
      published: true,
    },
    {
      icon: MessageCircle,
      title: "Geri dönüş kampanyaları",
      description: "Kayıp müşteriye WhatsApp/SMS ile geri dönüş teklifi; sadık müşteriye özel kampanya.",
      published: true,
    },
    {
      icon: BarChart3,
      title: "Şube bazlı ölçüm",
      description: "Ziyaret sıklığı, yoğun saatler, ilk kez gelen ve geri dönen müşteri oranı.",
      published: true,
    },
    {
      icon: Star,
      title: "Google yorum yönlendirme",
      description: "Memnun misafir doğru anda yoruma yönlendirilir.",
      published: true,
    },
    {
      icon: Database,
      title: "CRM'inize veri akışı",
      description: "Toplanan izinli kayıtlar mevcut CRM sisteminize aktarılabilir.",
      // TODO: TEYİT — Useroam API/CRM entegrasyonu doğrulanmadan bu kart YAYINLANMAZ
      published: false,
    },
  ],
  en: [
    {
      icon: ShieldCheck,
      title: "Consented customer data",
      description: "Every connection is a KVKK- and IYS-compliant record you're allowed to contact.",
      published: true,
    },
    {
      icon: MessageCircle,
      title: "Win-back campaigns",
      description: "A win-back offer to lapsed customers via WhatsApp/SMS; special campaigns for loyal ones.",
      published: true,
    },
    {
      icon: BarChart3,
      title: "Branch-level measurement",
      description: "Visit frequency, peak hours, and the share of first-time versus returning customers.",
      published: true,
    },
    {
      icon: Star,
      title: "Google review routing",
      description: "Happy guests are guided to leave a review at the right moment.",
      published: true,
    },
    {
      icon: Database,
      title: "Data flow into your CRM",
      description: "Collected consented records can be passed to your existing CRM.",
      // TODO: TEYİT — do NOT publish this card until the Useroam API/CRM integration is confirmed
      published: false,
    },
  ],
}

const content: Record<Locale, { heading: string; headingHighlight: string; subtitle: string }> = {
  tr: {
    heading: "Misafirinizi tanıyın, geri getirin,",
    headingHighlight: "ölçün",
    subtitle:
      "Şubelerinize her gün bağlanan yüzlerce misafir, bugün iz bırakmadan çıkıp gidiyor. H3S bu bağlantıları izinli, kampanyaya hazır müşteri verisine dönüştürür.",
  },
  en: {
    heading: "Know your guests, bring them back,",
    headingHighlight: "measure it",
    subtitle:
      "Hundreds of guests connect to your branches every day and leave without a trace. H3S turns those connections into consented, campaign-ready customer data.",
  },
}

export function MarketingSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  const visible = cards[locale].filter((card) => card.published)

  return (
    <section id="pazarlama" className="flow-marketing py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
