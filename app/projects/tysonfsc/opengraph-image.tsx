import OpenGraphImage from '@/app/OpenGraphImage'

import coverImage from '@/app/projects/tysonfsc/images/tysonfsc-cover.png'

export const runtime = 'edge'

export const alt = 'Tyson Foodservice Catalogue'
export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

export default async function Image() 
{
    return OpenGraphImage({
        title: alt,
        imageSrc: coverImage.src
    })
}