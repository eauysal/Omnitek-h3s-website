"use client"

import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

export function SystemDiagramSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10 lg:mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            H3S <span className="text-primary">Sistemi Nasıl Çalışıyor?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Siber güvenlik, yasal uyumluluk ve ağ kontrolünü tek bir ekosistemde birleştiriyoruz.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative rounded-2xl bg-gradient-to-br from-primary via-cyan-400 to-success p-[2px] shadow-2xl">
            <div className="relative w-full rounded-[calc(1rem-2px)] overflow-hidden bg-card">
              <Image
                src="/images/h3s-sistem-diyagrami.webp"
                alt="Omnitek H3S Ekosistemi: Siber Güvenlik Kalkanı (VLAN), Yasal Uyumluluk (5651), Aktif İnternet Kontrolü (ACL), merkezi yönetim paneli ve entegrasyon şeması"
                width={1800}
                height={1005}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
