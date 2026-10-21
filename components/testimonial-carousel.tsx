"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

// Ana sayfadan kaldırıldı; /isletmeler sayfasında kullanılacak.
// Hugg Coffee metni müşteri onaylı. TODO: TEYİT — das Böcek için yazılı kullanım izni
const testimonials: Record<
  Locale,
  { name: string; role: string; city: string; logo: string; quote: string; published: boolean }[]
> = {
  tr: [
    // Hugg yorumu müşteri onaylı metinle yayında (yazım düzeltmesi: "yasa dışı", noktalı virgül; anlam değişmedi).
    {
      name: "Emre Kepir",
      role: "Hugg Coffee Co.",
      city: "Suadiye",
      logo: "/images/testimonials/hugg-logo.webp",
      quote:
        "Kafemizdeki müşterilerin internet hareketlerini artık kaydediyoruz. Özellikle yasa dışı bahis ve kumar sitelerine erişimi engellemek istiyorduk; fazlasını elde ettik ve kurumsal bir statü kazandık.",
      published: true,
    },
    // TODO: TEYİT — Mete Bey onayı gelince mevcut metinle değiştirilecek (onay gelene kadar aşağıdaki yayındaki metin kalır):
    // "Böcek Kafe olarak önceliğimiz, müşterilerimizin internet deneyimini iyileştirmekti. Hız paylaşımı yapamıyorduk, güvenlik tarafında da eksiklerimiz vardı. Artık kurumsal bir karşılama ekranı ve adil hız paylaşımı sayesinde müşterilerimiz internetten çok daha iyi yararlanıyor. H3S'i kesinlikle öneriyorum."
    {
      name: "Mete Balta",
      role: "das Böcek Social",
      city: "Moda",
      logo: "/images/testimonials/bocek-logo.webp",
      quote:
        "Böcek Kafe olarak önceliğimiz müşterilerin internet deneyimini iyileştirmekti, hız paylaşımı yapamıyorduk, ayrıca güvenlik olarak eksiklerimiz vardı. Şimdi kurumsal karşılama ekranı ve adil hız paylaşımı yaparak müşterilerimizin internet hizmetinden daha iyi yararlanmalarını sağladıkları için H3S'i kesinlikle öneriyorum.",
      published: true,
    },
  ],
  en: [
    {
      name: "Emre Kepir",
      role: "Hugg Coffee Co.",
      city: "Suadiye",
      logo: "/images/testimonials/hugg-logo.webp",
      quote:
        "We now log our customers' internet activity. We mainly wanted to block access to illegal betting and gambling sites; we got that and more, plus a genuinely corporate-grade setup.",
      published: true,
    },
    {
      name: "Mete Balta",
      role: "das Böcek Social",
      city: "Moda",
      logo: "/images/testimonials/bocek-logo.webp",
      quote:
        "Our priority was improving our customers' internet experience — we couldn't share bandwidth fairly and had security gaps. With a branded landing page and fair bandwidth sharing now in place, I fully recommend H3S to anyone who wants their guests to get more out of the connection.",
      published: true,
    },
  ],
}

type Testimonial = { name: string; role: string; city: string; logo: string; quote: string; published: boolean }

function TestimonialCard({ item, className }: { item: Testimonial; className: string }) {
  return (
    <div className={`rounded-lg p-4 min-h-[120px] transition-all duration-500 ${className}`}>
      <p className="text-sm text-foreground mb-3">&ldquo;{item.quote}&rdquo;</p>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-lg bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
          <Image src={item.logo} alt={item.role} width={36} height={36} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {item.role}, {item.city}
          </p>
        </div>
      </div>
    </div>
  )
}

// stacked: tüm yayındaki yorumlar alt alta (dönmeden) gösterilir; aksi halde 6 sn'de bir dönen tek kart.
export function TestimonialCarousel({
  className = "bg-secondary/50",
  stacked = false,
}: {
  className?: string
  stacked?: boolean
}) {
  const { locale } = useLanguage()
  const list = testimonials[locale].filter((item) => item.published)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (stacked || list.length < 2) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [list.length, stacked])

  if (stacked) {
    return (
      <div className="space-y-4">
        {list.map((entry) => (
          <TestimonialCard key={entry.name} item={entry} className={className} />
        ))}
      </div>
    )
  }

  const item = list[current]
  if (!item) return null

  return <TestimonialCard item={item} className={className} />
}
