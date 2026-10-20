"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/ui/reveal"
import { useLanguage, type Locale } from "@/lib/i18n/language-context"

interface Faq {
  question: string
  answer: React.ReactNode
  plainAnswer?: string
}

// JSON-LD her zaman Türkçe içerikten üretilir (kanonik dil, tek URL üzerinden SEO tutarlılığı için)
// Sıra: 0 Pilot · 1 Veri sahibi · 2 Altyapı · 3 Kurulum · 4 KVKK · 5 5651 · 6 Taahhüt
const faqsForSchema: Faq[] = [
  {
    // TODO: TEYİT — pilot süresi ve ticari şartı (süre/bedel cümlesi teyitten sonra eklenecek)
    question: "Pilot nasıl işliyor?",
    answer:
      "Seçtiğiniz 2–3 şubede kurulum yapılır; toplanan izinli kayıt, geri dönüş oranı, kampanya dönüşü ve şube kıyası ölçülür. Pilot sonunda şube bazlı sonuç raporu paylaşılır.",
  },
  {
    // TODO: TEYİT — Useroam veri dışa aktarma/CRM entegrasyonu; doğrulanırsa "kendi CRM'inize aktarabilirsiniz" cümlesi eklenecek
    question: "Toplanan misafir verisi kimin?",
    answer:
      "Misafir verisi işletmenize aittir; KVKK aydınlatma ve açık rıza akışı misafir girişine entegredir.",
  },
  {
    question: "Mevcut ağ altyapımı tamamen değiştirmem gerekiyor mu?",
    answer:
      "Hayır. Mevcut altyapınız saha keşfinde değerlendirilir; kullanılabilir ekipman ve kablolama genellikle korunarak H3S sistemine entegre edilir, sadece eksik/uygun olmayan kısımlar tamamlanır.",
  },
  {
    // TODO: TEYİT — kurulum süresi ("bir iş günü")
    question: "Kurulum ne kadar sürer?",
    answer:
      "Şube başı kurulum genellikle bir iş günü içinde tamamlanır. Süreç ücretsiz saha keşfiyle başlar, ardından size özel bir çözüm planı ve kurulum takvimi oluşturulur.",
  },
  {
    question: "Misafir verilerimiz KVKK'ya uygun şekilde işleniyor mu?",
    answer:
      "Evet. Toplanan misafir verileri (telefon numarası zorunlu; ad isteğe bağlı) ve log kayıtları güvenli şekilde saklanır, yalnızca yasal yükümlülükler ve belirtilen amaçlarla işlenir.",
  },
  {
    question: "5651 sayılı kanun kapsamında işletme olarak ne yapmam gerekiyor?",
    answer:
      "Misafirlerinize internet erişimi sunuyorsanız, 5651 sayılı kanun gereği bağlantı log kayıtlarını tutmak ve talep halinde yetkili makamlara sunmak zorundasınız. H3S bu süreci otomatikleştirir; log kaydı, saklama ve raporlama sizin için yönetilir.",
  },
  {
    question: "Uzun süreli bir sözleşme veya taahhüt zorunlu mu?",
    answer:
      "Ücretsiz saha keşfi ve sistem analizi taahhütsüzdür. İşletmenize uygun paket ve şartlar, keşif sonrasında sizinle birlikte netleştirilir.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsForSchema.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.plainAnswer ?? (faq.answer as string),
    },
  })),
}

const faqs: Record<Locale, Faq[]> = {
  tr: [
    faqsForSchema[0],
    faqsForSchema[1],
    faqsForSchema[2],
    faqsForSchema[3],
    {
      question: faqsForSchema[4].question,
      answer: (
        <>
          Evet. Toplanan misafir verileri (telefon numarası zorunlu; ad isteğe bağlı) ve log kayıtları güvenli şekilde saklanır, yalnızca
          yasal yükümlülükler ve belirtilen amaçlarla işlenir. Detaylar için{" "}
          <Link href="/kvkk" className="text-primary hover:underline">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni inceleyebilirsiniz.
        </>
      ),
    },
    faqsForSchema[5],
    faqsForSchema[6],
  ],
  en: [
    {
      // TODO: TEYİT — pilot duration and commercial terms
      question: "How does the pilot work?",
      answer:
        "We set up at the 2–3 branches you choose and measure the consented records collected, return rate, campaign conversion and branch comparison. At the end of the pilot, a branch-by-branch results report is shared.",
    },
    {
      // TODO: TEYİT — Useroam data export / CRM integration; if confirmed, add "you can pass it to your own CRM"
      question: "Who owns the guest data we collect?",
      answer:
        "Guest data belongs to your business; the KVKK disclosure and explicit-consent flow is built into guest sign-in.",
    },
    {
      question: "Do I need to replace my entire existing network infrastructure?",
      answer:
        "No. Your existing infrastructure is assessed during the site survey; usable equipment and cabling are generally kept and integrated into the H3S system, with only missing or unsuitable parts completed.",
    },
    {
      // TODO: TEYİT — setup time ("one business day")
      question: "How long does installation take?",
      answer:
        "Setup per branch is usually completed within one business day. The process starts with a free site survey, after which we prepare a tailored solution plan and installation schedule.",
    },
    {
      question: "Is our guest data processed in compliance with KVKK?",
      answer: (
        <>
          Yes. Collected guest data (phone number required; name optional) and log records are stored securely and are only
          processed for legal obligations and the stated purposes. For details, see the{" "}
          <Link href="/kvkk" className="text-primary hover:underline">
            KVKK Disclosure Notice
          </Link>
          {" "}(Turkish).
        </>
      ),
    },
    {
      question: "What do I need to do as a business under Law No. 5651?",
      answer:
        "If you provide internet access to guests, Law No. 5651 requires you to keep connection log records and present them to the relevant authorities on request. H3S automates this process — logging, retention and reporting are handled for you.",
    },
    {
      question: "Is a long-term contract or commitment required?",
      answer:
        "The free site survey and system analysis come with no commitment. The right package and terms for your business are agreed together with you after the survey.",
    },
  ],
}

const content: Record<Locale, { heading: string; headingHighlight: string; subtitle: string }> = {
  tr: {
    heading: "Sıkça Sorulan",
    headingHighlight: "Sorular",
    subtitle: "5651, KVKK, kurulum ve süreçle ilgili merak edilenler.",
  },
  en: {
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    subtitle: "Common questions about 5651, KVKK, installation and the process.",
  },
}

export function FaqSection() {
  const { locale } = useLanguage()
  const t = content[locale]
  const list = faqs[locale]

  return (
    <section id="sss" className="flow-faq py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.heading} <span className="text-primary">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="bg-card border border-border rounded-xl px-6">
            {list.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
