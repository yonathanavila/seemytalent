import Provider from '~/app/Provider';
import Footer from '~/app/components/Footer';
import Navbar from '~/app/components/Navbar';

import './globals.css'

export const metadata = {
  title: 'SeeMyTalent',
  description: 'Blockchian-based talent management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-[#202738] to-[#070816]'>
        <Provider>
          <Navbar />
          <div className='pt-[200px] md:pt-[200px] lg:pt-[70px]'>
            {children}
          </div>
          <Footer />
          <div id="background-radial-gradient" style={{ width: '200vw', height: '200vh', transform: 'translate(-50vw,-100vh)', background: 'linear-gradient(rgb(32,39,56) 0%,rgb(7,8,22)100%)' }}></div>
        </Provider>
      </body>
    </html>
  )
}
