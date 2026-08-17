"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"

const navLinks = [
  { href: "#teshis", label: "Sorunlar" },
  { href: "#faydalar", label: "Kazançlar" },
  { href: "#sektorler", label: "Sektörler" },
  { href: "#iletisim", label: "İletişim" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            src="/images/h3s-logo-full.webp"
            alt="Omnitek H3S"
            fill
            className="object-cover scale-[1.35] object-[50%_52%]"
            priority
          />
        </div>
      </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-sm font-medium text-gray-800 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <QuoteRequestDialog>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Teklif Al
              </Button>
            </QuoteRequestDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors text-sm font-medium py-2 text-gray-800 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <QuoteRequestDialog>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Teklif Al
                </Button>
              </QuoteRequestDialog>
            </div>
          </div>
        )}
    </nav>
  )
}
