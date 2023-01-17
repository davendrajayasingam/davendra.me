import { Fragment } from 'react'
import { VscChevronRight } from 'react-icons/vsc'

import { classNames } from '@/utils/helperFunctions'
import FileExtensionIcon from '@/app/FileExtensionIcon'

type Props = {
    activeTab: RepoFileData,
    className?: string,
}

const Breadcrumbs = ({ activeTab, className }: Props) =>
{
    const splitPath = activeTab.path.split('/')

    return (
        <div className={classNames(
            className ? className : '',
            'w-full',
            'border-y border-theme-editorGroupHeader.border',
            'bg-theme-editor.background',
            '',
        )}>
            <div className='bg-theme-editorGroupHeader.tabsBackground px-2 py-1 flex flex-row items-center'>
                {
                    splitPath.map((path, index) => (
                        <Fragment key={path}>

                            {
                                index === splitPath.length - 1
                                && <FileExtensionIcon extension={activeTab.extension} />
                            }

                            <span className='text-theme-breadcrumb.foreground'>
                                {path}
                            </span>

                            {
                                index !== splitPath.length - 1
                                && <VscChevronRight className='mx-1 text-theme-breadcrumb.foreground' />
                            }

                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Breadcrumbs