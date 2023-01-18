import './globals.css'
import { AnalyticsWrapper } from '@/app/Analytics'
import ActivityBar from './ActivityBar'

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
        <AnalyticsWrapper />
      </body>
    </html>
  )
}