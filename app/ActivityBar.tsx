'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { VscFilePdf, VscFiles, VscHome, VscMail } from 'react-icons/vsc'

import { classNames } from '@/utils/helperFunctions'

const ActivityBar = () =>
{
    const pathname = usePathname() || ''
    const path = pathname.split('/')?.pop() || 'home'

    const displayActivityBarLink = (tab: ActivityBarTab, Icon: React.ElementType) =>
    (
        <Link
            href={`/${tab === 'home' ? '' : tab}`}
            className={classNames(
                'flex items-center justify-center w-full h-full px-2 py-4 focus:outline-none',
                path === tab ? 'border-b-2 sm:border-b-0 sm:border-l-2 border-theme-textLink.foreground' : '',
            )}
        >
            <Icon className={classNames(
                'text-4xl',
                path === tab ? 'text-theme-textLink.foreground' : 'text-theme-activityBar.foreground',
            )} />
        </Link>
    )

    return (
        <div className='fixed bottom-0 inset-x-0 z-50 h-16 md:h-auto md:left-0 md:w-16'>
            <nav className={classNames(
                'flex items-center w-full h-full',
                'flex-row justify-evenly',
                'md:flex-col md:justify-start md:min-h-screen',
                'border-r-2 border-theme-activityBar.border',
                'bg-theme-activityBar.background',
            )}>

                {displayActivityBarLink('home', VscHome)}

                {displayActivityBarLink('code', VscFiles)}

                {displayActivityBarLink('resume', VscFilePdf)}

                {displayActivityBarLink('contact', VscMail)}

            </nav>
        </div>
    )
}

export default ActivityBar