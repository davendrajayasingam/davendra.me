'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

import GlitchControlPanel from '@/app/glitch/GlitchControlPanel'
import GlitchMemoryPuzzle from './GlitchMemoryPuzzle'
import GlitchPhotoPuzzle from './GlitchPhotoPuzzle'
import GlitchSudokuPuzzle from './GlitchSudokuPuzzle'
import GlitchMazePuzzle from './GlitchMazePuzzle'

export default function Glitch()
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
            toast.success(`Substation ${puzzleNumber} has already been activated!`)
        }
        else
        {
            toast.error(`Substation ${puzzleNumber} is locked! Activate the previous substations first!`)
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

    const activateKillSwitch = () =>
    {
        if (completedStep === 4)
        {
            toast.success('Congratulations! You have successfully activated the KILL SWITCH!')
            setCompletedStep(5)
        }
        else
        {
            toast.error('You have not activated all substations!')
        }
    }

    return (
        <div className='min-h-screen w-screen max-w-screen-lg mx-auto'>

            {
                currentPuzzleNumber === 0
                && <GlitchControlPanel
                    completedStep={completedStep}
                    activatePuzzle={activatePuzzle}
                    activateKillSwitch={activateKillSwitch} />
            }

            {
                currentPuzzleNumber === 1
                && <GlitchPhotoPuzzle
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

            {
                currentPuzzleNumber === 2
                && <GlitchMemoryPuzzle
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

            {
                currentPuzzleNumber === 3
                && <GlitchSudokuPuzzle
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

            {
                currentPuzzleNumber === 4
                && <GlitchMazePuzzle
                    onCompleted={completePuzzle}
                    onAbandoned={abandonPuzzle}
                />
            }

        </div>
    )
}