import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Hatayı çözen nokta-eğik çizgili import:
import WhatsAppButton from './WhatsAppButton' 

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

export const metadata: Metadata = {
  title: 'Omnitek H3S - Hotspot Security Systems',
  description: 'İşletmeniz için kurumsal ve KVKK uyumlu hotspot çözümleri.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground relative">
        {children}
        
        <WhatsAppButton />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}