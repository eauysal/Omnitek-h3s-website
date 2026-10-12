"use client"

import { useEffect, useRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, ClipboardCheck } from "lucide-react"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface QuoteQuestion {
  id: string
  label: string
  text: string
  options: string[]
}

const quoteQuestions: Record<Locale, QuoteQuestion[]> = {
  tr: [
    {
      id: "businessType",
      label: "İşletme türü",
      text: "İşletme türünüz nedir?",
      options: [
        "Kafe",
        "Restoran",
        "Otel & Pansiyon",
        "Dış Mekan & Etkinlik",
        "Ofis & Koworking",
        "Market & Perakende",
        "Diğer",
      ],
    },
    {
      id: "branchCount",
      label: "Şube sayısı",
      text: "Kaç şubeniz var?",
      options: ["Tek şube", "2-5 şube", "5+ şube"],
    },
    {
      id: "dailyGuests",
      label: "Günlük misafir",
      text: "Günlük ortalama misafir sayınız kaç?",
      options: ["0-50", "50-150", "150+"],
    },
    {
      id: "existingInfra",
      label: "Mevcut altyapı",
      text: "Mevcut bir ağ/güvenlik altyapınız var mı?",
      options: ["Evet, var", "Hayır, sıfırdan kurulum gerekiyor", "Kısmen var, iyileştirilmeli"],
    },
    {
      id: "timeline",
      label: "Zamanlama",
      text: "Kurulumu ne zaman planlıyorsunuz?",
      options: ["Hemen", "1 ay içinde", "Sadece bilgi alıyorum"],
    },
  ],
  en: [
    {
      id: "businessType",
      label: "Business type",
      text: "What type of business do you run?",
      options: [
        "Café",
        "Restaurant",
        "Hotel & Guesthouse",
        "Outdoor Venue & Event",
        "Office & Coworking",
        "Retail & Grocery",
        "Other",
      ],
    },
    {
      id: "branchCount",
      label: "Number of branches",
      text: "How many branches do you have?",
      options: ["Single branch", "2-5 branches", "5+ branches"],
    },
    {
      id: "dailyGuests",
      label: "Daily guests",
      text: "What's your average daily guest count?",
      options: ["0-50", "50-150", "150+"],
    },
    {
      id: "existingInfra",
      label: "Existing infrastructure",
      text: "Do you have an existing network/security infrastructure?",
      options: ["Yes, we do", "No, needs setup from scratch", "Partial, needs improvement"],
    },
    {
      id: "timeline",
      label: "Timeline",
      text: "When are you planning to install?",
      options: ["Right away", "Within 1 month", "Just gathering information"],
    },
  ],
}

const CONTACT_STEP = quoteQuestions.tr.length
const TOTAL_STEPS = quoteQuestions.tr.length + 1

interface ContactInfo {
  name: string
  business: string
  phone: string
}

const emptyContactInfo: ContactInfo = { name: "", business: "", phone: "" }

