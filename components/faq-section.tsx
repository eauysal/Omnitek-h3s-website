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
const faqsForSchema: Faq[] = [
  {
    question: "5651 sayılı kanun kapsamında işletmem olarak ne yapmam gerekiyor?",
    answer:
      "Misafirlerinize internet erişimi sunuyorsanız, 5651 sayılı kanun gereği bağlantı log kayıtlarını tutmak ve talep halinde yetkili makamlara sunmak zorundasınız. H3S bu süreci otomatikleştirir; şifreli log kaydı, saklama ve raporlama sizin için yönetilir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Ortalama kurulum süresi 6-8 saattir. Süreç ücretsiz saha keşfiyle başlar, ardından size özel bir çözüm planı ve kurulum takvimi oluşturulur.",
  },
  {
    question: "Mevcut ağ altyapımı tamamen değiştirmem gerekiyor mu?",
    answer:
      "Hayır. Mevcut altyapınız saha keşfinde değerlendirilir; kullanılabilir ekipman ve kablolama genellikle korunarak H3S sistemine entegre edilir, sadece eksik/uygun olmayan kısımlar tamamlanır.",
  },
  {
    question: "Misafir verilerimiz KVKK'ya uygun şekilde işleniyor mu?",
    answer:
      "Evet. Toplanan misafir verileri (ad, telefon, e-posta) ve log kayıtları şifreli olarak saklanır, yalnızca yasal yükümlülükler ve belirtilen amaçlarla işlenir.",
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
    {
      question: "Misafir verilerimiz KVKK'ya uygun şekilde işleniyor mu?",
      answer: (
        <>
          Evet. Toplanan misafir verileri (ad, telefon, e-posta) ve log kayıtları şifreli olarak saklanır, yalnızca
          yasal yükümlülükler ve belirtilen amaçlarla işlenir. Detaylar için{" "}
          <Link href="/kvkk" className="text-primary hover:underline">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni inceleyebilirsiniz.
        </>
      ),
    },
    faqsForSchema[4],
  ],
  en: [
    {
      question: "What do I need to do as a business under Law No. 5651?",
      answer:
        "If you provide internet access to guests, Law No. 5651 requires you to keep connection log records and present them to the relevant authorities on request. H3S automates this process — encrypted logging, retention and reporting are handled for you.",
    },
    {
      question: "How long does installation take?",
      answer:
        "The average installation takes 6-8 hours. The process starts with a free site survey, after which we prepare a tailored solution plan and installation schedule.",
    },
    {
      question: "Do I need to replace my entire existing network infrastructure?",
      answer:
        "No. Your existing infrastructure is assessed during the site survey; usable equipment and cabling are generally kept and integrated into the H3S system, with only missing or unsuitable parts completed.",
    },
    {
      question: "Is our guest data processed in compliance with KVKK?",
      answer: (
        <>
          Yes. Collected guest data (name, phone, email) and log records are stored encrypted and are only
          processed for legal obligations and the stated purposes. For details, see the{" "}
          <Link href="/kvkk" className="text-primary hover:underline">
            KVKK Disclosure Notice
          </Link>
          {" "}(Turkish).
        </>
      ),
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
