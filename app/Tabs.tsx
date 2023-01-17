import { VscClose } from 'react-icons/vsc'
import { useEffect, useRef } from 'react'

import FileExtensionIcon from '@/app/FileExtensionIcon'
import { classNames } from '@/utils/helperFunctions'

type Props = {
    activeTab: RepoFileData,
    openTabs: Array<RepoFileData>
    onChangeTab: (data: RepoFileData) => void
    onCloseTab: (data: RepoFileData) => void
}

const Tabs = ({ activeTab, openTabs, onChangeTab, onCloseTab }: Props) =>
{
    const tabsParentRef = useRef<HTMLDivElement>(null)

    useEffect(() =>
    {
        const idxOfOpenTab = openTabs.findIndex(tab => tab.path === activeTab.path)
        if (idxOfOpenTab >= 0)
        {
            tabsParentRef.current?.children[idxOfOpenTab].scrollIntoView()
        }
    }, [activeTab])

    return (
        <div className='fixed top-0 left-[384px] right-0 z-50 bg-theme-editor.background'>
            <div
                ref={tabsParentRef}
                className={classNames(
                    'flex flex-row w-full',
                    'overflow-x-scroll custom-scrollbar',
                    'bg-theme-editorGroupHeader.tabsBackground',
                    'border-y border-theme-editorGroupHeader.tabsBorder',
                )}
            >
                {
                    openTabs.map(tab => (
                        <button
                            key={tab.path}
                            type='button'
                            className={classNames(
                                'flex flex-row items-center space-x-1 px-2 py-2 h-full',
                                'border-y-2',
                                activeTab.path === tab.path ? 'border-y-theme-tab.activeBorder' : 'border-y-transparent',
                                'border-r border-r-theme-editorGroupHeader.tabsBorder',
                                'hover:bg-theme-tab.hoverBackground',
                                'focus:outline-none',
                            )}
                            onClick={() => onChangeTab(tab)}
                        >
                            <FileExtensionIcon extension={tab.extension} />
                            <span className={classNames(
                                activeTab.path === tab.path ? 'text-theme-tab.activeForeground' : 'text-theme-tab.inactiveForeground',
                            )}>
                                {tab.name}
                            </span>
                            <button
                                type='button'
                                className={classNames(
                                    'rounded-md',
                                    'border border-dashed border-transparent hover:border-theme-tab.unfocusedActiveBackground hover:bg-theme-tab.lastPinnedBorder',
                                    'focus:outline-none',
                                )}
                                onClick={(e) =>
                                {
                                    e.stopPropagation()
                                    onCloseTab(tab)
                                }}
                            >
                                <VscClose className={classNames(
                                    'text-xl',
                                    activeTab.path === tab.path ? 'text-theme-tab.activeForeground' : 'text-theme-tab.inactiveForeground',
                                )} />
                            </button>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs