"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ComplianceCheckDialog } from "@/components/compliance-check-dialog"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { Reveal } from "@/components/ui/reveal"
import { PartnersMarquee } from "@/components/partners-marquee"
import { TrustStrip } from "@/components/trust-strip"
import { ShieldAlert, ShieldCheck } from "lucide-react"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

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

const trustStats: Record<Locale, { value: string; label: string }[]> = {
  tr: [
    { value: "7/24", label: "Teknik destek" },
    { value: "6-8 Saat", label: "Ortalama kurulum" },
    { value: "5651 KVKK ", label: "Uyumlu loglama" },
  ],
  en: [
    { value: "24/7", label: "Technical support" },
    { value: "6-8 Hours", label: "Average setup" },
    { value: "5651 & KVKK ", label: "Compliant logging" },
  ],
}

const content = {
  tr: {
    h1Before: "İşletmeniz 5651 Denetimi ve Siber Saldırılara ",
    h1Highlight: "Ne Kadar",
    h1After: " Hazır?",
    subtitle:
      "Ücretsiz siber güvenlik testi ile ağ altyapınızı analiz ediyor, güvenlik açıklarını tespit ediyor ve size uygun H3S çözümünü sunuyoruz.",
    quoteButton: "Teklif Al",
    complianceButton: "5651 Denetimine Hazır Mısınız?",
    diagramAlt: "Omnitek H3S - Siber Güvenlik Kalkanı, KVKK/İYS Kaydı (5651) ve Wi-Fi Pazarlama",
    trustBadgeStrong: "1986'dan beri",
    trustBadgeLink: "Omnitek Telekom",
    trustBadgeEnd: " güvencesiyle",
    diagnosticTitle: "Tipik Saha Keşif Raporu",
    diagnosticNoteStrong: "%80'i",
    diagnosticNoteBefore: "Sahadaki işletmelerin ",
    diagnosticNoteAfter: " bu tabloya benziyor.",
    diagnosticFootnote: "Saha keşiflerimizdeki gözlemlere dayanan temsili bir orandır.",
  },
  en: {
    h1Before: "How Ready Is Your Business for a 5651 Audit ",
    h1Highlight: "and",
    h1After: " Cyber Attacks?",
    subtitle:
      "With our free cyber security test, we analyze your network infrastructure, detect vulnerabilities, and recommend the right H3S solution for you.",
    quoteButton: "Get a Quote",
    complianceButton: "Ready for a 5651 Audit?",
    diagramAlt: "Omnitek H3S - Cyber Security Shield, KVKK/IYS Records (5651) and Wi-Fi Marketing",
    trustBadgeStrong: "Since 1986,",
    trustBadgeLink: "Omnitek Telekom",
    trustBadgeEnd: " backed and guaranteed",
    diagnosticTitle: "Typical On-Site Assessment Report",
    diagnosticNoteStrong: "80%",
    diagnosticNoteBefore: "",
    diagnosticNoteAfter: " of the businesses we visit look like this.",
    diagnosticFootnote: "A representative figure based on our on-site assessment observations.",
  },
} satisfies Record<Locale, Record<string, string>>

export function HeroSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  return (
    <>
      <section className="flow-hero min-h-screen pt-24 lg:pt-28 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <Reveal direction="left" className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                  {t.h1Before}
                  <span className="text-primary">{t.h1Highlight}</span>
                  {t.h1After}
                </h1>
                <p className="text-muted-foreground text-lg lg:text-xl max-w-xl">
                  {t.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteRequestDialog>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
                  >
                    {t.quoteButton}
                  </Button>
                </QuoteRequestDialog>
                <ComplianceCheckDialog>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-success text-success-foreground border border-success hover:bg-success/80 hover:border-success/80 text-base px-8 font-semibold transition-colors">
                    {t.complianceButton}
                  </Button>
                </ComplianceCheckDialog>
              </div>

              {/* Trust Stats */}
              <div className="flex flex-wrap gap-6 lg:gap-10 pt-4">
                {trustStats[locale].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary font-mono">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right Column - H3S Diagram */}
            <Reveal direction="right" delay={150} className="relative flex items-center justify-center">
              {/* Soft brand-colored glow behind the card */}
              <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-cyan-400/20 to-success/30 blur-3xl" />

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

      {/* Diagnostic Table Section - Below Hero */}
      <section className="flow-proof py-12 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Diagnostic Card */}
            <Reveal direction="left" className="bg-card border border-primary/20 border-t-4 border-t-destructive rounded-xl p-6 shadow-[0_24px_60px_-24px_rgba(47,95,240,0.45)]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">{t.diagnosticTitle}</h3>
              </div>
              <div className="space-y-3">
                {diagnosticItems[locale].map((item, index) => (
                  <div key={index} className="flex items-center justify-between gap-3 py-2 border-b border-border/50 last:border-0">
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
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {t.diagnosticFootnote}
                </p>
              </div>
            </Reveal>

            <TrustStrip />
          </div>
        </div>
      </section>
    </>
  )
}
