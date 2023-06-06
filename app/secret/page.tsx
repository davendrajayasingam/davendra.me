import Image from 'next/image'

import Secret from '@/app/secret/Secret'

import pageBackgroundImage from '@/app/secret/images/bg.png'

export default function Page()
{
  return <>
    <div className='fixed inset-0 -z-50'>
      <Image
        src={pageBackgroundImage}
        alt='Background'
        className='h-screen object-cover object-top'
        fill
      />
    </div>
    <Secret />
  </>
}