'use client'

import Script from 'next/script'

type Props = {
    gaMeasurementId: string
}

export default function GoogleAnalytics({ gaMeasurementId }: Props)
{
    return (
        <div className='container'>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
                strategy='afterInteractive'
            />
            <Script id='google-analytics' strategy='afterInteractive'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${gaMeasurementId}');
                `}
            </Script>
        </div>
    )
}