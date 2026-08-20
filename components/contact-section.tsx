"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/ui/reveal"

const businessTypes = [
  "Kafe",
  "Restoran",
  "Otel & Pansiyon",
  "Dış Mekan & Etkinlik",
  "Ofis & Koworking",
  "Market & Perakende",
  "Diğer",
]

const contactInfo = [
  { icon: Mail, label: "E-posta", value: "info@omnitek.com.tr", href: "mailto:info@omnitek.com.tr" },
  { icon: MapPin, label: "Konum", value: "İstanbul, Antalya, Ankara" },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [consent, setConsent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    businessType: "",
    city: "",
    note: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!consent) {
      setError("Devam etmek için KVKK Aydınlatma Metni'ni onaylamanız gerekiyor.")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("business", formData.business)
      formDataToSend.append("businessType", formData.businessType)
      formDataToSend.append("city", formData.city)
      formDataToSend.append("note", formData.note)
      formDataToSend.append("kvkkOnay", "Evet")

      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xeewjyra", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      setIsSubmitted(true)
      setFormData({ name: "", phone: "", business: "", businessType: "", city: "", note: "" })
      setConsent(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="iletisim" className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <Reveal direction="left" className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ücretsiz keşif <span className="text-primary">randevusu</span> alın
              </h2>
              <p className="text-muted-foreground text-lg">
                Formu doldurun, size en kısa sürede ulaşalım ve ücretsiz saha keşfi için randevu oluşturalım.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Tag = item.href ? "a" : "div"
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </Tag>
                )
              })}
            </div>
          </Reveal>

          {/* Right - Contact Form */}
          <Reveal direction="right" delay={150} className="bg-card border border-border rounded-xl p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                  Talebiniz Alındı!
                </h3>
                <p className="text-muted-foreground">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-destructive/20 border border-destructive/30 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary border-border focus:border-primary"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-secondary border-border focus:border-primary"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-1.5">
                    İşletme Adı
                  </label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="İşletmenizin adı"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-1.5">
                    İşletme Türü
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Seçiniz</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                    Şehir
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="İstanbul, Ankara, İzmir..."
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-foreground mb-1.5">
                    Kısa Not (Opsiyonel)
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Eklemek istediğiniz notlar..."
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    id="kvkkOnay"
                    name="kvkkOnay"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="kvkkOnay" className="text-xs text-muted-foreground leading-relaxed">
                    <Link href="/kvkk" target="_blank" className="text-primary hover:underline">
                      KVKK Aydınlatma Metni
                    </Link>
                    &apos;ni okudum, kişisel verilerimin belirtilen amaçlarla işlenmesini kabul ediyorum.
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Gönderiliyor..." : "Randevu Talep Et →"}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
