import OpenGraphImage from '@/app/OpenGraphImage'

export const runtime = 'edge'

export const alt = 'Projects'
export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

export default async function Image() 
{
    return OpenGraphImage({ title: alt })
}