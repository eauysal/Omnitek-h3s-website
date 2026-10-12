"use client"

import { LockOpen, Shield, FileText, Package, Ghost, CheckCircle } from "lucide-react"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface Problem {
  id: string
  icon: typeof LockOpen
  title: string
  description: string
  risk: string
  riskType: "red" | "amber"
}

const problems: Record<Locale, Problem[]> = {
  tr: [
    {
      id: "01",
      icon: LockOpen,
      title: "Misafir ile kasa ve pos cihazı aynı ağda",
      description: "Müşterileriniz ve POS cihazlarınız aynı ağı paylaşıyorsa ödemeler de gecikme ve kayıp yaşanıyor.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      id: "02",
      icon: Shield,
      title: "Güvenlik duvarı yok ya da yetersiz",
      description: "Siber suçlara karşı korumasız kalarak tüm suçu üstleniyorsunuz.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      id: "03",
      icon: FileText,
      title: "Log tutulmuyor — yasal risk",
      description: "5651 sayılı kanun gereği log tutmak zorunlu, tutmayanlar cezai sorumluluk altında.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      id: "04",
      icon: Package,
      title: "Ev tipi, giriş seviyesi ekipman",
      description: "Giriş seviyesi cihazlar yüksek siber güvenlik riski oluşturuyor.",
      risk: "Yüksek risk",
      riskType: "red",
    },
    {
      id: "05",
      icon: Ghost,
      title: "Kimse bakmıyor kimse bilmiyor",
      description: "Ağınızı kim yönetiyor? Sorun çıkınca kimi arayacaksınız?",
      risk: "Orta risk",
      riskType: "amber",
    },
  ],
  en: [
    {
      id: "01",
      icon: LockOpen,
      title: "Guest Wi-Fi shares a network with the till and POS device",
      description: "When your customers and POS devices share the same network, payments end up delayed or lost.",
      risk: "High risk",
      riskType: "red",
    },
    {
      id: "02",
      icon: Shield,
      title: "No firewall, or an inadequate one",
      description: "You're left unprotected against cyber crime — and fully liable if it happens.",
      risk: "High risk",
      riskType: "red",
    },
    {
      id: "03",
      icon: FileText,
      title: "No logs kept — a legal risk",
      description: "Law No. 5651 requires you to keep connection logs; failing to do so carries criminal liability.",
      risk: "High risk",
      riskType: "red",
    },
    {
      id: "04",
      icon: Package,
      title: "Home-grade, entry-level equipment",
      description: "Entry-level devices create a high cyber security risk.",
      risk: "High risk",
      riskType: "red",
    },
    {
      id: "05",
      icon: Ghost,
      title: "No one is watching, no one knows",
      description: "Who's actually managing your network? Who will you call when something breaks?",
      risk: "Medium risk",
      riskType: "amber",
    },
  ],
}

const content: Record<Locale, {
  heading: string
  headingHighlight: string
  subtitle: string
  solutionTitle: string
  solutionDescription: string
  solutionCta: string
}> = {
  tr: {
    heading: "İşletmelerde En Sık Karşılaştığımız",
    headingHighlight: "Sorunlar",
    subtitle: "İşletmelerin büyük çoğunluğu bu problemlerden en az birini yaşıyor.",
    solutionTitle: "H3S Çözümü",
    solutionDescription: "Tüm bu sorunları tek bir profesyonel çözümle ortadan kaldırıyoruz.",
    solutionCta: "Teklif Al →",
  },
  en: {
    heading: "The Problems We See Most Often",
    headingHighlight: "in Businesses",
    subtitle: "The vast majority of businesses experience at least one of these problems.",
    solutionTitle: "The H3S Solution",
    solutionDescription: "We eliminate all of these problems with a single professional solution.",
    solutionCta: "Get a Quote →",
  },
}

export function ProblemsSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  const list = problems[locale]

  return (
    <section id="teshis" className="flow-problems py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((problem, index) => (
            <Reveal key={problem.id} delay={index * 80}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors transition-transform duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-mono text-muted-foreground">{problem.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <problem.icon className="h-6 w-6 text-primary" />
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
                </div>
              </div>
            </Reveal>
          ))}

          {/* Solution Card */}
          <Reveal delay={list.length * 80}>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 hover:border-primary transition-colors transition-transform duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-xs font-mono text-primary">06</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">{t.solutionTitle}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.solutionDescription}
                  </p>
                  <QuoteRequestDialog>
                    <button className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                      {t.solutionCta}
                    </button>
                  </QuoteRequestDialog>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
