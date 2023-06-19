/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import coverImage from '@/app/projects/supermom/images/supermom-cover.png'

export const runtime = 'edge'

export const alt = 'SUPERMOM PROJECT'
export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

export default async function Image() 
{
    return new ImageResponse(
        (
            <div
                tw='flex flex-col justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(https://davendra.me${coverImage.src})`
                }}
            >
                <div tw='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30'>
                    <img
                        src='https://davendra.me/images/logo-teal.png'
                        alt='Davendra Jayasingam'
                        width={1000}
                    />

                    <p tw='flex font-bold bg-teal-100 rounded-full px-12 py-3 text-teal-600 text-6xl'>
                        {`https://davendra.me${coverImage.src}`}
                    </p>
                </div>
            </div>
        )
    )
}