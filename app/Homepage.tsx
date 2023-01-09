'use client'

import Sidebar from '@/app/Sidebar'
import AutoCodeBlock from '@/app/code-blocks/AutoCodeBlock'
import { useState } from 'react'

type Props = {
    repoData: Array<RepoFileData>
}

const Homepage = ({ repoData }: Props) =>
{
    const [selectedFileData, setSelectedFileData] = useState<RepoFileData>(repoData.find(file => file.name === 'README.md')!)

    return (
        <main className='flex flex-row space-x-2'>
            <Sidebar
                repoData={repoData}
                onClick={data => setSelectedFileData(data)}
                className='max-w-xs'
            />
            <div className='flex-1'>
                <AutoCodeBlock
                    repoFileData={selectedFileData}
                />
            </div>
        </main>
    )
}

export default Homepage