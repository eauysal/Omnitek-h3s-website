"use client"

import { Phone, Search, FileText, Settings, Shield } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface Step {
  id: string
  icon: typeof Phone
  title: string
  description: string
}

const steps: Record<Locale, Step[]> = {
  tr: [
    {
      id: "01",
      icon: Phone,
      title: "İlk Görüşme",
      description: "Sizi dinliyor, ihtiyaçlarınızı anlıyoruz.",
    },
    {
      id: "02",
      icon: Search,
      title: "Ücretsiz Keşif",
      description: "Yerinde analiz ile mevcut durumu raporluyoruz.",
    },
    {
      id: "03",
      icon: FileText,
      title: "Proje Sunumu",
      description: "Size özel çözüm ve fiyat teklifi hazırlıyoruz.",
    },
    {
      id: "04",
      icon: Settings,
      title: "Kurulum",
      description: "Profesyonel ekibimizle hızlı kurulum yapıyoruz.",
    },
    {
      id: "05",
      icon: Shield,
      title: "7/24 Destek",
      description: "Kurulum sonrası sürekli yanınızdayız.",
    },
  ],
  en: [
    {
      id: "01",
      icon: Phone,
      title: "First Call",
      description: "We listen to you and understand your needs.",
    },
    {
      id: "02",
      icon: Search,
      title: "Free Site Survey",
      description: "We report your current setup with an on-site analysis.",
    },
    {
      id: "03",
      icon: FileText,
      title: "Project Proposal",
      description: "We prepare a tailored solution and price quote.",
    },
    {
      id: "04",
      icon: Settings,
      title: "Installation",
      description: "Our professional team completes a fast installation.",
    },
    {
      id: "05",
      icon: Shield,
      title: "24/7 Support",
      description: "We stay by your side continuously after installation.",
    },
  ],
}

const content: Record<Locale, { heading: string; headingHighlight: string; subtitle: string }> = {
  tr: {
    heading: "Nasıl",
    headingHighlight: "Çalışıyoruz?",
    subtitle: "Baştan sona profesyonel süreç yönetimi ile yanınızdayız.",
  },
  en: {
    heading: "How Do We",
    headingHighlight: "Work?",
    subtitle: "We're with you every step of the way, managed by a professional team.",
  },
}

export function ProcessSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  const list = steps[locale]

  return (
    <section id="surec" className="flow-process py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-5 gap-4 relative">
            {list.map((step, index) => (
              <Reveal key={step.id} delay={index * 100} className="flex flex-col items-center text-center">
                <div className="relative mb-4 transition-transform duration-300 hover:scale-125 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center relative z-10">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6">
          {list.map((step, index) => (
            <Reveal key={step.id} delay={index * 100} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-transform duration-300 hover:scale-125 hover:-translate-y-2">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                {index < list.length - 1 && (
                  <div className="w-0.5 h-full bg-primary/30 my-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-primary">{step.id}</span>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
