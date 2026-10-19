"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

// Ana sayfadan kaldırıldı; /isletmeler sayfasında kullanılacak.
// TODO: TEYİT — Hugg Coffee ve das Böcek için yazılı kullanım izni
const testimonials: Record<
  Locale,
  { name: string; role: string; city: string; logo: string; quote: string }[]
> = {
  tr: [
    {
      name: "Emre Kepir",
      role: "Hugg Coffee Co.",
      city: "Suadiye",
      logo: "/images/testimonials/hugg-logo.webp",
      quote:
        "Kafemizdeki müşterilerin internet hareketlerini artık kaydediyoruz. Özellikle yasadışı bahis ve kumar sitelerine erişimi engellemek istiyorduk, fazlasını elde ettik ve kurumsal bir statü kazandık.",
    },
    {
      name: "Mete Balta",
      role: "das Böcek Social",
      city: "Moda",
      logo: "/images/testimonials/bocek-logo.webp",
      quote:
        "Böcek Kafe olarak önceliğimiz müşterilerin internet deneyimini iyileştirmekti, hız paylaşımı yapamıyorduk, ayrıca güvenlik olarak eksiklerimiz vardı. Şimdi kurumsal karşı ekranı ve adil hız paylaşımı yaparak müşterilerimizin internet hizmetinden daha iyi yararlanmalarını sağladıkları için H3S'i kesinlikle öneriyorum.",
    },
  ],
  en: [
    {
      name: "Emre Kepir",
      role: "Hugg Coffee Co.",
      city: "Suadiye",
      logo: "/images/testimonials/hugg-logo.webp",
      quote:
        "We now log our customers' internet activity. We mainly wanted to block access to illegal betting and gambling sites — we got that and more, plus a genuinely corporate-grade setup.",
    },
    {
      name: "Mete Balta",
      role: "das Böcek Social",
      city: "Moda",
      logo: "/images/testimonials/bocek-logo.webp",
      quote:
        "Our priority was improving our customers' internet experience — we couldn't share bandwidth fairly and had security gaps. With a branded landing page and fair bandwidth sharing now in place, I fully recommend H3S to anyone who wants their guests to get more out of the connection.",
    },
  ],
}

export function TestimonialCarousel({ className = "bg-secondary/50" }: { className?: string }) {
  const { locale } = useLanguage()
  const list = testimonials[locale]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [list.length])

  const item = list[current]

  return (
    <div className={`rounded-lg p-4 min-h-[120px] transition-all duration-500 ${className}`}>
      <p className="text-sm text-foreground mb-3">&ldquo;{item?.quote}&rdquo;</p>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-lg bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
          <Image src={item?.logo} alt={item?.role} width={36} height={36} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{item?.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {item?.role}, {item?.city}
          </p>
        </div>
      </div>
    </div>
  )
}
