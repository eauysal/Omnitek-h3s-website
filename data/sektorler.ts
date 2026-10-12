import { Coffee, UtensilsCrossed, Building2, Building, ShoppingCart, Sun, type LucideIcon } from "lucide-react"

export interface PaketOzellik {
  text: string
  textEn: string
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
  titleEn: string
  description: string
  descriptionEn: string
  risk: "red" | "amber"
}

export interface Paket {
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  recommended?: boolean
  recommendedLabel?: string
  recommendedLabelEn?: string
  features: PaketOzellik[]
}

export interface Sektor {
  slug: string
  title: string
  titleEn: string
  h1Title: string
  h1TitleEn: string
  pluralLocative: string
  icon: LucideIcon
  shortDescription: string
  shortDescriptionEn: string
  tags: string[]
  tagsEn: string[]
  metaDescription: string
  heroImage?: { url: string; width: number; height: number }
  intro: string
  introEn: string
  painPoints: SektorSorun[]
  packages?: Paket[]
}

const tekSubeKafeRestoranPaketleri: Paket[] = [
  {
    name: "H3S Uyum",
    nameEn: "H3S Compliance",
    description: "Yalnızca yasal uyumluluğu karşılar. Her şube ayrı; merkezî görünürlük yoktur.",
    descriptionEn: "Meets legal compliance only. Each branch is separate; there is no central visibility.",
    features: [
      { text: "5651 yasal loglama + temel hotspot", textEn: "5651 legal logging + basic hotspot", included: true },
      { text: "Dış ve İç Ortam E-WiFi6 Access Point & E-Switch", textEn: "Indoor & outdoor E-WiFi6 Access Point & E-Switch", included: true },
      { text: "POS / kasa izolasyonu (VLAN) yok", textEn: "No POS / till isolation (VLAN)", included: false },
      { text: "7/24 uzaktan izleme yok", textEn: "No 24/7 remote monitoring", included: false },
      { text: "SLA - Bakım ve yönetim", textEn: "SLA - Maintenance and management", included: false },
      { text: "Merkezî internet yönetimi", textEn: "Central internet management", included: false },
      { text: "Fiziksel kurulum", textEn: "Physical installation", included: true },
      { text: "1 yıl güvenlik yazılımı", textEn: "1-year security software", included: true },
    ],
  },
  {
    name: "H3S Kontrol",
    nameEn: "H3S Control",
    description: "Her misafir için tam koruma + tüm kullanıcıların tek merkezden yönetimi.",
    descriptionEn: "Full protection for every guest, plus centralized management of all users.",
    recommended: true,
    recommendedLabel: "İçin İdeal",
    recommendedLabelEn: "Ideal For",
    features: [
      { text: "5651 yasal loglama + yönetimli hotspot + SMS Entegrasyonu", textEn: "5651 legal logging + managed hotspot + SMS integration", included: true },
      { text: "POS / Kasa / Kamera / Adisyon Sistemi İzolasyonu — Siber Kalkan", textEn: "POS / till / camera / order-system isolation — cyber shield", included: true },
      { text: "Dış Ortam ve İç Ortam E-WiFi6 Access Point & E-Switch", textEn: "Indoor & outdoor E-WiFi6 Access Point & E-Switch", included: true },
      { text: "Pasif Network Ekipmanlar ve kurulum", textEn: "Passive network equipment and installation", included: true },
      { text: "Uygulama & Web Site Filtre, Hız kontrolü", textEn: "App & website filtering, speed control", included: true },
      { text: "2 yıl güvenlik yazılımı + merkezî CRM + 1 yıl SLA", textEn: "2-year security software + central CRM + 1-year SLA", included: true },
    ],
  },
  {
    name: "H3S Kontrol +(PLUS)",
    nameEn: "H3S Control +(PLUS)",
    description: "Sıfır kesinti hedefleyen zincirler için en üst koruma katmanı.",
    descriptionEn: "The top protection tier for chains aiming for zero downtime.",
    features: [
      { text: "H3S Kontrol'ün tamamı", textEn: "Everything in H3S Control", included: true },
      { text: "E-Network ekipmanları ve fiziksel kurulum", textEn: "E-Network equipment and physical installation", included: true },
      { text: "Donanım yedekliliği (failover) — kesintisiz operasyon", textEn: "Hardware redundancy (failover) — uninterrupted operation", included: true },
      { text: "4 Saat içinde / 2 yıl VIP SLA", textEn: "Within 4 hours / 2-year VIP SLA", included: true },
      { text: "Aktif Siber Saldırı Tespit ve Engelleme", textEn: "Active cyber attack detection and blocking", included: true },
      { text: "Genişletilmiş Entegrasyon Destek kapsamı", textEn: "Extended integration support coverage", included: true },
      { text: "3 yıl güvenlik yazılımı + merkezî CRM", textEn: "3-year security software + central CRM", included: true },
    ],
  },
]

