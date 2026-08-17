"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ComplianceCheckDialog } from "@/components/compliance-check-dialog"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { Reveal } from "@/components/ui/reveal"
import { Star, ShieldAlert, ShieldCheck, Wifi, FileText, Clock, Eye, Package } from "lucide-react"

const diagnosticItems = [
  { label: "Güvenlik duvarı", status: "YOK", type: "red" },
  { label: "Misafir ağ ayrımı", status: "YOK", type: "red" },
  { label: "5651 Log kaydı", status: "TUTULMUYOR", type: "red" },
  { label: "Firmware güncelliği", status: "2 YIL ÖNCE", type: "amber" },
  { label: "Aktif izleme", status: "YOK", type: "red" },
  { label: "Ekipman kalitesi", status: "MARKASIZ", type: "amber" },
]

const testimonials = [
  {
    name: "Emre Kepir",
    role: "Hugg Coffee Co.",
    city: "Suadiye",
    initials: "EK",
    logo: "/images/testimonials/hugg-logo.webp",
    quote:
      "Kafemizdeki müşterilerin internet hareketlerini artık kayıt ediyoruz. Özellikle yasadışı bahis ve kumar sitelerine erişimi engellemek istiyorduk, fazlasını elde ettik ve kurumsal bir statü kazandık.",
  },
  {
    name: "Mete Balta",
    role: "das Böcek Social",
    city: "Moda",
    initials: "MB",
    logo: "/images/testimonials/bocek-logo.webp",
    quote:
      "Böcek Kafe olarak önceliğimiz müşterilerin internet deneyimini iyileştirmekti, hız paylaşımı yapamıyorduk, ayrıca güvenlik olarak eksiklerimiz vardı. Şimdi kurumsal karşı ekranı ve adil hız paylaşımı yaparak müşterilerimizin internet hizmetinden daha iyi yararlanmalarını sağladıkları için H3S'i kesinlikle öneriyorum.",
  },
]

const trustStats = [
  { value: "7/24", label: "Teknik destek" },
  { value: "6-8 Saat", label: "Ortalama kurulum" },
  { value: "5651 KVKK ", label: "Uyumlu loglama" },
]

export function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="min-h-screen pt-20 lg:pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <Reveal direction="left" className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                  İşletmeniz 5651 Denetimi ve Siber Saldırılara{" "}
                  <span className="text-primary">Ne Kadar</span> Hazır?
                </h1>
                <p className="text-muted-foreground text-lg lg:text-xl max-w-xl">
                  Ücretsiz siber güvenlik testi ile ağ altyapınızı analiz ediyor, güvenlik açıklarını tespit ediyor ve size uygun H3S çözümünü sunuyoruz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteRequestDialog>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
                  >
                    Teklif Al
                  </Button>
                </QuoteRequestDialog>
                <ComplianceCheckDialog>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#7AC143] text-white border border-[#7AC143] hover:bg-[#A5E06B] hover:text-[#1F3A0E] hover:border-[#A5E06B] text-base px-8 transition-colors">
                    5651 Denetimine Hazır Mısınız?
                  </Button>
                </ComplianceCheckDialog>
              </div>

              {/* Trust Stats */}
              <div className="flex flex-wrap gap-6 lg:gap-10 pt-4">
                {trustStats.map((stat) => (
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

              <div className="relative w-full aspect-[1131/926] rounded-2xl bg-gradient-to-br from-primary via-cyan-400 to-success p-[2px] shadow-2xl">
                <div className="relative w-full h-full rounded-[calc(1rem-2px)] overflow-hidden">
                  <Image
                    src="/images/h3s-diagram.webp"
                    alt="Omnitek H3S - Siber Güvenlik Kalkanı, Yasal Uyumluluk ve Aktif İnternet Kontrolü"
                    width={1131}
                    height={926}
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
              <span className="font-semibold text-foreground">1986&apos;dan beri</span> Omnitek Telekom güvencesiyle
            </span>
          </div>
        </div>
      </section>

      {/* Diagnostic Table Section - Below Hero */}
      <section className="py-12 lg:py-20 relative bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Diagnostic Card */}
            <Reveal direction="left" className="bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Tipik Saha Keşif Raporu</h3>
              </div>
              <div className="space-y-3">
                {diagnosticItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        item.type === "red"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-warning/20 text-warning"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  ⚠️ Sahadaki işletmelerin <span className="text-foreground font-semibold">%80&apos;i</span> bu tabloya benziyor.
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Saha keşiflerimizdeki gözlemlere dayanan temsili bir orandır.
                </p>
              </div>
            </Reveal>

            {/* Social Proof Card */}
            <Reveal direction="right" className="bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">4.9/5</span>
                </div>
                <div className="flex -space-x-2">
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white border-2 border-background overflow-hidden flex items-center justify-center"
                    >
                      <Image
                        src={t.logo}
                        alt={t.role}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-semibold text-muted-foreground">
                    +
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Son 6 ayda <span className="text-foreground font-semibold">24+ işletme</span> güvenliğini H3S&apos;e emanet etti.
              </p>

              {/* Testimonial */}
              <div className="bg-secondary/50 rounded-lg p-4 min-h-[120px] transition-all duration-500">
                <p className="text-sm text-foreground mb-3">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
                      <Image
                        src={testimonials[currentTestimonial].logo}
                        alt={testimonials[currentTestimonial].role}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].city}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full shrink-0">
                    ✓ Doğrulanmış Müşteri
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
