"use client"

import { AlertTriangle, Check } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const h3sCompliance: Record<Locale, string[]> = {
  tr: [
    // TODO: TEYİT — "kayıtlar sahadaki cihazda 2 yıl saklanır" iddiası teknik ekipten doğrulanmadan yayında kalmamalı
    "5651 kapsamında log kaydı; kayıtlar sahadaki cihazda 2 yıl saklanır",
    "KVKK aydınlatma ve açık rıza akışı misafir girişine entegre",
    "İYS (ticari ileti izni) kaydı standart olarak yönetilir",
    "Denetimde istenen kayıt ve raporların hazırlanması",
  ],
  en: [
    // TODO: TEYİT — "records kept on the on-site device for 2 years" must be confirmed with the technical team before it stays live
    "Log recording under Law 5651; records are kept on the on-site device for 2 years",
    "KVKK disclosure and explicit-consent flow built into guest sign-in",
    "IYS (commercial message consent) records managed as standard",
    "Records and reports requested in an audit are prepared for you",
  ],
}

const content: Record<Locale, {
  heading: string
  lawTitle: string
  lawBody: string
  kvkkTitle: string
  kvkkBody: string
  solutionTitle: string
  solutionIntro: string
}> = {
  tr: {
    heading: "Yasal Uyumluluk",
    lawTitle: "5651 Sayılı Kanun",
    lawBody:
      "İnternet erişimi sağlayan tüm işletmeler, kullanıcı log kayıtlarını tutmak ve talep halinde yetkili makamlara sunmak zorundadır. Bu yükümlülüğü yerine getirmeyen işletmelere idari para cezası ve erişim engelleme yaptırımları uygulanır.",
    kvkkTitle: "KVKK Gereksinimleri",
    kvkkBody:
      "Kişisel Verilerin Korunması Kanunu kapsamında, toplanan veriler güvenli şekilde işlenmeli ve saklanmalıdır. Veri ihlali durumunda idari yaptırımlar ve itibar kaybı söz konusudur.",
    solutionTitle: "H3S ile Yasal Yükümlülükleriniz Kayıt Altında",
    solutionIntro: "H3S çözümü, tüm yasal gereksinimleri karşılayacak şekilde tasarlanmıştır:",
  },
  en: {
    heading: "Legal Compliance",
    lawTitle: "Law No. 5651",
    lawBody:
      "Every business that provides internet access must keep user log records and present them to the relevant authorities on request. Businesses that fail to meet this obligation face administrative fines and access-blocking sanctions.",
    kvkkTitle: "KVKK Requirements",
    kvkkBody:
      "Under Turkey's Personal Data Protection Law (KVKK), collected data must be processed and stored securely. A data breach can bring administrative sanctions and reputational damage.",
    solutionTitle: "Your Legal Obligations, on Record with H3S",
    solutionIntro: "The H3S solution is designed to meet all legal requirements:",
  },
}

export function LegalSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section className="flow-legal py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Legal Info */}
          <Reveal direction="left" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-foreground">
                {t.heading}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">{t.lawTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.lawBody}
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">{t.kvkkTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.kvkkBody}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right - H3S Solution */}
          <Reveal direction="right" delay={150}>
            <div className="bg-card border border-success/30 rounded-xl p-6 lg:p-8 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success-ink" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                  {t.solutionTitle}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {t.solutionIntro}
              </p>

              <ul className="space-y-4">
                {h3sCompliance[locale].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success-ink flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
