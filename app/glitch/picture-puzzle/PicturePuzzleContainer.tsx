import { useEffect, useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'

import puzzleImg from '@/app/glitch/picture-puzzle/images/ravana.png'
import PicturePuzzleGame from '@/app/glitch/picture-puzzle/PicturePuzzleGame'

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
        <div className='flex flex-col items-center justify-center space-y-8 min-h-screen py-8 max-w-screen-lg mx-auto'>

            <div className='mx-4 p-4 flex flex-col space-y-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md'>
                <h1 className='text-center font-medium text-4xl text-glitch-yellow'>
                    BLAH BLAH
                </h1>

                <p className='pt-4 text-lg text-justify text-theme-editor.foreground'>
                    <b className='text-glitch-yellow'>RAMA</b>, a Robust Anti-Malware Agent, utilizes its advanced capabilities to detect, neutralize, and eradicate malicious software threats.
                </p>
            </div>

            {!loadedImage && <ImSpinner3 className='w-8 h-8 text-white animate-spin' />}

            {loadedImage && <PicturePuzzleGame
                image={loadedImage}
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