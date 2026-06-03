import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-heading-var',
  display: 'swap'
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans-var',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Omnitek H3S | Hotspot Security Systems',
  description: 'İstanbul\'daki kafe, restoran ve oteller için profesyonel hotspot ve güvenlik duvarı çözümleri. Ücretsiz keşif ile ağ güvenliğinizi analiz edin.',
  keywords: 'hotspot, güvenlik duvarı, firewall, 5651, kafe internet, otel wifi, ağ güvenliği, İstanbul',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
