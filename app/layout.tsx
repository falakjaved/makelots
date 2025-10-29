import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Make Lots',
  description: 'Empowering Small Businesses',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
