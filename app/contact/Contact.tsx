import Image from 'next/image'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Divider from '@/app/(ui)/Divider'
import ButtonLink from '@/app/(ui)/ButtonLink'
import ContactForm from '@/app/contact/ContactForm'

import linkedInLogo from '@/app/contact/images/linkedin-logo.png'
import facebookLogo from '@/app/contact/images/facebook-logo.png'
import instagramLogo from '@/app/contact/images/instagram-logo.png'
import Link from 'next/link'
import Paragraph from '../(ui)/Paragraph'

export default function Contact()
{
    return (
        <div className='p-4 my-8 max-w-xl mx-auto'>

            <Title className='mb-4'>
                Get In Touch
            </Title>

            <Paragraph className='mb-8'>
                Reach out to me via email, connect on social media, or download my business card. Let's get in touch and discuss your needs. I'm here to help!
            </Paragraph>

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
                        loading='eager'
                    />
                </Link>
                <Link href='https://www.facebook.com/davendra'>
                    <Image
                        src={facebookLogo}
                        alt='Facebook'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        loading='eager'
                    />
                </Link>
                <Link href='https://www.instagram.com/davendra.me/'>
                    <Image
                        src={instagramLogo}
                        alt='Instagram'
                        className='object-contain bg-teal-100 hover:bg-teal-50 p-3 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        height={88}
                        loading='eager'
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