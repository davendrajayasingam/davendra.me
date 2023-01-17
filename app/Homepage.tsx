'use client'

import { useState } from 'react'

import About from '@/app/About'
import ActivityBar from '@/app/ActivityBar'
import CodeBlock from '@/app/CodeBlock'
import Contact from '@/app/Contact'
import Resume from '@/app/Resume'
import Sidebar from '@/app/Sidebar'
import Tabs from '@/app/Tabs'
import Breadcrumbs from './Breadcrumbs'

type Props = {
    repoData: Array<RepoFileData>
}

const Homepage = ({ repoData }: Props) =>
{
    const defaultOpenFile = repoData.find(file => file.name === 'README.md')!

    const [selectedFileData, setSelectedFileData] = useState<RepoFileData>(defaultOpenFile)

    const [selectedActivityBarTab, setSelectedActivityBarTab] = useState<ActivityBarTab>('home')

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

            <div className='fixed bottom-0 inset-x-0 z-50 h-16 md:h-auto md:left-0 md:w-16'>
                <ActivityBar
                    selectedTab={selectedActivityBarTab}
                    onChangeTab={tab => setSelectedActivityBarTab(tab)}
                />
            </div>

            <div className='pb-16 md:pb-0 md:ml-16'>

                {selectedActivityBarTab === 'home' && <About />}

                {selectedActivityBarTab === 'resume' && <Resume />}

                {selectedActivityBarTab === 'contact' && <Contact />}

                {
                    selectedActivityBarTab === 'explorer'
                    && <div className='flex flex-row'>
                        <Sidebar
                            isShowing={selectedActivityBarTab === 'explorer'}
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
                        <div className='flex-1 ml-[320px]'>
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
                                    className='fixed top-11'
                                />
                            }
                            <CodeBlock
                                repoFileData={selectedFileData}
                                className='overflow-scroll mt-20'
                            />
                        </div>
                    </div>
                }
            </div>

        </main >
    )
}

export default Homepage