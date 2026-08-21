import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/seo"

const pageTitle = "Gizlilik Politikası | Omnitek H3S"
const pageDescription =
  "Omnitek H3S gizlilik politikası — hangi verileri topluyoruz, nasıl işliyoruz ve saklıyoruz."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.url}/gizlilik-politikasi`,
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

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-16 lg:py-24 pt-32 lg:pt-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
          Gizlilik Politikası
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">1. Topladığımız Veriler</h2>
            <p>
              Omnitek H3S misafir Wi-Fi sistemine bağlanan kullanıcılardan; ad soyad, telefon numarası ve/veya
              e-posta adresi gibi bağlantı sırasında paylaşılan iletişim bilgilerini toplar. Ayrıca 5651 sayılı
              kanun gereği bağlantı log kayıtları (IP adresi, bağlantı zamanı, cihaz bilgisi) tutulur. Web
              sitemizdeki iletişim formunu doldurduğunuzda ad soyad, telefon, işletme adı, işletme türü ve şehir
              bilgilerinizi işleriz.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">2. Verilerin Kullanım Amacı</h2>
            <p>
              Misafir Wi-Fi sisteminde toplanan iletişim bilgileri, işletmenizin kendi müşterilerine kampanya ve
              bilgilendirme mesajı göndermesi amacıyla işletme sahibine sağlanır. Log kayıtları yalnızca 5651
              sayılı kanun kapsamındaki yasal yükümlülüğün yerine getirilmesi ve yetkili makamların talebi
              halinde ibraz edilmesi amacıyla tutulur. İletişim formundan aldığımız bilgileri, talebiniz üzerine
              sizinle iletişime geçmek ve ücretsiz saha keşfi randevusu planlamak için kullanırız.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">3. Veri Saklama ve Güvenlik</h2>
            <p>
              Log kayıtları şifreli olarak saklanır ve kanunda öngörülen süre boyunca muhafaza edilir. Verilere
              erişim, yalnızca yetkilendirilmiş personel ve yasal makamlarla sınırlıdır.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">4. Üçüncü Taraflarla Paylaşım</h2>
            <p>
              İletişim formu, Formspree adlı üçüncü taraf bir form işleme hizmeti üzerinden bize iletilir.
              Verileriniz, yasal zorunluluklar dışında başka üçüncü taraflarla paylaşılmaz veya satılmaz.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">5. Çerezler</h2>
            <p>
              Sitemizde ziyaretçi trafiğini anonim şekilde ölçmek için temel analitik araçlar kullanılabilir. Bu
              araçlar kişisel kimliğinizi belirlememektedir.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-foreground text-lg mb-2">6. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için{" "}
              <a href="mailto:info@omnitek.com.tr" className="text-primary hover:underline">
                info@omnitek.com.tr
              </a>{" "}
              adresinden bize ulaşabilirsiniz. Kişisel verilerinizle ilgili haklarınız için{" "}
              <Link href="/kvkk" className="text-primary hover:underline">
                KVKK Aydınlatma Metni
              </Link>
              &apos;ni inceleyebilirsiniz.
            </p>
          </section>
        </div>
      </div>
      </section>
      <Footer />
    </main>
  )
}
