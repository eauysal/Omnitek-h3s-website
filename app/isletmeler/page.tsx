import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IsletmelerHero } from "@/components/isletmeler-hero"
import { IsletmelerBody } from "@/components/isletmeler-body"
import { ContactSection } from "@/components/contact-section"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/seo"

const pageTitle = "Tek Şubeli İşletmeler için Wi-Fi ve Müşteri Kazanımı | Omnitek H3S"
const pageDescription =
  "Kasa ve POS kesintisiz çalışsın, misafir Wi-Fi'ınız yasal olsun ve müşteri kazandırsın. Tek şubeli kafe, restoran, otel ve perakende işletmeleri için Omnitek H3S."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/isletmeler",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.url}/isletmeler`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: siteConfig.ogType,
    images: [{ ...siteConfig.defaultImage, alt: "Omnitek H3S - Tek şubeli işletmeler için Wi-Fi ve müşteri kazanımı" }],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [siteConfig.defaultImage.url],
  },
}

export default function IsletmelerPage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: siteConfig.url },
          { name: "Tek Şubeli İşletmeler", url: `${siteConfig.url}/isletmeler` },
        ]}
      />
      <Navbar />
      <IsletmelerHero />
      <IsletmelerBody />
      <ContactSection singleBranch />
      <Footer />
    </main>
  )
}
