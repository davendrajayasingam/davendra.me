import Image from 'next/image'
import Link from 'next/link'

import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

import coverImage from '@/app/projects/supermom/images/supermom-cover.png'
import gameImage from '@/app/projects/supermom/images/supermom-game.png'
import gameVnImage from '@/app/projects/supermom/images/supermom-game-vn.png'
import quizImage from '@/app/projects/supermom/images/supermom-quiz.png'
import quizResult from '@/app/projects/supermom/images/supermom-quiz-result.png'
import dashboardImage1 from '@/app/projects/supermom/images/supermom-dashboard-1.png'
import dashboardImage2 from '@/app/projects/supermom/images/supermom-dashboard-2.png'

const metadataTitle = 'SUPERMOM'
const metadataDescription = 'The SUPERMOM campaign was launched by Nestlé Malaysia to promote their products across four regions, Malaysia, Singapore, Vietnam, and Thailand.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/supermom'
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
        The campaign was split into two microsites; a game, and a quiz. I was contracted by a creative agency to manage the development of the microsites, including the games.
        <br />
        <br />
        I was unable to handle the scope on my own given the short time frame given, so I assembled a team with two other people; one to build the game, and the other to manage the content and client expectations, while I focused on building the microsites and the admin dashboard.
      </Paragraph>

      <Heading>
        SUPERMOM Game
      </Heading>

      <Image
        src={gameImage}
        alt='SUPERMOM Game'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The game had a mechanic of catching items as they fall. The 'Good' items gave you points, and 'Bad' ones took away points. The game was designed to be played on mobile devices, so responsiveness was a priority.
        <br />
        <br />
        The game itself was built using Cocos Creator, and embedded into the microsite which was built using Next.js, and the two systems communicated with each other using an API.
      </Paragraph>

      <Image
        src={gameVnImage}
        alt='SUPERMOM Game in Vietnamese'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The game was to be launched in two regions, Malaysia and Vietnam, and had to be localized into English, and Vietnamese.
        <br />
        <br />
        The content was managed using a CMS, and the translations were provided by the client.
        <br />
        <br />
        The original domains were removed after the campaign ended, but you can still visit the game at the following links:
        <br />
        <br />
        <ExternalLink
          href='https://supermomgame.staging.com.my/my'
          className='text-lg mx-auto'
        >
          Malaysia
        </ExternalLink>
        <br />
        <ExternalLink
          href='https://supermomgame.staging.com.my/vn'
          className='text-lg mx-auto'
        >
          Vietnam
        </ExternalLink>
      </Paragraph>

      <Heading>
        SUPERMOM Quiz
      </Heading>

      <Image
        src={quizImage}
        alt='SUPERMOM Quiz'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The quiz was a personality test, and consisted of 7 questions. The questions were designed to be fun and engaging, and the results determined what kind of SUPERMOM you were.
        <br />
        <br />
        Localizing the content was a challenge because of the difference in length of the questions and answers between the languages. The client wanted the size of the questions and answers to be the same across all regions, so I had to come up with a solution to make the content fit.
      </Paragraph>

      <Image
        src={quizResult}
        alt='SUPERMOM Quiz'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The quiz was built using Next.js, and the results were stored in a database. The client wanted to be able to analyze results of the quiz, so I built an admin dashboard where they could view and export the results as a CSV file.
        <br />
        <br />
        The original domains were removed after the campaign ended, but you can still visit the quiz at the following links:
        <br />
        <br />
        <ExternalLink
          href='https://supermomquiz.staging.com.my/my'
          className='text-lg mx-auto'
        >
          Malaysia
        </ExternalLink>
        <br />
        <ExternalLink
          href='https://supermomquiz.staging.com.my/vn'
          className='text-lg mx-auto'
        >
          Vietnam
        </ExternalLink>
        <br />
        <ExternalLink
          href='https://supermomquiz.staging.com.my/th'
          className='text-lg mx-auto'
        >
          Thailand
        </ExternalLink>
        <br />
        <ExternalLink
          href='https://supermomquiz.staging.com.my/sg'
          className='text-lg mx-auto'
        >
          Singapore
        </ExternalLink>
      </Paragraph>

      <Heading>
        Dashboard
      </Heading>

      <Image
        src={dashboardImage1}
        alt='SUPERMOM Dashboard'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I built the CMS for the dashboard from scratch using Next.js and FaunaDB, based on the requirements provided. The images were stored in AWS S3 buckets.
      </Paragraph>

      <Image
        src={dashboardImage2}
        alt='SUPERMOM Dashboard'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Almost all the content was managed using this CMS, including the questions for the quiz, the results, the game, and the images.
        <br />
        <br />
        Get in touch with me on my <Link href='/contact' className='text-amber-400 underline'>contact page</Link> if you'd like to see a demo of the dashboard.
      </Paragraph>

      <Heading>
        Conclusion
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I had a great team with me on this project, and we managed to deliver on time. The client was happy with the results, and we celebrated the launch.
      </Paragraph>

    </div>
  </Project>
}