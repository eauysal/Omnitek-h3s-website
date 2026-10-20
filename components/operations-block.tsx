"use client"

// Operasyon bloğu (QR menü, PDKS, Görevlendirme) ana akıştan çıkarıldı; hiçbir sayfada render edilmiyor.
// İleride paket detayı sayfasında kullanılmak üzere repo'da tutuluyor: <OperationsBlock /> ile çağrılır.
import { ClipboardList, Clock, QrCode, type LucideIcon } from "lucide-react"
import { AttendanceIllustration, QrMenuIllustration, TaskIllustration } from "@/components/operations-illustrations"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

// TODO: TEYİT — QR menü, PDKS ve görevlendirme özelliklerinin ürün kapsamı ve metinleri doğrulanmadan yayına alınmamalı
const operations: Record<Locale, { icon: LucideIcon; Illustration: typeof QrMenuIllustration; title: string; description: string; published: boolean }[]> = {
  tr: [
    {
      icon: QrCode,
      Illustration: QrMenuIllustration,
      title: "QR menü",
      description: "Her şubede güncel menü, masadaki QR kodla misafirin telefonunda.",
      published: true,
    },
    {
      icon: Clock,
      Illustration: AttendanceIllustration,
      title: "PDKS",
      description: "Personel giriş-çıkış ve vardiya takibi şube bazında, tek yerden.",
      published: true,
    },
    {
      icon: ClipboardList,
      Illustration: TaskIllustration,
      title: "Görevlendirme",
      description: "Şubelere ve ekiplere görev atanır, tamamlanma durumu merkezden izlenir.",
      published: true,
    },
  ],
  en: [
    {
      icon: QrCode,
      Illustration: QrMenuIllustration,
      title: "QR menu",
      description: "The current menu at every branch, on the guest's phone through a QR code at the table.",
      published: true,
    },
    {
      icon: Clock,
      Illustration: AttendanceIllustration,
      title: "Staff attendance (PDKS)",
      description: "Staff clock-in/out and shift tracking per branch, from one place.",
      published: true,
    },
    {
      icon: ClipboardList,
      Illustration: TaskIllustration,
      title: "Task assignment",
      description: "Tasks are assigned to branches and teams, and completion is tracked centrally.",
      published: true,
    },
  ],
}

const content: Record<Locale, { opsHeadingBefore: string; opsHeadingHighlight: string; opsHeadingAfter: string; opsSubtitle: string }> = {
  tr: {
    opsHeadingBefore: "",
    opsHeadingHighlight: "Personel Wi-Fi",
    opsHeadingAfter: " ile Operasyonu Yönetin",
    opsSubtitle: "Şubelerin günlük işleyişi de aynı panelden yönetilir.",
  },
  en: {
    opsHeadingBefore: "Manage operations with ",
    opsHeadingHighlight: "staff Wi-Fi",
    opsHeadingAfter: "",
    opsSubtitle: "The day-to-day running of your branches is managed from the same panel.",
  },
}

export function OperationsBlock() {
  const { locale } = useLanguage()
  const t = content[locale]

  return (
    <div>
      {/* Operasyon */}
        <Reveal className="text-center mt-14 lg:mt-20 mb-8">
          <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {t.opsHeadingBefore}
            <span className="text-primary">{t.opsHeadingHighlight}</span>
            {t.opsHeadingAfter}
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.opsSubtitle}</p>
        </Reveal>

        <div className="space-y-5 lg:space-y-6">
          {operations[locale]
            .filter((item) => item.published)
            .map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden md:grid md:grid-cols-2 transition-all duration-300 hover:border-primary/50">
                  <div className={`p-6 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-base lg:text-lg">{item.description}</p>
                  </div>
                  <div
                    className={`bg-secondary/60 flex items-center justify-center p-5 lg:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <item.Illustration className="w-full max-w-[380px] h-auto" />
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
    </div>
  )
}
