"use client"

import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface LossCard {
  label: string
  value: string
  unit: string
}

interface StoryStat {
  num: string
  label: string
}

interface SecondaryCard {
  icon: () => JSX.Element
  title: string
  points: string[]
  insight: string
}

// İkonları harici paket yerine saf SVG fonksiyonları olarak tanımlıyoruz (Sıfır yük!)
const IconUserSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
)

const IconSpeakerphoneSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a3 3 0 0 1 0 6" /><path d="M10 8v11a1 1 0 0 1 -1 1H8a1 1 0 0 1 -1 -1v-5H4a1 1 0 0 1 -1 -1V9a1 1 0 0 1 1 -1h3V3a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v5" /></svg>
)

const IconClockSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
)

const lossCards: Record<Locale, LossCard[]> = {
  tr: [
    { label: "Günlük misafir", value: "~100 Kişi", unit: "kişi bağlanıyor" },
    { label: "Tanınmayan misafir", value: "%35", unit: "bir daha gelmiyor" },
    { label: "Yıllık kayıp potansiyel", value: "1.4M ₺", unit: "geri kazanılabilir ciro" },
  ],
  en: [
    { label: "Daily guests", value: "~100 people", unit: "connect per day" },
    { label: "Unrecognized guests", value: "35%", unit: "never come back" },
    { label: "Annual lost potential", value: "1.4M ₺", unit: "recoverable revenue" },
  ],
}

const beforeItems: Record<Locale, string[]> = {
  tr: [
    "Kafe doluydu, hafta sonu yoğunluk neden düşüyor bilinmiyordu",
    "Wi-Fi vardı, kim bağlandı yoktu",
    "Kaç müşteri geri döndü, hiç ölçülmedi",
  ],
  en: [
    "The café was busy, but no one knew why weekend traffic dipped",
    "Wi-Fi existed, but there was no record of who connected",
    "How many customers came back was never measured",
  ],
}

const afterItems: Record<Locale, string[]> = {
  tr: [
    "İlk 7 günde 345 müşteri kaydı toplandı",
    "İlk SMS kampanyası sadece 1 dakikada gönderildi",
    "Hafta sonu doluluk %38 arttı — bu oranı ilk kez ölçtük",
  ],
  en: [
    "345 customer records collected in the first 7 days",
    "The first SMS campaign went out in just 1 minute",
    "Weekend occupancy rose 38% — measured for the first time",
  ],
}

const storyStats: Record<Locale, StoryStat[]> = {
  tr: [
    { num: "345", label: "İlk haftada kayıt" },
    { num: "%38", label: "Doluluk artışı" },
    { num: "7 gün", label: "İlk sonuç" },
  ],
  en: [
    { num: "345", label: "Sign-ups in week one" },
    { num: "38%", label: "Occupancy increase" },
    { num: "7 days", label: "First result" },
  ],
}

const heroCardPoints: Record<Locale, string[]> = {
  tr: [
    "Tekrar gelen cihaz tanınır — kim kaç kez geldi görülür",
    "Kim bir daha gelmedi, kayıp müşteri listesi elinizde",
    "Sadık müşteriye özel kampanya, kayıp müşteriye geri dönüş teklifi",
    "Sosyal medya reklamlarından 5× daha ucuz",
  ],
  en: [
    "Returning devices are recognized — see who came how many times",
    "Get a ready-made list of lost customers who never came back",
    "Run loyalty campaigns for regulars and win-back offers for lost customers",
    "5× cheaper than social media advertising",
  ],
}

