import { useEffect, useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'
import { StaticImageData } from 'next/image'

import PuzzleHeader from '@/app/secret/PuzzleHeader'
import SudokuPuzzleGame from '@/app/secret/sudoku-puzzle/SudokuPuzzleGame'
import PuzzleFooter from '@/app/secret/PuzzleFooter'

import icon0 from '@/app/secret/sudoku-puzzle/images/icon-0.png'
import icon1 from '@/app/secret/sudoku-puzzle/images/icon-1.png'
import icon2 from '@/app/secret/sudoku-puzzle/images/icon-2.png'
import icon3 from '@/app/secret/sudoku-puzzle/images/icon-3.png'
import icon4 from '@/app/secret/sudoku-puzzle/images/icon-4.png'

type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function SudokuPuzzleContainer({ onCompleted, onAbandoned }: Props)
{
    const [gameOver, setGameOver] = useState(false)

    const [loadedImages, setLoadedImages] = useState<string[]>(['', '', '', '', ''])

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
        promises.push(loadImageHelper(icon0, 0))
        promises.push(loadImageHelper(icon1, 1))
        promises.push(loadImageHelper(icon2, 2))
        promises.push(loadImageHelper(icon3, 3))
        promises.push(loadImageHelper(icon4, 4))
        await Promise.all(promises)

        setLoadedImages(newLoadedImages)
    }

    useEffect(() =>
    {
        loadImages()
    }, [])

    const defaultGrid = [
        1, 0, 0, 0,
        0, 2, 0, 0,
        0, 0, 3, 0,
        0, 0, 0, 4
    ]

    const imagesLoaded = loadedImages.every(image => image !== '')

    return (
        <div className='max-w-screen-sm mx-auto'>

            <PuzzleHeader
                title='Disrupt'
                texts={[
                    'Brave champion, prepare to face your final challenge—a perplexing Sudoku-based trial that disrupts and weakens the forces of evil. Engage in a strategic dance by clicking on squares, altering their contents, ensuring that each row and column houses a unique enemy. Remember, the locked content is indicated by white borders.'
                ]}
            />

            {!imagesLoaded && <ImSpinner3 className='w-8 h-8 text-white animate-spin mx-auto' />}

            {imagesLoaded && <SudokuPuzzleGame
                defaultGrid={defaultGrid}
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