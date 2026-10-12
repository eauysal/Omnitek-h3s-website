"use client"

import Image from "next/image"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface Partner {
  name: string
  logo: string
  width: number
  height: number
  href: string
}

// Yeni ortak eklemek için: logoyu public/images/partners/ altına koy ve buraya bir satır ekle.
const partners: Partner[] = [
  { name: "Vodafone", logo: "/images/partners/vodafone.webp", width: 439, height: 160, href: "https://www.vodafone.com.tr" },
  { name: "Euronet", logo: "/images/partners/euronet.webp", width: 445, height: 160, href: "https://www.euronet.com.tr" },
  { name: "Diverjans", logo: "/images/partners/diverjans.webp", width: 434, height: 160, href: "https://www.diverjans.com.tr" },
  { name: "Useroam", logo: "/images/partners/useroam.webp", width: 445, height: 160, href: "https://useroam.com" },
  { name: "NASA Bilişim", logo: "/images/partners/nasa-bilisim.webp", width: 301, height: 160, href: "https://www.nasabil.com" },
  { name: "BG Tek", logo: "/images/partners/bg-tek.webp", width: 392, height: 160, href: "https://www.bg-tek.net" },
]

const label: Record<Locale, string> = {
  tr: "İş Ortaklarımız",
  en: "Our Partners",
}

// Geniş ekranlarda da boşluk kalmaması için yarım şerit 3 kez tekrarlanır;
// animasyon tam yarısı (-50%) kadar kayar, böylece döngü dikişsiz olur.
const half = [...partners, ...partners, ...partners]
const track = [...half, ...half]

export function PartnersMarquee() {
  const { locale } = useLanguage()

  return (
    <div className="mt-10 lg:mt-12">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
        {label[locale]}
      </p>
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
        <ul className="animate-marquee flex w-max items-center py-1">
          {track.map((partner, index) => {
            const isOriginal = index < partners.length
            return (
              <li
                key={`${partner.name}-${index}`}
                aria-hidden={isOriginal ? undefined : true}
                className="mr-6 shrink-0"
              >
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isOriginal ? undefined : -1}
                  aria-label={isOriginal ? partner.name : undefined}
                  className="block rounded-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <Image
                    src={partner.logo}
                    alt={isOriginal ? partner.name : ""}
                    width={partner.width}
                    height={partner.height}
                    loading="eager"
                    className="h-20 w-auto rounded-lg bg-white"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
