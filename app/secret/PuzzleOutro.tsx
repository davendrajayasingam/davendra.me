import { classNames } from '@/utils/helperFunctions'
import PuzzleHeader from '@/app/secret/PuzzleHeader'
import Confetti from '@/app/secret/Confetti'

import outroImage from '@/app/secret/images/outro-bg.png'

type Props = {
    onRestart: () => void
}

export default function PuzzleOutro({ onRestart }: Props)
{
    return (
        <div>

            <PuzzleHeader
                title='Victory!'
                image={outroImage}
                texts={[
                    'With unwavering determination and indomitable spirit, you have triumphed over the challenges that lay before you, brave adventurer.',
                    'Your efforts have been recognized by the Elves, who in their grace, have granted you passage to Valinor.',
                    'As you sail across the Sundering Seas, guided by the gentle whispers of the winds, you leave behind the lands of Middle-earth forever, embarking on an eternal journey to the Undying Lands.',
                    'Your legend shall endure for all time, and may your soul find solace and everlasting peace.'
                ]}
            />

            <div className='text-center'>
                <button
                    className={classNames(
                        'mt-4',
                        'font-medium text-white text-lg',
                        'px-6 py-2 mx-auto rounded-full shadow-md',
                        'bg-secret-green border-2 border-white',
                        'outline-none focus:outline-none'
                    )}
                    onClick={onRestart}
                >
                    RESTART
                </button>
            </div>

            <Confetti />

        </div>
    )
}