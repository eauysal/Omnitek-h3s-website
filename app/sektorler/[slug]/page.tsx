import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { sektorler, getSektorBySlug } from "@/data/sektorler"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ComparisonSection } from "@/components/comparison-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { ComplianceCheckDialog } from "@/components/compliance-check-dialog"
import Image from "next/image"
import { SectorPackages } from "@/components/sector-packages"
import { SectorProblems } from "@/components/sector-problems"
import { Reveal } from "@/components/ui/reveal"

export function generateStaticParams() {
  return sektorler.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const sektor = getSektorBySlug(slug)
  if (!sektor) return {}

  return {
    title: `${sektor.title} için H3S Wi-Fi & Güvenlik Çözümü | Omnitek H3S`,
    description: sektor.metaDescription,
    alternates: {
      canonical: `/sektorler/${sektor.slug}`,
    },
  }
}

export default async function SektorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const sektor = getSektorBySlug(slug)
  if (!sektor) notFound()

  const showDiagram = ["kafe", "restoran", "otel-pansiyon"].includes(sektor.slug)

  const ctaButtons = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <QuoteRequestDialog>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
          Teklif Al
        </Button>
      </QuoteRequestDialog>
      <ComplianceCheckDialog>
        <Button
          variant="outline"
          size="lg"
          className="bg-[#7AC143] text-white border border-[#7AC143] hover:bg-[#A5E06B] hover:text-[#1F3A0E] hover:border-[#A5E06B] text-base px-8 transition-colors"
        >
          5651 Denetimine Hazır Mısınız?
        </Button>
      </ComplianceCheckDialog>
    </div>
  )

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Sector Hero */}
      <section className="pt-24 lg:pt-28 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {sektor.possessiveTitle} İçin <span className="text-primary">H3S Çözümü</span>
          </h1>

          {showDiagram && (
            <>
              <Reveal className="mb-8 relative">
                <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-cyan-400/20 to-success/30 blur-3xl" />
                <div className="relative rounded-2xl bg-gradient-to-br from-primary via-cyan-400 to-success p-[2px] shadow-2xl">
                  <div className="relative w-full rounded-[calc(1rem-2px)] overflow-hidden bg-card">
                    <Image
                      src="/images/h3s-sistem-diyagrami.webp"
                      alt="Omnitek H3S Ekosistemi: Siber Güvenlik Kalkanı (VLAN), Yasal Uyumluluk (5651), Aktif İnternet Kontrolü (ACL), merkezi yönetim paneli ve entegrasyon şeması"
                      width={1800}
                      height={1005}
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
            {sektor.intro}
          </p>

          <div className={`flex flex-wrap justify-center gap-2 ${showDiagram ? "" : "mb-8"}`}>
            {sektor.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {!showDiagram && ctaButtons}
        </div>
      </section>

      <SectorProblems
        sectorTitle={sektor.title}
        pluralLocative={sektor.pluralLocative}
        problems={sektor.painPoints}
      />

      {sektor.packages && <SectorPackages sectorTitle={sektor.title} packages={sektor.packages} />}

      <ComparisonSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
