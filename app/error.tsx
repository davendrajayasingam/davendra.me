// Guide: https://beta.nextjs.org/docs/api-reference/file-conventions/error

'use client' // Error components must be Client components

import Button from '@/app/(ui)/Button'

type Props = {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: Props)
{
    return (
        <div className='p-6 flex flex-col items-center justify-center space-y-8 w-full h-full max-w-[30rem] min-h-screen mx-auto'>

            <div>
                <h1 className='text-6xl text-center'>
                    😕
                </h1>
                <h1 className='font-bold text-center text-amber-400 text-4xl'>
                    Whoops!
                </h1>
                <h2 className='mt-2 font-medium text-lg text-center text-teal-100'>
                    An error has occured. I&apos;m sorry!
                </h2>
            </div>

            <div className='grid grid-cols-2 gap-4 w-full'>
                <Button onClick={() => window.history.back()}>
                    Go Back
                </Button>
                <Button onClick={() => reset()}>
                    Try Again
                </Button>
            </div>

        </div>
    )
}