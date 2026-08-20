"use client"

import {
  LockOpen,
  FileText,
  BarChart3,
  Gauge,
  Shield,
  Package,
  WifiOff,
  DoorOpen,
  Users,
  Settings,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import type { SektorSorun, SorunIkon } from "@/data/sektorler"

const iconMap: Record<SorunIkon, LucideIcon> = {
  LockOpen,
  FileText,
  BarChart3,
  Gauge,
  Shield,
  Package,
  WifiOff,
  DoorOpen,
  Users,
  Settings,
  ShoppingCart,
}

interface SectorProblemsProps {
  sectorTitle: string
  pluralLocative: string
  problems: SektorSorun[]
}

export function SectorProblems({ sectorTitle, pluralLocative, problems }: SectorProblemsProps) {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {pluralLocative} Sık Karşılaşılan <span className="text-primary">Sorunlar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectorTitle} işletmelerinin büyük çoğunluğu bu problemlerden en az birini yaşıyor.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = iconMap[problem.icon]
            const isHigh = problem.risk === "red"
            return (
            <Reveal key={problem.title} delay={index * 80}>
              <div
                className={`relative bg-card border rounded-xl p-6 pl-7 overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full ${
                  isHigh
                    ? "border-destructive/20 hover:border-destructive/50"
                    : "border-warning/20 hover:border-warning/50"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                    isHigh ? "bg-destructive" : "bg-warning"
                  }`}
                />
                <span
                  className={`absolute -top-2 -right-2 text-6xl font-bold font-mono select-none ${
                    isHigh ? "text-destructive/10" : "text-warning/10"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isHigh ? "bg-destructive/10" : "bg-warning/10"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isHigh ? "text-destructive" : "text-warning"}`} />
                </div>

                <h3 className="relative font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="relative text-sm text-muted-foreground mb-4">{problem.description}</p>
                <span
                  className={`relative inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                    isHigh
                      ? "bg-destructive/20 text-destructive"
                      : "bg-warning/20 text-warning"
                  }`}
                >
                  {isHigh ? "Yüksek risk" : "Orta risk"}
                </span>
              </div>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
