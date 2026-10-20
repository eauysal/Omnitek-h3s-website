"use client"

import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface SecondaryCard {
  icon: () => JSX.Element
  title: string
  points: string[]
  insight: string
}

// İkonları harici paket yerine saf SVG fonksiyonları olarak tanımlıyoruz (Sıfır yük!)
const IconSpeakerphoneSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a3 3 0 0 1 0 6" /><path d="M10 8v11a1 1 0 0 1 -1 1H8a1 1 0 0 1 -1 -1v-5H4a1 1 0 0 1 -1 -1V9a1 1 0 0 1 1 -1h3V3a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v5" /></svg>
)

const IconClockSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
)

const heroCardPoints: Record<Locale, string[]> = {
  tr: [
    "Kim kaç kez geldi, kim bir daha gelmedi görünür",
    "Kayıp müşteriye geri dönüş teklifi, sadık müşteriye özel kampanya",
  ],
  en: [
    "See who came how many times and who never came back",
    "A win-back offer for lost customers, special campaigns for loyal ones",
  ],
}

const secondaryCards: Record<Locale, SecondaryCard[]> = {
  tr: [
    {
      icon: IconSpeakerphoneSVG,
      title: "Anlık kampanya",
      points: [
        "Bağlantı ekranı reklam panonuza dönüşür",
        "Menü ve etkinlik dakikalar içinde değişir",
      ],
      insight: "Ekstra bütçe yok — müşteri zaten orada.",
    },
    {
      icon: IconClockSVG,
      title: "Gerçek veri",
      points: [
        "Bağlantı süreleri masada geçen süreyi gösterir",
        "Hangi saatler dolu, hangileri boş görünür",
      ],
      insight: "Kararlar sezgiye değil, veriye dayanır.",
    },
  ],
  en: [
    {
      icon: IconSpeakerphoneSVG,
      title: "Instant campaigns",
      points: [
        "The login screen becomes your ad space",
        "Menus and events change within minutes",
      ],
      insight: "No extra budget needed — the customer is already there.",
    },
    {
      icon: IconClockSVG,
      title: "Real data",
      points: [
        "Connection time shows time spent at the table",
        "See which hours are busy and which are quiet",
      ],
      insight: "Decisions rest on data, not intuition.",
    },
  ],
}

// Çerçeveyi dolduran "müşteri durumları": rakam içermez, yalnızca sistemin neyi ayırt ettiğini gösterir.
const segments: Record<Locale, { key: "loyal" | "new" | "lost"; label: string; sub: string }[]> = {
  tr: [
    { key: "loyal", label: "Sadık", sub: "Sık gelen" },
    { key: "new", label: "Yeni", sub: "İlk kez gelen" },
    { key: "lost", label: "Kayıp", sub: "Uzun süredir gelmeyen" },
  ],
  en: [
    { key: "loyal", label: "Loyal", sub: "Visits often" },
    { key: "new", label: "New", sub: "First-time guest" },
    { key: "lost", label: "Lost", sub: "Hasn't visited in a while" },
  ],
}

const segmentStyles = {
  loyal: { text: "text-[#2BD9A0]", box: "border-white/15 bg-white/8" },
  new: { text: "text-[#7FA4FF]", box: "border-white/15 bg-white/8" },
  lost: { text: "text-[#FFB020]", box: "border-[#FFB020]/50 bg-[#FFB020]/10" },
}

