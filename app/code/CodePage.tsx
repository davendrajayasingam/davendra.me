'use client'

import { useState } from 'react'

import ActivityBar from '@/app/ActivityBar'
import CodeBlock from '@/app/code/CodeBlock'
import Sidebar from '@/app/code/Sidebar'
import Tabs from '@/app/code/Tabs'
import Breadcrumbs from '@/app/code/Breadcrumbs'
import ImageBlock from '@/app/code/ImageBlock'

type Props = {
    repoData: Array<RepoFileData>
}

const CodePage = ({ repoData }: Props) =>
{
    const defaultOpenFile = repoData.find(file => file.name === 'README.md')!

    const [selectedFileData, setSelectedFileData] = useState<RepoFileData>(defaultOpenFile)

    const [openTabs, setOpenTabs] = useState<Array<RepoFileData>>([defaultOpenFile])

    const handleCloseEditor = (data: RepoFileData) =>
    {
        // If the tab being closed is the active tab, set the active tab to the previous tab
        if (selectedFileData.path === data.path)
        {
            const dataIdx = openTabs.findIndex(tab => tab.path === data.path)
            const newActiveTab = openTabs[dataIdx - 1] || openTabs[dataIdx + 1]
            setSelectedFileData(newActiveTab)
        }
        setOpenTabs(openTabs.filter(tab => tab.path !== data.path))
    }

    return (
        <main>

            <ActivityBar />

            <div className='pb-16 md:pb-0 md:ml-16 flex flex-row'>

                <Sidebar
                    repoData={repoData}
                    selectedFile={selectedFileData}
                    onSelectFile={data =>
                    {
                        if (!openTabs.find(tab => tab.path === data.path))
                        {
                            setOpenTabs([data, ...openTabs])
                        }
                        setSelectedFileData(data)
                    }}
                    openEditors={openTabs}
                    onCloseEditor={data => handleCloseEditor(data)}
                />

                <div className='flex-1 ml-64'>

                    {
                        openTabs?.[0]
                        && <Tabs
                            activeTab={selectedFileData}
                            openTabs={openTabs}
                            onChangeTab={data => setSelectedFileData(data)}
                            onCloseTab={data => handleCloseEditor(data)}
                        />
                    }

                    {
                        selectedFileData
                        && <Breadcrumbs
                            activeTab={selectedFileData}
                            className='fixed top-12'
                        />
                    }

                    <div className='overflow-scroll mt-24'>
                        {
                            ['png', 'jpg', 'jpeg', 'ico'].includes(selectedFileData.extension)
                                ? <imgBlock src={selectedFileData.url} />
                                : <CodeBlock repoFileData={selectedFileData} />
                        }
                    </div>

                </div>

            </div>

        </main>
    )
}

export default CodePage