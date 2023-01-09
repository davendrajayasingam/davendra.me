import './globals.css'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props)
{
  return (
    <html lang="en">
      <head />
      <body className='font-sans'>
        {children}
      </body>
    </html>
  )
}