/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Divider from '@/app/(ui)/Divider'
import ButtonLink from '@/app/(ui)/ButtonLink'
import ContactForm from '@/app/contact/ContactForm'

const linkedInLogo = '/images/linkedin-logo.png'
const facebookLogo = '/images/facebook-logo.png'
const instagramLogo = '/images/instagram-logo.png'

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
                    <img
                        src={linkedInLogo}
                        alt='LinkedIn'
                        className='object-cover bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        width={88}
                    />
                </Link>
                <Link href='https://www.facebook.com/davendra'>
                    <img
                        src={facebookLogo}
                        alt='Facebook'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        width={88}
                    />
                </Link>
                <Link href='https://www.instagram.com/davendra.me/'>
                    <img
                        src={instagramLogo}
                        alt='Instagram'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        width={88}
                    />
                </Link>
            </div>

            {/* <Divider />

            <Heading className='mb-4'>
                Email
            </Heading>

            <ContactForm /> */}

        </div>
    )
}