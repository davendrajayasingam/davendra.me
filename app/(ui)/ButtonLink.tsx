import Link from 'next/link'

import { classNames } from '@/utils/helperFunctions'

type Props = {
    href: string,
    children?: React.ReactNode,
    className?: string,
    type?: 'button' | 'submit',
    disabled?: boolean
}

export default function ButtonLink({ href, children, className, type = 'button', disabled = false }: Props)
{
    return (
        <Link
            href={href}
            type={type}
            className={classNames(
                className ? className : '',
                'font-medium text-white text-lg',
                'px-6 py-2 rounded-full shadow-md',
                'flex items-center justify-center space-x-1',
                'bg-amber-500 hover:bg-amber-400',
                'transition-colors duration-500 ease-in-out',
                'outline-none focus:outline-none'
            )}
        >
            {children}
        </Link>
    )
}