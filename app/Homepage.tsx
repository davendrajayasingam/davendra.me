import Link from 'next/link'
import Image from 'next/image'
import { VscLinkExternal } from 'react-icons/vsc'
import { Tooltip } from 'react-tooltip'

import Title from '@/app/(ui)/Title'
import Heading from '@/app/(ui)/Heading'
import Paragraph from '@/app/(ui)/Paragraph'
import ExternalLink from '@/app/(ui)/ExternalLink'

import profilePicture from '@/app/images/davendra.png'

export default function Homepage()
{
    const showSkillWithTooltip = (skill: string, tooltip: string) => (
        <div className='p-2'>
            <p
                className='bg-teal-800 font-medium text-teal-100 px-6 py-2 rounded-full cursor-pointer'
                data-tooltip-id={skill}
                data-tooltip-content={tooltip}
            >
                {skill}
            </p>
            <Tooltip
                id={skill}
                className='max-w-[12rem]'
            />
        </div>
    )

    const showSkillCategory = (category: string, children: React.ReactNode) => (
        <div className='mt-4'>
            <Paragraph className='text-center'>
                {category}
            </Paragraph>
            <div className='mt-2 flex flex-wrap items-center justify-center -ml-2'>
                {children}
            </div>
        </div>
    )

    return (
        <div className='p-4 max-w-xl mx-auto'>

            <Heading className='mt-4'>
                Hello World!
            </Heading>

            <Title className='mt-4 mb-8'>
                I'm Dave,
            </Title>

            <Image
                src={profilePicture}
                alt='Davendra Jayasingam'
                className='object-contain rounded-full max-w-xs mx-auto'
            />

            <Heading className='mt-4'>
                a Full-Stack
                <br />
                Web Developer.
            </Heading>

            <Paragraph className='mt-4'>
                I work with brands and event agencies to bring websites and marketing campaigns to life. I'm currently a Lead Web Developer at&nbsp;
                <ExternalLink link='https://sixides.com'>
                    SIXiDES
                </ExternalLink>
            </Paragraph>

            <hr className='my-12 border-teal-100' />

            <Heading className='mt-4'>
                About
            </Heading>

            <Paragraph className='mt-4'>
                I enjoy creating web platforms, dashboards, microsites, hyper-casual web games, and gamification related contests.
                <br />
                <br />
                Feel free to check out some of the&nbsp;
                <Link
                    href='/projects'
                    className='underline text-amber-400'
                >
                    projects
                </Link>
                &nbsp;I've worked on, take a look at my&nbsp;
                <Link
                    href='/resume'
                    className='underline text-amber-400'
                >
                    resume
                </Link>
                , or view the&nbsp;
                <Link
                    href='/code'
                    className='underline text-amber-400'
                >
                    source code
                </Link>
                &nbsp;of this website to gain insight into my coding style.
                <br />
                <br />
                Please feel free to&nbsp;
                <Link
                    href='/contact'
                    className='underline text-amber-400'
                >
                    contact
                </Link>
                &nbsp;me with inquiries you may have.
            </Paragraph>

            <hr className='my-12 border-teal-100' />

            <Heading className='mt-4 mb-8'>
                Knowledge
            </Heading>

            {showSkillCategory('Programming Languages', (
                <>
                    {showSkillWithTooltip('HTML5', 'Why of course!')}
                    {showSkillWithTooltip('CSS', 'With some Sass!')}
                    {showSkillWithTooltip('TypeScript', '❤️ > JavaScript')}
                    {showSkillWithTooltip('Node.js', 'The keystone!')}
                </>
            ))}

            {showSkillCategory('Frameworks & Libraries', (
                <>
                    {showSkillWithTooltip('React', 'Go Facebook!')}
                    {showSkillWithTooltip('Next.js', 'All the way!')}
                    {showSkillWithTooltip('Tailwind', 'Made me forget about CSS and Sass!')}
                    {showSkillWithTooltip('GreenSock', 'The best thing since sliced bread!')}
                </>
            ))}

            {showSkillCategory('Tools & Platforms', (
                <>
                    {showSkillWithTooltip('Git', 'GitHub & GitLab')}
                    {showSkillWithTooltip('Netlify', 'The best thing before Next.js v13!')}
                    {showSkillWithTooltip('Vercel', 'The best thing after Next.js v13!')}
                    {showSkillWithTooltip('AWS', 'Mostly S3 & SES.')}
                    {showSkillWithTooltip('FaunaDB', 'I think it\'s better than MondoDB.')}
                    {showSkillWithTooltip('Fathom Analytics', 'Love it more than Google Analytics.')}
                </>
            ))}

            {/* <p>
                01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01100100 01100001 01110110 01100101 01101110 01100100 01110010 01100001 00101110 01101101 01100101 00101111 01110011 01100101 01100011 01110010 01100101 01110100
            </p> */}

        </div>
    )
}