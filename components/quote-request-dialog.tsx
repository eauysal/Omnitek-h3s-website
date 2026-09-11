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

interface QuoteQuestion {
  id: string
  label: string
  text: string
  options: string[]
}

const quoteQuestions: QuoteQuestion[] = [
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
]

const CONTACT_STEP = quoteQuestions.length
const TOTAL_STEPS = quoteQuestions.length + 1

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

export function QuoteRequestDialog({ children, open: openProp, onOpenChange: onOpenChangeProp }: QuoteRequestDialogProps) {
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
    setAnswers((prev) => ({ ...prev, [quoteQuestions[step].id]: answer }))
    setStep((prev) => prev + 1)
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contact.name.trim() || !contact.business.trim() || !contact.phone.trim()) {
      setContactError("Devam etmek için tüm alanları doldurun.")
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

    const formDataToSend = new FormData()
    formDataToSend.append("Kaynak", "Hero - Teklif Al Anketi")
    formDataToSend.append("Ad Soyad", contact.name)
    formDataToSend.append("İşletme Adı", contact.business)
    formDataToSend.append("Telefon", contact.phone)
    quoteQuestions.forEach((q) => {
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
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
              Talebiniz Elimize Ulaştı!
            </h3>
            <p className="text-muted-foreground">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        ) : isContactStep ? (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>İletişim Bilgileriniz</DialogTitle>
              <DialogDescription>Size ulaşabilmemiz için son bir adım kaldı</DialogDescription>
            </DialogHeader>

            <Progress value={progress} className="h-1.5" />

            <form onSubmit={handleContactSubmit} className="py-2 space-y-4">
              {contactError && (
                <p className="text-sm text-destructive">{contactError}</p>
              )}
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-foreground mb-1.5">
                  Ad Soyad
                </label>
                <Input
                  id="quote-name"
                  name="name"
                  type="text"
                  value={contact.name}
                  onChange={handleContactChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label htmlFor="quote-business" className="block text-sm font-medium text-foreground mb-1.5">
                  İşletme Adı
                </label>
                <Input
                  id="quote-business"
                  name="business"
                  type="text"
                  value={contact.business}
                  onChange={handleContactChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="İşletmenizin adı"
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Telefon
                </label>
                <Input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  value={contact.phone}
                  onChange={handleContactChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="05XX XXX XX XX"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Devam Et
              </Button>
            </form>

            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Geri
            </button>
          </>
        ) : !isResult ? (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>Size Özel Teklif</DialogTitle>
              <DialogDescription>
                {step + 1}. soru / {TOTAL_STEPS}
              </DialogDescription>
            </DialogHeader>

            <Progress value={progress} className="h-1.5" />

            <div className="py-2">
              <p className="text-foreground font-medium text-lg mb-5">
                {quoteQuestions[step].text}
              </p>
              <div className="flex flex-col gap-2.5">
                {quoteQuestions[step].options.map((option) => (
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
                Geri
              </button>
            )}
          </>
        ) : (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>Bilgileriniz Alındı</DialogTitle>
            </DialogHeader>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex flex-col items-center text-center gap-3">
              <ClipboardCheck className="h-10 w-10 text-primary" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                Verdiğiniz bilgilere göre size özel bir teklif hazırlıyoruz. Aşağıdaki iletişim
                bilgilerinizden en kısa sürede size ulaşacağız.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">Ad Soyad</span>
                <span className="font-medium text-foreground text-right">{contact.name}</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">İşletme Adı</span>
                <span className="font-medium text-foreground text-right">{contact.business}</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">Telefon</span>
                <span className="font-medium text-foreground text-right">{contact.phone}</span>
              </div>
              <div className="border-t border-border my-2" />
              {quoteQuestions.map((q) => (
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
                Talep Gönder
              </Button>
              <button
                onClick={handleReset}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Baştan başla
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
