import Link from 'next/link'

const ContactPage = () =>
{
    return (
        <div className='p-4'>
            <div className='bg-theme-focusBorder font-medium text-white rounded-md p-4'>
                <Link href='/api/public/getVCard'>
                    Download VCard
                </Link>
            </div>
        </div>
    )
}

export default ContactPage