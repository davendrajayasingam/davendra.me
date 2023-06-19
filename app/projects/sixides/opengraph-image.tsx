/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import coverImage from '@/app/projects/sixides/images/sixides-cover.png'

export const runtime = 'edge'

export const alt = 'SIXiDES'
export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

const righteousFont = fetch(
    new URL('/assets/Righteous-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function Image() 
{
    return new ImageResponse(
        (
            <div tw='flex flex-col items-center justify-center w-full h-full bg-teal-600'>
                <img
                    src={`https://davendra.me${coverImage.src}`}
                    alt='Cover'
                    width={1200}
                />

                <div tw='flex absolute left-0 right-0 bottom-0 h-[130px] bg-teal-600 flex items-center justify-center'>
                    <img
                        src='https://davendra.me/images/logo-teal.png'
                        alt='Davendra Jayasingam'
                        height={100}
                    />
                    <p
                        tw='font-bold text-teal-100 text-6xl ml-4'
                        style={{
                            fontFamily: '"Righteous"'
                        }}
                    >
                        {alt}
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Righteous',
                    data: await righteousFont,
                    style: 'normal',
                    weight: 400
                }
            ]
        }
    )
}