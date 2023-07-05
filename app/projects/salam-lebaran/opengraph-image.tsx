import OpenGraphImage from '@/app/OpenGraphImage'

export const runtime = 'edge'

export const alt = 'Maxis Salam Lebaran'
export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

const coverImage = 'images/projects/salam-lebaran/salamlebaran-cover.png'

export default async function Image() 
{
    return OpenGraphImage({
        title: alt,
        imageSrc: coverImage
    })
}