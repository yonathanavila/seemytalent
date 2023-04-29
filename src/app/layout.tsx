import Provider from './Provider';
import Navbar from './components/Navbar';

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
      <body>
        <Provider>
          <Navbar />
          {children}
          <div id="background-radial-gradient" style={{ width: '200vw', height: '200vh', transform: 'translate(-50vw,-100vh)', background: 'linear-gradient(rgb(32,39,56) 0%,rgb(7,8,22)100%)' }}></div>
        </Provider>
      </body>
    </html>
  )
}
