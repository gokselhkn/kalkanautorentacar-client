import '@/css/globals.css'
import '@/css/fontawesome.css'
import '@/css/bootstrap-icons.css'


import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from '@/components/Providers/Providers'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'


export const metadata: Metadata = {
  title: 'Kalkan Auto Rent A Car - Araç Kiralama',
  description: 'Araçlarımız, her tür yolculuk ihtiyacınıza uygun mükemmel bir seçenek sunuyor. Geniş araç filomuz, lüks otomobillerden ekonomik sınıf araçlara kadar farklı kategorilerdeki araçları içeriyor. Her bir araç, düzenli bakımları yapılmış, temiz ve güvenlik standartlarına uygun olarak hazırlanmıştır. İster şehir içi gezilerde kullanın, ister uzun yolculuklarınız için tercih edin, size en iyi sürüş deneyimini sunmak için buradayız. Rent a car hizmetimizle, araç seçenekleri konusunda sınırsız esneklik ve konfora erişim sağlıyoruz, böylece yolculuklarınız daha keyifli ve sorunsuz oluyor.',
  icons: "/logo-icon.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='tr' suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>

      <Script
        src="/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/js/functions.js"
        strategy="afterInteractive"
      />
    </html>


  )
}
