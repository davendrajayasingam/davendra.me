'use client'

import dynamic from 'next/dynamic'
const ResumeViewer = dynamic(() => import('./ResumeViewer'), { ssr: false })

import { buttonClassName } from '@/utils/helperFunctions'
import { VscFilePdf } from 'react-icons/vsc'

export default function ResumePage()
{
    const handleDownload = () =>
    {
        const link = document.createElement('a')
        link.href = '/documents/Davendra-Jayasingam-Resume.pdf'
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.click()
    }

    return (
        <div className='w-full text-center max-w-screen-lg mx-auto'>

            <div className='p-4 flex flex-col space-y-8 items-center'>

                <h1 className='font-medium text-4xl text-theme-editorLink.activeForeground'>
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