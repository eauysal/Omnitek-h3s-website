"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import OmnitekLogo from "@/app/OmnitekLogo"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white border-b border-gray-200 shadow-lg opacity-100 visible" 
          : "opacity-0 invisible"
      }`}
    >
      <Link 
  href="/" 
  className="relative flex items-center justify-center bg-white/95 px-3 py-1 lg:px-4 lg:py-1.5 rounded-lg shadow-[0_0_25px_rgba(0,180,216,0.2)] hover:shadow-[0_0_35px_rgba(0,180,216,0.4)] transition-all border border-white/30 hover:scale-105"
>
  {/* Yeni Vektörel Logomuz - Mobil için h-8, Büyük Ekranlar için h-12 yüksekliğinde esner */}
  <OmnitekLogo className="h-8 lg:h-12 w-auto" />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  isScrolled 
                    ? "text-gray-800 hover:text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#iletisim">Ücretsiz Keşif</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-800" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isScrolled ? "border-gray-200 bg-white" : "border-border"}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm font-medium py-2 ${
                    isScrolled ? "text-gray-800 hover:text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                <Link href="#iletisim" onClick={() => setIsMobileMenuOpen(false)}>
                  Ücretsiz Keşif
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