function tekSubePaketleri(recommendedLabel: string, recommendedLabelEn: string): Paket[] {
  return tekSubeKafeRestoranPaketleri.map((paket) =>
    paket.recommended ? { ...paket, recommendedLabel, recommendedLabelEn } : paket
  )
}

export const sektorler: Sektor[] = [
  {
    slug: "kafe",
    title: "Kafe",
    titleEn: "Cafés",
    h1Title: "Kafeler İçin Misafir Wi-Fi ve 5651 Uyum Çözümü",
    h1TitleEn: "Guest Wi-Fi and 5651 Compliance Solution for Cafés",
    pluralLocative: "Kafelerde",
    icon: Coffee,
    shortDescription: "Misafir Wi-Fi, POS güvenliği ve yasal uyumluluk için özel çözümler.",
    shortDescriptionEn: "Purpose-built solutions for guest Wi-Fi, POS security and legal compliance.",
    tags: ["Misafir Wi-Fi", "POS Güvenliği", "5651 Uyum"],
    tagsEn: ["Guest Wi-Fi", "POS Security", "5651 Compliance"],
    metaDescription:
      "Kafeler için kurumsal misafir Wi-Fi, POS ağ ayrımı ve 5651/KVKK uyumlu log kaydı. Ücretsiz saha keşfi ile H3S çözümünü öğrenin.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Kafenizde misafir Wi-Fi'ı sunarken kasa ve POS cihazlarınızın aynı ağda olması ciddi bir güvenlik açığı yaratır. H3S, misafir ağını POS/kasa sisteminden tamamen ayırırken, 5651 sayılı kanun gereği zorunlu olan log kaydını da otomatik olarak yönetir.",
    introEn:
      "When you offer guest Wi-Fi in your café, having your till and POS devices on the same network creates a serious security gap. H3S completely separates the guest network from your POS/till system, while automatically handling the log recording required by Law No. 5651.",
    painPoints: [
      {
        icon: "LockOpen",
        title: "POS, adisyon ve Wi-Fi aynı modeme bağlı",
        titleEn: "POS, order system and Wi-Fi all on the same modem",
        description: "Ödeme güvenliği risk altında, olası bir sızıntı POS sisteminizi doğrudan etkileyebilir, ödemelerinizi alamaz hale gelebilirsiniz.",
        descriptionEn: "Payment security is at risk — a potential breach can directly affect your POS system, and you could end up unable to process payments.",
        risk: "red",
      },
      {
        icon: "FileText",
        title: "Numara ve IP kaydı tutulmuyor",
        titleEn: "No number or IP records kept",
        description: "Yasal ceza riski var, 5651 denetiminde işletmeniz doğrudan sorumlu tutulabilir.",
        descriptionEn: "There's a legal penalty risk — your business can be held directly responsible in a 5651 audit.",
        risk: "red",
      },
      {
        icon: "BarChart3",
        title: "Müşteri verisi ölçülmüyor",
        titleEn: "Customer data isn't measured",
        description: "Wi-Fi'a bağlanan müşteri sayısı ve geri dönüş oranı takip edilmiyor, pazarlama fırsatı kaçıyor.",
        descriptionEn: "The number of customers connecting to Wi-Fi and their return rate isn't tracked, so a marketing opportunity is missed.",
        risk: "amber",
      },
    ],
    packages: tekSubePaketleri("Butik Kafeler İçin İdeal", "Ideal for Boutique Cafés"),
  },
  {
    slug: "restoran",
    title: "Restoran",
    titleEn: "Restaurants",
    h1Title: "Restoranlar İçin Güvenli Misafir Wi-Fi ve 5651 Loglama",
    h1TitleEn: "Secure Guest Wi-Fi and 5651 Logging for Restaurants",
    pluralLocative: "Restoranlarda",
    icon: UtensilsCrossed,
    shortDescription: "Yoğun müşteri trafiğine uygun, güvenli ve hızlı ağ altyapısı.",
    shortDescriptionEn: "Secure, fast network infrastructure built for heavy customer traffic.",
    tags: ["Yüksek Kapasite", "Güvenli Ödeme", "Log Kaydı"],
    tagsEn: ["High Capacity", "Secure Payments", "Log Records"],
    metaDescription:
      "Restoranlar için yüksek kapasiteli, güvenli misafir Wi-Fi altyapısı. POS güvenliği ve 5651 uyumlu log kaydı ile H3S.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Yoğun saatlerde onlarca cihazın aynı anda bağlandığı bir restoran ağında, hem misafir deneyimi hem de ödeme güvenliği aynı anda korunmalı. H3S, yüksek kapasiteli misafir Wi-Fi'ı POS/adisyon sisteminizden ayrı bir ağda tutarak her ikisini de güvence altına alır.",
    introEn:
      "In a restaurant network where dozens of devices connect at once during busy hours, both the guest experience and payment security need to be protected at the same time. H3S keeps high-capacity guest Wi-Fi on a network separate from your POS/order system, securing both.",
    painPoints: [
      {
        icon: "Gauge",
        title: "Yoğun saatlerde POS cihazları ve adisyon sistemleri kilitleniyor.",
        titleEn: "POS devices and order systems freeze up during busy hours",
        description: "Misafir ve POS aynı bant genişliğini paylaşıyor, sipariş ve ödeme gecikiyor.",
        descriptionEn: "Guests and POS share the same bandwidth, delaying orders and payments.",
        risk: "amber",
      },
      {
        icon: "Shield",
        title: "Müşterilerin Wi-Fi kullanımında doğrulama yapılmıyor",
        titleEn: "No verification is done on customers' Wi-Fi usage",
        description: "Siber risk yüksek, saldırılara karşı korumasız kalıyorsunuz.",
        descriptionEn: "Cyber risk is high — you're left unprotected against attacks.",
        risk: "red",
      },
      {
        icon: "Package",
        title: "Ev tipi modem ve basit şifreleme kullanılıyor",
        titleEn: "A home-grade modem and basic encryption are in use",
        description: "Kilitli kabin altyapısı olmadan ağ ekipmanına yetkisiz erişim riski oluşuyor.",
        descriptionEn: "Without a locked-cabinet setup, there's a risk of unauthorized access to network equipment.",
        risk: "amber",
      },
    ],
    packages: tekSubePaketleri("Tek Şubeli Restoranlar İçin İdeal", "Ideal for Single-Branch Restaurants"),
  },
  {
    slug: "otel-pansiyon",
    title: "Otel & Pansiyon",
    titleEn: "Hotels & Guesthouses",
    h1Title: "Oteller İçin Misafir Wi-Fi Altyapısı ve 5651 Uyum",
    h1TitleEn: "Guest Wi-Fi Infrastructure and 5651 Compliance for Hotels",
    pluralLocative: "Otel & Pansiyonlarda",
    icon: Building2,
    shortDescription: "Oda bazlı ağ yönetimi ve 7/24 kesintisiz bağlantı.",
    shortDescriptionEn: "Room-based network management and 24/7 uninterrupted connectivity.",
    tags: ["Oda Yönetimi", "7/24 Bağlantı", "Misafir Portal"],
    tagsEn: ["Room Management", "24/7 Connectivity", "Guest Portal"],
    metaDescription:
      "Otel ve pansiyonlar için oda bazlı ağ yönetimi, 7/24 kesintisiz misafir Wi-Fi ve 5651/KVKK uyumlu altyapı. H3S ile tanışın.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Otel ve pansiyonlarda misafir memnuniyetinin önemli bir parçası kesintisiz ve güvenli internet erişimidir. H3S, oda bazlı ağ yönetimi ile her misafire ayrı ve güvenli bir bağlantı sağlarken, 7/24 aktif izleme ile olası kesintileri önceden tespit eder.",
    introEn:
      "Uninterrupted, secure internet access is a key part of guest satisfaction at hotels and guesthouses. H3S provides each guest with a separate, secure connection through room-based network management, while 24/7 active monitoring catches potential outages before they happen.",
    painPoints: [
      {
        icon: "WifiOff",
        title: "Kesintili/yavaş misafir Wi-Fi",
        titleEn: "Spotty or slow guest Wi-Fi",
        description: "Misafir memnuniyetini düşürüyor, olumsuz yorumlara yol açıyor.",
        descriptionEn: "Lowers guest satisfaction and leads to negative reviews.",
        risk: "amber",
      },
      {
        icon: "DoorOpen",
        title: "Oda bazlı ağ ayrımı yok",
        titleEn: "No room-based network separation",
        description: "Misafirler birbirinin cihazlarını görebiliyor, mahremiyet ihlali oluşuyor.",
        descriptionEn: "Guests can see each other's devices, creating a privacy violation.",
        risk: "red",
      },
      {
        icon: "FileText",
        title: "5651/KVKK süreci eksik",
        titleEn: "5651/KVKK process is incomplete",
        description: "Log kaydı ve veri işleme süreci yasal gereklilikleri karşılamıyor.",
        descriptionEn: "Log recording and data processing don't meet legal requirements.",
        risk: "red",
      },
    ],
    packages: tekSubePaketleri("Butik Otel & Pansiyonlar İçin İdeal", "Ideal for Boutique Hotels & Guesthouses"),
  },
  {
    slug: "dis-mekan-etkinlik",
    title: "Dış Mekan & Etkinlik",
    titleEn: "Outdoor Venues & Events",
    h1Title: "Etkinlik Alanları İçin Wi-Fi ve 5651 Uyumlu Loglama",
    h1TitleEn: "Wi-Fi and 5651-Compliant Logging for Event Venues",
    pluralLocative: "Dış Mekan & Etkinlik Alanlarında",
    icon: Sun,
    shortDescription: "Müşteri memnuniyeti için hızlı ve güvenli internet deneyimi.",
    shortDescriptionEn: "A fast, secure internet experience that keeps guests happy.",
    tags: ["Hızlı Wi-Fi", "Güvenlik", "Kolay Erişim"],
    tagsEn: ["Fast Wi-Fi", "Security", "Easy Access"],
    metaDescription:
      "Dış mekan işletmeleri ve etkinlikler için hızlı, güvenli ve kolay erişilebilir misafir Wi-Fi çözümü. H3S ile 5651 uyumlu altyapı.",
    intro:
      "Dış mekan işletmeleri ve etkinlik alanlarında değişken misafir yoğunluğuna hızlı uyum sağlayan, kurulumu esnek bir ağ altyapısına ihtiyaç var. H3S, kolay erişilebilir misafir Wi-Fi'ı güvenlik ve yasal uyumdan ödün vermeden sunar.",
    introEn:
      "Outdoor venues and event spaces need a flexible network infrastructure that adapts quickly to changing guest density. H3S delivers easily accessible guest Wi-Fi without compromising on security or legal compliance.",
    painPoints: [
      {
        icon: "Gauge",
        title: "Değişken yoğunlukta performans düşüyor",
        titleEn: "Performance drops under variable load",
        description: "Etkinlik anlarında ağ kapasitesi yetersiz kalıyor.",
        descriptionEn: "Network capacity falls short during event peaks.",
        risk: "amber",
      },
      {
        icon: "Shield",
        title: "Güvenlik duvarı ve izleme yok",
        titleEn: "No firewall or monitoring",
        description: "Saldırılar fark edilmeden sisteme sızabilir.",
        descriptionEn: "Attacks can infiltrate the system unnoticed.",
        risk: "red",
      },
      {
        icon: "FileText",
        title: "Log kaydı tutulmuyor",
        titleEn: "No logs are kept",
        description: "5651 kapsamında yasal risk devam ediyor.",
        descriptionEn: "Legal risk under Law No. 5651 continues.",
        risk: "red",
      },
    ],
  },
  {
    slug: "ofis-koworking",
    title: "Ofis & Koworking",
    titleEn: "Offices & Coworking",
    h1Title: "Ofisler İçin Kurumsal Ağ Güvenliği ve VLAN Ayrımı",
    h1TitleEn: "Enterprise Network Security and VLAN Separation for Offices",
    pluralLocative: "Ofis & Koworking Alanlarında",
    icon: Building,
    shortDescription: "Çoklu kullanıcı yönetimi ve kurumsal düzeyde güvenlik.",
    shortDescriptionEn: "Multi-user management with enterprise-grade security.",
    tags: ["VLAN Ayrımı", "Kurumsal Güvenlik", "Merkezi Yönetim"],
    tagsEn: ["VLAN Separation", "Enterprise Security", "Central Management"],
    metaDescription:
      "Ofis ve koworking alanları için VLAN ayrımı, kurumsal güvenlik ve merkezi ağ yönetimi. H3S ile 5651/KVKK uyumlu altyapı kurun.",
    intro:
      "Koworking alanlarında ve ofislerde farklı firmaların/kullanıcıların aynı ağı güvenli şekilde paylaşması gerekir. H3S, VLAN ayrımı ile her kullanıcı grubunu izole ederken, merkezi yönetim paneliyle tüm ağı tek yerden kontrol etmenizi sağlar.",
    introEn:
      "In coworking spaces and offices, different companies and users need to safely share the same network. H3S isolates each user group with VLAN separation, while a central management panel lets you control the entire network from one place.",
    painPoints: [
      {
        icon: "Users",
        title: "Veri izolasyonu yok",
        titleEn: "No data isolation",
        description: "Farklı firma/kullanıcı grupları aynı ağda, veri sızıntısı riski oluşuyor.",
        descriptionEn: "Different companies/user groups share the same network, creating a data leak risk.",
        risk: "red",
      },
      {
        icon: "Settings",
        title: "Merkezi yönetim yok",
        titleEn: "No central management",
        description: "Ağ ve izleme sistemi tek yerden kontrol edilemiyor.",
        descriptionEn: "The network and monitoring system can't be controlled from one place.",
        risk: "amber",
      },
      {
        icon: "FileText",
        title: "5651 ve güvenlik altyapısı eksik",
        titleEn: "5651 and security infrastructure are incomplete",
        description: "Log kaydı ve güvenlik duvarı eksikliği yasal ve siber risk yaratıyor.",
        descriptionEn: "Missing log records and a firewall create both legal and cyber risk.",
        risk: "red",
      },
    ],
  },
  {
    slug: "market-perakende",
    title: "Market & Perakende",
    titleEn: "Retail & Grocery",
    h1Title: "Marketler İçin POS Güvenliği ve Misafir Wi-Fi",
    h1TitleEn: "POS Security and Guest Wi-Fi for Retail Stores",
    pluralLocative: "Market & Perakendede",
    icon: ShoppingCart,
    shortDescription: "POS entegrasyonu ve müşteri Wi-Fi için optimize çözümler.",
    shortDescriptionEn: "Solutions optimized for POS integration and customer Wi-Fi.",
    tags: ["POS Entegrasyon", "Müşteri Wi-Fi", "Envanter Güvenliği"],
    tagsEn: ["POS Integration", "Customer Wi-Fi", "Inventory Security"],
    metaDescription:
      "Market ve perakende işletmeleri için güvenli POS entegrasyonu, müşteri Wi-Fi ayrımı ve envanter sistemi güvenliği. H3S çözümü.",
    intro:
      "Market ve perakende işletmelerinde POS, envanter sistemleri ve müşteri Wi-Fi'ının aynı ağda olması ciddi bir güvenlik açığıdır. H3S, bu sistemleri birbirinden ayırarak hem ödeme güvenliğini hem de müşteri deneyimini korur.",
    introEn:
      "In retail and grocery businesses, having POS, inventory systems, and customer Wi-Fi on the same network is a serious security gap. H3S separates these systems from each other, protecting both payment security and the customer experience.",
    painPoints: [
      {
        icon: "ShoppingCart",
        title: "POS/envanter aynı ağda",
        titleEn: "POS/inventory on the same network",
        description: "Müşteri ağıyla aynı ağda olmaları ciddi bir güvenlik açığı yaratıyor.",
        descriptionEn: "Being on the same network as customer Wi-Fi creates a serious security gap.",
        risk: "red",
      },
      {
        icon: "Package",
        title: "Yönetilmeyen ağ ekipmanı",
        titleEn: "Unmanaged network equipment",
        description: "Ucuz, yönetilmeyen cihazlar güvenlik açıkları oluşturuyor.",
        descriptionEn: "Cheap, unmanaged devices create security vulnerabilities.",
        risk: "amber",
      },
      {
        icon: "FileText",
        title: "5651 log kaydı ve izleme eksik",
        titleEn: "5651 log recording and monitoring are missing",
        description: "Yasal loglama ve aktif izleme olmadan riskler fark edilmiyor.",
        descriptionEn: "Without legal logging and active monitoring, risks go unnoticed.",
        risk: "red",
      },
    ],
  },
]

export function getSektorBySlug(slug: string): Sektor | undefined {
  return sektorler.find((s) => s.slug === slug)
}
