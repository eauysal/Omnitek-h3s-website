"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/ui/reveal"

const faqs = [
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
      <>
        Evet. Toplanan misafir verileri (ad, telefon, e-posta) ve log kayıtları şifreli olarak saklanır, yalnızca
        yasal yükümlülükler ve belirtilen amaçlarla işlenir. Detaylar için{" "}
        <Link href="/kvkk" className="text-primary hover:underline">
          KVKK Aydınlatma Metni
        </Link>
        &apos;ni inceleyebilirsiniz.
      </>,
  },
  {
    question: "Uzun süreli bir sözleşme veya taahhüt zorunlu mu?",
    answer:
      "Ücretsiz saha keşfi ve sistem analizi taahhütsüzdür. İşletmenize uygun paket ve şartlar, keşif sonrasında sizinle birlikte netleştirilir.",
  },
]

export function FaqSection() {
  return (
    <section id="sss" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sıkça Sorulan <span className="text-primary">Sorular</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            5651, KVKK, kurulum ve süreçle ilgili merak edilenler.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="bg-card border border-border rounded-xl px-6">
            {faqs.map((faq, index) => (
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
