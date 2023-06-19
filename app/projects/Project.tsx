import Image, { StaticImageData } from 'next/image'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Paragraph from '@/app/(ui)/Paragraph'

type Props = {
    title: string,
    description: string,
    coverImage: StaticImageData,
    children: React.ReactNode
}

export default function Project({ title, description, coverImage, children }: Props)
{
    return (
        <div className='my-8 max-w-screen-xl mx-auto'>

            <Title className='mb-8'>
                {title as string}
            </Title>

            <Image
                src={coverImage}
                alt={title as string}
                placeholder='blur'
            />

            <Heading className='my-8'>
                Overview
            </Heading>

            <Paragraph className='px-4 max-w-xl mx-auto'>
                {description as string}
            </Paragraph>

            {children}

        </div>
    )
}