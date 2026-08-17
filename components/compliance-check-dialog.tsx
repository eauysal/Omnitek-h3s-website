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
import { CheckCircle2, AlertTriangle, XCircle, ArrowLeft, Scale } from "lucide-react"
import maddeData from "@/data/5651-maddeler.json"

type Answer = "Evet" | "Hayır" | "Bilmiyorum"

interface Question {
  id: string
  text: string
  options: Answer[]
  /** 5651 sayılı Kanun madde referansları — bu sorunun "Hayır"/"Bilmiyorum" cevabı hangi maddelerle ilişkili */
  maddeRefs: string[]
  /** Riskli cevap durumunda gösterilecek tek cümlelik aksiyon önerisi */
  riskAction: string
  /** 5651 kapsamı dışındaki (örn. KVKK) sorular için ayrı bir not */
  nonMaddeNote?: string
}

const questions: Question[] = [
  {
    id: "firewall",
    text: "Kurumsal bir güvenlik duvarı kullanıyor musunuz?",
    options: ["Evet", "Hayır", "Bilmiyorum"],
    maddeRefs: ["madde-7"],
    riskAction: "Kurumsal bir güvenlik duvarı kurulumu ile bu riski ortadan kaldırabilirsiniz.",
  },
  {
    id: "log",
    text: "5651 yasası gereğince log kaydı tutuluyor mu?",
    options: ["Evet", "Hayır", "Bilmiyorum"],
    maddeRefs: ["madde-5", "madde-6", "madde-7"],
    riskAction: "5651 uyumlu log kayıt sistemi kurarak yasal saklama yükümlülüğünü karşılayabilirsiniz.",
  },
  {
    id: "kvkk",
    text: "KVKK uyumlu veri işleme süreciniz var mı?",
    options: ["Evet", "Hayır", "Bilmiyorum"],
    maddeRefs: [],
    nonMaddeNote: "6698 sayılı KVKK kapsamında ayrıca değerlendirilir",
    riskAction: "Misafir verilerinizin toplanma ve saklanma sürecini KVKK'ya uygun hale getirmenizi öneririz.",
  },
  {
    id: "posWifi",
    text: "POS ve adisyon sistemleriniz ile Misafir Wi-Fi'nız aynı ağda mı?",
    options: ["Evet", "Hayır", "Bilmiyorum"],
    maddeRefs: [],
    riskAction: "POS/adisyon cihazlarınızı misafir ağından ayrı bir VLAN'a alarak ödeme güvenliğini artırabilirsiniz.",
  },
  {
    id: "equipment",
    text: "İşletmenizde Access Point, switch ve kilitli kabin bulunuyor mu?",
    options: ["Evet", "Hayır", "Bilmiyorum"],
    maddeRefs: ["madde-7"],
    riskAction: "Kurumsal ağ ekipmanı ve kilitli kabin kurulumu ile fiziksel/log altyapı bütünlüğünü sağlayabilirsiniz.",
  },
]

const { maddeler, cezaTutariNotu } = maddeData as {
  cezaTutariNotu: string
  maddeler: Record<
    string,
    { no: string; yukumluTaraf: string; konu: string; yaptirimTuru: string; agirlik: "orta" | "yuksek" | "en-yuksek" }
  >
}

function scoreForAnswer(id: string, answer: Answer): number {
  if (id === "posWifi") {
    // Bu soruda "Evet" (POS misafir ağıyla aynı ağda) risklidir — polarite diğer sorulara göre ters
    if (answer === "Evet") return 2
    if (answer === "Bilmiyorum") return 1
    return 0
  }
  if (answer === "Evet") return 0
  if (answer === "Bilmiyorum") return 1
  return 2
}

type ResultLevel = "low" | "medium" | "high"

function getResultLevel(score: number): ResultLevel {
  if (score <= 2) return "low"
  if (score <= 5) return "medium"
  return "high"
}

const resultContent: Record<
  ResultLevel,
  { title: string; description: string; icon: typeof CheckCircle2; className: string }
> = {
  low: {
    title: "Düşük Risk",
    description:
      "Altyapınız genel olarak sağlam görünüyor. Birkaç ince ayarla tam uyumlu hale gelebilirsiniz — ücretsiz saha keşfiyle netleştirelim.",
    icon: CheckCircle2,
    className: "text-success bg-success/10 border-success/30",
  },
  medium: {
    title: "Orta Risk",
    description:
      "İşletmenizde bazı önemli eksikler var. Ücretsiz saha keşfi ile mevcut durumu netleştirip size özel bir çözüm planı çıkaralım.",
    icon: AlertTriangle,
    className: "text-warning bg-warning/10 border-warning/30",
  },
  high: {
    title: "Yüksek Risk",
    description:
      "İşletmeniz hem güvenlik hem 5651/KVKK uyumluluğu açısından ciddi risk taşıyor. En kısa sürede ücretsiz saha keşfi planlamanızı öneririz.",
    icon: XCircle,
    className: "text-destructive bg-destructive/10 border-destructive/30",
  },
}