interface QuoteRequestDialogProps {
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const content: Record<Locale, {
  successTitle: string
  successBody: string
  contactTitle: string
  contactDescription: string
  contactError: string
  nameLabel: string
  namePlaceholder: string
  businessLabel: string
  businessPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  continueButton: string
  back: string
  quizTitle: string
  questionOf: (step: number, total: number) => string
  resultTitle: string
  resultIntro: string
  submitButton: string
  restartButton: string
}> = {
  tr: {
    successTitle: "Talebiniz Elimize Ulaştı!",
    successBody: "En kısa sürede sizinle iletişime geçeceğiz.",
    contactTitle: "İletişim Bilgileriniz",
    contactDescription: "Size ulaşabilmemiz için son bir adım kaldı",
    contactError: "Devam etmek için tüm alanları doldurun.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    businessLabel: "İşletme Adı",
    businessPlaceholder: "İşletmenizin adı",
    phoneLabel: "Telefon",
    phonePlaceholder: "05XX XXX XX XX",
    continueButton: "Devam Et",
    back: "Geri",
    quizTitle: "Size Özel Teklif",
    questionOf: (step, total) => `${step}. soru / ${total}`,
    resultTitle: "Bilgileriniz Alındı",
    resultIntro:
      "Verdiğiniz bilgilere göre size özel bir teklif hazırlıyoruz. Aşağıdaki iletişim bilgilerinizden en kısa sürede size ulaşacağız.",
    submitButton: "Talep Gönder",
    restartButton: "Baştan başla",
  },
  en: {
    successTitle: "Your Request Has Reached Us!",
    successBody: "We'll get in touch with you as soon as possible.",
    contactTitle: "Your Contact Details",
    contactDescription: "Just one more step so we can reach you",
    contactError: "Please fill in all fields to continue.",
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    businessLabel: "Business Name",
    businessPlaceholder: "Your business's name",
    phoneLabel: "Phone",
    phonePlaceholder: "+90 5XX XXX XX XX",
    continueButton: "Continue",
    back: "Back",
    quizTitle: "A Quote Just for You",
    questionOf: (step, total) => `Question ${step} of ${total}`,
    resultTitle: "We've Got Your Info",
    resultIntro:
      "We're preparing a tailored quote based on the information you provided. We'll reach out to you at the contact details below as soon as possible.",
    submitButton: "Submit Request",
    restartButton: "Start over",
  },
}

export function QuoteRequestDialog({ children, open: openProp, onOpenChange: onOpenChangeProp }: QuoteRequestDialogProps) {
  const { locale } = useLanguage()
  const t = content[locale]
  const questions = quoteQuestions[locale]
  const [openState, setOpenState] = useState(false)
  const open = openProp ?? openState
  const setOpen = onOpenChangeProp ?? setOpenState
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [contact, setContact] = useState<ContactInfo>(emptyContactInfo)
  const [contactError, setContactError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isResult = step === TOTAL_STEPS
  const isContactStep = step === CONTACT_STEP
  const progress = (Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100
  const hasSubmittedRef = useRef(false)

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [questions[step].id]: answer }))
    setStep((prev) => prev + 1)
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contact.name.trim() || !contact.business.trim() || !contact.phone.trim()) {
      setContactError(t.contactError)
      return
    }
    setContactError("")
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1))
  }

  const handleReset = () => {
    setStep(0)
    setAnswers({})
    setContact(emptyContactInfo)
    setContactError("")
    setSubmitted(false)
    hasSubmittedRef.current = false
  }

  useEffect(() => {
    if (!isResult || hasSubmittedRef.current) return
    hasSubmittedRef.current = true

    const trQuestions = quoteQuestions.tr
    const formDataToSend = new FormData()
    formDataToSend.append("Kaynak", "Hero - Teklif Al Anketi")
    formDataToSend.append("Ad Soyad", contact.name)
    formDataToSend.append("İşletme Adı", contact.business)
    formDataToSend.append("Telefon", contact.phone)
    trQuestions.forEach((q) => {
      formDataToSend.append(q.label, answers[q.id] ?? "")
    })

    fetch("https://formspree.io/f/xeewjyra", {
      method: "POST",
      body: formDataToSend,
      headers: { Accept: "application/json" },
    }).catch(() => {
      // Sessizce yut: kullanıcı akışını bozmasın, ziyaretçi zaten sonuç ekranını görüyor
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResult])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setTimeout(handleReset, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-8">
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
        ) : isContactStep ? (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>{t.contactTitle}</DialogTitle>
              <DialogDescription>{t.contactDescription}</DialogDescription>
            </DialogHeader>

            <Progress value={progress} className="h-1.5" />

            <form onSubmit={handleContactSubmit} className="py-2 space-y-4">
              {contactError && (
                <p className="text-sm text-destructive">{contactError}</p>
              )}
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-foreground mb-1.5">
                  {t.nameLabel}
                </label>
                <Input
                  id="quote-name"
                  name="name"
                  type="text"
                  value={contact.name}
                  onChange={handleContactChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="quote-business" className="block text-sm font-medium text-foreground mb-1.5">
                  {t.businessLabel}
                </label>
                <Input
                  id="quote-business"
                  name="business"
                  type="text"
                  value={contact.business}
                  onChange={handleContactChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder={t.businessPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  {t.phoneLabel}
                </label>
                <Input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  value={contact.phone}
                  onChange={handleContactChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t.continueButton}
              </Button>
            </form>

            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t.back}
            </button>
          </>
        ) : !isResult ? (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>{t.quizTitle}</DialogTitle>
              <DialogDescription>
                {t.questionOf(step + 1, TOTAL_STEPS)}
              </DialogDescription>
            </DialogHeader>

            <Progress value={progress} className="h-1.5" />

            <div className="py-2">
              <p className="text-foreground font-medium text-lg mb-5">
                {questions[step].text}
              </p>
              <div className="flex flex-col gap-2.5">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="text-left px-4 py-3 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors font-medium text-foreground"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {step > 0 && (
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t.back}
              </button>
            )}
          </>
        ) : (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>{t.resultTitle}</DialogTitle>
            </DialogHeader>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex flex-col items-center text-center gap-3">
              <ClipboardCheck className="h-10 w-10 text-primary" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.resultIntro}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">{t.nameLabel}</span>
                <span className="font-medium text-foreground text-right">{contact.name}</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">{t.businessLabel}</span>
                <span className="font-medium text-foreground text-right">{contact.business}</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">{t.phoneLabel}</span>
                <span className="font-medium text-foreground text-right">{contact.phone}</span>
              </div>
              <div className="border-t border-border my-2" />
              {questions.map((q) => (
                <div key={q.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{q.label}</span>
                  <span className="font-medium text-foreground text-right">
                    {answers[q.id]}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setSubmitted(true)}
              >
                {t.submitButton}
              </Button>
              <button
                onClick={handleReset}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.restartButton}
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