const secondaryCards: Record<Locale, SecondaryCard[]> = {
  tr: [
    {
      icon: IconUserSVG,
      title: "Müşterinizi tanıyın",
      points: [
        "Bağlanırken ad ve iletişim bırakır",
        "Doğrudan SMS / Kişi listesi oluşur",
        "Sıfır reklam bütçesiyle ulaşım",
      ],
      insight: "345 kayıt — hiç reklam verilmedi.",
    },
    {
      icon: IconSpeakerphoneSVG,
      title: "Anlık kampanya",
      points: [
        "Bağlantı ekranı = reklam panonuz",
        "Menü, etkinlik — dakikada değişir",
        "Müşteri bağlanırken görür, sipariş verirken hatırlar",
      ],
      insight: "Ekstra bütçe yok — müşteri zaten orada.",
    },
    {
      icon: IconClockSVG,
      title: "Gerçek veri",
      points: [
        "Bağlantı süreleri = masada geçen süre",
        "Hangi saatler dolu, boş — görünür",
        "Tahmin değil, veriyle karar",
      ],
      insight: "Veriye göre karar verin, sezgilere göre değil.",
    },
  ],
  en: [
    {
      icon: IconUserSVG,
      title: "Get to know your customer",
      points: [
        "They leave a name and contact info when connecting",
        "An SMS list / contact list builds itself",
        "Reach them with zero ad spend",
      ],
      insight: "345 sign-ups — with zero ads run.",
    },
    {
      icon: IconSpeakerphoneSVG,
      title: "Instant campaigns",
      points: [
        "The login screen becomes your ad space",
        "Menus, events — change it in minutes",
        "Guests see it while connecting, remember it while ordering",
      ],
      insight: "No extra budget needed — the customer is already there.",
    },
    {
      icon: IconClockSVG,
      title: "Real data",
      points: [
        "Connection time = time spent at the table",
        "See which hours are busy and which are quiet",
        "Decide with data, not guesswork",
      ],
      insight: "Make decisions based on data, not intuition.",
    },
  ],
}

const flowSteps: Record<Locale, { title: string; text: string }[]> = {
  tr: [
    {
      title: "Misafir bağlanır",
      text: "Markanıza özel karşılama sayfasından Wi-Fi'a bağlanır, SMS veya WhatsApp ile saniyeler içinde doğrulanır.",
    },
    {
      title: "İzinli veri birikir",
      text: "Ziyaret sıklığı ve tercihler her misafirin profilinde toplanır; KVKK ve 5651 uyumlu şekilde saklanır.",
    },
    {
      title: "Kampanya geri getirir",
      text: "Kişiye özel WhatsApp/SMS mesajları ve sadakat kampanyaları doğru kişiye doğru anda ulaşır; memnun misafir Google yorumuna yönlenir.",
    },
  ],
  en: [
    {
      title: "Guest connects",
      text: "They join Wi-Fi from your branded welcome page and verify via SMS or WhatsApp in seconds.",
    },
    {
      title: "Consented data builds up",
      text: "Visit frequency and preferences collect in each guest's profile, stored in line with KVKK and Law No. 5651.",
    },
    {
      title: "Campaigns bring them back",
      text: "Personalized WhatsApp/SMS messages and loyalty campaigns reach the right person at the right time; happy guests are guided to leave a Google review.",
    },
  ],
}

