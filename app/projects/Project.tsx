import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Paragraph from '@/app/(ui)/Paragraph'

type Props = {
    metadata: Metadata,
    coverImage: StaticImageData,
    children: React.ReactNode
}

export default function Project({ metadata, coverImage, children }: Props)
{
    return (
        <div className='my-8 max-w-screen-xl mx-auto'>

            <Title className='mb-8'>
                {metadata.title as string}
            </Title>

            <Image
                src={coverImage}
                alt={metadata.title as string}
            />

            <Heading className='my-8'>
                Overview
            </Heading>

            <Paragraph className='px-4 max-w-xl mx-auto'>
                {metadata.description as string}
            </Paragraph>

            {children}

        </div>
    )
}