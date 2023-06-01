import '@/app/globals.css'

import Analytics from '@/utils/components/Analytics'
import ActivityBar from '@/app/ActivityBar'
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
        <main>
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