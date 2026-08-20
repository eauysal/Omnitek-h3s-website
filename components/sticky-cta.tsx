"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { QuoteRequestDialog } from "@/components/quote-request-dialog"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const nearBottom = scrollY + winHeight > docHeight - 500

      setVisible(scrollY > winHeight * 0.6 && !nearBottom)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <QuoteRequestDialog>
        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Demo Talep Et
        </Button>
      </QuoteRequestDialog>
    </div>
  )
}
