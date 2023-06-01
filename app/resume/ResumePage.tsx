'use client'

import dynamic from 'next/dynamic'
const ResumeViewer = dynamic(() => import('./ResumeViewer'), { ssr: false })
import { VscFilePdf } from 'react-icons/vsc'

import { buttonClassName, classNames } from '@/utils/helperFunctions'

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
        <div>

            <h1 className='mt-8 font-primary text-4xl text-center text-teal-100'>
                Résumé
            </h1>

            <button
                type='button'
                onClick={handleDownload}
                className={classNames(
                    'mt-8 mb-4 mx-auto',
                    buttonClassName,
                )}
            >
                <VscFilePdf className='text-2xl' />
                <span>Download PDF</span>
            </button>

            <ResumeViewer />

        </div>
    )
}