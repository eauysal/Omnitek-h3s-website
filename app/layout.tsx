import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Hatayı çözen nokta-eğik çizgili import:
import WhatsAppButton from './WhatsAppButton'
import CookieBanner from '@/components/cookie-banner'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import { StickyCta } from '@/components/sticky-cta'

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

const siteTitle = 'Omnitek H3S | Kurumsal Hotspot ve 5651 Uyumlu Güvenlik'
const siteDescription =
  'İşletmenizin Wi-Fi hizmetini Omnitek H3S ile güçlendirin. KVKK uyumlu loglama, güvenli internet ve ücretsiz saha keşfi için hemen tıklayın.'

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
    url: 'https://omnitekh3s.com',
    siteName: 'Omnitek H3S',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/h3s-diagram.webp',
        width: 1131,
        height: 926,
        alt: 'Omnitek H3S - Kurumsal Hotspot ve 5651 Uyumlu Güvenlik',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/h3s-diagram.webp'],
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
        <LocalBusinessJsonLd />
        {children}

        <WhatsAppButton />
        <StickyCta />
        <CookieBanner />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
