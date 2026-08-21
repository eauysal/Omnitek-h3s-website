"use client"

import Image from "next/image"
import { X, Check } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const currentSystem = [
  "Müşteriler, kasa ve pos ile aynı interneti kullanıyor",
  "Güvenlik duvarı yok veya yetersiz",
  "5651 log kaydı tutulmuyor",
  "Yazılım güncellenmesi otomatik değil",
  "Proaktif izleme yok, kameralara herkes ulaşabiliyor",
  "Dokümantasyon ve destek yok",
]

const withH3S = [
  "Ağlar tamamen ayrılmış",
  "Kurumsal güvenlik duvarı aktif",
  "5651 uyumlu log kaydı",
  "Otomatik firmware güncelleme",
  "7/24 proaktif izleme",
  "Tam dokümantasyon ve destek",
]

export function ComparisonSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/happy-guests-2.jpg"
          alt="Otel resepsiyonunda misafir Wi-Fi ile bağlanan konuklar"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Farkı <span className="text-primary">Görün</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mevcut sisteminiz ile H3S çözümü arasındaki fark
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Current System */}
          <Reveal direction="left">
            <div className="bg-card border border-destructive/30 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-destructive/15 hover:border-destructive/60 hover:shadow-[0_15px_40px_rgba(220,38,38,0.2)] cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground leading-none">
                  Mevcut Sisteminiz
                </h3>
              </div>
              <ul className="space-y-4">
                {currentSystem.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* With H3S */}
          <Reveal direction="right" delay={150}>
            <div className="bg-card border border-success/30 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-success/15 hover:border-success/60 hover:shadow-[0_15px_40px_rgba(34,197,94,0.2)] cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground leading-none">
                  H3S ile
                </h3>
              </div>
              <ul className="space-y-4">
                {withH3S.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
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
