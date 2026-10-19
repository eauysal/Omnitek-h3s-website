"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

const businessTypeIds = [
  "zincir-franchise",
  "kafe",
  "restoran",
  "otel-pansiyon",
  "dis-mekan-etkinlik",
  "ofis-koworking",
  "market-perakende",
  "diger",
] as const
type BusinessTypeId = (typeof businessTypeIds)[number]

const businessTypeLabels: Record<Locale, Record<BusinessTypeId, string>> = {
  tr: {
    "zincir-franchise": "Zincir / Franchise",
    kafe: "Kafe",
    restoran: "Restoran",
    "otel-pansiyon": "Otel & Pansiyon",
    "dis-mekan-etkinlik": "Dış Mekan & Etkinlik",
    "ofis-koworking": "Ofis & Koworking",
    "market-perakende": "Market & Perakende",
    diger: "Diğer",
  },
  en: {
    "zincir-franchise": "Chain / Franchise",
    kafe: "Café",
    restoran: "Restaurant",
    "otel-pansiyon": "Hotel & Guesthouse",
    "dis-mekan-etkinlik": "Outdoor Venue & Event",
    "ofis-koworking": "Office & Coworking",
    "market-perakende": "Retail & Grocery",
    diger: "Other",
  },
}

const branchCountOptions = ["1", "2–4", "5–10", "11–25", "25+"] as const

const positionIds = ["sahip-kurucu", "pazarlama", "it", "operasyon", "diger"] as const
type PositionId = (typeof positionIds)[number]

const positionLabels: Record<Locale, Record<PositionId, string>> = {
  tr: {
    "sahip-kurucu": "İşletme sahibi / Kurucu",
    pazarlama: "Pazarlama",
    it: "IT",
    operasyon: "Operasyon",
    diger: "Diğer",
  },
  en: {
    "sahip-kurucu": "Business owner / Founder",
    pazarlama: "Marketing",
    it: "IT",
    operasyon: "Operations",
    diger: "Other",
  },
}

const contactInfo: Record<Locale, { icon: typeof Mail; label: string; value: string; href?: string }[]> = {
  tr: [
    { icon: Mail, label: "E-posta", value: "info@omnitek.com.tr", href: "mailto:info@omnitek.com.tr" },
    { icon: MapPin, label: "Konum", value: "İstanbul, Antalya, Ankara" },
  ],
  en: [
    { icon: Mail, label: "Email", value: "info@omnitek.com.tr", href: "mailto:info@omnitek.com.tr" },
    { icon: MapPin, label: "Location", value: "Istanbul, Antalya, Ankara — Türkiye" },
  ],
}

const content: Record<Locale, {
  heading: string
  headingHighlight: string
  subtitle: string
  consentError: string
  genericError: string
  successTitle: string
  successBody: string
  nameLabel: string
  namePlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  businessLabel: string
  businessPlaceholder: string
  businessTypeLabel: string
  businessTypeSelect: string
  branchCountLabel: string
  positionLabel: string
  singleBranchNoteBefore: string
  singleBranchNoteLink: string
  singleBranchNoteAfter: string
  cityLabel: string
  cityPlaceholder: string
  noteLabel: string
  notePlaceholder: string
  consentLinkLabel: string
  consentAfter: string
  submitting: string
  submitButton: string
}> = {
  tr: {
    heading: "Projenizi",
    headingHighlight: "konuşalım",
    subtitle: "Formu doldurun, size en kısa sürede ulaşalım ve ihtiyacınıza uygun bir görüşme planlayalım.",
    consentError: "Devam etmek için KVKK Aydınlatma Metni'ni onaylamanız gerekiyor.",
    genericError: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    successTitle: "Talebiniz Alındı!",
    successBody: "En kısa sürede sizinle iletişime geçeceğiz.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "05XX XXX XX XX",
    businessLabel: "İşletme Adı",
    businessPlaceholder: "İşletmenizin adı",
    businessTypeLabel: "İşletme Türü",
    businessTypeSelect: "Seçiniz",
    branchCountLabel: "Şube Sayısı",
    positionLabel: "Pozisyonunuz",
    singleBranchNoteBefore: "Tek şubeli işletmeler için hazır paketlerimizi ",
    singleBranchNoteLink: "İşletmeler sayfasında",
    singleBranchNoteAfter: " inceleyebilirsiniz.",
    cityLabel: "Şehir",
    cityPlaceholder: "İstanbul, Ankara, İzmir...",
    noteLabel: "Kısa Not (Opsiyonel)",
    notePlaceholder: "Eklemek istediğiniz notlar...",
    consentLinkLabel: "KVKK Aydınlatma Metni",
    consentAfter: "'ni okudum, kişisel verilerimin belirtilen amaçlarla işlenmesini kabul ediyorum.",
    submitting: "Gönderiliyor...",
    submitButton: "Görüşme Talep Et →",
  },
  en: {
    heading: "Let's talk",
    headingHighlight: "about your project",
    subtitle: "Fill out the form and we'll reach out as soon as possible to plan a call that fits your needs.",
    consentError: "You must accept the KVKK Disclosure Notice to continue.",
    genericError: "Something went wrong. Please try again later.",
    successTitle: "Your Request Has Been Received!",
    successBody: "We'll get in touch with you as soon as possible.",
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+90 5XX XXX XX XX",
    businessLabel: "Business Name",
    businessPlaceholder: "Your business's name",
    businessTypeLabel: "Business Type",
    businessTypeSelect: "Select",
    branchCountLabel: "Number of Branches",
    positionLabel: "Your Role",
    singleBranchNoteBefore: "For single-branch businesses, you can explore our ready-made packages on the ",
    singleBranchNoteLink: "Businesses page",
    singleBranchNoteAfter: ".",
    cityLabel: "City",
    cityPlaceholder: "Istanbul, Ankara, Izmir...",
    noteLabel: "Short Note (Optional)",
    notePlaceholder: "Anything you'd like to add...",
    consentLinkLabel: "KVKK Disclosure Notice",
    consentAfter: " (Turkish), and I consent to my personal data being processed for the stated purposes.",
    submitting: "Sending...",
    submitButton: "Request a Call →",
  },
}

