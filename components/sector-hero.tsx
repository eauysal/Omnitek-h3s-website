"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { SectorTags } from "@/components/sector-tags"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"
import type { Sektor } from "@/data/sektorler"

const content: Record<Locale, { pilotButton: string; diagramAlt: string }> = {
  tr: {
    pilotButton: "Pilot planlayın →",
    diagramAlt:
      "Omnitek H3S Ekosistemi: Siber Güvenlik Kalkanı (VLAN), Yasal Uyumluluk (5651), Aktif İnternet Kontrolü (ACL), merkezî yönetim paneli ve entegrasyon şeması",
  },
  en: {
    pilotButton: "Plan a pilot →",
    diagramAlt:
      "Omnitek H3S Ecosystem: Cyber Security Shield (VLAN), Legal Compliance (5651), Active Internet Control (ACL), central management panel and integration diagram",
  },
}

export function SectorHero({ sektor }: { sektor: Omit<Sektor, "icon"> }) {
  const { locale } = useLanguage()
  const t = content[locale]
  const showDiagram = Boolean(sektor.heroImage)
  const title = locale === "en" ? sektor.h1TitleEn : sektor.h1Title
  const introText = locale === "en" ? sektor.introEn : sektor.intro
  const tags = locale === "en" ? sektor.tagsEn : sektor.tags

  const ctaButtons = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
      >
        <Link href="/#pilot">{t.pilotButton}</Link>
      </Button>
    </div>
  )

  return (
    <section className="flow-sector-hero pt-24 lg:pt-28 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h1>

        {sektor.heroImage && (
          <>
            <Reveal className="mb-8 relative">
              <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-cyan-400/20 to-success/30 blur-3xl" />
              <div className="relative rounded-2xl bg-gradient-to-br from-primary via-cyan-400 to-success p-[2px] shadow-2xl">
                <div className="relative w-full rounded-[calc(1rem-2px)] overflow-hidden bg-card">
                  <Image
                    src={sektor.heroImage.url}
                    alt={t.diagramAlt}
                    width={sektor.heroImage.width}
                    height={sektor.heroImage.height}
                    className="w-full h-auto"
                    sizes="(min-width: 1024px) 896px, 100vw"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <div className="mb-8">{ctaButtons}</div>
          </>
        )}

        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
          {introText}
        </p>

        <SectorTags tags={tags} size="md" className={`justify-center ${showDiagram ? "" : "mb-8"}`} />

        {!showDiagram && ctaButtons}
      </div>
    </section>
  )
}
