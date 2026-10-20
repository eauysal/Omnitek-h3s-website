"use client"

import { BarChart3, CalendarRange, FileText, Handshake, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface PilotPoint {
  icon: LucideIcon
  title: string
  description: string
  published: boolean
}

const points: Record<Locale, PilotPoint[]> = {
  tr: [
    {
      icon: CalendarRange,
      // TODO: TEYİT — pilot süresi: 30 gün mü, 60 gün mü (önerilen 60); süre metinden çıkarıldı
      title: "2–3 şubede deneme",
      description: "Seçtiğiniz şubelerde, gerçek misafir trafiğiyle.",
      published: true,
    },
    {
      icon: BarChart3,
      title: "Ölçülenler",
      description: "Toplanan izinli kayıt, geri dönüş oranı, kampanya dönüşü ve şube kıyası.",
      published: true,
    },
    {
      icon: FileText,
      title: "Pilot sonunda sonuç raporu",
      description: "Karar vermeniz için şube bazında özet ve öneriler.",
      published: true,
    },
    {
      icon: Handshake,
      title: "Pilot bedeli tam sözleşmeye mahsup edilir",
      description: "Pilota ayırdığınız bütçe, devam etmeniz halinde kaybolmaz.",
      // TODO: TEYİT — pilot ticari şartları (bedel, mahsup) doğrulanmadan bu madde YAYINLANMAZ
      published: false,
    },
  ],
  en: [
    {
      icon: CalendarRange,
      // TODO: TEYİT — pilot duration: 30 or 60 days (60 suggested); duration removed from the copy
      title: "Trial at 2–3 branches",
      description: "At the branches you choose, with real guest traffic.",
      published: true,
    },
    {
      icon: BarChart3,
      title: "What we measure",
      description: "Consented records collected, return rate, campaign conversion and branch comparison.",
      published: true,
    },
    {
      icon: FileText,
      title: "A results report at the end",
      description: "A branch-by-branch summary and recommendations to help you decide.",
      published: true,
    },
    {
      icon: Handshake,
      title: "The pilot fee is credited toward the full contract",
      description: "The budget you put into the pilot isn't lost if you continue.",
      // TODO: TEYİT — do NOT publish this item until the pilot commercial terms (fee, credit) are confirmed
      published: false,
    },
  ],
}

const content: Record<Locale, { heading: string; headingHighlight: string; subtitle: string; cta: string }> = {
  tr: {
    heading: "Önce 2–3 şubede deneyin,",
    headingHighlight: "kendi verinizle karar verin",
    subtitle: "Tüm zinciri bağlamadan önce, H3S'in sizin şubelerinizde ne ürettiğini birlikte görelim.",
    cta: "Pilot planlayın →",
  },
  en: {
    heading: "Try it at 2–3 branches first,",
    headingHighlight: "and decide with your own data",
    subtitle: "Before connecting the whole chain, let's see together what H3S delivers at your own branches.",
    cta: "Plan a pilot →",
  },
}

export function PilotSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  const visible = points[locale].filter((point) => point.published)

  return (
    <section id="pilot" className="flow-pilot py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visible.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <div className="bg-card border border-border rounded-xl p-6 h-full text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
          >
            <a href="#iletisim">{t.cta}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
