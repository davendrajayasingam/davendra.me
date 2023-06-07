import { Metadata } from 'next'

import Contact from '@/app/contact/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to me via email, connect on social media, or download my business card. Let\'s get in touch and discuss your needs.'
}

export default async function Page()
{
  return <Contact />
}