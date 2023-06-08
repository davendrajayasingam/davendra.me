import { Metadata } from 'next'

import Contact from '@/app/contact/Contact'

const metadataTitle = 'Contact'
const metadataDescription = 'Reach out to me via email, connect on social media, or download my business card. Let\'s get in touch and discuss your needs.'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/contact'
  }
}

export default async function Page()
{
  return <Contact />
}