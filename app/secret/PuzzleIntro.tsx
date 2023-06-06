import Image, { StaticImageData } from 'next/image'

import { classNames } from '@/utils/helperFunctions'

import questImage1 from '@/app/secret/images/quest-1.png'
import questImage2 from '@/app/secret/images/quest-2.png'
import questImage3 from '@/app/secret/images/quest-3.png'
import PuzzleHeader from './PuzzleHeader'

type Props = {
    completedStep: number
    activatePuzzle: (puzzleNumber: number) => void
}

export default function PuzzleIntro({ completedStep, activatePuzzle }: Props)
{
    const displayPuzzle = (imageSrc: StaticImageData, puzzleNumber: number, description: string) => (
        <button
            onClick={() => activatePuzzle(puzzleNumber)}
            className={classNames(
                'bg-teal-600 bg-opacity-20 backdrop-filter backdrop-blur-md rounded-xl border-4 flex flex-col justify-between',
                completedStep === (puzzleNumber - 1) ? 'border-secret-orange' : completedStep > (puzzleNumber - 1) ? 'border-secret-green' : 'border-secret-orange grayscale cursor-not-allowed',
                completedStep <= (puzzleNumber - 1) ? 'hover:brightness-125' : ''
            )}
        >
            <Image
                src={imageSrc}
                alt='Reveal'
                className='rounded-t-xl'
            />
            <span className='block w-full p-4 font-semibold text-lg text-white text-center'>
                {description}
            </span>
            <span className={classNames(
                'block w-full p-4',
                'flex items-center justify-center space-x-1',
                'font-primary text-white text-xl',
                'transition-colors duration-500 ease-in-out',
                'focus:outline-none',
                completedStep === (puzzleNumber - 1) ? 'bg-secret-orange' : completedStep > (puzzleNumber - 1) ? 'bg-secret-green' : 'bg-secret-orange',
            )}>
                {
                    completedStep === (puzzleNumber - 1)
                        ? 'EMBARK'
                        : completedStep > (puzzleNumber - 1)
                            ? 'COMPLETED!'
                            : 'LOCKED'
                }
            </span>
        </button>
    )

    return (
        <div>

            {
                completedStep < 3
                && <PuzzleHeader
                    title='Destiny Beckons'
                    texts={[
                        'In the realm of shadow and fire, a whispered prophecy echoes through the land. You, brave adventurer, have been chosen to undertake a legendary quest, a path fraught with three arduous challenges that will test your resolve and shape the destiny of Middle-earth.',
                        'Your first challenge is to assemble the fellowship, for they will embark on the perilous journey to Mordor and carry the One Ring to its ultimate fate.',
                        'Your journey continues to the treacherous depths of the Mines of Moria. Venture deep and reveal the true face of the Balrog of Morgoth, a relentless creature of fire and shadow, unveiling its true visage to grant Gandalf the strength to confront this demon from the ancient world.',
                        'The path to victory does not end there. Your final challenge awaits, calling upon your strategic prowess and guile. Seek to weaken the enemies that stand against you, disrupting their alliances and sowing seeds of discord.',
                        'Your journey, brave adventurer, holds the key to the fate of Middle-Earth. Will you accept this sacred charge and become a beacon of hope amidst the encroaching darkness?'
                    ]}
                />
            }

            <div className='pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {displayPuzzle(questImage1, 1, 'Assemble')}
                {displayPuzzle(questImage2, 2, 'Reveal')}
                {displayPuzzle(questImage3, 3, 'Disrupt')}
            </div>

        </div>
    )
}