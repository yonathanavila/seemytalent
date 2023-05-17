import Head from 'next/head';
import Script from 'next/script';
import Footer from '~/app/components/Footer';
import Navbar from '~/app/components/Navbar';
import Provider from '~/app/Provider';
import './globals.css'

export const metadata = {
  title: 'SeeMyTalent - Discover talent',
  description: 'Blockchian-based talent management platform',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className='light'>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.description} key="title" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NQCKV6Y0TB" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-NQCKV6Y0TB', {
                        page_path: window.location.pathname,
                      });
            `,
          }}
        />
      </Head>
      {/* fixed top-0 left-0 right-0 pointer-events-none z-[-1] w-screen h-screen bg-gradient-to-b from-blue-800 to-blue-900 */}
      <body className='bg-gradient-to-b from-[#FFFFFF] to-[#F5D9C9] dark:from-[#131727] dark:to-[#070816] min-h-screen'>
        <Provider>
          <Navbar />
          <div className='pt-[200px] md:pt-[200px] lg:pt-[70px] z-100'>
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
