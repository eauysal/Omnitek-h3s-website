"use client"

import Image from "next/image"
import Link from "next/link"
import { sektorler } from "@/data/sektorler"
import { Reveal } from "@/components/ui/reveal"
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

export function SectorsSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section id="sektorler" className="flow-sectors py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="flow-photo-fade absolute inset-0 z-0">
        <Image
          src="/images/happy-guests-3.jpg"
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
          {sektorler.map((sector, index) => (
            <Reveal key={sector.slug} delay={index * 80}>
              <Link
                href={`/sektorler/${sector.slug}`}
                className="block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <sector.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {locale === "en" ? sector.titleEn : sector.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === "en" ? sector.shortDescriptionEn : sector.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(locale === "en" ? sector.tagsEn : sector.tags).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
