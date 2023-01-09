'use client'

import { useEffect, useState } from 'react'
import { RxChevronDown, RxChevronRight } from 'react-icons/rx'

type Props = {
    repoData: RepoFileData[],
    onClick: (file: RepoFileData) => void,
    className?: string,
}

const Sidebar = ({ repoData, onClick, className }: Props) =>
{
    const defaultExpandedFolderState: { [field: string]: boolean } = {
        all: true, // root directory
    }

    // to know which directories/folders are expanded
    const [expandedFolderState, setExpandedFolderState] = useState(defaultExpandedFolderState)

    useEffect(() =>
    {
        const updatedExpandedState = { ...defaultExpandedFolderState }

        for (const file of repoData)
        {
            if (file.type === 'dir')
            {
                updatedExpandedState[file.path] = true
            }
        }

        setExpandedFolderState(updatedExpandedState)
    }, [repoData])

    const recursiveFolderButtonHelper = (file: RepoFileData) => (
        <div
            key={file.path}
            className={className || ''}
        >
            <button
                type='button'
                className='flex items-center space-x-1'
                onClick={() =>
                {
                    if (file.type === 'dir')
                    {
                        setExpandedFolderState({ ...expandedFolderState, [file.path]: !expandedFolderState[file.path] })
                    }
                    else
                    {
                        onClick(file)
                    }
                }}
            >
                {
                    file.type === 'dir'
                    && (expandedFolderState[file.path]
                        ? <RxChevronDown />
                        : <RxChevronRight />)
                }
                <span>{file.name}</span>

            </button>
            {
                file.type === 'dir'
                && expandedFolderState[file.path]
                && (file.children || []).map(child => recursiveFolderButtonHelper(child))
            }
        </div>
    )

    return (
        <aside>

            <p>EXPLORER</p>

            <button
                type='button'
                className='flex items-center space-x-1'
                onClick={() => setExpandedFolderState({ ...expandedFolderState, all: !expandedFolderState.all })}
            >
                {
                    expandedFolderState.all
                        ? <RxChevronDown />
                        : <RxChevronRight />
                }
                <span>DAVENDRA.ME</span>
            </button>

            {
                expandedFolderState.all
                && repoData.map(file => recursiveFolderButtonHelper(file))
            }


        </aside>
    )
}

export default Sidebar