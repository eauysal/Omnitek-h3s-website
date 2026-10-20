"use client"

import { BarChart3, Database, MessageCircle, Share2, ShieldCheck, Star, type LucideIcon } from "lucide-react"
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
      icon: Database,
      title: "Data flow into your CRM",
      description: "Collected consented records can be passed to your existing CRM.",
      // TODO: TEYİT — do NOT publish this card until the Useroam API/CRM integration is confirmed
      published: false,
    },
  ],
}

// TODO: TEYİT — Google yorumu ve sosyal medya hesaplarına yönlendirme kapsamı (hangi platformlar, hangi adımda) doğrulanmalı
const growth: Record<Locale, { badge: string; title: string; text: string; chips: { icon: LucideIcon; label: string }[] }> = {
  tr: {
    badge: "Organik büyüme",
    title: "Google yorumlarınız ve sosyal medya hesaplarınız organik olarak büyür",
    text: "Memnun misafir doğru anda Google yorumuna ve sosyal medya hesaplarınıza yönlendirilir; itibarınız ve erişiminiz reklam harcaması olmadan büyür.",
    chips: [
      { icon: Star, label: "Google yorumları" },
      { icon: Share2, label: "Sosyal medya" },
    ],
  },
  en: {
    badge: "Organic growth",
    title: "Your Google reviews and social media accounts grow organically",
    text: "Happy guests are guided to leave a Google review and to your social media accounts at the right moment, so your reputation and reach grow without ad spend.",
    chips: [
      { icon: Star, label: "Google reviews" },
      { icon: Share2, label: "Social media" },
    ],
  },
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
  const g = growth[locale]

  return (
    <section id="pazarlama" className="flow-marketing py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </Reveal>

        <div className={`grid sm:grid-cols-2 gap-6 ${visible.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
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

        {/* Organik büyüme vaadi */}
        <Reveal delay={200} className="mt-8 lg:mt-10">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-[#1F4BD0] p-6 lg:p-8 text-white shadow-[0_24px_60px_-24px_rgba(47,95,240,0.55)] lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <span className="inline-block rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium uppercase tracking-wide mb-3">
                {g.badge}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-balance mb-2">
                {g.title}
              </h3>
              <p className="text-white/85 text-base lg:text-lg">{g.text}</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-3 lg:mt-0 lg:flex-col lg:shrink-0">
              {g.chips.map((chip) => (
                <li key={chip.label} className="inline-flex items-center gap-2.5 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold">
                  <chip.icon className="h-5 w-5" />
                  {chip.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
