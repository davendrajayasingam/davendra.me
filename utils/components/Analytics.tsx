'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import FathomAnalytics from '@/utils/components/FathomAnalytics'
import GoogleAnalytics from '@/utils/components/GoogleAnalytics'

export default function Analytics()
{
    return <>
        <VercelAnalytics />
        <FathomAnalytics siteId={process.env.NEXT_PUBLIC_FATHOM_ID!} />
        <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </>
}