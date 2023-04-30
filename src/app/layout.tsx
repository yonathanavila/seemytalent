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
      {/* fixed top-0 left-0 right-0 pointer-events-none z-[-1] w-screen h-screen bg-gradient-to-b from-blue-800 to-blue-900 */}
      <body className='bg-gradient-to-b from-[#F5D9C9] to-[#FFFFFF] dark:from-[#131727] dark:to-[#070816]'>
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
