'use client'

import { useEffect, useState } from 'react'
import { IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { Transition } from '@headlessui/react'

type Props = {
    isShowing: boolean,
    repoData: RepoFileData[],
    onClick: (file: RepoFileData) => void,
    className?: string,
}

const Sidebar = ({ isShowing, repoData, onClick, className }: Props) =>
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
                        ? <IoChevronDownOutline />
                        : <IoChevronForwardOutline />)
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
        <Transition
            show={isShowing}
            enter="transition ease-in-out duration-150 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-150 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <aside>

                <p>EXPLORER</p>

                <button
                    type='button'
                    className='flex items-center space-x-1'
                    onClick={() => setExpandedFolderState({ ...expandedFolderState, all: !expandedFolderState.all })}
                >
                    {
                        expandedFolderState.all
                            ? <IoChevronDownOutline />
                            : <IoChevronForwardOutline />
                    }
                    <span>DAVENDRA.ME</span>
                </button>

                {
                    expandedFolderState.all
                    && repoData.map(file => recursiveFolderButtonHelper(file))
                }


            </aside>
        </Transition>
    )
}

export default Sidebar