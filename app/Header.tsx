'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

import { classNames } from '@/utils/helperFunctions'

export default function Header()
{
    const pathname = usePathname()

    const displayLink = (title: string | React.ReactNode, link: string) => (
        <Link
            href={link}
            className={classNames(
                'text-teal-100 bg-teal-50 px-4 py-1 rounded-full',
                pathname === link ? 'bg-opacity-25' : 'bg-opacity-0',
                'hover:bg-opacity-25 transition-all duration-500 ease-in-out'
            )}
        >
            {title}
        </Link>
    )

    return (
        <header className='sticky top-2 flex justify-center'>
            <nav className='m-2 p-2 flex flex-row items-center justify-center space-x-1 bg-white bg-opacity-10 rounded-full backdrop-blur-md'>
                {displayLink(<FaHome className='text-2xl text-teal-100' />, '/')}
                {displayLink('Projects', '/projects')}
                {displayLink('Résumé', '/resume')}
                {displayLink('Contact', '/contact')}
            </nav>
        </header>
    )
}