import Image from 'next/image'
import Link from 'next/link'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Divider from '@/app/(ui)/Divider'
import ButtonLink from '@/app/(ui)/ButtonLink'
import ContactForm from '@/app/contact/ContactForm'

import linkedInLogo from '@/app/contact/images/linkedin-logo.png'
import facebookLogo from '@/app/contact/images/facebook-logo.png'
import instagramLogo from '@/app/contact/images/instagram-logo.png'

export default function Contact()
{
    return (
        <div className='p-4 my-8 max-w-xl mx-auto'>

            <Title className='mb-8'>
                Get In Touch
            </Title>

            <Heading className='mb-4'>
                Socials
            </Heading>

            <div className='grid grid-cols-3 gap-2 place-items-center'>
                <Link href='https://www.linkedin.com/in/davendra-jayasingam/'>
                    <Image
                        src={linkedInLogo}
                        alt='LinkedIn'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        placeholder='blur'
                    />
                </Link>
                <Link href='https://www.facebook.com/davendra'>
                    <Image
                        src={facebookLogo}
                        alt='Facebook'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        placeholder='blur'
                    />
                </Link>
                <Link href='https://www.instagram.com/davendra.me/'>
                    <Image
                        src={instagramLogo}
                        alt='Instagram'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        placeholder='blur'
                    />
                </Link>
            </div>

            <Divider />

            <Heading className='mb-4'>
                Card
            </Heading>

            <ButtonLink href='/api/public/getVCard' className='w-72 mx-auto'>
                Download Business Card
            </ButtonLink>

            <Divider />

            <Heading className='mb-4'>
                Email
            </Heading>

            <ContactForm />

        </div>
    )
}