const sanctionIntro: Record<ResultLevel, string> = {
  high: "Bu eksiklikler devam ederse idari para cezası ve tekrarında ağırlaştırılmış yaptırım, ayrıca erişim engeli riski ile karşı karşıya kalabilirsiniz.",
  medium: "Şu an kesin bir ihlal görünmüyor; ancak aşağıdaki eksiklik(ler) giderilmezse ilgili madde kapsamına girme riski var.",
  low: "Mevcut durumda madde ihlali riski görünmüyor.",
}

const agirlikStyles: Record<string, string> = {
  orta: "border-warning/40 bg-warning/10",
  yuksek: "border-destructive/40 bg-destructive/10",
  "en-yuksek": "border-destructive/60 bg-destructive/15",
}

const agirlikBadgeStyles: Record<string, string> = {
  orta: "bg-warning text-warning-foreground",
  yuksek: "bg-destructive text-destructive-foreground",
  "en-yuksek": "bg-destructive text-destructive-foreground",
}

const agirlikLabel: Record<string, string> = {
  orta: "Orta",
  yuksek: "Yüksek",
  "en-yuksek": "En Yüksek",
}

export function ComplianceCheckDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Answer>>({})

  const isResult = step === questions.length
  const progress = (Math.min(step, questions.length) / questions.length) * 100

  const handleAnswer = (answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [questions[step].id]: answer }))
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

  const totalScore = Object.entries(answers).reduce(
    (sum, [id, answer]) => sum + scoreForAnswer(id, answer),
    0
  )
  const resultLevel = getResultLevel(totalScore)
  const result = resultContent[resultLevel]
  const ResultIcon = result.icon

  // Riskli görülen sorular — scoreForAnswer > 0 olan her cevap bir eksiklik/belirsizlik işaretidir
  // (posWifi gibi mantığı ters olan sorularda da doğru çalışır)
  const riskyQuestions = questions.filter((q) => {
    const answer = answers[q.id]
    return answer && scoreForAnswer(q.id, answer) > 0
  })

  // Bu sorulardan tetiklenen 5651 maddeleri (tekilleştirilmiş)
  const triggeredMaddeIds = Array.from(
    new Set(riskyQuestions.flatMap((q) => q.maddeRefs))
  )

  // 5651 maddesi olmayan ama yine de riskli görülen sorular (örn. KVKK, POS-WiFi)
  const riskyNonMaddeQuestions = riskyQuestions.filter((q) => q.maddeRefs.length === 0)

  const hasSanctionContent = triggeredMaddeIds.length > 0 || riskyNonMaddeQuestions.length > 0

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
        {!isResult ? (
          <>
            <DialogHeader className="text-center sm:text-center items-center">
              <DialogTitle>5651 Yasası Uyum Analizi</DialogTitle>
              <DialogDescription>
                {step + 1}. soru / {questions.length}
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
                Geri
              </button>
            )}
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Sonucunuz</DialogTitle>
            </DialogHeader>

            <div className={`rounded-xl border p-5 flex flex-col items-center text-center gap-3 ${result.className}`}>
              <ResultIcon className="h-10 w-10" />
              <p className="text-xl font-bold">{result.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {result.description}
              </p>
            </div>

            {/* Olası Yaptırım */}
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold text-foreground text-sm">Olası Yaptırım</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{sanctionIntro[resultLevel]}</p>

              {hasSanctionContent ? (
                <div className="space-y-3 mb-4">
                  {triggeredMaddeIds.map((maddeId) => {
                    const madde = maddeler[maddeId]
                    if (!madde) return null
                    return (
                      <div
                        key={maddeId}
                        className={`rounded-lg border p-3 ${agirlikStyles[madde.agirlik] ?? "border-border"}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold text-sm text-foreground">
                            {madde.no} — {madde.konu}
                          </p>
                          <span
                            className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              agirlikBadgeStyles[madde.agirlik] ?? ""
                            }`}
                          >
                            {agirlikLabel[madde.agirlik] ?? madde.agirlik}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Muhatap: {madde.yukumluTaraf} · {madde.yaptirimTuru}
                        </p>
                      </div>
                    )
                  })}

                  {riskyNonMaddeQuestions.map((q) => (
                    <div key={q.id} className="rounded-lg border border-border p-3">
                      <p className="font-semibold text-sm text-foreground">
                        {q.nonMaddeNote ?? "İlave risk faktörü"}
                      </p>
                    </div>
                  ))}

                  <div className="pt-1">
                    {riskyQuestions.map((q) => (
                      <p key={q.id} className="text-xs text-muted-foreground leading-relaxed">
                        → {q.riskAction}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mb-4">
                  Mevcut altyapınızı düzenli denetimlerle bu seviyede tutmanızı, ek olarak 7/24 izleme ile
                  performansı da artırmanızı öneririz.
                </p>
              )}

              <p className="text-[11px] text-muted-foreground/70 leading-relaxed border-t border-border pt-3">
                Bu anket sonucu genel bir ön değerlendirmedir ve hukuki danışmanlık niteliği taşımaz. 5651 sayılı
                Kanun kapsamındaki idari para cezası tutarları her yıl yeniden değerleme oranıyla
                güncellenmektedir. {cezaTutariNotu}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleOpenChange(false)}
              >
                <a href="#iletisim">Teklif Al</a>
              </Button>
              <button
                onClick={handleReset}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Analizi tekrar yap
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
