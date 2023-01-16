import './globals.css'

import { AnalyticsWrapper } from '@/app/Analytics'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props)
{
  return (
    <html lang="en">
      <head />
      <body className='font-sans bg-theme-primary text-theme-text'>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}