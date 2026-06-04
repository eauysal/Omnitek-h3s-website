"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShieldAlert, Wifi, FileText, Clock, Eye, Package } from "lucide-react"
import OmnitekLogo from "@/app/OmnitekLogo"

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
    name: "Ahmet Yılmaz",
    role: "Kafe Sahibi",
    city: "Kadıköy",
    initials: "AY",
    quote: "Müşterilerimizin verilerini koruma altına aldık, artık güvenle wifi sunabiliyoruz.",
  },
  {
    name: "Mehmet Kara",
    role: "Butik Otel Sahibi",
    city: "Beyoğlu",
    initials: "MK",
    quote: "BTK denetimine hazır olmak için H3S tam ihtiyacımız olan çözümdü.",
  },
  {
    name: "Selin Çelik",
    role: "Restoran Zinciri Müdürü",
    city: "Şişli",
    initials: "SC",
    quote: "3 şubemizde de aynı standartları uyguladık, merkezi yönetim çok pratik.",
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Omnitekh3sLogonew.jpg"
            alt="Happy guests enjoying accommodation"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-white/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                  İşletmenizdeki Wi-fi kazancınızı{" "}
                  <span className="text-primary">riske atıyor</span> olabilir.
                </h1>
                <p className="text-muted-foreground text-lg lg:text-xl max-w-xl">
                  Ücretsiz saha keşfi ile ağ altyapınızı analiz ediyor, güvenlik açıklarını tespit ediyor ve size özel çözüm sunuyoruz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
                >
                  <Link href="#iletisim">Ücretsiz Keşif Talep Et</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-[#DC2626] hover:text-white text-base px-8 transition-colors">
                  <Link href="#faydalar">Nasıl kazancınızı katlıyoruz?</Link>
                </Button>
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
            </div>

            {/* Right Column - Logo with Opaque White Background */}
            {/* Right Column - Logo with Opaque White Background */}
        <div className="flex items-center justify-center">
          <div className="relative w-full h-96 lg:h-[450px] flex items-center justify-center rounded-2xl overflow-hidden bg-white p-8">
              {/* Yeni Vektörel Logomuz - Kapsayıcı kutunun boyutuna göre mükemmel şekilde ortalanır ve esner */}
                < OmnitekLogo className="w-full h-full max-h-80 object-contain" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Table Section - Below Hero */}
      <section className="py-12 lg:py-20 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Diagnostic Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-xl">
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
              </div>
            </div>

            {/* Social Proof Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-xl">
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
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
                    >
                      {t.initials}
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].city}
                    </p>
                  </div>
                  <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                    ✓ Doğrulanmış Müşteri
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
