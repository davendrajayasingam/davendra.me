import Image from 'next/image'
import Link from 'next/link'

import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

import coverImage from '@/app/projects/workday-experience-survey/images/workdayexperiencesurvey-cover.png'
import surveySessionsImage from '@/app/projects/workday-experience-survey/images/workdayexperiencesurvey-sessions.png'
import surveyFormImage from '@/app/projects/workday-experience-survey/images/workdayexperiencesurvey-form.png'
import surveyDashboardImage from '@/app/projects/workday-experience-survey/images/workdayexperiencesurvey-dashboard.png'

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

      <Image
        src={surveySessionsImage}
        alt='Workday Experience Survey Sessions'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The survey form is split into 3 sessions, each with a different set of questions. The participants would scan a single QR code to access the survey form and select their session.
      </Paragraph>

      <Heading>
        Form
      </Heading>

      <Image
        src={surveyFormImage}
        alt='Workday Experience Survey Form'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The survey form is built with Next.js and Tailwind CSS. The form is responsive and built mobile first. After submitting the form, the participants are redirected to a thank you page.
      </Paragraph>

      <Heading>
        Dashboard
      </Heading>

      <Image
        src={surveyDashboardImage}
        alt='Workday Experience Survey Dashboard'
        placeholder='blur'
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