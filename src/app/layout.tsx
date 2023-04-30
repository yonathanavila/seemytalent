import Provider from '~/app/Provider';
import Footer from '~/app/components/Footer';
import Navbar from '~/app/components/Navbar';
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
      <body className='dark:bg-gradient-to-b from-[#202738] to-[#070816]'>
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
