'use client'

import dynamic from 'next/dynamic'
const ResumeViewer = dynamic(() => import('./ResumeViewer'), { ssr: false })

import { buttonClassName } from '@/utils/helperFunctions'
import { VscFilePdf } from 'react-icons/vsc'

export default function ResumePage()
{
    const handleDownload = () =>
    {
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.download = 'Davendra Jayasingam Résumé.pdf'
        a.href = '/documents/Davendra-Jayasingam-Resume.pdf'
        a.click()
    }

    return (
        <div className='w-full text-center max-w-screen-lg mx-auto'>

            <div className='p-4 flex flex-col space-y-8 items-center'>

                <h1 className='font-medium text-4xl text-theme-editor.foreground'>
                    My Résumé
                </h1>

                <button
                    type='button'
                    onClick={handleDownload}
                    className={buttonClassName}
                >
                    <VscFilePdf className='text-2xl' />
                    <span>Download</span>
                </button>

            </div>

            <ResumeViewer />

        </div>
    )
}