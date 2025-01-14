import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://novodip.vercel.app/'),
  title: 'Novodip',
  description: 'Novo Portfolio Website',
  keywords: ['novofolio', 'novodip mondal', 'novodip', 'Novodip', 'Novodip web dev', 'Novo Web Dev', 'Novodip Mondal'],
  openGraph: {
    description: 'Novodip Portfolio',
    images: ['/images/folio-hero.jpg']
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link type="image/<generated>" rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
