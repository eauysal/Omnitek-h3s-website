"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ClipboardCheck } from "lucide-react"

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

export function QuoteRequestDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const isResult = step === quoteQuestions.length
  const progress = (Math.min(step, quoteQuestions.length) / quoteQuestions.length) * 100

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [quoteQuestions[step].id]: answer }))
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1))
  }

  const handleReset = () => {
    setStep(0)
    setAnswers({})
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setTimeout(handleReset, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
        {!isResult ? (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>Size Özel Teklif</DialogTitle>
              <DialogDescription>
                {step + 1}. soru / {quoteQuestions.length}
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
                Verdiğiniz bilgilere göre size özel bir teklif hazırlayabiliriz. Devam etmek için
                iletişim formunu doldurun, ekibimiz sizinle en kısa sürede iletişime geçsin.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
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
              {/* NOT: Hizmet/paket kapsamları sayfası hazır olduğunda bu link oraya güncellenmeli */}
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleOpenChange(false)}
              >
                <a href="#iletisim">İletişime Geç</a>
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
