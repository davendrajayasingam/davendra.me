import Image from 'next/image'
import Link from 'next/link'
import { VscCode, VscMail, VscFilePdf, VscFiles, VscLinkExternal } from 'react-icons/vsc'

import { buttonClassName, classNames } from '@/utils/helperFunctions'
import Iconify from '@/utils/components/Iconify'

export default function HomepageBanner()
{
    return (
        <div className={classNames(
            'flex flex-col items-center space-y-4',
            'md:flex-row md:items-start md:space-y-0 md:space-x-4'
        )}>
            <Image
                src='/images/davendra.png'
                alt='Davendra Jayasingam'
                className='object-contain aspect-square'
                width={256}
                height={256}
            />

            <div className='flex flex-col items-center md:items-start space-y-4'>

                <h1 className='text-center md:text-left font-medium text-4xl text-theme-editor.foreground'>
                    Davendra Jayasingam
                </h1>

                <p className={classNames(
                    'flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4',
                    'font-medium text-lg text-theme-editor.foreground',
                )}>
                    <span className='flex items-center space-x-1'>
                        <VscCode className='text-3xl text-theme-editorHint.foreground' />
                        <span>Full Stack Web Developer</span>
                    </span>
                    <span className='hidden sm:block'>|</span>
                    <span className='flex items-center space-x-1'>
                        <Iconify icon='openmoji:flag-malaysia' className='text-3xl' />
                        <span>Malaysia</span>
                    </span>
                </p>

                <p className='text-center md:text-left leading-relaxed text-theme-editor.foreground'>
                    Hello! 👋 I'm Dave and I work with brands and event agencies to bring marketing campaigns to life. I'm currently a Lead Web Developer at
                    &nbsp;
                    <a
                        href='https://sixides.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center space-x-1 text-theme-textLink.foreground'
                    >
                        <span>SIXiDES</span>
                        <VscLinkExternal className='inline ml-1' />
                    </a>.
                </p>

                <div className='grid sm:grid-cols-3 gap-4'>

                    <Link
                        href='/code'
                        className={buttonClassName}
                    >
                        <VscFiles className='text-2xl' />
                        <span>Code</span>
                    </Link>

                    <Link
                        href='/resume'
                        className={buttonClassName}
                    >
                        <VscFilePdf className='text-2xl' />
                        <span>Resume</span>
                    </Link>

                    <Link
                        href='/contact'
                        className={buttonClassName}
                    >
                        <VscMail className='text-2xl' />
                        <span>Contact</span>
                    </Link>

                </div>

                <p className='font-light text-xs text-center md:text-left text-theme-editor.foreground'>
                    Great Scott! It seems my code has taken a trip to the wrong timeline. Can you decipher this temporal anomaly?
                    <br />
                    01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01100100 01100001 01110110 01100101 01101110 01100100 01110010 01100001 00101110 01101101 01100101 00101111 01110011 01100101 01100011 01110010 01100101 01110100
                </p>

            </div>
        </div>
    )
}