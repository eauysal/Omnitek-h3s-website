import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarketingSection } from "@/components/marketing-section"
import { ChainsSection } from "@/components/chains-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SecuritySection } from "@/components/security-section"
import { OperationsSection } from "@/components/operations-section"
import { LegalSection } from "@/components/legal-section"
import { PilotSection } from "@/components/pilot-section"
import { ProcessSection } from "@/components/process-section"
import { SectorsSection } from "@/components/sectors-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarketingSection />
      <ChainsSection />
      <BenefitsSection />
      <SecuritySection />
      <OperationsSection />
      <LegalSection />
      <PilotSection />
      <ProcessSection />
      <SectorsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
