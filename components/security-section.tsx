"use client"

import Image from "next/image"
import { Ghost, LockOpen, Package, Shield, ShieldAlert, type LucideIcon } from "lucide-react"
import { ComparisonCards } from "@/components/comparison-section"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface Problem {
  icon: LucideIcon
  title: string
  description: string
  risk: string
  riskType: "red" | "amber"
}

const problems: Record<Locale, Problem[]> = {
  tr: [
    {
      icon: LockOpen,
      title: "Misafir ile kasa ve POS cihazı aynı ağda",
      description: "Müşterileriniz ve POS cihazlarınız aynı ağı paylaşıyorsa ödemelerde gecikme ve kayıp yaşanıyor.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      icon: Shield,
      title: "Güvenlik duvarı yok ya da yetersiz",
      description: "Siber saldırılara karşı korumasız kalırsınız; sorumluluk işletmeye kalır.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      icon: Package,
      title: "Ev tipi, giriş seviyesi ekipman",
      description: "Giriş seviyesi cihazlar yüksek siber güvenlik riski oluşturuyor.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      icon: Ghost,
      title: "Yetkin sorumlu bulunmuyor",
      description: "Ağınızı kim yönetiyor? Sorun çıkınca kimi arayacaksınız?",
      risk: "Orta risk",
      riskType: "amber",
    },
  ],
  en: [
    {
      icon: LockOpen,
      title: "Guest Wi-Fi shares a network with the till and POS device",
      description: "When your customers and POS devices share the same network, payments end up delayed or lost.",
      risk: "High risk",
      riskType: "red",
    },
    {
      icon: Shield,
      title: "No firewall, or an inadequate one",
      description: "You're left unprotected against cyber attacks, and the responsibility stays with your business.",
      risk: "High risk",
      riskType: "red",
    },
    {
      icon: Package,
      title: "Home-grade, entry-level equipment",
      description: "Entry-level devices create a high cyber security risk.",
      risk: "High risk",
      riskType: "red",
    },
    {
      icon: Ghost,
      title: "No qualified person in charge",
      description: "Who's actually managing your network? Who will you call when something breaks?",
      risk: "Medium risk",
      riskType: "amber",
    },
  ],
}

const diagnosticItems: Record<Locale, { label: string; status: string; type: string }[]> = {
  tr: [
    { label: "Güvenlik duvarı", status: "YOK", type: "red" },
    { label: "Misafir / personel ağı ayrımı", status: "YOK", type: "red" },
    { label: "5651 Log kaydı", status: "TUTULMUYOR", type: "red" },
    { label: "Güncel lisanslar", status: "GÜNCEL DEĞİL", type: "amber" },
    { label: "Aktif izleme", status: "YOK", type: "red" },
    { label: "Ekipman kalitesi", status: "GİRİŞ SEVİYESİ / EV TİPİ", type: "amber" },
  ],
  en: [
    { label: "Firewall", status: "MISSING", type: "red" },
    { label: "Guest / staff network separation", status: "MISSING", type: "red" },
    { label: "5651 log records", status: "NOT KEPT", type: "red" },
    { label: "Up-to-date licenses", status: "OUT OF DATE", type: "amber" },
    { label: "Active monitoring", status: "MISSING", type: "red" },
    { label: "Equipment quality", status: "BASIC / HOME-GRADE", type: "amber" },
  ],
}

const content: Record<Locale, {
  alt: string
  heading: string
  headingHighlight: string
  subtitle: string
  diagnosticTitle: string
  diagnosticNoteBefore: string
  diagnosticNoteStrong: string
  diagnosticNoteAfter: string
  diagnosticFootnote: string
  testCta: string
}> = {
  tr: {
    alt: "Otel resepsiyonunda misafir Wi-Fi ile bağlanan konuklar",
    heading: "Pazarlama büyürken",
    headingHighlight: "ağınız güvende kalır",
    subtitle:
      "Misafir ağı; kasa, POS ve ofis ağından tamamen ayrılır. Her şube kurumsal güvenlik duvarı ve 7/24 izleme altında çalışır.",
    diagnosticTitle: "Tipik Saha Keşif Raporu",
    diagnosticNoteBefore: "Sahadaki işletmelerin ",
    diagnosticNoteStrong: "%80'i",
    diagnosticNoteAfter: " bu tabloya benziyor.",
    diagnosticFootnote: "Saha keşiflerimizdeki gözlemlere dayanan temsili bir orandır.",
    testCta: "Şube ağ analizi isteyin →",
  },
  en: {
    alt: "Hotel guests connecting to Wi-Fi at the front desk",
    heading: "While marketing grows,",
    headingHighlight: "your network stays secure",
    subtitle:
      "The guest network is fully separated from the till, POS and office networks. Every branch runs under an enterprise firewall and 24/7 monitoring.",
    diagnosticTitle: "Typical On-Site Assessment Report",
    diagnosticNoteBefore: "",
    diagnosticNoteStrong: "80%",
    diagnosticNoteAfter: " of the businesses we visit look like this.",
    diagnosticFootnote: "A representative figure based on our on-site assessment observations.",
    testCta: "Request a branch network analysis →",
  },
}

export function SecuritySection() {
  const { locale } = useLanguage()
  const t = content[locale]

  // scroll-mt: navbar (80px) − koyu "Benefits" bölümünün kavisli alt kenarının bu bölümün üstüne bindiği 34px (bkz. .flow-benefits);
  // böylece #guvenlik'e kaydırınca o koyu kenar navbar'ın altında kalır ve görünmez.
  return (
    <section id="guvenlik" className="flow-security py-16 lg:py-24 relative overflow-hidden scroll-mt-[46px]">
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
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </Reveal>

        {/* Problems + field report */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {problems[locale].map((problem, index) => (
              <Reveal key={problem.title} delay={index * 80}>
                <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <problem.icon className="h-6 w-6 text-primary shrink-0" />
                    <h3 className="font-semibold text-foreground">{problem.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{problem.description}</p>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      problem.riskType === "red"
                        ? "bg-destructive/20 text-destructive"
                        : "bg-warning/20 text-warning-ink"
                    }`}
                  >
                    {problem.risk}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            direction="right"
            className="lg:col-span-2 bg-card border border-primary/20 border-t-4 border-t-destructive rounded-xl p-6 shadow-[0_24px_60px_-24px_rgba(47,95,240,0.45)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              <h3 className="font-semibold text-foreground">{t.diagnosticTitle}</h3>
            </div>
            <div className="space-y-3">
              {diagnosticItems[locale].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 py-2 border-b border-border/50 last:border-0"
                >
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ${
                      item.type === "red"
                        ? "bg-destructive/20 text-destructive"
                        : "bg-warning/20 text-warning-ink"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {t.diagnosticNoteBefore}
                <span className="text-foreground font-semibold">{t.diagnosticNoteStrong}</span>
                {t.diagnosticNoteAfter}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">{t.diagnosticFootnote}</p>
            </div>
          </Reveal>
        </div>

        {/* Comparison */}
        <ComparisonCards level={3} />

        {/* İkincil eylem: şube ağ analizi talebi (iletişim formuna kaydırır) */}
        <Reveal delay={150} className="text-center mt-10">
          <a href="#iletisim" className="text-sm font-semibold text-primary hover:underline underline-offset-4">
            {t.testCta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
