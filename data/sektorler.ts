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
  recommended?: boolean // "Tavsiye Edilen" rozeti (yalnızca H3S Kontrol)
  idealLabel?: string // "… için ideal" rozeti (yalnızca H3S Uyum; sektöre göre değişir)
  idealLabelEn?: string
  ctaLabel: string
  ctaLabelEn: string
  ctaHref: string
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
    description: "Yasal uyumluluğu karşılar. Her şube ayrı yönetilir; merkezî görünürlük yoktur.",
    descriptionEn: "Meets legal compliance. Each branch is managed separately; there is no central visibility.",
    // TODO: TEYİT — "SLA - Bakım ve yönetim" ve "Merkezî internet yönetimi" Uyum'a dahil mi? Dahilse ✓ listesine eklenecek, açıklamadaki "merkezî görünürlük yoktur" ifadesi güncellenecek
    ctaLabel: "Görüşme planlayın →",
    ctaLabelEn: "Plan a call →",
    ctaHref: "#iletisim",
    features: [
      { text: "5651 yasal loglama ve temel hotspot", textEn: "5651 legal logging and basic hotspot", included: true },
      { text: "İç ve dış ortam E-WiFi6 access point ve E-Switch", textEn: "Indoor and outdoor E-WiFi6 access points and E-Switch", included: true },
      { text: "Fiziksel kurulum", textEn: "Physical installation", included: true },
      { text: "1 yıl güvenlik yazılımı", textEn: "1-year security software", included: true },
      { text: "POS / kasa izolasyonu (VLAN)", textEn: "POS / till isolation (VLAN)", included: false },
      { text: "7/24 uzaktan izleme", textEn: "24/7 remote monitoring", included: false },
      { text: "Merkezî yönetim paneli", textEn: "Central management panel", included: false },
    ],
  },
  {
    name: "H3S Kontrol",
    nameEn: "H3S Control",
    description: "Her misafir için tam koruma ve tüm şubelerin tek merkezden yönetimi.",
    descriptionEn: "Full protection for every guest and central management of all branches.",
    recommended: true,
    ctaLabel: "Pilot planlayın →",
    ctaLabelEn: "Plan a pilot →",
    ctaHref: "/#pilot",
    features: [
      { text: "5651 yasal loglama, yönetilen hotspot ve SMS entegrasyonu", textEn: "5651 legal logging, managed hotspot and SMS integration", included: true },
      { text: "POS, kasa, kamera ve adisyon sistemi izolasyonu (Siber Kalkan)", textEn: "POS, till, camera and order-system isolation (Cyber Shield)", included: true },
      { text: "İç ve dış ortam E-WiFi6 access point ve E-Switch", textEn: "Indoor and outdoor E-WiFi6 access points and E-Switch", included: true },
      { text: "Pasif network ekipmanları ve kurulum", textEn: "Passive network equipment and installation", included: true },
      { text: "Uygulama ve web sitesi filtresi, hız kontrolü", textEn: "App and website filtering, speed control", included: true },
      { text: "2 yıl güvenlik yazılımı, merkezî CRM ve 1 yıl SLA", textEn: "2-year security software, central CRM and 1-year SLA", included: true },
    ],
  },
  {
    name: "H3S Kontrol+",
    nameEn: "H3S Control+",
    description: "Kesintiye toleransı en düşük zincirler için en üst koruma katmanı.",
    descriptionEn: "The top protection layer for chains with the lowest tolerance for downtime.",
    // TODO: TEYİT — failover kapsamı: cihaz yedeği mi, hat yedeği mi? Hat yedeği (4G/5G) eklenirse madde güncellenecek.
    // "Donanım yedekliliği (failover) — kesintisiz operasyon" ifadesi kaldırıldı: pakette yedek internet hattı yok, "kesintisiz" yanlış beklenti yaratıyor.
    ctaLabel: "Pilot planlayın →",
    ctaLabelEn: "Plan a pilot →",
    ctaHref: "/#pilot",
    features: [
      { text: "H3S Kontrol'ün tüm özellikleri", textEn: "Everything in H3S Control", included: true },
      { text: "E-Network ekipmanları ve fiziksel kurulum", textEn: "E-Network equipment and physical installation", included: true },
      { text: "Cihaz yedekliliği: arıza durumunda yedek donanım devreye girer", textEn: "Device redundancy: spare hardware takes over in case of failure", included: true },
      { text: "4 saat içinde müdahale, 2 yıl VIP SLA", textEn: "Response within 4 hours, 2-year VIP SLA", included: true },
      { text: "Aktif siber saldırı tespiti ve engelleme", textEn: "Active cyber attack detection and blocking", included: true },
      { text: "Genişletilmiş entegrasyon desteği", textEn: "Extended integration support", included: true },
      { text: "3 yıl güvenlik yazılımı ve merkezî CRM", textEn: "3-year security software and central CRM", included: true },
    ],
  },
]

