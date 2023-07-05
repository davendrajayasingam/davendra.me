import Image from 'next/image'

type Props = {
    src: string,
    className?: string,
}

const ImageBlock = ({ src, className }: Props) =>
{
    return <div className={className}>
        <img
            src={src}
            alt=''
            fill
            className='object-scale-down'
        />
    </div>
}

export default ImageBlock