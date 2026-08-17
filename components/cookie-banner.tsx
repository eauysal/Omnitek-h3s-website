"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "h3s-cerez-onay"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "kabul-edildi")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-foreground text-background px-4 py-4 sm:pr-28">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-background/85 text-center sm:text-left">
          Sitemizi kullanırken çalışma ve analiz amaçlı çerezler kullanılabilir. Detaylar için{" "}
          <Link href="/gizlilik-politikasi" className="underline hover:no-underline">
            Gizlilik Politikası
          </Link>
          &apos;nı inceleyebilirsiniz.
        </p>
        <Button
          onClick={accept}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
        >
          Anladım
        </Button>
      </div>
    </div>
  )
}