const content: Record<Locale, {
  headingLine1: string
  headingLine2: string
  headingIntro: string
  h3sActive: string
  hookTitle: string
  hookBody: string
  lossLabel: string
  lossFootnoteBefore: string
  lossFootnoteStrong: string
  ownerName: string
  ownerRole: string
  ownerQuote: string
  beforeLabel: string
  afterLabel: string
  heroBadge: string
  heroTitle: string
  heroNote: string
  ctaTitle: string
  ctaBodyBefore: string
  ctaBodyStrong: string
  ctaButton: string
}> = {
  tr: {
    headingLine1: "Wi-Fi sadece internet değil",
    headingLine2: "Misafirleri Müşteriye Dönüştüren Pazarlama Birimi",
    headingIntro:
      "Wi-Fi marketing'in amacı, bağlanıp giden misafiri tekrar tekrar geri gelen müşteriye çevirmek. WhatsApp ve SMS kampanyaları, sadakat uygulamaları ve kişiye özel mesajlarla misafirlerinizi doğru anda yeniden mekânınıza davet edin; memnun misafirleri Google yorumuna ve sosyal medyaya yönlendirerek itibarınızı organik olarak büyütün. Böylece ek reklam bütçesi harcamadan daha çok ziyaret, daha çok sipariş ve daha yüksek kazanç elde etmek mümkün.",
    h3sActive: "H3S Aktif",
    hookTitle: "Wi-Fi'ınız her gün kaç müşteri kaydediyor — siz görüyor musunuz?",
    hookBody:
      "Çoğu işletme Wi-Fi kullanan müşteri sayısını tam olarak bilmiyor. Hangi müşteriler geri döndü veya hangi müşteriler ilk defa geldi bu altın değerindeki veriyi bilen yok. Bu veriyi bilmeyen işletmeler, müşterilerinin yarısını kaybediyor olabilir.",
    lossLabel: "Doğrulanmış Kayıp Hesabı — 50 sandalyeli kafe",
    lossFootnoteBefore: "35 kayıp müşteri/gün × %50 geri dönüş × 220 ₺ sepet × 365 gün.",
    lossFootnoteStrong: "Sistemi olmayan her işletme bu tabloyla yaşıyor.",
    ownerName: "Burak Kaçmaz",
    ownerRole: "İşletme sahibi · Burro Cafe, Kadıköy",
    ownerQuote:
      "\"Omnitek H3S kullanmaya başladıktan sonra sadece ilk haftada 345 kayıt topladık. Hafta sonu doluluğunu ilk kez ölçtük ve kampanyalarimizi müşterilerimizle buluşturduk.\"",
    beforeLabel: "H3S öncesi",
    afterLabel: "H3S sonrası",
    heroBadge: "En kritik Kazanç: Kayıp müşteriyi geri getirin",
    heroTitle: "Kaybettiğiniz müşteriyi geri getirin",
    heroNote: "Burro Kafe'de ilk kampanya sonrası hafta sonu doluluk %38 arttı — 7 günde.",
    ctaTitle: "Sizin işletmenizde ne kadar potansiyel var?",
    ctaBodyBefore: "Ücretsiz görüşme —",
    ctaBodyStrong: "15 dakikada sistem analizini yapalım, taahhütsüz.",
    ctaButton: "Teklif Al",
  },
  en: {
    headingLine1: "Wi-Fi isn't just internet",
    headingLine2: "The Marketing Unit That Turns Guests into Customers",
    headingIntro:
      "The goal of Wi-Fi marketing is to turn guests who connect once and leave into customers who keep coming back. With WhatsApp and SMS campaigns, loyalty programs and personalized messages, invite guests back at exactly the right moment, and steer happy guests to Google reviews and social media to grow your reputation organically. The result: more visits, more orders and higher revenue — without extra ad spend.",
    h3sActive: "H3S Active",
    hookTitle: "How many customers does your Wi-Fi register every day — do you even see it?",
    hookBody:
      "Most businesses don't actually know how many customers use their Wi-Fi. Nobody tracks this golden data — which customers came back, and which came for the first time. Businesses that don't know this may be losing half their customers.",
    lossLabel: "Verified Loss Calculation — a 50-seat café",
    lossFootnoteBefore: "35 lost customers/day × 50% return rate × 220 ₺ average check × 365 days.",
    lossFootnoteStrong: "Every business without a system lives with this table.",
    ownerName: "Burak Kaçmaz",
    ownerRole: "Business owner · Burro Cafe, Kadıköy",
    ownerQuote:
      "\"After we started using Omnitek H3S, we collected 345 sign-ups in the very first week. We measured weekend occupancy for the first time and connected our campaigns directly with our customers.\"",
    beforeLabel: "Before H3S",
    afterLabel: "After H3S",
    heroBadge: "The Biggest Win: Bring lost customers back",
    heroTitle: "Bring back the customers you've lost",
    heroNote: "At Burro Café, weekend occupancy rose 38% after the first campaign — in 7 days.",
    ctaTitle: "How much potential is there in your business?",
    ctaBodyBefore: "Free consultation —",
    ctaBodyStrong: "let's do a 15-minute system analysis, no commitment.",
    ctaButton: "Get a Quote",
  },
}