// singleBranch: /isletmeler sayfasında şube sayısı "1" gelir ve "paketler" notu (aynı sayfaya link) gösterilmez.
export function ContactSection({ singleBranch = false }: { singleBranch?: boolean }) {
  const { locale } = useLanguage()
  const t = content[locale]
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [consent, setConsent] = useState(false)
  const emptyForm = {
    name: "",
    phone: "",
    business: "",
    businessType: "" as BusinessTypeId | "",
    branchCount: singleBranch ? "1" : "",
    position: "" as PositionId | "",
    city: "",
    note: "",
  }
  const [formData, setFormData] = useState(emptyForm)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!consent) {
      setError(t.consentError)
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("business", formData.business)
      formDataToSend.append(
        "businessType",
        formData.businessType ? businessTypeLabels.tr[formData.businessType] : ""
      )
      formDataToSend.append("branchCount", formData.branchCount)
      formDataToSend.append(
        "position",
        formData.position ? positionLabels.tr[formData.position] : ""
      )
      formDataToSend.append("city", formData.city)
      formDataToSend.append("note", formData.note)
      formDataToSend.append("Kaynak", "İletişim Formu")
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
      setFormData(emptyForm)
      setConsent(false)
    } catch {
      setError(t.genericError)
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
    <section id="iletisim" className="flow-contact py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <Reveal direction="left" className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t.heading} <span className="text-primary">{t.headingHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo[locale].map((item) => {
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
                  <CheckCircle className="h-8 w-8 text-success-ink" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                  {t.successTitle}
                </h3>
                <p className="text-muted-foreground">
                  {t.successBody}
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
                      {t.nameLabel}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary border-border focus:border-primary"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      {t.phoneLabel}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-secondary border-border focus:border-primary"
                      placeholder={t.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-1.5">
                    {t.businessLabel}
                  </label>
                  <Input
                    id="business"
                    name="business"
                    type="text"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder={t.businessPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-1.5">
                    {t.businessTypeLabel}
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">{t.businessTypeSelect}</option>
                    {businessTypeIds.map((id) => (
                      <option key={id} value={id}>
                        {businessTypeLabels[locale][id]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="branchCount" className="block text-sm font-medium text-foreground mb-1.5">
                      {t.branchCountLabel}
                    </label>
                    <select
                      id="branchCount"
                      name="branchCount"
                      required
                      value={formData.branchCount}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">{t.businessTypeSelect}</option>
                      {branchCountOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-foreground mb-1.5">
                      {t.positionLabel}
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">{t.businessTypeSelect}</option>
                      {positionIds.map((id) => (
                        <option key={id} value={id}>
                          {positionLabels[locale][id]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {!singleBranch && formData.branchCount === "1" && (
                  <p className="text-sm text-muted-foreground bg-primary/5 border border-primary/20 rounded-lg p-3">
                    {t.singleBranchNoteBefore}
                    <Link href="/isletmeler" className="text-primary font-medium hover:underline">
                      {t.singleBranchNoteLink}
                    </Link>
                    {t.singleBranchNoteAfter}
                  </p>
                )}

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                    {t.cityLabel}
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder={t.cityPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-foreground mb-1.5">
                    {t.noteLabel}
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder={t.notePlaceholder}
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
                      {t.consentLinkLabel}
                    </Link>
                    {t.consentAfter}
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? t.submitting : t.submitButton}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
