'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import FathomAnalytics from '@/utils/components/Fathom'

export default function Analytics()
{
    return <>
        <VercelAnalytics />
        <FathomAnalytics />
    </>
}