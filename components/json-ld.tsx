const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Omnitek H3S",
  alternateName: "Omnitek Telekom - Hotspot Security Systems",
  description:
    "Kafe, restoran, otel ve ofisler için kurumsal misafir Wi-Fi, ağ güvenliği ve 5651/KVKK uyumlu log kaydı çözümü.",
  url: "https://omnitekh3s.com",
  email: "info@omnitek.com.tr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Barbaros Mahallesi Begonya Sokak No. 1/2, Nida Kule Batı",
    addressLocality: "Ataşehir",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: ["İstanbul", "Antalya", "Ankara"],
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
