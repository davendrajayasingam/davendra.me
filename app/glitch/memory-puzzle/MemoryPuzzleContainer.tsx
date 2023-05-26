import { useEffect, useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'
import { StaticImageData } from 'next/image'

import MemoryPuzzleGame from '@/app/glitch/memory-puzzle/MemoryPuzzleGame'

import cardBack from '@/app/glitch/memory-puzzle/images/card-back.png'
import cardFront1 from '@/app/glitch/memory-puzzle/images/card-front-1.png'
import cardFront2 from '@/app/glitch/memory-puzzle/images/card-front-2.png'
import cardFront3 from '@/app/glitch/memory-puzzle/images/card-front-3.png'
import cardFront4 from '@/app/glitch/memory-puzzle/images/card-front-4.png'
import cardFront5 from '@/app/glitch/memory-puzzle/images/card-front-5.png'
import cardFront6 from '@/app/glitch/memory-puzzle/images/card-front-6.png'
import cardFront7 from '@/app/glitch/memory-puzzle/images/card-front-7.png'
import cardFront8 from '@/app/glitch/memory-puzzle/images/card-front-8.png'

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

        const loadImageHelper = async (imageSrc: StaticImageData, index: number) =>
        {
            return fetch(imageSrc.src)
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
        <div className='flex flex-col items-center justify-center space-y-8 min-h-screen py-8 max-w-screen-lg mx-auto'>

            <div className='mx-4 p-4 flex flex-col space-y-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md'>
                <h1 className='text-center font-medium text-4xl text-glitch-yellow'>
                    BLAH BLAH
                </h1>

                <p className='pt-4 text-lg text-justify text-theme-editor.foreground'>
                    <b className='text-glitch-yellow'>RAMA</b>, a Robust Anti-Malware Agent, utilizes its advanced capabilities to detect, neutralize, and eradicate malicious software threats.
                </p>
            </div>

            {!imagesLoaded && <ImSpinner3 className='w-8 h-8 text-white animate-spin' />}

            {imagesLoaded && <MemoryPuzzleGame
                base64Images={loadedImages}
                onCompleted={() => setGameOver(true)}
            />}

            <div className='text-center'>
                {
                    gameOver
                        ? <>
                            <p className='font-bold text-theme-red text-xl'>You did it!</p>
                        </>
                        : <>
                            <div className='mt-4'>
                                Back to main page
                            </div>
                        </>
                }
            </div>

        </div>
    )
}