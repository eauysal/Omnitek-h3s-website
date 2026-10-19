import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Hatayı çözen nokta-eğik çizgili import:
import WhatsAppButton from './WhatsAppButton'
import CookieBanner from '@/components/cookie-banner'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import { StickyCta } from '@/components/sticky-cta'
import { siteConfig } from '@/lib/seo'
import { LanguageProvider } from '@/lib/i18n/language-context'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-heading-var',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans-var',
  display: 'swap'
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
    <html lang="tr" className={`${plusJakarta.variable} ${inter.variable}`}>
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
