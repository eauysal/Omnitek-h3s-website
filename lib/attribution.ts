// Form kayıtlarının nereden geldiğini bilmek için ziyaretçinin geliş kaynağını (UTM, reklam tıklaması, yönlendiren site)
// oturum boyunca saklar. Kişisel veri içermez; yalnızca sessionStorage'da, sekme kapanınca silinir.
// Her sayfada çalışır (AttributionCapture): ziyaretçi /sektorler/kafe'ye gelip sonra ana sayfadaki forma geçse de kaynak korunur.
const KEY = "h3s-attribution"

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const

interface StoredAttribution {
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>
  clickId: string // "gclid" | "fbclid" | ""
  referrerHost: string
  landing: string
}

export interface Attribution {
  label: string // Formspree e-postasında tek satırda görünen, okunabilir kaynak
  source: string // kısa kaynak (analitik olayı için)
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>
  referrer: string
  landing: string
}

function read(): StoredAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as StoredAttribution) : null
  } catch {
    return null
  }
}

function write(value: StoredAttribution) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(value))
  } catch {
    // depolama kapalıysa (gizli sekme vb.) sessizce geç; form yine çalışır, yalnızca kaynak boş kalır
  }
}

export function captureAttribution() {
  const params = new URLSearchParams(window.location.search)
  const utm: StoredAttribution["utm"] = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) utm[key] = value.slice(0, 100)
  }
  const clickId = params.get("gclid") ? "gclid" : params.get("fbclid") ? "fbclid" : ""
  const hasCampaignParams = Object.keys(utm).length > 0 || clickId !== ""

  let referrerHost = ""
  try {
    const host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : ""
    // Kendi sitemizden gelen gezinme kaynak sayılmaz
    referrerHost = host && host !== window.location.hostname.replace(/^www\./, "") ? host : ""
  } catch {
    referrerHost = ""
  }

  // Reklam/kampanya parametresi olan ziyaret her zaman kaydı günceller; aksi halde ilk giriş korunur.
  if (hasCampaignParams || !read()) {
    write({ utm, clickId, referrerHost, landing: window.location.pathname })
  }
}

const SEARCH_ENGINES: [RegExp, string][] = [
  [/(^|\.)google\./, "google"],
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)yandex\./, "yandex"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
]

export function getAttribution(): Attribution {
  const stored = read() ?? { utm: {}, clickId: "", referrerHost: "", landing: "" }
  const { utm, clickId, referrerHost } = stored

  let source = ""
  let label = "doğrudan"
  if (utm.utm_source) {
    source = utm.utm_source
    label = [utm.utm_source, utm.utm_medium || "-", utm.utm_campaign].filter(Boolean).join(" / ")
  } else if (clickId === "gclid") {
    source = "google"
    label = "google / cpc (gclid)"
  } else if (clickId === "fbclid") {
    source = "facebook"
    label = "facebook / (fbclid)"
  } else if (referrerHost) {
    const engine = SEARCH_ENGINES.find(([pattern]) => pattern.test(referrerHost))
    source = engine ? engine[1] : referrerHost
    label = engine ? `${engine[1]} / organic` : `${referrerHost} / referral`
  }

  return { label, source, utm, referrer: referrerHost, landing: stored.landing }
}
