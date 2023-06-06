import { Righteous } from 'next/font/google'

import '@/app/globals.css'

import Header from '@/app/Header'
import Footer from '@/app/Footer'
import Analytics from '@/utils/components/Analytics'
import ToastComponent from '@/utils/components/ToastComponent'

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-righteous'
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props)
{
  return (
    <html
      lang='en'
      className={righteous.variable}
    >
      <head />
      <body className='font-sans bg-gradient-to-r from-teal-600 to-emerald-600'>
        <Header />
        <main>
          {children}
        </main>
        <Analytics />
        <ToastComponent />
        <Footer />
      </body>
    </html>
  )
}