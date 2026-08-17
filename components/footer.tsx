"use client"

import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { href: "#teshis", label: "Sorunlar" },
  { href: "#faydalar", label: "Kazançlar" },
  { href: "#sektorler", label: "Sektörler" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
]

const legalLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="Omnitek H3S Logo"
              width={300}
                  height={140}
                  quality={100} 
                  priority
                  className="h-8 lg:h-12 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Omnitek Telekom ve Teknoloji Sistem Entegratörü
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Barbaros Mahallesi Begonya Sokak No. 1/2, Nida Kule Batı, Ataşehir, İstanbul
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
              <a
                href="tel:+905369202214"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +90 536 920 22 14
              </a>
              <a
                href="mailto:eauysal@omnitek.com.tr"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                eauysal@omnitek.com.tr
              </a>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Omnitek Telekom. Tüm hakları saklıdır.
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
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
