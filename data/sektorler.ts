import { Coffee, UtensilsCrossed, Building2, Building, ShoppingCart, Sun, type LucideIcon } from "lucide-react"

export interface PaketOzellik {
  text: string
  included: boolean
}

export type SorunIkon =
  | "LockOpen"
  | "FileText"
  | "BarChart3"
  | "Gauge"
  | "Shield"
  | "Package"
  | "WifiOff"
  | "DoorOpen"
  | "Users"
  | "Settings"
  | "ShoppingCart"

export interface SektorSorun {
  icon: SorunIkon
  title: string
  description: string
  risk: "red" | "amber"
}

export interface Paket {
  name: string
  description: string
  recommended?: boolean
  recommendedLabel?: string
  features: PaketOzellik[]
}

export interface Sektor {
  slug: string
  title: string
  h1Title: string
  pluralLocative: string
  icon: LucideIcon
  shortDescription: string
  tags: string[]
  metaDescription: string
  heroImage?: { url: string; width: number; height: number }
  intro: string
  painPoints: SektorSorun[]
  packages?: Paket[]
}

const tekSubeKafeRestoranPaketleri: Paket[] = [
  {
    name: "H3S Uyum",
    description: "Yalnızca yasal uyumluluğu karşılar. Her şube ayrı; merkezî görünürlük yoktur.",
    features: [
      { text: "5651 yasal loglama + temel hotspot", included: true },
      { text: "Dış ve İç Ortam E-WiFi6 Access Point & E-Switch", included: true },
      { text: "POS / kasa izolasyonu (VLAN) yok", included: false },
      { text: "7/24 uzaktan izleme yok", included: false },
      { text: "SLA - Bakım ve yönetim", included: false },
      { text: "Merkezî internet yönetimi", included: false },
      { text: "Fiziksel kurulum", included: true },
      { text: "1 yıl güvenlik yazılımı", included: true },
    ],
  },
  {
    name: "H3S Kontrol",
    description: "Her misafir için tam koruma + tüm kullanıcıların tek merkezden yönetimi.",
    recommended: true,
    recommendedLabel: "İçin İdeal",
    features: [
      { text: "5651 yasal loglama + yönetimli hotspot + SMS Entegrasyonu", included: true },
      { text: "POS / Kasa / Kamera / Adisyon Sistemi İzolasyonu — Siber Kalkan", included: true },
      { text: "Dış Ortam ve İç Ortam E-WiFi6 Access Point & E-Switch", included: true },
      { text: "Pasif Network Ekipmanlar ve kurulum", included: true },
      { text: "Uygulama & Web Site Filtre, Hız kontrolü", included: true },
      { text: "2 yıl güvenlik yazılımı + merkezî CRM + 1 yıl SLA", included: true },
    ],
  },
  {
    name: "H3S Kontrol +(PLUS)",
    description: "Sıfır kesinti hedefleyen zincirler için en üst koruma katmanı.",
    features: [
      { text: "H3S Kontrol'ün tamamı", included: true },
      { text: "E-Network ekipmanları ve fiziksel kurulum", included: true },
      { text: "Donanım yedekliliği (failover) — kesintisiz operasyon", included: true },
      { text: "4 Saat içinde / 2 yıl VIP SLA", included: true },
      { text: "Aktif Siber Saldırı Tespit ve Engelleme", included: true },
      { text: "Genişletilmiş Entegrasyon Destek kapsamı", included: true },
      { text: "3 yıl güvenlik yazılımı + merkezî CRM", included: true },
    ],
  },
]

function tekSubePaketleri(recommendedLabel: string): Paket[] {
  return tekSubeKafeRestoranPaketleri.map((paket) =>
    paket.recommended ? { ...paket, recommendedLabel } : paket
  )
}

