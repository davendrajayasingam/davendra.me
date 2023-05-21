import { Tooltip } from 'react-tooltip'

export default function HomepageSkills()
{
    const showSkillWithTooltip = (skill: string, tooltip: string) => (
        <div className='p-2'>
            <h1
                className='bg-theme-breadcrumbPicker.background text-theme-foreground p-2 font-medium rounded-md cursor-pointer hover:bg-theme-breadcrumbPicker.hover'
                data-tooltip-id={skill}
                data-tooltip-content={tooltip}
                data-tooltip-variant='info'
                data-iscapture='true'
            >
                {skill}
            </h1>
            <Tooltip
                id={skill}
                className='max-w-[12rem] text-center'
            />
        </div>
    )

    const showSkillCategory = (category: string, children: React.ReactNode) => (
        <>
            <h2 className='text-lg mt-4'>
                {category}
            </h2>

            <div>
                <div className='flex flex-wrap items-center -ml-2'>
                    {children}
                </div>
            </div>
        </>
    )

    return (
        <div className='mt-8 text-theme-foreground'>

            <h1 className='font-medium text-3xl'>
                Skills
            </h1>

            <hr className='my-3 border-gray-50 border-opacity-30' />

            {showSkillCategory('Programming Languages', (
                <>
                    {showSkillWithTooltip('HTML5', 'But of course!')}
                    {showSkillWithTooltip('CSS', 'With some Sass!')}
                    {showSkillWithTooltip('TypeScript', 'JavaScript, but better!')}
                    {showSkillWithTooltip('Node.js', 'The keystone!')}
                </>
            ))}

            {showSkillCategory('Frameworks & Libraries', (
                <>
                    {showSkillWithTooltip('React', 'Thank you Facebook!')}
                    {showSkillWithTooltip('Next.js', 'The best thing since sliced bread!')}
                    {showSkillWithTooltip('Tailwind', 'Made me forget about CSS and Sass!')}
                    {showSkillWithTooltip('GreenSock', 'Animations with a terrific community!')}
                </>
            ))}

            {showSkillCategory('Tools & Platforms', (
                <>
                    {showSkillWithTooltip('Git', 'GitHub & GitLab')}
                    {showSkillWithTooltip('Netlify', 'The best thing before Next.js v13!')}
                    {showSkillWithTooltip('Vercel', 'You made me forget about Netlify with Next.js v13!')}
                    {showSkillWithTooltip('AWS', 'Mostly S3 & SES.')}
                    {showSkillWithTooltip('FaunaDB', 'I think it\'s better than MondoDB.')}
                    {showSkillWithTooltip('Fathom Analytics', 'Prefer this over Google Analytics.')}
                    {showSkillWithTooltip('Photoshop', 'Because clients keep sending me PSDs.')}
                    {showSkillWithTooltip('Illustrator', 'All I can do is read, modify, and export.')}
                </>
            ))}

        </div>
    )
}