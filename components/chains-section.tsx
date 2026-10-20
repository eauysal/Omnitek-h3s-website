"use client"

import { Building2, ClipboardList, Clock, Headset, LayoutDashboard, QrCode, Scale, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AttendanceIllustration, QrMenuIllustration, TaskIllustration } from "@/components/operations-illustrations"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const points: Record<Locale, { icon: LucideIcon; text: string }[]> = {
  tr: [
    { icon: LayoutDashboard, text: "Tüm şubelerin Wi-Fi, güvenlik ve misafir verisi tek panelde" },
    { icon: Building2, text: "Franchise dahil her şubede aynı kurulum standardı" },
    { icon: Scale, text: "Şubeler arası kıyas: hangi şube müşteri kazanıyor, hangisi kaybediyor" },
    { icon: Headset, text: "Tek muhatap, tek hizmet seviyesi (SLA)" },
  ],
  en: [
    { icon: LayoutDashboard, text: "Wi-Fi, security and guest data for every branch in one panel" },
    { icon: Building2, text: "The same installation standard at every branch, franchises included" },
    { icon: Scale, text: "Branch comparison: which branch is winning customers and which is losing them" },
    { icon: Headset, text: "One point of contact, one service level (SLA)" },
  ],
}

// TODO: TEYİT — QR menü, PDKS ve görevlendirme özelliklerinin ürün kapsamı ve metinleri doğrulanmadan yayına alınmamalı
const operations: Record<Locale, { icon: LucideIcon; Illustration: typeof QrMenuIllustration; title: string; description: string; published: boolean }[]> = {
  tr: [
    {
      icon: QrCode,
      Illustration: QrMenuIllustration,
      title: "QR menü",
      description: "Her şubede güncel menü, masadaki QR kodla misafirin telefonunda.",
      published: true,
    },
    {
      icon: Clock,
      Illustration: AttendanceIllustration,
      title: "PDKS",
      description: "Personel giriş-çıkış ve vardiya takibi şube bazında, tek yerden.",
      published: true,
    },
    {
      icon: ClipboardList,
      Illustration: TaskIllustration,
      title: "Görevlendirme",
      description: "Şubelere ve ekiplere görev atanır, tamamlanma durumu merkezden izlenir.",
      published: true,
    },
  ],
  en: [
    {
      icon: QrCode,
      Illustration: QrMenuIllustration,
      title: "QR menu",
      description: "The current menu at every branch, on the guest's phone through a QR code at the table.",
      published: true,
    },
    {
      icon: Clock,
      Illustration: AttendanceIllustration,
      title: "Staff attendance (PDKS)",
      description: "Staff clock-in/out and shift tracking per branch, from one place.",
      published: true,
    },
    {
      icon: ClipboardList,
      Illustration: TaskIllustration,
      title: "Task assignment",
      description: "Tasks are assigned to branches and teams, and completion is tracked centrally.",
      published: true,
    },
  ],
}

const content: Record<Locale, { headingBefore: string; headingHighlight: string; subtitle: string; cta: string; opsHeadingBefore: string; opsHeadingHighlight: string; opsHeadingAfter: string; opsSubtitle: string }> = {
  tr: {
    headingBefore: "Şube sayınız arttıkça,",
    headingHighlight: "standart da önem kazanır",
    subtitle:
      "H3S her şubede aynı altyapıyı ve aynı misafir deneyimini kurar; tüm şubeleri tek ekrandan yönetmenizi sağlar.",
    cta: "Pilot planlayın →",
    opsHeadingBefore: "",
    opsHeadingHighlight: "Personel Wi-Fi",
    opsHeadingAfter: " ile Operasyonu Yönetin",
    opsSubtitle: "Şubelerin günlük işleyişi de aynı panelden yönetilir.",
  },
  en: {
    headingBefore: "The more branches you have,",
    headingHighlight: "the more the standard matters",
    subtitle:
      "H3S sets up the same infrastructure and the same guest experience at every branch, and lets you manage all of them from a single screen.",
    cta: "Plan a pilot →",
    opsHeadingBefore: "Manage operations with ",
    opsHeadingHighlight: "staff Wi-Fi",
    opsHeadingAfter: "",
    opsSubtitle: "The day-to-day running of your branches is managed from the same panel.",
  },
}

export function ChainsSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section id="zincirler" className="flow-chains py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <Reveal direction="left" className="lg:col-span-2 space-y-6">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
              {t.headingBefore} <span className="text-primary">{t.headingHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t.subtitle}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#pilot">{t.cta}</a>
            </Button>
          </Reveal>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 lg:gap-6">
            {points[locale].map((point, index) => (
              <Reveal key={point.text} delay={index * 80}>
                <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Operasyon */}
        <Reveal className="text-center mt-14 lg:mt-20 mb-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {t.opsHeadingBefore}
            <span className="text-primary">{t.opsHeadingHighlight}</span>
            {t.opsHeadingAfter}
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.opsSubtitle}</p>
        </Reveal>

        <div className="space-y-5 lg:space-y-6">
          {operations[locale]
            .filter((item) => item.published)
            .map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden md:grid md:grid-cols-2 transition-all duration-300 hover:border-primary/50">
                  <div className={`p-6 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-base lg:text-lg">{item.description}</p>
                  </div>
                  <div
                    className={`bg-secondary/60 flex items-center justify-center p-5 lg:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <item.Illustration className="w-full max-w-[380px] h-auto" />
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}
