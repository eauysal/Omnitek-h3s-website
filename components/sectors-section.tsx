"use client"

import Image from "next/image"
import { Coffee, UtensilsCrossed, Building2, Sparkles, Building, ShoppingCart, Sun } from "lucide-react"

const sectors = [
  {
    icon: Coffee,
    title: "Kafe",
    description: "Misafir wifi, POS güvenliği ve yasal uyumluluk için özel çözümler.",
    tags: ["Misafir WiFi", "POS Güvenliği", "5651 Uyum"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restoran",
    description: "Yoğun müşteri trafiğine uygun, güvenli ve hızlı ağ altyapısı.",
    tags: ["Yüksek Kapasite", "Güvenli Ödeme", "Log Kaydı"],
  },
  {
    icon: Building2,
    title: "Otel & Pansiyon",
    description: "Oda bazlı ağ yönetimi ve 7/24 kesintisiz bağlantı.",
    tags: ["Oda Yönetimi", "7/24 Bağlantı", "Misafir Portal"],
  },
  {
    icon: Sun,
    title: "Dış Mekan & Etkinlik",
    description: "Müşteri  memnuniyeti için hızlı ve güvenli internet deneyimi.",
    tags: ["Hızlı WiFi", "Güvenlik", "Kolay Erişim"],
  },
  {
    icon: Building,
    title: "Ofis & Koworking",
    description: "Çoklu kullanıcı yönetimi ve kurumsal düzeyde güvenlik.",
    tags: ["VLAN Ayrımı", "Kurumsal Güvenlik", "Merkezi Yönetim"],
  },
  {
    icon: ShoppingCart,
    title: "Market & Perakende",
    description: "POS entegrasyonu ve müşteri wifi için optimize çözümler.",
    tags: ["POS Entegrasyon", "Müşteri WiFi", "Envanter Güvenliği"],
  },
]

export function SectorsSection() {
  return (
    <section id="sektorler" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/happy-guests-3.jpg"
          alt="Happy business people in a modern cafe"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Hizmet Verdiğimiz <span className="text-primary">Sektörler</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Her sektöre özel, ihtiyaca uygun çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <sector.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{sector.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{sector.description}</p>
              <div className="flex flex-wrap gap-2">
                {sector.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
