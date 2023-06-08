import { Righteous } from 'next/font/google'
import { Metadata } from 'next'

import '@/app/globals.css'

import Header from '@/app/Header'
import Footer from '@/app/Footer'
import Analytics from '@/utils/components/Analytics'
import ToastComponent from '@/utils/components/ToastComponent'

const metadataTitle = 'Davendra Jayasingam'
const metadataDescription = 'Full-stack web developer from Malaysia. I work with brands and event agencies to bring websites and marketing campaigns to life.'
export const metadata: Metadata = {
  title: {
    default: metadataTitle,
    template: `%s | ${metadataTitle}`
  },
  description: metadataDescription,
  openGraph: {
    title: {
      default: metadataTitle,
      template: `%s | ${metadataTitle}`
    },
    description: metadataDescription,
    url: 'https://davendra.me',
    type: 'website'
  },
  keywords: [
    'web',
    'developer',
    'frontend',
    'backend',
    'kuala lumpur',
    'contest',
    'marketing',
    'campaign',
    'promotion',
    'html',
    'css',
    'javascript',
    'typescript',
    'database',
    'api',
    'react',
    'next.js',
    'node.js',
    'git',
    'netlify',
    'vercel',
    'aws',
    'analytics',
    'dashboard',
    'digital',
    'experience',
    'resume',
    'portfolio',
    'projects',
    'contact',
    'dave'
  ],
  robots: 'index, follow',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png'
  }
}

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