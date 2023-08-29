import '@/css/globals.css'
import '@/css/fontawesome.css'
import '@/css/tiny-slider.css'
import '@/css/bootstrap-icons.css'
import '@/css/apexcharts.css'
import '@/css/glightbox.css'
import '@/css/jarallax.css'
import '@/css/overlayscrollbars.css'
import '@/css/plyr.css'
import '@/css/quill.snow.css'


import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from '@/components/Providers/Providers'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: "/icon.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
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
        src="/js/tiny-slider.js"
        strategy='afterInteractive'
      />
      <Script
        src="/js/apexcharts.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/glightbox.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/imagesloaded.pkgd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/isotope.pkgd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/jarallax-element.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/jarallax-video.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/jarallax.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/lazyload.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/overlayscrollbars.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/plyr.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/quill.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/sticky.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/js/functions.js"
        strategy="afterInteractive"
      />
    </html>


  )
}
