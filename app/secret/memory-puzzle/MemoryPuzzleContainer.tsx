import { useEffect, useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'
import { StaticImageData } from 'next/image'

import MemoryPuzzleGame from '@/app/secret/memory-puzzle/MemoryPuzzleGame'
import PuzzleHeader from '@/app/secret/PuzzleHeader'
import PuzzleFooter from '../PuzzleFooter'

const cardBack = '/images/secret/memory-puzzle/card-back.png'
const cardFront1 = '/images/secret/memory-puzzle/card-front-1.png'
const cardFront2 = '/images/secret/memory-puzzle/card-front-2.png'
const cardFront3 = '/images/secret/memory-puzzle/card-front-3.png'
const cardFront4 = '/images/secret/memory-puzzle/card-front-4.png'
const cardFront5 = '/images/secret/memory-puzzle/card-front-5.png'
const cardFront6 = '/images/secret/memory-puzzle/card-front-6.png'
const cardFront7 = '/images/secret/memory-puzzle/card-front-7.png'
const cardFront8 = '/images/secret/memory-puzzle/card-front-8.png'

type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function MemoryPuzzleContainer({ onCompleted, onAbandoned }: Props)
{
    const [gameOver, setGameOver] = useState(false)

    const [loadedImages, setLoadedImages] = useState<string[]>(['', '', '', '', '', '', '', ''])

    const loadImages = async () => 
    {
        const newLoadedImages = [...loadedImages]

        const loadImageHelper = async (imageSrc: string, index: number) =>
        {
            return fetch(imageSrc)
                .then(res => res.blob())
                .then(blob => new Promise<string>((resolve, reject) =>
                {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result as string)
                    reader.onerror = () => reject(reader.error)
                    reader.readAsDataURL(blob)
                }))
                .then(base64 => newLoadedImages[index] = base64)
                .catch(error => console.error(error))
        }

        const promises = []
        promises.push(loadImageHelper(cardBack, 0))
        promises.push(loadImageHelper(cardFront1, 1))
        promises.push(loadImageHelper(cardFront2, 2))
        promises.push(loadImageHelper(cardFront3, 3))
        promises.push(loadImageHelper(cardFront4, 4))
        promises.push(loadImageHelper(cardFront5, 5))
        promises.push(loadImageHelper(cardFront6, 6))
        promises.push(loadImageHelper(cardFront7, 7))
        promises.push(loadImageHelper(cardFront8, 8))
        await Promise.all(promises)

        setLoadedImages(newLoadedImages)
    }

    useEffect(() =>
    {
        loadImages()
    }, [])

    const imagesLoaded = loadedImages.every(image => image !== '')

    return (
        <div className='max-w-screen-sm mx-auto'>

            <PuzzleHeader
                title='Assemble'
                texts={[
                    'Match the pairs of cards and assemble the Fellowship, uniting the heroes of Middle-Earth in their mission to carry the Ring to Mordor.'
                ]}
            />

            {!imagesLoaded && <ImSpinner3 className='w-8 h-8 text-white animate-spin mx-auto' />}

            {imagesLoaded && <MemoryPuzzleGame
                base64Images={loadedImages}
                onCompleted={() => setGameOver(true)}
            />}

            <PuzzleFooter
                gameOver={gameOver}
                onCompleted={onCompleted}
                onAbandoned={onAbandoned}
            />

        </div>
    )
}