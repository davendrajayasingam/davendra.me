'use client'

import Divider from '@/app/(ui)/Divider'

export default function Footer()
{
    return (
        <footer>

            <Divider />

            <p className='pb-4 text-teal-100 text-center'>
                &copy; {new Date().getFullYear()} Davendra Jayasingam
            </p>

        </footer>
    )
}