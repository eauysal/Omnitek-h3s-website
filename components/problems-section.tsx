"use client"

import { LockOpen, Shield, FileText, Package, Ghost, CheckCircle } from "lucide-react"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { Reveal } from "@/components/ui/reveal"

const problems = [
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
    title: "Ucuz, yönetilmeyen ekipman",
    description: "Kalitesiz cihazlar güvenlik açıkları ve performans sorunları yaratıyor.",
    risk: "Orta risk",
    riskType: "amber",
  },
  {
    id: "05",
    icon: Ghost,
    title: "Kimse bakmıyor kimse bilmiyor",
    description: "Ağınızı kim yönetiyor? Sorun çıkınca kimi arayacaksınız?",
    risk: "Orta risk",
    riskType: "amber",
  },
]

export function ProblemsSection() {
  return (
    <section id="teshis" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            İşletmelerde En Sık Karşılaştığımız <span className="text-primary">Sorunlar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İşletmelerin büyük çoğunluğu bu problemlerden en az birini yaşıyor.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
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
                          : "bg-warning/20 text-warning"
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
          <Reveal delay={problems.length * 80}>
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 hover:border-primary transition-colors transition-transform duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-xs font-mono text-primary">06</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">H3S Çözümü</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tüm bu sorunları tek bir profesyonel çözümle ortadan kaldırıyoruz.
                  </p>
                  <QuoteRequestDialog>
                    <button className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                      Teklif Al →
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
