import Image, { StaticImageData } from 'next/image'

import Paragraph from '@/app/(ui)/Paragraph'
import Title from '@/app/(ui)/Title'

type Props = {
    title: string
    texts: React.ReactNode[] | string[],
    image?: StaticImageData
}

export default function PuzzleHeader({ title, texts, image }: Props)
{
    return (
        <>
            <Title className='my-8 text-white'>
                {title}
            </Title>

            {
                image && <Image
                    src={image}
                    alt={title}
                    className='w-full h-auto mx-auto mb-4'
                />
            }

            <div className='p-4 mb-4 flex flex-col space-y-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-xl'>
                {
                    texts.map((text, index) => (
                        <Paragraph
                            key={`${title}-text-${index}`}
                            className='text-white'
                        >
                            {text}
                        </Paragraph>
                    ))
                }
            </div>
        </>
    )
}