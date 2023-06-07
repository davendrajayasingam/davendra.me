import Image from 'next/image'

import Secret from '@/app/secret/Secret'

import pageBackgroundImage from '@/app/secret/images/bg.png'

export const metadata = {
  title: 'Secret Quest',
  description: 'In the realm of shadow and fire, a whispered prophecy echoes through the land. You, brave adventurer, have been chosen to undertake a legendary quest, a path fraught with three arduous challenges that will test your resolve and shape the destiny of Middle-earth.',
  robots: 'noindex, nofollow'
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
      />
    </div>
    <Secret />
  </>
}