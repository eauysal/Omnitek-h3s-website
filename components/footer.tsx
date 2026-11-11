"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const footerLinks: Record<Locale, { href: string; label: string }[]> = {
  tr: [
    { href: "/#pazarlama", label: "Pazarlama" },
    { href: "/#zincirler", label: "Zincirler" },
    { href: "/#guvenlik", label: "Güvenlik" },
    { href: "/#operasyon", label: "Operasyon" },
    { href: "/#pilot", label: "Pilot" },
    { href: "/#sektorler", label: "Sektörler" },
    { href: "/isletmeler", label: "Tek şubeli işletmeler" },
    { href: "/#sss", label: "SSS" },
    { href: "/#iletisim", label: "İletişim" },
  ],
  en: [
    { href: "/#pazarlama", label: "Marketing" },
    { href: "/#zincirler", label: "Chains" },
    { href: "/#guvenlik", label: "Security" },
    { href: "/#operasyon", label: "Operations" },
    { href: "/#pilot", label: "Pilot" },
    { href: "/#sektorler", label: "Sectors" },
    { href: "/isletmeler", label: "Single-branch businesses" },
    { href: "/#sss", label: "FAQ" },
    { href: "/#iletisim", label: "Contact" },
  ],
}

const legalLinks: Record<Locale, { href: string; label: string }[]> = {
  tr: [
    { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
    { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  ],
  en: [
    { href: "/gizlilik-politikasi", label: "Privacy Policy" },
    { href: "/kvkk", label: "KVKK Disclosure Notice" },
  ],
}

const content: Record<Locale, { tagline: string; copyright: string }> = {
  tr: {
    tagline: "Omnitek Telekom ve Teknoloji Sistem Entegratörü",
    copyright: `© ${new Date().getFullYear()} Omnitek Telekom. Tüm hakları saklıdır.`,
  },
  en: {
    tagline: "Omnitek Telekom & Technology Systems Integrator",
    copyright: `© ${new Date().getFullYear()} Omnitek Telekom. All rights reserved.`,
  },
}

export function Footer() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <footer className="relative -mt-px bg-[#12203F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/images/logo-footer.webp"
              alt="Omnitek H3S Logo"
              width={600}
                  height={310}
                  className="h-11 lg:h-16 w-auto object-contain rounded-lg bg-white p-1.5"
            />
            <p className="text-sm text-[#C7D4F5]">
              {t.tagline}
            </p>
            <p className="text-sm text-[#C7D4F5] text-center md:text-left">
              Barbaros Mahallesi Begonya Sokak No. 1/2, Nida Kule Batı, Ataşehir, İstanbul
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
              <a
                href="mailto:info@omnitek.com.tr"
                className="text-sm text-[#C7D4F5] hover:text-white transition-colors"
              >
                info@omnitek.com.tr
              </a>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks[locale].map((link) => (
              <Link prefetch={false}
                key={link.href}
                href={link.href}
                className="text-sm text-[#C7D4F5] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-[#C7D4F5]">
            {t.copyright}
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            {legalLinks[locale].map((link) => (
              <Link prefetch={false}
                key={link.href}
                href={link.href}
                className="text-xs text-[#C7D4F5] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
