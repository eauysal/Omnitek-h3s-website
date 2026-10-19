"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const navLinks: Record<Locale, { href: string; label: string }[]> = {
  tr: [
    { href: "/#pazarlama", label: "Pazarlama" },
    { href: "/#zincirler", label: "Zincirler" },
    { href: "/#guvenlik", label: "Güvenlik" },
    { href: "/#pilot", label: "Pilot" },
    { href: "/#iletisim", label: "İletişim" },
  ],
  en: [
    { href: "/#pazarlama", label: "Marketing" },
    { href: "/#zincirler", label: "Chains" },
    { href: "/#guvenlik", label: "Security" },
    { href: "/#pilot", label: "Pilot" },
    { href: "/#iletisim", label: "Contact" },
  ],
}

const ctaLabel: Record<Locale, string> = {
  tr: "Pilot Planlayın",
  en: "Plan a Pilot",
}

const singleBranchLabel: Record<Locale, string> = {
  tr: "Tek şubeli işletmeler",
  en: "Single-branch businesses",
}

export function Navbar() {
  const { locale } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const links = navLinks[locale]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled
          ? "border-b border-gray-200 shadow-lg"
          : "border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <Link
        href="/"
        className="shrink-0 flex items-center gap-2.5"
      >
        <div className="relative h-14 w-14 lg:h-16 lg:w-16 overflow-hidden shrink-0">
          <Image
            src="/images/h3s-logo-nav.webp"
            alt="Omnitek H3S"
            fill
            className="object-cover scale-[1.35] origin-[50%_35%] object-[50%_52%]"
            priority
          />
        </div>
      </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-sm font-medium text-gray-800 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/isletmeler"
              className="hidden lg:inline text-xs font-medium text-gray-600 underline-offset-4 hover:text-primary hover:underline"
            >
              {singleBranchLabel[locale]}
            </Link>
            <LanguageSwitcher />
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#pilot">{ctaLabel[locale]}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 text-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors text-sm font-medium py-2 text-gray-800 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/isletmeler"
                className="transition-colors text-sm font-medium py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {singleBranchLabel[locale]}
              </Link>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/#pilot">{ctaLabel[locale]}</Link>
              </Button>
            </div>
          </div>
        )}
    </nav>
  )
}
