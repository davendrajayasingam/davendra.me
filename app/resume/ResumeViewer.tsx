import { useEffect, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

export default function ResumeViewer()
{
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() =>
    {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

        function handleResize()
        {
            setWindowWidth(window.innerWidth)
        }
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Document
            file={'/documents/Davendra-Jayasingam-Resume.pdf'}
            renderMode={'svg'}
            externalLinkTarget='_blank'
            className='flex justify-center'
        >
            <Page
                pageIndex={0}
                scale={1}
                renderMode='svg'
                width={Math.min(windowWidth, 1024)} // max-w-screen-lg
                renderAnnotationLayer={false}
            />
        </Document>
    )
}