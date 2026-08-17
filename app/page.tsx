import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProcessSection } from "@/components/process-section"
import { ComparisonSection } from "@/components/comparison-section"
import { SectorsSection } from "@/components/sectors-section"
import { LegalSection } from "@/components/legal-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <ProcessSection />
      <ComparisonSection />
      <SectorsSection />
      <LegalSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
