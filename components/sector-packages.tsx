"use client"

import { Check, X } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import type { Paket } from "@/data/sektorler"

interface SectorPackagesProps {
  sectorTitle: string
  packages: Paket[]
}

export function SectorPackages({ sectorTitle, packages }: SectorPackagesProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 lg:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {sectorTitle} İşletmeniz İçin <span className="text-primary">Çözüm Paketleri</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İhtiyacınıza göre üç seviyede tasarlandı. Size uygun paketi birlikte netleştirelim.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 100} className="h-full">
              <div
                className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  pkg.recommended
                    ? "lg:-translate-y-4 hover:-translate-y-2 lg:hover:-translate-y-7"
                    : "hover:-translate-y-2"
                }`}
              >
                {pkg.recommended && (
                  <div className="rounded-t-xl bg-foreground text-background text-center px-4 py-3">
                    <p className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-wide uppercase">
                      Tavsiye Edilen
                    </p>
                    {pkg.recommendedLabel && (
                      <p className="text-xs text-background/80 mt-0.5">{pkg.recommendedLabel}</p>
                    )}
                  </div>
                )}
                <div
                  className={`bg-card border p-6 lg:p-8 flex flex-col h-full transition-shadow duration-300 ${
                    pkg.recommended
                      ? "border-2 border-primary rounded-b-xl shadow-[0_20px_50px_rgba(42,129,244,0.18)] hover:shadow-[0_25px_60px_rgba(42,129,244,0.35)]"
                      : "border-border rounded-xl hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(42,129,244,0.18)]"
                  }`}
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-4 w-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm leading-snug ${
                            feature.included ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <QuoteRequestDialog>
                    <Button
                      variant={pkg.recommended ? "default" : "outline"}
                      className={
                        pkg.recommended
                          ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          : "w-full"
                      }
                    >
                      Bu Paketi Sorun
                    </Button>
                  </QuoteRequestDialog>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
