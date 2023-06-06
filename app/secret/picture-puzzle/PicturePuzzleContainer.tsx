import { useEffect, useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'

import PuzzleHeader from '@/app/secret/PuzzleHeader'
import PicturePuzzleGame from '@/app/secret/picture-puzzle/PicturePuzzleGame'
import PuzzleFooter from '@/app/secret/PuzzleFooter'

import puzzleImg from '@/app/secret/picture-puzzle/images/picture.png'

type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function PicturePuzzleContainer({ onCompleted, onAbandoned }: Props)
{
    const [gameOver, setGameOver] = useState(false)

    const [loadedImage, setLoadedImage] = useState<HTMLImageElement>()

    const loadImage = () => 
    {
        fetch(puzzleImg.src)
            .then(res => res.blob())
            .then(blob => new Promise<string>((resolve, reject) =>
            {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result as string)
                reader.onerror = () => reject(reader.error)
                reader.readAsDataURL(blob)
            }))
            .then(base64 =>
            {
                const image = document.createElement('img')
                image.src = base64
                image.onload = () => setLoadedImage(image)
            })
            .catch(error => console.error(error))
    }

    useEffect(() =>
    {
        loadImage()
    }, [])

    return (
        <div className='max-w-screen-sm mx-auto'>

            <PuzzleHeader
                title='Reveal'
                texts={[
                    'Drag the pieces to rearrange them and to unveil the ancient, fiery terror that lies dormant within the depths of Moria.'
                ]}
            />

            {!loadedImage && <ImSpinner3 className='w-8 h-8 text-white animate-spin mx-auto' />}

            {loadedImage && <div className='bg-secret-orange'>
                <PicturePuzzleGame
                    image={loadedImage}
                    onCompleted={() => setGameOver(true)}
                />
            </div>}

            <PuzzleFooter
                gameOver={gameOver}
                onCompleted={onCompleted}
                onAbandoned={onAbandoned}
            />

        </div>
    )
}