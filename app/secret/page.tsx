import Image from 'next/image'

import Secret from '@/app/secret/Secret'

import pageBackgroundImage from '@/app/secret/images/bg.png'

const metadataTitle = 'Secret Quest'
const metadataDescription = 'In the realm of shadow and fire, a whispered prophecy echoes through the land. You, brave adventurer, have been chosen to undertake a legendary quest, a path fraught with three arduous challenges that will test your resolve and shape the destiny of Middle-earth.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  robots: 'noindex, nofollow',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/secret'
  }
}

export default function Page()
{
  return <>
    <div className='fixed inset-0 -z-50'>
      <Image
        src={pageBackgroundImage}
        alt='Background'
        className='h-screen object-cover object-top'
        fill
        loading='eager'
        placeholder='blur'
      />
    </div>
    <Secret />
  </>
}