const flowSteps: Record<Locale, { title: string; text: string }[]> = {
  tr: [
    {
      title: "Misafir bağlanır",
      text: "Markanıza özel karşılama sayfasından Wi-Fi'a bağlanır, SMS veya WhatsApp ile saniyeler içinde doğrulanır.",
    },
    {
      title: "İzinli veri birikir",
      text: "Tekrar gelen misafir tanınır; ziyaret sıklığı ve tercihler profilde toplanır, KVKK ve 5651 uyumlu şekilde saklanır.",
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
      text: "Returning guests are recognized; visit frequency and preferences collect in each profile, stored in line with KVKK and Law No. 5651.",
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
  h3sActive: string
  heroBadge: string
  heroImageAlt: string
  messageLabel: string
  messageText: string
  heroTitle: string
  ctaTitle: string
  ctaBodyBefore: string
  ctaBodyStrong: string
  ctaButton: string
}> = {
  tr: {
    headingLine1: "Wi-Fi sadece internet değil",
    headingLine2: "Misafirleri Müşteriye Dönüştüren Pazarlama Birimi",
    h3sActive: "H3S Aktif",
    heroBadge: "En kritik kazanç",
    heroImageAlt: "Kafede telefonuna bakıp gülümseyen bir misafir",
    messageLabel: "Örnek geri dönüş mesajı",
    messageText: "Merhaba! Sizi bir süredir görmedik. Bu hafta uğrayın, ilk kahveniz bizden.",
    heroTitle: "Kaybettiğiniz müşteriyi geri getirin",
    ctaTitle: "Sizin şubelerinizde ne kadar potansiyel var?",
    ctaBodyBefore: "",
    ctaBodyStrong: "Pilot görüşmesi 15 dakika sürer, taahhüt gerektirmez.",
    ctaButton: "Pilot planlayın",
  },
  en: {
    headingLine1: "Wi-Fi isn't just internet",
    headingLine2: "The Marketing Unit That Turns Guests into Customers",
    h3sActive: "H3S Active",
    heroBadge: "The biggest win",
    heroImageAlt: "A guest smiling at their phone in a café",
    messageLabel: "Sample win-back message",
    messageText: "Hi! We haven't seen you for a while. Stop by this week, your first coffee is on us.",
    heroTitle: "Bring back the customers you've lost",
    ctaTitle: "How much potential is there across your branches?",
    ctaBodyBefore: "",
    ctaBodyStrong: "The pilot call takes 15 minutes and requires no commitment.",
    ctaButton: "Plan a pilot",
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

        {/* ── Hero card ── */}
        <Reveal delay={120} className="grid gap-3 md:grid-cols-[minmax(0,32fr)_minmax(0,68fr)] md:items-stretch">
          {/* Fotoğraf: Austin Distel, Unsplash (https://unsplash.com/photos/TluMvvrZ57g), Unsplash License.
              Süs amaçlı stok görsel; gerçek müşteri izlenimi verecek ad/alıntı/altyazı eklenmemeli.
              TODO: GÖRSEL — Arda onayı (stok fotoğraf; gerçek ve izinli müşteri fotoğrafıyla değiştirilebilir) */}
          <div className="relative aspect-[5/4] w-full max-w-[420px] mx-auto md:max-w-none md:mx-0 md:aspect-square rounded-2xl overflow-hidden border border-white/15">
            <Image
              src="/images/happy-customer-cafe-vivid.webp"
              alt={t.heroImageAlt}
              fill
              sizes="(min-width: 768px) 32vw, 100vw"
              className="object-cover object-[50%_10%] md:object-center"
            />
          </div>

          <div className="bg-white/8 border-2 border-[#639922] rounded-2xl px-6 py-5 md:px-8 md:py-6 flex flex-col justify-between gap-5">
            <div>
            <span className="inline-block bg-[#639922] text-[#EAF3DE] text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
              {t.heroBadge}
            </span>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                {/* Saf SVG Döngü ikonu */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg>
              </div>
              <p className="text-white font-semibold text-lg md:text-xl">{t.heroTitle}</p>
            </div>
            <ul className="space-y-2">
              {heroCardPoints[locale].map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-[14px] text-white/100 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            </div>

            <div className="space-y-5">
            {/* Müşteri durumları */}
            <div className="grid grid-cols-3 gap-2.5" aria-hidden="true">
              {segments[locale].map((seg) => (
                <div key={seg.key} className={`rounded-xl border px-2.5 py-3 text-center ${segmentStyles[seg.key].box}`}>
                  <div className={`mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ${segmentStyles[seg.key].text}`}>
                    {seg.key === "loyal" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" /></svg>
                    )}
                    {seg.key === "new" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    )}
                    {seg.key === "lost" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    )}
                  </div>
                  <p className={`text-[13px] font-semibold ${segmentStyles[seg.key].text}`}>{seg.label}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-white/70">{seg.sub}</p>
                </div>
              ))}
            </div>

            {/* Örnek geri dönüş mesajı */}
            <div>
              <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-white/60">{t.messageLabel}</p>
              <div className="max-w-md rounded-2xl rounded-tl-sm bg-[#E7F8EE] px-4 py-2.5 text-[13px] leading-snug text-[#0B2A22]">
                {t.messageText}
              </div>
            </div>
            </div>
          </div>
        </Reveal>

        {/* ── Secondary cards ── */}
        <div className="grid sm:grid-cols-2 gap-3">
          {secondaryCards[locale].map((card, i) => {
            const IconComponent = card.icon;
            return (
              <Reveal key={i} delay={200 + i * 80}>
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
                        <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
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
        <Reveal delay={320} className="bg-[#EAF3DE] border border-[#97C459] rounded-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[#27500A] font-medium text-[15px] mb-1">
              {t.ctaTitle}
            </p>
            <p className="text-[#3B6D11] text-sm">
              <span className="font-medium text-[#27500A]">{t.ctaBodyStrong}</span>
            </p>
          </div>
          <a
            href="#pilot"
            className="inline-flex items-center gap-2 bg-[#3B6D11] text-[#EAF3DE] text-[13px] font-medium px-5 py-2.5 rounded-xl whitespace-nowrap hover:bg-[#27500A] transition-colors flex-shrink-0"
          >
              {t.ctaButton}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 -6" /></svg>
          </a>
        </Reveal>

      </div>
    </section>
  )
}
