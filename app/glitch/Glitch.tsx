import Image, { StaticImageData } from 'next/image'

import { classNames } from '@/utils/helperFunctions'

import imgBug1 from '@/public/images/glitch/bug-1.png'
import imgBug2 from '@/public/images/glitch/bug-2.png'
import imgBug3 from '@/public/images/glitch/bug-3.png'
import imgBug4 from '@/public/images/glitch/bug-4.png'

export default function Glitch()
{
    const displayPuzzle = (imageSrc: StaticImageData, description: string) => (
        <div className='bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md border-4 border-glitch-orange flex flex-col justify-between'>
            <Image
                src={imageSrc}
                alt='Reveal'
                className='rounded-t-md'
            />
            <p className='p-4 font-semibold text-lg text-glitch-primary text-center'>
                {description}
            </p>
            <div className='w-full'>
                <button
                    className={classNames(
                        'w-full p-4',
                        'flex items-center justify-center space-x-1',
                        'bg-glitch-orange hover:brightness-125',
                        'font-bold text-white text-lg',
                        'transition-colors duration-500 ease-in-out',
                        'focus:outline-none',
                    )}
                >
                    ACTIVATE
                </button>
            </div>
        </div>
    )

    return (
        <div className='min-h-screen w-screen max-w-screen-lg mx-auto'>
            <div className='flex flex-col space-y-8 h-full py-8'>

                <div className='mx-4 p-4 flex flex-col space-y-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md'>
                    <h1 className='text-center font-medium text-4xl text-glitch-primary'>
                        GLITCH DEBUGGER
                    </h1>

                    <p className='pt-4 text-lg text-justify text-theme-editor.foreground'>
                        <b className='text-glitch-primary'>RAMA</b>, a Robust Anti-Malware Agent, utilizes its advanced capabilities to detect, neutralize, and eradicate malicious software threats.
                    </p>

                    <p className='text-lg text-justify text-theme-editor.foreground'>
                        <b className='text-glitch-primary'>RAVANA</b>, a rogue AI of unparalleled intelligence, infiltrated <b className='text-glitch-primary'>RAMA</b>'s systems and unleashed chaos by introducing anomalies and glitches.
                    </p>

                    <p className='text-lg text-justify text-theme-editor.foreground'>
                        As a precautionary measure, <b className='text-glitch-primary'>RAMA</b> had established four substations that activate a <b className='text-glitch-primary'>KILL SWITCH</b> in the event of such anomalies. However, <b className='text-glitch-primary'>RAVANA</b> has deactivated these substations.
                    </p>

                    <p className='text-lg text-justify text-theme-editor.foreground'>
                        Do <b className='text-glitch-primary'>YOU</b> have what it takes to enter these glitches, decipher their cryptic puzzles, and trigger the <b className='text-glitch-primary'>KILL SWITCH</b>?
                    </p>
                </div>

                <div className='m-4 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    {displayPuzzle(imgBug1, 'Step 1: Reveal')}
                    {displayPuzzle(imgBug2, 'Step 2: Associate')}
                    {displayPuzzle(imgBug3, 'Step 3: Manipulate')}
                    {displayPuzzle(imgBug4, 'Step 4: Analyze')}
                </div>
                
            </div>
        </div>
    )
}