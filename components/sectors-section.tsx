"use client"

import Image from "next/image"
import Link from "next/link"
import { sektorler } from "@/data/sektorler"
import { Reveal } from "@/components/ui/reveal"

export function SectorsSection() {
  return (
    <section id="sektorler" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/happy-guests-3.jpg"
          alt="Kafede güvenli misafir Wi-Fi kullanan müşteriler"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Hizmet Verdiğimiz <span className="text-primary">Sektörler</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Her sektöre özel, ihtiyaca uygun çözümler sunuyoruz.
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
                  <h3 className="font-semibold text-foreground text-lg">{sector.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{sector.shortDescription}</p>
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
