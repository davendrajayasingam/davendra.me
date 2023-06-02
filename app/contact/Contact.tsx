import Link from 'next/link'

import Title from '@/app/(ui)/Title'

export default function Contact()
{
    return (
        <div className='my-8 max-w-screen-xl mx-auto'>

            <Title className='mb-8'>
                Get In Touch
            </Title>

            <Link href='/api/public/getVCard'>
                Download VCard
            </Link>

        </div>
    )
}