export const sektorler: Sektor[] = [
  {
    slug: "kafe",
    title: "Kafe",
    h1Title: "Kafeler İçin Misafir Wi-Fi ve 5651 Uyum Çözümü",
    pluralLocative: "Kafelerde",
    icon: Coffee,
    shortDescription: "Misafir Wi-Fi, POS güvenliği ve yasal uyumluluk için özel çözümler.",
    tags: ["Misafir Wi-Fi", "POS Güvenliği", "5651 Uyum"],
    metaDescription:
      "Kafeler için kurumsal misafir Wi-Fi, POS ağ ayrımı ve 5651/KVKK uyumlu log kaydı. Ücretsiz saha keşfi ile H3S çözümünü öğrenin.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Kafenizde misafir Wi-Fi'ı sunarken kasa ve POS cihazlarınızın aynı ağda olması ciddi bir güvenlik açığı yaratır. H3S, misafir ağını POS/kasa sisteminden tamamen ayırırken, 5651 sayılı kanun gereği zorunlu olan log kaydını da otomatik olarak yönetir.",
    painPoints: [
      {
        icon: "LockOpen",
        title: "POS, adisyon ve Wi-Fi aynı modeme bağlı",
        description: "Ödeme güvenliği risk altında, olası bir sızıntı POS sisteminizi doğrudan etkileyebilir, ödemelerinizi alamaz hale gelebilirsiniz.",
        risk: "red",
      },
      {
        icon: "FileText",
        title: "Numara ve IP kaydı tutulmuyor",
        description: "Yasal ceza riski var, 5651 denetiminde işletmeniz doğrudan sorumlu tutulabilir.",
        risk: "red",
      },
      {
        icon: "BarChart3",
        title: "Müşteri verisi ölçülmüyor",
        description: "Wi-Fi'a bağlanan müşteri sayısı ve geri dönüş oranı takip edilmiyor, pazarlama fırsatı kaçıyor.",
        risk: "amber",
      },
    ],
    packages: tekSubePaketleri("Butik Kafeler İçin İdeal"),
  },
  {
    slug: "restoran",
    title: "Restoran",
    h1Title: "Restoranlar İçin Güvenli Misafir Wi-Fi ve 5651 Loglama",
    pluralLocative: "Restoranlarda",
    icon: UtensilsCrossed,
    shortDescription: "Yoğun müşteri trafiğine uygun, güvenli ve hızlı ağ altyapısı.",
    tags: ["Yüksek Kapasite", "Güvenli Ödeme", "Log Kaydı"],
    metaDescription:
      "Restoranlar için yüksek kapasiteli, güvenli misafir Wi-Fi altyapısı. POS güvenliği ve 5651 uyumlu log kaydı ile H3S.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Yoğun saatlerde onlarca cihazın aynı anda bağlandığı bir restoran ağında, hem misafir deneyimi hem de ödeme güvenliği aynı anda korunmalı. H3S, yüksek kapasiteli misafir Wi-Fi'ı POS/adisyon sisteminizden ayrı bir ağda tutarak her ikisini de güvence altına alır.",
    painPoints: [
      {
        icon: "Gauge",
        title: "Yoğun saatlerde POS cihazları ve adisyon sistemleri kilitleniyor.",
        description: "Misafir ve POS aynı bant genişliğini paylaşıyor, sipariş ve ödeme gecikiyor.",
        risk: "amber",
      },
      {
        icon: "Shield",
        title: "Müşterilerin Wi-Fi kullanımında doğrulama yapılmıyor",
        description: "Siber risk yüksek, saldırılara karşı korumasız kalıyorsunuz.",
        risk: "red",
      },
      {
        icon: "Package",
        title: "Ev tipi modem ve basit şifreleme kullanılıyor",
        description: "Kilitli kabin altyapısı olmadan ağ ekipmanına yetkisiz erişim riski oluşuyor.",
        risk: "amber",
      },
    ],
    packages: tekSubePaketleri("Tek Şubeli Restoranlar İçin İdeal"),
  },
  {
    slug: "otel-pansiyon",
    title: "Otel & Pansiyon",
    h1Title: "Oteller İçin Misafir Wi-Fi Altyapısı ve 5651 Uyum",
    pluralLocative: "Otel & Pansiyonlarda",
    icon: Building2,
    shortDescription: "Oda bazlı ağ yönetimi ve 7/24 kesintisiz bağlantı.",
    tags: ["Oda Yönetimi", "7/24 Bağlantı", "Misafir Portal"],
    metaDescription:
      "Otel ve pansiyonlar için oda bazlı ağ yönetimi, 7/24 kesintisiz misafir Wi-Fi ve 5651/KVKK uyumlu altyapı. H3S ile tanışın.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Otel ve pansiyonlarda misafir memnuniyetinin önemli bir parçası kesintisiz ve güvenli internet erişimidir. H3S, oda bazlı ağ yönetimi ile her misafire ayrı ve güvenli bir bağlantı sağlarken, 7/24 aktif izleme ile olası kesintileri önceden tespit eder.",
    painPoints: [
      {
        icon: "WifiOff",
        title: "Kesintili/yavaş misafir Wi-Fi",
        description: "Misafir memnuniyetini düşürüyor, olumsuz yorumlara yol açıyor.",
        risk: "amber",
      },
      {
        icon: "DoorOpen",
        title: "Oda bazlı ağ ayrımı yok",
        description: "Misafirler birbirinin cihazlarını görebiliyor, mahremiyet ihlali oluşuyor.",
        risk: "red",
      },
      {
        icon: "FileText",
        title: "5651/KVKK süreci eksik",
        description: "Log kaydı ve veri işleme süreci yasal gereklilikleri karşılamıyor.",
        risk: "red",
      },
    ],
    packages: tekSubePaketleri("Butik Otel & Pansiyonlar İçin İdeal"),
  },
  {
    slug: "dis-mekan-etkinlik",
    title: "Dış Mekan & Etkinlik",
    h1Title: "Etkinlik Alanları İçin Wi-Fi ve 5651 Uyumlu Loglama",
    pluralLocative: "Dış Mekan & Etkinlik Alanlarında",
    icon: Sun,
    shortDescription: "Müşteri memnuniyeti için hızlı ve güvenli internet deneyimi.",
    tags: ["Hızlı Wi-Fi", "Güvenlik", "Kolay Erişim"],
    metaDescription:
      "Dış mekan işletmeleri ve etkinlikler için hızlı, güvenli ve kolay erişilebilir misafir Wi-Fi çözümü. H3S ile 5651 uyumlu altyapı.",
    intro:
      "Dış mekan işletmeleri ve etkinlik alanlarında değişken misafir yoğunluğuna hızlı uyum sağlayan, kurulumu esnek bir ağ altyapısına ihtiyaç var. H3S, kolay erişilebilir misafir Wi-Fi'ı güvenlik ve yasal uyumdan ödün vermeden sunar.",
    painPoints: [
      {
        icon: "Gauge",
        title: "Değişken yoğunlukta performans düşüyor",
        description: "Etkinlik anlarında ağ kapasitesi yetersiz kalıyor.",
        risk: "amber",
      },
      {
        icon: "Shield",
        title: "Güvenlik duvarı ve izleme yok",
        description: "Saldırılar fark edilmeden sisteme sızabilir.",
        risk: "red",
      },
      {
        icon: "FileText",
        title: "Log kaydı tutulmuyor",
        description: "5651 kapsamında yasal risk devam ediyor.",
        risk: "red",
      },
    ],
  },
  {
    slug: "ofis-koworking",
    title: "Ofis & Koworking",
    h1Title: "Ofisler İçin Kurumsal Ağ Güvenliği ve VLAN Ayrımı",
    pluralLocative: "Ofis & Koworking Alanlarında",
    icon: Building,
    shortDescription: "Çoklu kullanıcı yönetimi ve kurumsal düzeyde güvenlik.",
    tags: ["VLAN Ayrımı", "Kurumsal Güvenlik", "Merkezi Yönetim"],
    metaDescription:
      "Ofis ve koworking alanları için VLAN ayrımı, kurumsal güvenlik ve merkezi ağ yönetimi. H3S ile 5651/KVKK uyumlu altyapı kurun.",
    intro:
      "Koworking alanlarında ve ofislerde farklı firmaların/kullanıcıların aynı ağı güvenli şekilde paylaşması gerekir. H3S, VLAN ayrımı ile her kullanıcı grubunu izole ederken, merkezi yönetim paneliyle tüm ağı tek yerden kontrol etmenizi sağlar.",
    painPoints: [
      {
        icon: "Users",
        title: "Veri izolasyonu yok",
        description: "Farklı firma/kullanıcı grupları aynı ağda, veri sızıntısı riski oluşuyor.",
        risk: "red",
      },
      {
        icon: "Settings",
        title: "Merkezi yönetim yok",
        description: "Ağ ve izleme sistemi tek yerden kontrol edilemiyor.",
        risk: "amber",
      },
      {
        icon: "FileText",
        title: "5651 ve güvenlik altyapısı eksik",
        description: "Log kaydı ve güvenlik duvarı eksikliği yasal ve siber risk yaratıyor.",
        risk: "red",
      },
    ],
  },
  {
    slug: "market-perakende",
    title: "Market & Perakende",
    h1Title: "Marketler İçin POS Güvenliği ve Misafir Wi-Fi",
    pluralLocative: "Market & Perakendede",
    icon: ShoppingCart,
    shortDescription: "POS entegrasyonu ve müşteri Wi-Fi için optimize çözümler.",
    tags: ["POS Entegrasyon", "Müşteri Wi-Fi", "Envanter Güvenliği"],
    metaDescription:
      "Market ve perakende işletmeleri için güvenli POS entegrasyonu, müşteri Wi-Fi ayrımı ve envanter sistemi güvenliği. H3S çözümü.",
    intro:
      "Market ve perakende işletmelerinde POS, envanter sistemleri ve müşteri Wi-Fi'ının aynı ağda olması ciddi bir güvenlik açığıdır. H3S, bu sistemleri birbirinden ayırarak hem ödeme güvenliğini hem de müşteri deneyimini korur.",
    painPoints: [
      {
        icon: "ShoppingCart",
        title: "POS/envanter aynı ağda",
        description: "Müşteri ağıyla aynı ağda olmaları ciddi bir güvenlik açığı yaratıyor.",
        risk: "red",
      },
      {
        icon: "Package",
        title: "Yönetilmeyen ağ ekipmanı",
        description: "Ucuz, yönetilmeyen cihazlar güvenlik açıkları oluşturuyor.",
        risk: "amber",
      },
      {
        icon: "FileText",
        title: "5651 log kaydı ve izleme eksik",
        description: "Yasal loglama ve aktif izleme olmadan riskler fark edilmiyor.",
        risk: "red",
      },
    ],
  },
]

export function getSektorBySlug(slug: string): Sektor | undefined {
  return sektorler.find((s) => s.slug === slug)
}
