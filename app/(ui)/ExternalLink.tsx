import Link from 'next/link'
import { VscLinkExternal } from 'react-icons/vsc'

type Props = {
    href: string,
    children: React.ReactNode,
    className?: string
}

export default function ExternalLink({ href, children, className }: Props)
{
    return (
        <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={`inline-flex items-center space-x-1 text-amber-400 underline ${className}`}
        >
            <span>{children}</span>
            <VscLinkExternal className='inline ml-1' />
        </Link>
    )
}