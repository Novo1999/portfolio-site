import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Novodip',
  description: 'Novo Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link type='image/<generated>' rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
