import Image from 'next/image'
import Link from 'next/link'

import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

import coverImage from '@/app/projects/sama-sama-huat/images/huat-cover.png'
import gameImage from '@/app/projects/sama-sama-huat/images/huat-game.png'
import gameOverImage from '@/app/projects/sama-sama-huat/images/huat-game-over.png'

const metadataTitle = 'Lotus\'s Sama-Sama Huat'
const metadataDescription = 'The Sama-Sama Huat campaign was launched by Lotus\'s Malaysia for Chinese New Year 2023.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/sama-sama-huat'
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
        I was contracted by a creative agency to develop a game that could be played offline, and loaded onto iPads. The iPads would then be taken for roadshows across Malaysia, and contestants would win prizes if they managed to win before the timer ran out.
        <br />
        <br />
        The game was a simple memory game incorporating elements from Lotus's and Chinese New Year. It was developed using Next.js, and was a Progressive Web App (PWA).
      </Paragraph>

      <Heading>
        The Game
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        <ExternalLink href='https://samasamahuat.com'>Check out the game here</ExternalLink>
      </Paragraph>

      <Image
        src={gameImage}
        alt='Sama Sama Huat Game'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        On your mobile, click the Share button, and then select "Add to Home Screen". The game will then be installed on your device, and can be played offline.
        <br />
        <br />
        The phase 'Sama Sama Huat' is a play on the Malay phrase 'Sama Sama' which means 'together'. The word 'Huat' is a Chinese word that means 'prosperity'. Combined, it means 'Together We Prosper'.
      </Paragraph>

      <Image
        src={gameOverImage}
        alt='Sama Sama Huat Game Over'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I was also tasked to create the music and sound effects for the game, which I outsourced to a music producer.
      </Paragraph>

      <Heading>
        Conclusion
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I had fun developing this game because I got to use components that I rarely use such as PWA, creating splash screens, app icons, and sound effects. I also got to use Next.js for a project that wasn't a website, which was a nice experience.
      </Paragraph>

    </div>
  </Project>
}