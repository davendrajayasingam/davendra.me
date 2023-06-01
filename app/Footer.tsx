'use client'

export default function Footer()
{
    return (
        <footer>
            <hr className='my-4 border-teal-100 max-w-xl mx-auto' />

            <p className='pb-4 text-teal-100 text-center'>
                &copy; {new Date().getFullYear()} Davendra Jayasingam.
            </p>

        </footer>
    )
}