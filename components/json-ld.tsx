import { siteConfig } from "@/lib/seo"

const organizationRef = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Omnitek H3S",
  legalName: "Omnitek Telekom ve Teknoloji Sistem Entegratörü",
  description:
    "Kafe, restoran, otel ve ofisler için kurumsal misafir Wi-Fi, ağ güvenliği ve 5651/KVKK uyumlu log kaydı çözümü.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.jpeg`,
  email: "info@omnitek.com.tr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Barbaros Mahallesi Begonya Sokak No. 1/2, Nida Kule Batı",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: ["İstanbul", "Ankara", "Antalya"],
  foundingDate: "1986",
  parentOrganization: {
    "@type": "Organization",
    name: "Omnitek Telekom",
    url: "https://www.omnitek.com.tr",
  },
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function ServiceJsonLd({
  sectorTitle,
  serviceType,
  description,
  url,
}: {
  sectorTitle: string
  serviceType: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${sectorTitle} için H3S Wi-Fi & Güvenlik Çözümü`,
    serviceType,
    description,
    url,
    provider: organizationRef,
    areaServed: ["İstanbul", "Ankara", "Antalya"],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
