"use client"

import Image from "next/image"
import Link from "next/link"
import { Network, ShoppingBag, type LucideIcon } from "lucide-react"
import { sektorler } from "@/data/sektorler"
import { Reveal } from "@/components/ui/reveal"
import { SectorTags } from "@/components/sector-tags"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const content: Record<Locale, { alt: string; heading: string; headingHighlight: string; subtitle: string }> = {
  tr: {
    alt: "Kafede güvenli misafir Wi-Fi kullanan müşteriler",
    heading: "Hizmet Verdiğimiz",
    headingHighlight: "Sektörler",
    subtitle: "Her sektöre özel, ihtiyaca uygun çözümler sunuyoruz.",
  },
  en: {
    alt: "Customers using secure guest Wi-Fi at a café",
    heading: "Industries",
    headingHighlight: "We Serve",
    subtitle: "We offer solutions tailored to the specific needs of each industry.",
  },
}

interface SectorCard {
  key: string
  href: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

// Ana sayfada gösterilen sektörler ve sırası. Ofis & Koworking ile Dış Mekan & Etkinlik sayfaları yayında kalır
// (URL'ler korunur) ancak ana sayfa listesinde ve sitemap'te yer almaz.
const homeSlugOrder = ["restoran", "kafe", "otel-pansiyon", "market-perakende"] as const
const chainTitleOverride: Record<string, Record<Locale, string>> = {
  restoran: { tr: "Restoran Zincirleri", en: "Restaurant Chains" },
  kafe: { tr: "Kafe Zincirleri", en: "Café Chains" },
}

const chainCard: Record<Locale, SectorCard> = {
  tr: {
    key: "zincir-franchise",
    href: "#zincirler",
    icon: Network,
    title: "Zincir & Franchise",
    description: "Tüm şubelerde aynı misafir deneyimi, tek panelden yönetim ve şube bazlı müşteri verisi.",
    tags: ["Tek Panel", "Şube Kıyası", "Franchise Standardı"],
  },
  en: {
    key: "zincir-franchise",
    href: "#zincirler",
    icon: Network,
    title: "Chains & Franchises",
    description: "The same guest experience at every branch, single-panel management and branch-level customer data.",
    tags: ["Single Panel", "Branch Comparison", "Franchise Standard"],
  },
}

// TODO: TEYİT — AVM için ayrı bir sektör sayfası ve onaylı metin yok; kart geçici olarak iletişim formuna yönlendiriyor
const avmCard: Record<Locale, SectorCard> = {
  tr: {
    key: "avm",
    href: "#iletisim",
    icon: ShoppingBag,
    title: "AVM",
    description: "Ortak alanlarda izinli misafir Wi-Fi'ı, ziyaret verisi ve yönetilen güvenli ağ.",
    tags: ["Ortak Alan Wi-Fi", "Ziyaret Verisi", "Yönetilen Ağ"],
  },
  en: {
    key: "avm",
    href: "#iletisim",
    icon: ShoppingBag,
    title: "Shopping Malls",
    description: "Consented guest Wi-Fi in common areas, visit data and a managed, secure network.",
    tags: ["Common-Area Wi-Fi", "Visit Data", "Managed Network"],
  },
}

function buildCards(locale: Locale): SectorCard[] {
  const fromData: SectorCard[] = homeSlugOrder.flatMap((slug) => {
    const sector = sektorler.find((item) => item.slug === slug)
    if (!sector) return []
    return [
      {
        key: sector.slug,
        href: `/sektorler/${sector.slug}`,
        icon: sector.icon,
        title: chainTitleOverride[slug]?.[locale] ?? (locale === "en" ? sector.titleEn : sector.title),
        description: locale === "en" ? sector.shortDescriptionEn : sector.shortDescription,
        tags: locale === "en" ? sector.tagsEn : sector.tags,
      },
    ]
  })
  return [chainCard[locale], ...fromData, avmCard[locale]]
}

export function SectorsSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  const cards = buildCards(locale)

  return (
    <section id="sektorler" className="flow-sectors py-16 lg:py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Image */}
      <div className="flow-photo-fade absolute inset-0 z-0">
        <Image
          src="/images/happy-guests-bg.webp"
          alt={t.alt}
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Reveal key={card.key} delay={index * 80}>
              <Link
                href={card.href}
                className="block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{card.description}{" "}</p>
                <SectorTags tags={card.tags} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
