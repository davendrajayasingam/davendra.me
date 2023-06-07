'use client'

import dynamic from 'next/dynamic'
import { VscFilePdf } from 'react-icons/vsc'

import Title from '@/app/(ui)/Title'
import Button from '@/app/(ui)/Button'

const ResumeViewer = dynamic(() => import('./ResumeViewer'), { ssr: false })

export default function Resume()
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

            <Title className='my-8'>
                Résumé
            </Title>

            <Button
                onClick={handleDownload}
                className='mt-8 mb-4 mx-auto'
            >
                <VscFilePdf className='text-2xl' />
                <span>Download PDF</span>
            </Button>

            <ResumeViewer />

        </div>
    )
}