"use client"

import { AlertTriangle, Check } from "lucide-react"

const h3sCompliance = [
  "5651 uyumlu log kaydı ve saklama",
  "KVKK uyumlu veri işleme",
  "Şifreli log transferi ve depolama",
  "Denetim raporları hazırlama",
  "Yasal danışmanlık desteği",
]

export function LegalSection() {
  return (
    <section className="py-16 lg:py-24 bg-destructive/15 border-y border-destructive/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Legal Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-foreground">
                Yasal Uyumluluk
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">5651 Sayılı Kanun</h3>
                <p className="text-sm text-muted-foreground">
                  İnternet erişimi sağlayan tüm işletmeler, kullanıcı log kayıtlarını tutmak ve 
                  talep halinde yetkili makamlara sunmak zorundadır. Bu yükümlülüğü yerine 
                  getirmeyen işletmelere idari para cezası ve erişim engelleme yaptırımları uygulanır.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">KVKK Gereksinimleri</h3>
                <p className="text-sm text-muted-foreground">
                  Kişisel Verilerin Korunması Kanunu kapsamında, toplanan veriler güvenli 
                  şekilde işlenmeli ve saklanmalıdır. Veri ihlali durumunda ciddi yaptırımlar 
                  ve itibar kaybı söz konusudur.
                </p>
              </div>
            </div>
          </div>

          {/* Right - H3S Solution */}
          <div className="bg-card border border-success/30 rounded-xl p-6 lg:p-8 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-success" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                H3S ile Tam Uyumluluk
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              H3S çözümü, tüm yasal gereksinimleri karşılayacak şekilde tasarlanmıştır:
            </p>

            <ul className="space-y-4">
              {h3sCompliance.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
