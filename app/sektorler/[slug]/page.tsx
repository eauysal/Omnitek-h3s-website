import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { sektorler, getSektorBySlug } from "@/data/sektorler"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ComparisonSection } from "@/components/comparison-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SectorHero } from "@/components/sector-hero"
import { SectorPackages } from "@/components/sector-packages"
import { SectorProblems } from "@/components/sector-problems"
import { siteConfig } from "@/lib/seo"
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/json-ld"

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

  const pageTitle = `${sektor.title} için Wi-Fi Pazarlama ve Güvenli Misafir Ağı | Omnitek H3S`
  const pageUrl = `${siteConfig.url}/sektorler/${sektor.slug}`
  const ogImage = sektor.heroImage
    ? {
        url: sektor.heroImage.url,
        width: sektor.heroImage.width,
        height: sektor.heroImage.height,
        alt: `${sektor.title} için Omnitek H3S çözümü`,
      }
    : siteConfig.defaultImage

  return {
    title: pageTitle,
    description: sektor.metaDescription,
    alternates: {
      canonical: `/sektorler/${sektor.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: sektor.metaDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: siteConfig.ogType,
      images: [ogImage],
    },
    twitter: {
      title: pageTitle,
      description: sektor.metaDescription,
      images: [ogImage.url],
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

  const pageUrl = `${siteConfig.url}/sektorler/${sektor.slug}`
  // Lucide icon bileşeni (fonksiyon) Server -> Client Component sınırından geçemez,
  // bu yüzden client bileşenlere aktarmadan önce sektor nesnesinden çıkarılır.
  const { icon: _icon, ...sektorForClient } = sektor

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "Sektörler", url: `${siteConfig.url}/#sektorler` },
          { name: sektor.title, url: pageUrl },
        ]}
      />
      <ServiceJsonLd
        sectorTitle={sektor.title}
        serviceType={`${sektor.title} için Wi-Fi Pazarlama ve Ağ Güvenliği Hizmeti`}
        description={sektor.metaDescription}
        url={pageUrl}
      />

      <Navbar />

      <SectorHero sektor={sektorForClient} />

      <SectorProblems sektor={sektorForClient} />

      {sektor.packages && <SectorPackages packages={sektor.packages} />}

      <ComparisonSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
