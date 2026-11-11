"use client"

import { useEffect } from "react"
import { captureAttribution } from "@/lib/attribution"

// Görünmez; ziyaretçinin geliş kaynağını (UTM vb.) oturuma kaydeder. İletişim formu bunu okur (lib/attribution.ts).
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution()
  }, [])
  return null
}
