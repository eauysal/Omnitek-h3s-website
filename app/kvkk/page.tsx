import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/seo"

const pageTitle = "KVKK Aydınlatma Metni | Omnitek H3S"
const pageDescription =
  "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Omnitek H3S aydınlatma metni."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kvkk",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.url}/kvkk`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: siteConfig.ogType,
    images: [siteConfig.defaultImage],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [siteConfig.defaultImage.url],
  },
}

export default function KvkkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-16 lg:py-24 pt-32 lg:pt-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
          KVKK Aydınlatma Metni
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, misafir Wi-Fi hizmeti sunulan
              işletme ve bu hizmeti teknik olarak sağlayan Omnitek Telekom, kişisel verilerinizin işlenmesi
              bakımından veri sorumlusu sıfatını taşımaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">2. İşlenen Kişisel Veriler</h2>
            <p>
              Misafir ağına bağlanırken paylaştığınız ad soyad, telefon numarası, e-posta adresi ile bağlantı
              log kayıtlarınız (IP adresi, MAC adresi, bağlantı zaman damgası) işlenmektedir. Web sitemizdeki
              iletişim formunu doldurduğunuzda ayrıca ad soyad, telefon numarası, işletme adı, işletme türü ve
              şehir bilgileriniz işlenir.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">3. İşleme Amacı ve Hukuki Sebep</h2>
            <p>
              Verileriniz; 5651 sayılı kanun kapsamındaki yasal yükümlülüğün yerine getirilmesi, ağ güvenliğinin
              sağlanması, talebiniz halinde işletmenin sizinle pazarlama amaçlı iletişim kurabilmesi ve
              tarafımıza ilettiğiniz talepler doğrultusunda sizinle iletişime geçilebilmesi hukuki sebeplerine
              dayanarak işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">4. Veri Aktarımı</h2>
            <p>
              Kişisel verileriniz, yalnızca yetkili kamu kurum ve kuruluşlarının talebi halinde ve mevzuatın
              öngördüğü sınırlar içinde ilgili makamlarla paylaşılır. İletişim formu verileriniz, formu işleme
              almamızı sağlayan Formspree adlı hizmet sağlayıcı üzerinden bize ulaştırılır. Verileriniz ticari
              amaçla üçüncü taraflara aktarılmaz.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">5. Haklarınız</h2>
            <p>
              KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse
              buna ilişkin bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, eksik
              veya yanlış işlenmişse düzeltilmesini isteme ve KVKK'da öngörülen şartlar çerçevesinde silinmesini
              veya yok edilmesini isteme haklarına sahipsiniz.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">6. Başvuru</h2>
            <p>
              Haklarınızı kullanmak için{" "}
              <a href="mailto:info@omnitek.com.tr" className="text-primary hover:underline">
                info@omnitek.com.tr
              </a>{" "}
              adresine yazılı olarak başvurabilirsiniz.
            </p>
          </section>
        </div>
      </div>
      </section>
      <Footer />
    </main>
  )
}
