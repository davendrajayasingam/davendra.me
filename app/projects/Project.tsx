import Image, { StaticImageData } from 'next/image'
import { BiArrowBack } from 'react-icons/bi'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Paragraph from '@/app/(ui)/Paragraph'
import ButtonLink from '@/app/(ui)/ButtonLink'

type Props = {
    title: string,
    description: string,
    coverImage: string,
    children: React.ReactNode
}

export default function Project({ title, description, coverImage, children }: Props)
{
    return (
        <div className='my-8 max-w-screen-xl mx-auto'>

            <Title className='mb-8'>
                {title as string}
            </Title>

            <img
                src={coverImage}
                alt={title as string}
                width={1200}
                height={630}
            />

            <Heading className='my-8'>
                Overview
            </Heading>

            <Paragraph className='px-4 max-w-xl mx-auto'>
                {description as string}
            </Paragraph>

            {children}

            <ButtonLink
                href='/projects'
                className='mt-12 w-72 mx-auto'
            >
                <BiArrowBack className='inline-block mr-2 w-6 h-6' />
                View Other Projects
            </ButtonLink>

        </div>
    )
}