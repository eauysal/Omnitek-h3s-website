"use client"

import { QuoteRequestDialog } from "@/components/quote-request-dialog"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

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

const heroCardPoints: Record<Locale, string[]> = {
  tr: [
    "Tekrar gelen cihaz tanınır — kim kaç kez geldi görülür",
    "Kim bir daha gelmedi, kayıp müşteri listesi elinizde",
    "Sadık müşteriye özel kampanya, kayıp müşteriye geri dönüş teklifi",
    "Reklam bütçesi gerektirmeden",
  ],
  en: [
    "Returning devices are recognized — see who came how many times",
    "Get a ready-made list of lost customers who never came back",
    "Run loyalty campaigns for regulars and win-back offers for lost customers",
    "Without needing an ad budget",
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
      insight: "Bağlanan her misafir, ulaşılabilir bir kayıt.",
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
      insight: "Every guest who connects becomes a reachable record.",
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
  heroBadge: string
  heroTitle: string
  ctaTitle: string
  ctaBodyBefore: string
  ctaBodyStrong: string
  ctaButton: string
}> = {
  tr: {
    headingLine1: "Wi-Fi sadece internet değil",
    headingLine2: "Misafirleri Müşteriye Dönüştüren Pazarlama Birimi",
    headingIntro:
      "Wi-Fi pazarlamanın amacı, bağlanıp giden misafiri tekrar tekrar geri gelen müşteriye çevirmek. WhatsApp ve SMS kampanyaları, sadakat uygulamaları ve kişiye özel mesajlarla misafirlerinizi doğru anda yeniden mekânınıza davet edin; memnun misafirleri Google yorumuna ve sosyal medyaya yönlendirerek itibarınızı organik olarak büyütün. Böylece ek reklam bütçesi harcamadan daha çok ziyaret, daha çok sipariş ve daha yüksek kazanç elde etmek mümkün.",
    h3sActive: "H3S Aktif",
    hookTitle: "Wi-Fi'ınız her gün kaç müşteri kaydediyor — siz görüyor musunuz?",
    hookBody:
      "Çoğu işletme Wi-Fi kullanan müşteri sayısını tam olarak bilmiyor. Hangi müşteriler geri döndü veya hangi müşteriler ilk defa geldi bu altın değerindeki veriyi bilen yok. Bu veriyi bilmeyen işletmeler, müşterilerinin yarısını kaybediyor olabilir.",
    heroBadge: "En kritik Kazanç: Kayıp müşteriyi geri getirin",
    heroTitle: "Kaybettiğiniz müşteriyi geri getirin",
    ctaTitle: "Sizin şubelerinizde ne kadar potansiyel var?",
    ctaBodyBefore: "Ücretsiz görüşme —",
    ctaBodyStrong: "15 dakikada sistem analizini yapalım, taahhütsüz.",
    ctaButton: "Pilot Planlayın",
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
    heroBadge: "The Biggest Win: Bring lost customers back",
    heroTitle: "Bring back the customers you've lost",
    ctaTitle: "How much potential is there across your branches?",
    ctaBodyBefore: "Free consultation —",
    ctaBodyStrong: "let's do a 15-minute system analysis, no commitment.",
    ctaButton: "Plan a Pilot",
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
