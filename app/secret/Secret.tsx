'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

import PuzzleIntro from '@/app/secret/PuzzleIntro'
import PicturePuzzleContainer from '@/app/secret/picture-puzzle/PicturePuzzleContainer'
import MemoryPuzzleContainer from '@/app/secret/memory-puzzle/MemoryPuzzleContainer'
import SudokuPuzzleContainer from '@/app/secret/sudoku-puzzle/SudokuPuzzleContainer'
import PuzzleOutro from '@/app/secret/PuzzleOutro'

export default function Secret()
{
    // 1 - 4 = challenges, 5 = kill switch
    const [completedStep, setCompletedStep] = useState<number>(0)
    const [currentPuzzleNumber, setCurrentPuzzleNumber] = useState<number>(0)

    const activatePuzzle = (puzzleNumber: number) =>
    {
        if (completedStep === (puzzleNumber - 1))
        {
            setCurrentPuzzleNumber(puzzleNumber)
        }
        else if (completedStep > (puzzleNumber - 1))
        {
            toast.success('Victorious!')
        }
        else
        {
            toast.error('Complete the previous challenge first!')
        }
    }

    const completePuzzle = () =>
    {
        setCompletedStep(completedStep + 1)
        setCurrentPuzzleNumber(0)
    }

    const abandonPuzzle = () =>
    {
        setCurrentPuzzleNumber(0)
    }

    const restart = () =>
    {
        setCompletedStep(0)
        setCurrentPuzzleNumber(0)
    }

    return (
        <div className='p-4 max-w-screen-lg mx-auto'>

            {
                currentPuzzleNumber === 0
                && <PuzzleIntro
                    completedStep={completedStep}
                    activatePuzzle={activatePuzzle}
                />
            }

            {
                currentPuzzleNumber === 1
                && <MemoryPuzzleContainer
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

            {
                currentPuzzleNumber === 2
                && <PicturePuzzleContainer
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

            {
                currentPuzzleNumber === 3
                && <SudokuPuzzleContainer
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

            {
                completedStep === 3
                && <PuzzleOutro
                    onRestart={restart}
                />
            }

        </div>
    )
}