import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Hatayı çözen nokta-eğik çizgili import:
import WhatsAppButton from './WhatsAppButton'
import CookieBanner from '@/components/cookie-banner'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import { StickyCta } from '@/components/sticky-cta'
import { siteConfig } from '@/lib/seo'
import { LanguageProvider } from '@/lib/i18n/language-context'

// Fontlar kendi sunucumuzdan: Google'ın latin dosyaları aynen, Türkçe'ye özgü harfler (Ğ ğ İ Ş ş ₺) için
// yalnızca bu 6 karakteri içeren küçük bir kopya (ayrıntı: app/fonts/README.md). Eski 'latin-ext' dosyaları
// 85KB + 22KB idi ve ilk yüklemede PageSpeed'in FCP/LCP hesabını yavaşlatıyordu.
// Değişken eksen 400–800'e kırpıldı (sitede bunun dışında kalınlık kullanılmıyor). Yığın sırası globals.css'te: önce Türkçe harf dosyası, sonra latin dosya.
const plusJakarta = localFont({
  src: './fonts/plus-jakarta-sans-latin.woff2',
  weight: '400 800',
  variable: '--font-heading-var',
  display: 'swap',
  adjustFontFallback: 'Arial'
})

const plusJakartaTr = localFont({
  src: './fonts/plus-jakarta-sans-tr.woff2',
  weight: '400 800',
  variable: '--font-heading-tr-var',
  display: 'swap',
  adjustFontFallback: false
})

const inter = localFont({
  src: './fonts/inter-latin.woff2',
  weight: '400 800',
  variable: '--font-sans-var',
  display: 'swap',
  adjustFontFallback: 'Arial'
})

const interTr = localFont({
  src: './fonts/inter-tr.woff2',
  weight: '400 800',
  variable: '--font-sans-tr-var',
  display: 'swap',
  adjustFontFallback: false
})

const siteTitle = 'Omnitek H3S | Zincirler için Wi-Fi Pazarlama ve Yönetilen Misafir Ağı'
const siteDescription =
  "Şubelerinizdeki misafir Wi-Fi'ı izinli müşteri verisine ve ölçülebilir kampanyalara dönüştürün. Kurumsal güvenlik, 5651 ve KVKK uyumu dahil."

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('https://omnitekh3s.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: siteConfig.ogType,
    images: [siteConfig.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteConfig.defaultImage.url],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${plusJakarta.variable} ${plusJakartaTr.variable} ${inter.variable} ${interTr.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground relative">
        <LanguageProvider>
          <LocalBusinessJsonLd />
          {children}

          <WhatsAppButton />
          <StickyCta />
          <CookieBanner />
        </LanguageProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
