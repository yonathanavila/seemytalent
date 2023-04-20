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
      <body>{children}</body>
    </html>
  )
}
