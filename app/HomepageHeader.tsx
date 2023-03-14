import Image from 'next/image'
import Link from 'next/link'
import { VscCode, VscMail, VscFilePdf, VscFiles, VscLinkExternal } from 'react-icons/vsc'

import { buttonClassName, classNames } from '@/utils/helperFunctions'
import Iconify from '@/utils/Iconify'

const HomepageHeader = () =>
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

                <p className='text-center md:text-left text-theme-editor.foreground'>
                    {'I work with brands and creative agencies to bring marketing campaigns to life. I\'m currently a Lead Web Developer at'}
                    &nbsp;
                    <a
                        href='https://sixides.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center space-x-1 text-theme-textLink.foreground'
                    >
                        <span>SIXiDES</span>
                        <VscLinkExternal className='inline ml-1' />
                    </a>
                    &nbsp;
                    {'and I\'m also a freelance developer.'}
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
                    01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01100001 01110000 01101001 00101110 01110111 01101000 01100001 01110100 01110011 01100001 01110000 01110000 00101110 01100011 01101111 01101101 00101111 01110011 01100101 01101110 01100100 00111111 01110000 01101000 01101111 01101110 01100101 00111101 00110110 00110000 00110001 00110001 00110010 00110111 00110101 00110000 00110001 00110111 00110111 00111000
                </p>

            </div>
        </div>
    )
}

export default HomepageHeader