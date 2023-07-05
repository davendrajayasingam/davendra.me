import OpenGraphImage from '@/app/OpenGraphImage'

export const runtime = 'edge'

export const alt = 'Tyson Foodservice Catalogue'
export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

const coverImage = 'images/projects/tysonfsc/tysonfsc-cover.png'

export default async function Image() 
{
    return OpenGraphImage({
        title: alt,
        imageSrc: coverImage
    })
}