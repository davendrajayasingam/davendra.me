import Image, { StaticImageData } from 'next/image'

import { classNames } from '@/utils/helperFunctions'

import imgBug1 from '@/public/images/glitch/bug-1.png'
import imgBug2 from '@/public/images/glitch/bug-2.png'
import imgBug3 from '@/public/images/glitch/bug-3.png'
import imgBug4 from '@/public/images/glitch/bug-4.png'
import imgBug1Fixed from '@/public/images/glitch/bug-1-fixed.png'
import imgBug2Fixed from '@/public/images/glitch/bug-2-fixed.png'
import imgBug3Fixed from '@/public/images/glitch/bug-3-fixed.png'
import imgBug4Fixed from '@/public/images/glitch/bug-4-fixed.png'

type Props = {
    completedStep: number
    activatePuzzle: (puzzleNumber: number) => void
    activateKillSwitch: () => void
}

export default function GlitchControlPanel({ completedStep, activatePuzzle, activateKillSwitch }: Props)
{
    const displayPuzzle = (imageSrc: StaticImageData, puzzleNumber: number, description: string) => (
        <button
            onClick={() => activatePuzzle(puzzleNumber)}
            className={classNames(
                'bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md border-4 border-glitch-orange flex flex-col justify-between',
                completedStep === (puzzleNumber - 1) ? 'border-glitch-orange' : completedStep > (puzzleNumber - 1) ? 'border-glitch-green' : 'grayscale cursor-not-allowed',
                completedStep <= (puzzleNumber - 1) ? 'hover:brightness-125' : ''
            )}
        >
            <Image
                src={imageSrc}
                alt='Reveal'
                className='rounded-t-md'
            />
            <span className='block w-full p-4 font-semibold text-lg text-glitch-yellow text-center'>
                Step {puzzleNumber}: {description}
            </span>
            <span className={classNames(
                'block w-full p-4',
                'flex items-center justify-center space-x-1',
                'bg-glitch-orange',
                'font-bold text-white text-lg',
                'transition-colors duration-500 ease-in-out',
                'focus:outline-none',
                completedStep === (puzzleNumber - 1) ? 'bg-glitch-orange' : 'bg-glitch-green'
            )}>
                {
                    completedStep === (puzzleNumber - 1)
                        ? 'ACTIVATE'
                        : completedStep > (puzzleNumber - 1)
                            ? 'ACTIVATED!'
                            : 'LOCKED'
                }
            </span>
        </button>
    )

    return (
        <div className='flex flex-col space-y-8 h-full py-8'>

            <div className='mx-4 p-4 flex flex-col space-y-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md'>
                <h1 className='text-center font-medium text-4xl text-glitch-yellow'>
                    GLITCH DEBUGGER
                </h1>

                <p className='pt-4 text-lg text-justify text-theme-editor.foreground'>
                    <b className='text-glitch-yellow'>RAMA</b>, a Robust Anti-Malware Agent, utilizes its advanced capabilities to detect, neutralize, and eradicate malicious software threats.
                </p>

                <p className='text-lg text-justify text-theme-editor.foreground'>
                    <b className='text-glitch-yellow'>RAVANA</b>, a rogue AI of unparalleled intelligence, infiltrated <b className='text-glitch-yellow'>RAMA</b>'s systems and unleashed chaos by introducing anomalies and glitches.
                </p>

                <p className='text-lg text-justify text-theme-editor.foreground'>
                    As a precautionary measure, <b className='text-glitch-yellow'>RAMA</b> established four substations that activate a <b className='text-glitch-yellow'>KILL SWITCH</b> in the event of such anomalies. However, <b className='text-glitch-yellow'>RAVANA</b> has deactivated these substations.
                </p>

                <p className='text-lg text-justify text-theme-editor.foreground'>
                    <b className='text-glitch-yellow'>CHAMPION</b>, can you enter these glitches, decipher their cryptic puzzles, and trigger the <b className='text-glitch-yellow'>KILL SWITCH</b>?
                </p>
            </div>

            <div className='m-4 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {displayPuzzle(completedStep >= 1 ? imgBug1Fixed : imgBug1, 1, 'Reveal')}
                {displayPuzzle(completedStep >= 2 ? imgBug2Fixed : imgBug2, 2, 'Associate')}
                {displayPuzzle(completedStep >= 3 ? imgBug3Fixed : imgBug3, 3, 'Manipulate')}
                {displayPuzzle(completedStep >= 4 ? imgBug4Fixed : imgBug4, 4, 'Analyze')}
            </div>

            <div className='m-4'>
                <button
                    className={classNames(
                        'block w-full p-4 bg-glitch-green',
                        'font-bold text-xl text-white',
                        'rounded-md shadow-md',
                        completedStep === 4 ? 'animate-pulse' : 'grayscale cursor-not-allowed',
                    )}
                    onClick={() => activateKillSwitch()}
                >
                    ACTIVATE KILL SWITCH!
                </button>
            </div>

        </div>
    )
}