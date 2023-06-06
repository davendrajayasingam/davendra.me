import { classNames } from '@/utils/helperFunctions'

type Props = {
    gameOver: boolean
    onCompleted: () => void
    onAbandoned: () => void
}

export default function PuzzleFooter({ gameOver, onCompleted, onAbandoned }: Props)
{
    return (
        <div className='mt-8 text-center'>
            {
                gameOver
                    ? <>
                        <p className='font-bold text-white text-xl bg-secret-green bg-opacity-75 p-4 rounded-xl border-2 border-secret-green'>
                            VICTORY!
                        </p>
                        <button
                            className={classNames(
                                'mt-4',
                                'font-medium text-white text-lg',
                                'px-6 py-2 mx-auto rounded-full shadow-md',
                                'bg-secret-green border-2 border-white',
                                'outline-none focus:outline-none'
                            )}
                            onClick={onCompleted}
                        >
                            CONTINUE
                        </button>
                    </>
                    : <button
                        className={classNames(
                            'font-medium text-white text-lg text-opacity-50 hover:text-opacity-100',
                            'px-6 py-2 mx-auto rounded-full shadow-md',
                            'bg-secret-red border-2 border-white border-opacity-50 hover:border-opacity-100',
                            'transition-colors duration-500 ease-in-out',
                            'outline-none focus:outline-none'
                        )}
                        onClick={onAbandoned}
                    >
                        ABANDON QUEST
                    </button>
            }
        </div>
    )
}