// idealLabel: sektöre göre değişen "… için ideal" rozeti yalnızca H3S Uyum'a eklenir.
function tekSubePaketleri(idealLabel: string, idealLabelEn: string): Paket[] {
  return tekSubeKafeRestoranPaketleri.map((paket) =>
    paket.name === "H3S Uyum" ? { ...paket, idealLabel, idealLabelEn } : paket
  )
}

export const sektorler: Sektor[] = [
  {
    slug: "kafe",
    title: "Kafe",
    titleEn: "Cafés",
    h1Title: "Şubelerinizdeki Wi-Fi, müdavimlerinizi tanımanın en kısa yolu.",
    h1TitleEn: "The Wi-Fi in your branches is the shortest path to knowing your regulars.",
    pluralLocative: "Kafelerde",
    icon: Coffee,
    shortDescription: "Misafir Wi-Fi, POS güvenliği ve yasal uyumluluk için özel çözümler.",
    shortDescriptionEn: "Purpose-built solutions for guest Wi-Fi, POS security and legal compliance.",
    tags: ["Misafir Wi-Fi", "POS Güvenliği", "5651 Uyum"],
    tagsEn: ["Guest Wi-Fi", "POS Security", "5651 Compliance"],
    metaDescription:
      "Misafir bağlanır, tanınır, kampanyayla geri gelir. Kafeler için Wi-Fi pazarlama, ayrı POS ağı ve 5651/KVKK uyumlu altyapı tek çözümde: Omnitek H3S.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Misafir bağlanır, tanınır, kampanyayla geri gelir. Kasa ve POS ağı ayrı, 5651/KVKK altyapıda hazır.",
    introEn:
      "Guests connect, get recognized and come back through campaigns. The till and POS network is separate, and 5651/KVKK compliance is built into the infrastructure.",
    painPoints: [
      {
        icon: "LockOpen",
        title: "POS, adisyon ve Wi-Fi aynı modeme bağlı",
        titleEn: "POS, order system and Wi-Fi all on the same modem",
        description: "Ödeme güvenliği risk altında; olası bir sızıntı POS sisteminizi doğrudan etkileyebilir.",
        descriptionEn: "Payment security is at risk; a potential breach can directly affect your POS system.",
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
      {
        icon: "FileText",
        title: "Numara ve IP kaydı tutulmuyor",
        titleEn: "No number or IP records kept",
        description: "Yasal ceza riski var, 5651 denetiminde işletmeniz doğrudan sorumlu tutulabilir.",
        descriptionEn: "There's a legal penalty risk — your business can be held directly responsible in a 5651 audit.",
        risk: "red",
      },
    ],
    packages: tekSubePaketleri("Butik kafeler için ideal", "Ideal for boutique cafés"),
  },
  {
    slug: "restoran",
    title: "Restoran",
    titleEn: "Restaurants",
    h1Title: "Her masadaki bağlantı, geri dönen bir müşteri olabilir.",
    h1TitleEn: "Every connection at every table can become a returning customer.",
    pluralLocative: "Restoranlarda",
    icon: UtensilsCrossed,
    shortDescription: "Yoğun müşteri trafiğine uygun, güvenli ve hızlı ağ altyapısı.",
    shortDescriptionEn: "Secure, fast network infrastructure built for heavy customer traffic.",
    tags: ["Misafir Verisi", "Şube Kıyası", "POS Ayrımı"],
    tagsEn: ["Guest Data", "Branch Comparison", "POS Separation"],
    metaDescription:
      "Misafir verisi, şube bazlı ölçüm ve kampanya tek panelde. Restoranlar için Wi-Fi pazarlama, misafir ağından ayrı ödeme ağı ve 5651/KVKK uyumu: Omnitek H3S.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Misafir verisi, şube bazlı ölçüm ve kampanya tek panelde. Ödeme ağı misafir ağından ayrı.",
    introEn:
      "Guest data, branch-level measurement and campaigns in one panel. The payment network is separate from the guest network.",
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
    packages: tekSubePaketleri("Tek şubeli restoranlar için ideal", "Ideal for single-branch restaurants"),
  },
  {
    slug: "otel-pansiyon",
    title: "Otel & Pansiyon",
    titleEn: "Hotels & Guesthouses",
    h1Title: "Misafiriniz check-out yapar, ilişkiniz devam eder.",
    h1TitleEn: "Your guest checks out, the relationship continues.",
    pluralLocative: "Otel & Pansiyonlarda",
    icon: Building2,
    shortDescription: "Oda bazlı ağ yönetimi ve 7/24 kesintisiz bağlantı.",
    shortDescriptionEn: "Room-based network management and 24/7 uninterrupted connectivity.",
    tags: ["Oda Ağı Ayrımı", "7/24 İzleme", "Misafir Portalı"],
    tagsEn: ["Room Network Separation", "24/7 Monitoring", "Guest Portal"],
    metaDescription:
      "Misafir Wi-Fi'ı izinli iletişime dönüşür; oda ağı ve yönetim ağı ayrı ve izlenir. Oteller ve pansiyonlar için Wi-Fi pazarlama ve güvenli misafir ağı: Omnitek H3S.",
    heroImage: { url: "/images/h3s-sistem-diyagrami.webp", width: 1800, height: 1005 },
    intro:
      "Misafir Wi-Fi'ı izinli iletişime dönüşür; oda ağı ve yönetim ağı ayrı ve izlenir.",
    introEn:
      "Guest Wi-Fi turns into consented communication; the room network and management network are separate and monitored.",
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
    packages: tekSubePaketleri("Butik otel ve pansiyonlar için ideal", "Ideal for boutique hotels and guesthouses"),
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
    tags: ["VLAN Ayrımı", "Kurumsal Güvenlik", "Merkezî Yönetim"],
    tagsEn: ["VLAN Separation", "Enterprise Security", "Central Management"],
    metaDescription:
      "Ofis ve koworking alanları için VLAN ayrımı, kurumsal güvenlik ve merkezî ağ yönetimi. H3S ile 5651/KVKK uyumlu altyapı kurun.",
    intro:
      "Koworking alanlarında ve ofislerde farklı firmaların/kullanıcıların aynı ağı güvenli şekilde paylaşması gerekir. H3S, VLAN ayrımı ile her kullanıcı grubunu izole ederken, merkezî yönetim paneliyle tüm ağı tek yerden kontrol etmenizi sağlar.",
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
        title: "Merkezî yönetim yok",
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
    h1Title: "Mağazalarınızdaki Wi-Fi, müşterinizi tanımanın en kısa yolu.",
    h1TitleEn: "The Wi-Fi in your stores is the shortest path to knowing your customers.",
    pluralLocative: "Market & Perakendede",
    icon: ShoppingCart,
    shortDescription: "Kasa, POS ve stok sistemleri misafir ağından ayrılır; tüm mağazalar tek panelden yönetilir.",
    shortDescriptionEn: "Till, POS and inventory systems are separated from the guest network; all stores are managed from one panel.",
    tags: ["POS Ayrımı", "Mağaza Kıyası", "Müşteri Verisi"],
    tagsEn: ["POS Separation", "Store Comparison", "Customer Data"],
    metaDescription:
      "Kasa, POS ve stok sistemleri ayrı ağda; tüm mağazalar tek panelden yönetilir. Market ve perakende için Wi-Fi pazarlama ve müşteri verisi: Omnitek H3S.",
    intro:
      "Kasa, POS ve stok sistemleri ayrı ağda; tüm mağazalar tek panelden yönetilir.",
    introEn:
      "Till, POS and inventory systems sit on a separate network; all stores are managed from one panel.",
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
