import { ReactNode } from 'react'

const HomepageWorkExperience = () =>
{
    const showWorkExperience = ({
        companyName,
        employmentPeriod,
        positionHeld,
        workLocation,
        notableAccomplishments
    }: {
        companyName: string,
        employmentPeriod: string,
        positionHeld: string,
        workLocation: string,
        notableAccomplishments: ReactNode
    }) => (
        <p className='text-lg'>
            {companyName}
            <br />
            {employmentPeriod}  |  {positionHeld}  |  {workLocation}
            <br />
            {notableAccomplishments}
        </p>
    )

    return (
        <div className='text-theme-foreground'>

            <h1 className='font-medium text-3xl'>
                Work Experience
            </h1>

            <hr className='my-3 border-gray-50 border-opacity-30' />

            <div className='flex flex-col space-y-8'>

                {showWorkExperience({
                    companyName: 'SIXIDES ADVERTISING PTE LTD',
                    employmentPeriod: 'July 2022 - Present',
                    positionHeld: 'Lead Web Developer',
                    workLocation: 'Singapore (Remote)',
                    notableAccomplishments: <>
                        Developed Sixides.com, which includes customer and business dashboards, along with a customized admin CMS.
                        <br />
                        Worked on eQuote, a platform that offers homeowners renovation estimates and facilitates connections with interior designers.
                    </>
                })}

                {showWorkExperience({
                    companyName: 'NIGHTMORNING STUDIOS SDN BHD',
                    employmentPeriod: 'May 2016 - April 2022',
                    positionHeld: 'Co-founder & CEO',
                    workLocation: 'Malaysia',
                    notableAccomplishments: <>
                        Led a 10-member team and collaborated with renowned brands such as JD Sports, Hong Leong Bank, Astro Awani, and MDEC.
                        <br />
                        Spearheaded the design and development of a digital platform for a virtual game developers conference and created hyper-casual web and mobile games for gamification-driven campaigns.
                    </>
                })}

                {showWorkExperience({
                    companyName: 'WIGU GAMES SDN BHD',
                    employmentPeriod: 'October 2014 - April 2016',
                    positionHeld: 'Producer',
                    workLocation: 'Malaysia',
                    notableAccomplishments: <>
                        Managed a team of 12, published 4 mobile games on the App Store and Play Store, and ported games to region based publishers.
                        <br />
                        Spearheaded the design and development of a digital platform for a virtual game developers conference and created hyper-casual web and mobile games for gamification-driven campaigns.
                    </>
                })}

                {showWorkExperience({
                    companyName: 'VENTEURA INC',
                    employmentPeriod: 'January 2010 - December 2012',
                    positionHeld: 'CTO',
                    workLocation: 'USA',
                    notableAccomplishments: <>
                        Programmed Magpie,  a mobile application specifically tailored for college students, which provides digital coupons.
                    </>
                })}

            </div>

        </div>
    )
}

export default HomepageWorkExperience