export function BenefitsSection() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <section id="faydalar" className="flow-benefits scroll-mt-auto overflow-hidden">

      {/* Görünmeyen Wi-Fi İkonu yerine Garanti Saf SVG Wi-Fi Sinyali */}
      <div className="absolute top-[calc(34px+1rem)] left-4 z-50 bg-white/10 p-2 rounded-xl flex items-center gap-2 backdrop-blur-sm border border-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
          <path d="M12 18l.01 0" /><path d="M9.17 15.17a4 4 0 0 1 5.66 0" /><path d="M6.34 12.34a8 8 0 0 1 11.32 0" /><path d="M3.51 9.51a12 12 0 0 1 16.98 0" />
        </svg>
        <span className="text-white text-xs font-mono">{t.h3sActive}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">

        {/* ── Section heading ── */}
        <Reveal className="text-center mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            {t.headingLine1}
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#7FA4FF] to-[#2BD9A0] bg-clip-text text-transparent text-balance max-w-3xl mx-auto">
            {t.headingLine2}
          </p>
          <p className="text-white/85 text-[17px] lg:text-[18px] leading-relaxed max-w-3xl mx-auto mt-5">
            {t.headingIntro}
          </p>
        </Reveal>

        <Reveal delay={40} className="grid gap-3 md:grid-cols-3 mb-3">
          {flowSteps[locale].map((step, i) => (
            <div key={i} className="bg-white/8 border border-white/15 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#2BD9A0] text-[#0B2A22] text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-white font-medium text-[15px]">{step.title}</p>
              </div>
              <p className="text-white/80 text-[14px] leading-snug">{step.text}</p>
            </div>
          ))}
        </Reveal>

        {/* ── Hook ── */}
        <Reveal delay={80} className="bg-[#0B1221] border border-[#1E2D4A] rounded-2xl px-8 py-6 text-center shadow-lg cursor-default">
            <p className="text-gray-100 font-semibold text-[26px] mb-2.5 tracking-wide">
                {t.hookTitle}
            </p>
          <p className="text-white/85 text-medium text-[18px] leading-relaxed">
            {t.hookBody}
          </p>
        </Reveal>

        {/* ── Kayıp hesabı ── */}
        <Reveal delay={160} className="bg-[#FCEBEB] border border-[#F09595] rounded-2xl px-6 py-5 hover:border-cyan-500/50 transition-all duration-300">
          <p className="text-[11px] font-medium text-[#791F1F] uppercase tracking-wide mb-4">
            {t.lossLabel}
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {lossCards[locale].map((c, i) => (
              <div key={i} className="bg-white border border-[#F7C1C1] rounded-xl p-3.5">
                <p className="text-[11px] text-[#A32D2D] mb-1">{c.label}</p>
                <p className="text-[22px] font-medium text-[#A32D2D] leading-none">{c.value}</p>
                <p className="text-[11px] text-[#791F1F] mt-1">{c.unit}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#791F1F] border-t border-[#F7C1C1] pt-3">
            {t.lossFootnoteBefore}{" "}
            <strong className="text-[#501313]">{t.lossFootnoteStrong}</strong>
          </p>
        </Reveal>

        {/* ── Before / After ── */}
        <Reveal delay={240} className="bg-white/25 border border-white/15 rounded-2xl overflow-hidden">

          {/* Owner photo + quote */}
          <div className="flex items-center gap-4 px-6 pt-5 pb-4 border-b border-white/10">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden flex items-center justify-center">
                <img src="/images/burro_tabela-baski.jpg" alt="Burak Bey" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-[#1F3A5F] rounded-full" />
            </div>
            <div>
              <p className="text-white font-medium text-medium">{t.ownerName}</p>
              <p className="text-white/50 text-small">{t.ownerRole}</p>
              <p className="text-white/90 text-[18px] italic mt-1 leading-relaxed">
                {t.ownerQuote}
              </p>
            </div>
          </div>

          {/* Before / After columns */}
          <div className="grid grid-cols-2">
            <div className="px-5 py-4 border-r border-white/10">
              <span className="inline-flex items-center gap-1.5 bg-[#FCEBEB] text-[#A32D2D] text-[11px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
                <IconClockSVG />
                {t.beforeLabel}
              </span>
              <ul className="space-y-2">
                {beforeItems[locale].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-white/100 leading-snug">
                    {/* Saf SVG X ikonu */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-5 py-4">
              <span className="inline-flex items-center gap-1.5 bg-[#EAF3DE] text-[#3B6D11] text-[11px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
                {/* Saf SVG Check ikonu */}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                {t.afterLabel}
              </span>
              <ul className="space-y-2">
                {afterItems[locale].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-white/100 leading-snug">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#639922" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M5 12l5 5l10 -10" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 border-t border-white/10">
            {storyStats[locale].map((s, i) => (
              <div
                key={i}
                className={`py-3.5 text-center ${i < storyStats[locale].length - 1 ? "border-r border-white/10" : ""}`}
              >
                <p className="text-[#97C459] text-xl font-medium leading-none">{s.num}</p>
                <p className="text-white/90 text-[13px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Hero card ── */}
        <Reveal delay={320} className="relative bg-white/8 border-2 border-[#639922] rounded-2xl px-6 py-5">
          <span className="absolute -top-px right-4 bg-[#639922] text-[#EAF3DE] text-[24px] font-medium px-3 py-1 rounded-b-lg uppercase tracking-wide">
            {t.heroBadge}
          </span>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              {/* Saf SVG Döngü ikonu */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg>
            </div>
            <p className="text-white font-medium text-[15px]">{t.heroTitle}</p>
          </div>
          <ul className="space-y-2 mb-4">
            {heroCardPoints[locale].map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-[14px] text-white/100 leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="text-[14px] text-[#185FA5] bg-[#E6F1FB] border-l-2 border-[#185FA5] px-3 py-2 leading-relaxed">
            {t.heroNote}
          </div>
        </Reveal>

        {/* ── Secondary cards ── */}
        <div className="grid grid-cols-3 gap-3">
          {secondaryCards[locale].map((card, i) => {
            const IconComponent = card.icon;
            return (
              <Reveal key={i} delay={400 + i * 80}>
                <div className="bg-white/8 border border-white/15 rounded-2xl p-4 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                      <IconComponent />
                    </div>
                    <p className="text-white font-medium text-[14px]">{card.title}</p>
                  </div>
                  <ul className="space-y-1.5 mb-3">
                    {card.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-1.5 text-[14px] text-white/85 leading-snug">
                        <span className="w-1H h-1 rounded-full bg-white/25 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[14px] text-[#185FA5] bg-[#E6F1FB] border-l-2 border-[#185FA5] px-2.5 py-1.5 leading-relaxed">
                    {card.insight}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <Reveal delay={680} className="bg-[#EAF3DE] border border-[#97C459] rounded-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[#27500A] font-medium text-[15px] mb-1">
              {t.ctaTitle}
            </p>
            <p className="text-[#3B6D11] text-sm">
              {t.ctaBodyBefore}{" "}
              <span className="font-medium text-[#27500A]">{t.ctaBodyStrong}</span>
            </p>
          </div>
          <QuoteRequestDialog>
            <button className="inline-flex items-center gap-2 bg-[#3B6D11] text-[#EAF3DE] text-[13px] font-medium px-5 py-2.5 rounded-xl whitespace-nowrap hover:bg-[#27500A] transition-colors flex-shrink-0">
              {t.ctaButton}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 -6" /></svg>
            </button>
          </QuoteRequestDialog>
        </Reveal>

      </div>
    </section>
  )
}
