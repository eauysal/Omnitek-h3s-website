"use client"

const lossCards = [
  { label: "Günlük misafir", value: "~100 Kişi", unit: "kişi bağlanıyor" },
  { label: "Tanınmayan misafir", value: "%35", unit: "bir daha gelmiyor" },
  { label: "Yıllık kayıp potansiyel", value: "1.4M ₺", unit: "geri kazanılabilir ciro" },
]

const beforeItems = [
  "Kafe doluydu, hafta sonu yoğunluk neden düşüyor bilinmiyordu",
  "Wi-fi vardı, kim bağlandı yoktu",
  "Kaç müşteri geri döndü, hiç ölçülmedi",
]

const afterItems = [
  "İlk 7 günde 345 müşteri kaydı toplandı",
  "İlk SMS kampanyası sadece 1 dakikada gönderildi",
  "Hafta sonu doluluk %38 arttı — bu oranı ilk kez ölçtük",
]

const storyStats = [
  { num: "345", label: "İlk haftada kayıt" },
  { num: "%38", label: "Doluluk artışı" },
  { num: "7 gün", label: "İlk sonuç" },
]

const heroCardPoints = [
  "Tekrar gelen cihaz tanınır — kim kaç kez geldi görülür",
  "Kim bir daha gelmedi, kayıp müşteri listesi elinizde",
  "Sadık müşteriye özel kampanya, kayıp müşteriye geri dönüş teklifi",
  "Sosyal medya reklamlarından 5× daha ucuz",
]

const secondaryCards = [
  {
    icon: "ti-user",
    title: "Müşterinizi tanıyın",
    points: [
      "Bağlanırken ad ve iletişim bırakır",
      "Doğrudan SMS / Kişi listesi oluşur",
      "Sıfır reklam bütçesiyle ulaşım",
    ],
    insight: "345 kayıt — hiç reklam verilmedi.",
  },
  {
    icon: "ti-speakerphone",
    title: "Anlık kampanya",
    points: [
      "Bağlantı ekranı = reklam panonuz",
      "Menü, etkinlik — dakikada değişir",
      "Müşteri bağlanırken görür, sipariş verirken hatırlar",
    ],
    insight: "Ekstra bütçe yok — müşteri zaten orada.",
  },
  {
    icon: "ti-clock",
    title: "Gerçek veri",
    points: [
      "Bağlantı süresi = masada geçen süre",
      "Hangi saatler dolu, boş — görünür",
      "Tahmin değil, veriyle karar",
    ],
    insight: "Veriye göre karar verin, sezgilere göre değil.",
  },
]

