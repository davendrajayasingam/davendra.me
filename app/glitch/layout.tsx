import '@/app/globals.css'

import Image from 'next/image'

import Analytics from '@/utils/components/Analytics'
import ActivityBar from '@/app/ActivityBar'

import imgGlitchBg from '@/app/glitch/images/bg.png'
import ToastComponent from '@/utils/components/ToastComponent'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props)
{
  return (
    <html lang='en'>
      <head />
      <body className='font-sans'>
        <div className='fixed inset-0 z-0'>
          <Image
            src={imgGlitchBg}
            alt='Glitch'
            className='h-screen object-cover object-center'
            fill
          />
        </div>
        <main className='relative z-1'>
          <ActivityBar />
          <div className='pb-16 md:pb-0 md:ml-16 flex flex-row'>
            {children}
          </div>
        </main>
        <Analytics />
        <ToastComponent />
      </body>
    </html>
  )
}