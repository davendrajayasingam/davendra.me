import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'

import { classNames } from '@/utils/helperFunctions'
import FileExtensionIcon from '@/app/FileExtensionIcon'

type Props = {
    selectedFile: RepoFileData,
    onSelectFile: (file: RepoFileData) => void,
    isShowing: boolean,
    repoData: RepoFileData[],
    className?: string,
}

type SectionHeaderProps = {
    sectionName: string,
    isExpanded: boolean,
    onClick: () => void,
}

const Sidebar = ({ selectedFile, onSelectFile, isShowing, repoData, className }: Props) =>
{
    const defaultExpandedState: { [field: string]: boolean } = {
        openEditors: true,
        projectFiles: true, // root directory
    }

    // to know which directories/folders are expanded
    const [expandedState, setExpandedState] = useState(defaultExpandedState)

    useEffect(() =>
    {
        const updatedExpandedState = { ...defaultExpandedState }

        for (const file of repoData)
        {
            if (file.type === 'dir')
            {
                updatedExpandedState[file.path] = true
            }
        }

        setExpandedState(updatedExpandedState)
    }, [repoData])

    const displayProjectFilesRecursively = (file: RepoFileData, depth: number = 0) => (
        <div key={file.path}>
            <button
                type='button'
                className={classNames(
                    'py-0.5 flex items-center space-x-1 w-full',
                    'hover:bg-theme-list.hoverBackground',
                    'border',
                    selectedFile.path === file.path ? 'border-theme-list.highlightForeground bg-theme-list.hoverBackground' : 'border-transparent',
                    'focus:outline-none',
                )}
                onClick={() =>
                {
                    if (file.type === 'dir')
                    {
                        setExpandedState({ ...expandedState, [file.path]: !expandedState[file.path] })
                    }
                    else
                    {
                        onSelectFile(file)
                    }
                }}
            >
                {/* hack so we can get the hover to cover the entire width without the padding blocking it */}
                <span style={{ width: `${1 + depth * 0.75}rem` }} />
                {
                    file.type === 'dir'
                    && (expandedState[file.path]
                        ? <VscChevronDown className='text-xl text-theme-sideBar.foreground' />
                        : <VscChevronRight className='text-xl text-theme-sideBar.foreground' />)
                }
                <span className='flex flex-row items-center space-x-1 text-theme-sideBar.foreground'>
                    <FileExtensionIcon extension={file.extension} />
                    <span>{file.name}</span>
                </span>
            </button>

            {
                file.type === 'dir'
                && expandedState[file.path]
                && (file.children || []).map(child => displayProjectFilesRecursively(child, depth + 1))
            }

        </div>
    )

    const displaySectionHeader = ({ sectionName, isExpanded, onClick }: SectionHeaderProps) => (
        <button
            type='button'
            className={classNames(
                'px-1 py-2 w-full',
                'flex items-center',
                'bg-theme-sideBarSectionHeader.background',
                'border border-theme-sideBarSectionHeader.border',
                'focus:outline-none',
            )}
            onClick={onClick}
        >
            {
                isExpanded
                    ? <VscChevronDown className='text-xl text-theme-sideBarSectionHeader.foreground' />
                    : <VscChevronRight className='text-xl text-theme-sideBarSectionHeader.foreground' />
            }
            <span className='text-sm font-bold text-theme-sideBarSectionHeader.foreground'>
                {sectionName}
            </span>
        </button>
    )

    return (
        <Transition
            show={isShowing}
            enter='transition ease-in-out duration-150 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-150 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
        >
            <aside className={classNames(
                className ? className : '',
                'fixed inset-y-0 left-0 md:left-16 z-40',
                'w-[320px] min-h-screen h-full overflow-scroll',
                'bg-theme-sideBar.background border-r border-theme-sideBar.border',
            )}>

                {/* Side bar title */}
                <div className='px-7 py-3'>
                    <p className='text-sm text-theme-sideBarTitle.foreground'>
                        EXPLORER
                    </p>
                </div>

                {/* Open editors section header */}
                {displaySectionHeader({
                    sectionName: 'OPEN EDITORS',
                    isExpanded: expandedState.openEditors,
                    onClick: () => setExpandedState({ ...expandedState, openEditors: !expandedState.openEditors }),
                })}

                {/* Project files section header */}
                {displaySectionHeader({
                    sectionName: 'DAVENDRA.ME',
                    isExpanded: expandedState.projectFiles,
                    onClick: () => setExpandedState({ ...expandedState, projectFiles: !expandedState.projectFiles }),
                })}

                {/* Project files contents */}
                {expandedState.projectFiles
                    && repoData.map(file => displayProjectFilesRecursively(file))}

            </aside>
        </Transition>
    )
}

export default Sidebar