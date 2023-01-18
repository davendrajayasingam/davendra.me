'use client'

import { Icon } from '@iconify/react'

type Props = {
    icon: string
    className?: string
}

export const Iconify = ({ icon, className }: Props) => (
    <Icon icon={icon} className={className || ''} />
)

export default Iconify