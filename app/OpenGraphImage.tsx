/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import coverImage from '@/public/images/opengraph-default.png'
import profilePicture from '@/public/images/davendra.png'

// const righteousFont = fetch(
//     new URL('../public/fonts/Righteous-Regular.ttf', import.meta.url)
// ).then((res) => res.arrayBuffer())

type Props = {
    title: string,
    imageSrc?: string
}

export default async function OpenGraphImage({ title, imageSrc }: Props) 
{
    return new ImageResponse(
        (
            <div tw='flex flex-col items-center justify-center w-full h-full bg-teal-600'>

                {
                    imageSrc
                        ? <img
                            src={`https://davendra.me${imageSrc}`}
                            width={1200}
                            height={530}
                            style={{ objectFit: 'cover' }}
                        />
                        : <div tw='relative flex'>
                            <img
                                src={`https://davendra.me${coverImage.src}`}
                                width={1200}
                                height={530}
                                style={{ objectFit: 'cover' }}
                            />
                            <div tw='absolute inset-0 flex flex-col items-center justify-center'>
                                <img
                                    src={`https://davendra.me${profilePicture.src}`}
                                    width={300}
                                    height={300}
                                    tw='rounded-full'
                                />
                                <img
                                    src='https://davendra.me/images/logo-teal.png'
                                    width={600}
                                    tw='mt-4'
                                />
                            </div>
                        </div>
                }

                <div tw='flex items-center justify-center h-[100px]'>
                    <p
                        tw='font-bold text-teal-100 text-5xl ml-4'
                        style={{ fontFamily: '"Righteous"' }}
                    >
                        {title}
                    </p>
                </div>

            </div >
        ),
        {
            width: 1200,
            height: 630
            // fonts: [
            //     {
            //         name: 'Righteous',
            //         data: await righteousFont,
            //         style: 'normal',
            //         weight: 400
            //     }
            // ]
        }
    )
}