export function BenefitsSection() {
  return (
    <section id="faydalar" className="bg-[#1A365D] scroll-mt-auto py-16 lg:py-24 relative overflow-hidden">
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">

        {/* ── Section heading ── */}
        <div className="text-center mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Wi-Fi sadece internet değil 
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-4xl sm:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Bir Pazarlama Aracı
          </p>
        </div>

        {/* ── Hook ── */}
        <div className="bg-[#0B1221] border border-[#1E2D4A] rounded-2xl px-8 py-6 text-center shadow-lg transition-all duration-500 transform hover:scale-[1.05] hover:border-cyan-500/50 hover:shadow-[0_15px_40px_rgba(0,180,216,0.1)] cursor-default">
            <p className="text-gray-100 font-semibold text-[26px] mb-2.5 tracking-wide"> 
                Wi-Fi'ınız her gün kaç müşteri kaydediyor — siz görüyor musunuz?
            </p>
          <p className="text-white/85 text-medium text-[18px] leading-relaxed">
            Çoğu işletme wi-fi kullanan müşteri sayısını tam olarak bilmiyor. Hangi müşteriler geri döndü veya hangi müşteriler ilk defa geldi bu altın değerindeki veriyi bilen yok. Bu veriyi bilmeyen işletmeler, müşterilerinin yarısını kaybediyor olabilir.
          </p>
        </div>

        {/* ── Kayıp hesabı ── */}
        <div className="bg-[#FCEBEB] border border-[#F09595] rounded-2xl px-6 py-5 hover:border-cyan-500/50 hover:shadow-[0_15px_40px_rgba(0,180,216,0.1)] transition-all duration-300">
          <p className="text-[11px] font-medium text-[#791F1F] uppercase tracking-wide mb-4">
            Doğrulanmış Kayıp Hesabı — 50 sandalyeli kafe
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {lossCards.map((c, i) => (
              <div key={i} className="bg-white border border-[#F7C1C1] rounded-xl p-3.5">
                <p className="text-[11px] text-[#A32D2D] mb-1">{c.label}</p>
                <p className="text-[22px] font-medium text-[#A32D2D] leading-none">{c.value}</p>
                <p className="text-[11px] text-[#791F1F] mt-1">{c.unit}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#791F1F] border-t border-[#F7C1C1] pt-3">
            35 kayıp müşteri/gün × %50 geri dönüş × 220 ₺ sepet × 365 gün.{" "}
            <strong className="text-[#501313]">Sistemi olmayan her işletme bu tabloyla yaşıyor.</strong>
          </p>
        </div>

        {/* ── Before / After ── */}
        <div className="bg-white/25 border border-white/15 rounded-2xl overflow-hidden">

          {/* Owner photo + quote */}
          <div className="flex items-center gap-4 px-6 pt-5 pb-4 border-b border-white/10">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 overflow-hidden flex items-center justify-center">
                <img src="/images/burro_tabela-baski.jpg" alt="Burak Bey" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-[#1F3A5F] rounded-full" />
            </div>
            <div>
              <p className="text-white font-medium text-medium">Burak Kaçmaz</p>
              <p className="text-white/50 text-small">İşletme sahibi · Burro Cafe, Kadıköy</p>
              <p className="text-white/90 text-[18px] italic mt-1 leading-relaxed">
                "Omnitek H3S kullanmaya başladıktan sonra sadece ilk haftada 345 kayıt topladık. Hafta sonu doluluğunu ilk kez ölçtük ve kampanyalarımızı müşterilerimizle buluşturduk."
              </p>
            </div>
          </div>

          {/* Before / After columns */}
          <div className="grid grid-cols-2">
            <div className="px-5 py-4 border-r border-white/10">
              <span className="inline-flex items-center gap-1.5 bg-[#FCEBEB] text-[#A32D2D] text-[11px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
                <i className="ti ti-clock" aria-hidden="true" style={{ fontSize: 11 }} />
                H3S öncesi
              </span>
              <ul className="space-y-2">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-white/100 leading-snug">
                    <i className="ti ti-x text-[#E24B4A] mt-0.5 flex-shrink-0" style={{ fontSize: 13 }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-5 py-4">
              <span className="inline-flex items-center gap-1.5 bg-[#EAF3DE] text-[#3B6D11] text-[11px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide mb-3">
                <i className="ti ti-check" aria-hidden="true" style={{ fontSize: 11 }} />
                H3S sonrası
              </span>
              <ul className="space-y-2">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-white/100 leading-snug">
                    <i className="ti ti-check text-[#639922] mt-0.5 flex-shrink-0" style={{ fontSize: 13 }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 border-t border-white/10">
            {storyStats.map((s, i) => (
              <div
                key={i}
                className={`py-3.5 text-center ${i < storyStats.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <p className="text-[#97C459] text-xl font-medium leading-none">{s.num}</p>
                <p className="text-white/90 text-[13px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hero card — en kritik fayda ── */}
        <div className="relative bg-white/8 border-2 border-[#639922] rounded-2xl px-6 py-5">
          <span className="absolute -top-px right-4 bg-[#639922] text-[#EAF3DE] text-[24px] font-medium px-3 py-1 rounded-b-lg uppercase tracking-wide">
            En kritik Kazanç: Kayıp müşteriyi geri getirin
          </span>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <i className="ti ti-repeat text-white/70 text-lg" aria-hidden="true" />
            </div>
            <p className="text-white font-medium text-[15px]">Kaybettiğiniz müşteriyi geri getirin</p>
          </div>
          <ul className="space-y-2 mb-4">
            {heroCardPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-[14px] text-white/100 leading-snug">
                <i className="ti ti-point-filled text-white/30 mt-0.5 flex-shrink-0" style={{ fontSize: 11 }} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div
            className="text-[14px] text-[#185FA5] bg-[#E6F1FB] border-l-2 border-[#185FA5] px-3 py-2 leading-relaxed"
            style={{ borderRadius: 0 }}
          >
            Burro Kafe'de ilk kampanya sonrası hafta sonu doluluk %38 arttı — 7 günde.
          </div>
        </div>

        {/* ── Secondary cards ── */}
        <div className="grid grid-cols-3 gap-3">
          {secondaryCards.map((card, i) => (
            <div key={i} className="bg-white/8 border border-white/15 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className={`ti ${card.icon} text-white/80`} style={{ fontSize: 15 }} aria-hidden="true" />
                </div>
                <p className="text-white font-medium text-[14px]">{card.title}</p>
              </div>
              <ul className="space-y-1.5 mb-3">
                {card.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-[14px] text-white/85 leading-snug">
                    <i className="ti ti-point-filled text-white/25 mt-0.5 flex-shrink-0" style={{ fontSize: 10 }} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div
                className="text-[14px] text-[#185FA5] bg-[#E6F1FB] border-l-2 border-[#185FA5] px-2.5 py-1.5 leading-relaxed"
                style={{ borderRadius: 0 }}
              >
                {card.insight}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="bg-[#EAF3DE] border border-[#97C459] rounded-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[#27500A] font-medium text-[15px] mb-1">
              Sizin işletmenizde ne kadar potansiyel var?
            </p>
            <p className="text-[#3B6D11] text-sm">
              Ücretsiz görüşme —{" "}
              <span className="font-medium text-[#27500A]">15 dakikada sistem analizini yapalım, taahhütsüz.</span>
            </p>
          </div>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 bg-[#3B6D11] text-[#EAF3DE] text-[13px] font-medium px-5 py-2.5 rounded-xl whitespace-nowrap hover:bg-[#27500A] transition-colors flex-shrink-0"
          >
            Ücretsiz keşif talep et
            <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}