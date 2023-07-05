/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

const coverImage = 'images/projects/workday-experience-survey/workdayexperiencesurvey-cover.png'
const surveySessionsImage = 'images/projects/workday-experience-survey/workdayexperiencesurvey-sessions.png'
const surveyFormImage = 'images/projects/workday-experience-survey/workdayexperiencesurvey-form.png'
const surveyDashboardImage = 'images/projects/workday-experience-survey/workdayexperiencesurvey-dashboard.png'

const metadataTitle = 'WORKDAY Experience Survey'
const metadataDescription = 'A feedback survey for participants of the Workday Experience workshop.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/workday-experience-survey'
  }
}

export default async function Page()
{
  return <Project
    title={metadata.title}
    description={metadata.description}
    coverImage={coverImage}
  >
    <div className='mt-8 max-w-screen-xl mx-auto flex flex-col space-y-8'>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Every other month, Workday would host a workshop in Malaysia and Singapore for their clients to learn about the latest features of their software.
        <br />
        <br />
        After each workshop, they would send out a feedback survey to the participants. I was tasked to design and develop the survey form, as well as the dashboard to view the results.
      </Paragraph>

      <Heading>
        Sessions
      </Heading>

      <img
        src={surveySessionsImage}
        alt='Workday Experience Survey Sessions'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The survey form is split into 3 sessions, each with a different set of questions. The participants would scan a single QR code to access the survey form and select their session.
      </Paragraph>

      <Heading>
        Form
      </Heading>

      <img
        src={surveyFormImage}
        alt='Workday Experience Survey Form'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The survey form is built with Next.js and Tailwind CSS. The form is responsive and built mobile first. After submitting the form, the participants are redirected to a thank you page.
      </Paragraph>

      <Heading>
        Dashboard
      </Heading>

      <img
        src={surveyDashboardImage}
        alt='Workday Experience Survey Dashboard'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The organizers can view the survey results in a dashboard. They can filter the results by session and download the results as a CSV file. The format of the survey report was specified by the client.
        <br />
        <br />
        <ExternalLink href='https://tysonfsc.com'>
          Check out the survey form here.
        </ExternalLink>
        <br />
        <br />
        Get in touch with me on my <Link href='/contact' className='text-amber-400 underline'>contact page</Link> if you'd like to see a demo of the dashboard, or run you through the flow.
      </Paragraph>

    </div>
  </Project>
}