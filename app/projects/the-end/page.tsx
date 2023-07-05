/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from 'next/image'

import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

const coverImage = 'images/projects/the-end/the-end-cover.png'
const pulseNewsImage = 'images/projects/the-end/the-end-pulse-news.png'
const vanderCorpImage = 'images/projects/the-end/the-end-vander-corporation.png'
const earthDogsImage = 'images/projects/the-end/the-end-earth-dogs.png'
const outThereImage = 'images/projects/the-end/the-end-out-there.png'
const tigrisImage = 'images/projects/the-end/the-end-tigris-world.png'
const askAlexImage = 'images/projects/the-end/the-end-ask-alex-blog.png'
const wroImage = 'images/projects/the-end/the-end-world-relocation-organization.png'
const ourJourneyImage = 'images/projects/the-end/the-end-our-journey-your-future.png'

const metadataTitle = 'The End'
const metadataDescription = 'The End is a series of microsites that is the first chapter of a multi-part initiative leading up to the launch of Emergent Game\'s web3 triple-A MMO, Resurgence'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/the-end'
  }
}

export default async function Page()
{
  const showExternalLink = (link: string, text: string, cover: string, description: string) => <>
    <img
      src={cover}
      alt={text}
    />
    <Heading>
      {text}
    </Heading>
    <Paragraph className='px-4 max-w-xl mx-auto'>
      {description}&nbsp;
      <ExternalLink
        href={link}
        className='text-lg mx-auto'
      >
        Visit {text}
      </ExternalLink>
    </Paragraph>
  </>

  return <Project
    title={metadata.title}
    description={metadata.description}
    coverImage={coverImage}
  >
    <div className='mt-8 max-w-screen-xl mx-auto flex flex-col space-y-8'>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I was contracted to build the microsites. The artwork and puzzle designs were provided to me, and I helped by providing feedback to enhance the user experience.
      </Paragraph>


      <Paragraph className='px-4 max-w-xl mx-auto'>
        The project was split into 5 phases, and the project duration was 1 year. The content was dynamic in the sense that it changed based on the events happening in the game's alternate reality.
      </Paragraph>

      <Heading>
        Links
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Check out the microsites here:
      </Paragraph>

      {showExternalLink(
        'https://pulsenews.uk/',
        'Pulse News',
        pulseNewsImage,
        'A news site that reports on the events happening in alternate reality.'
      )}

      {showExternalLink(
        'https://vandercorporation.com/',
        'Vander Corporation',
        vanderCorpImage,
        'A mega corporation with the face of the company, Dominic Vanderbrul at its front.'
      )}

      {showExternalLink(
        'https://earthdogs.net/',
        'Earth Dogs',
        earthDogsImage,
        'An eco activist group focused on not only raising awareness about the ongoing effects of climate change, but also urging people to take action.'
      )}

      {showExternalLink(
        'https://out-there.live/',
        'Out There',
        outThereImage,
        'Hosted by Tony Fisher, his small podcast on telling \'the truth\' gained popularity over the years and most recently, he has solidified himself as the expert of unraveling the grand machinations of how the world works.'
      )}

      {showExternalLink(
        'https://tigris.world/',
        'Tigris',
        tigrisImage,
        'Secrets can be unlocked by deciphering the morse code on the site.'
      )}

      {showExternalLink(
        'https://askalex.blog/',
        'Ask Alex',
        askAlexImage,
        'A tumblr style question and answer blog run by Alex Johnson where she can be true to herself and engage with some of her dedicated fans.'
      )}

      {showExternalLink(
        'https://worldrelocationorganisation.space/',
        'World Relocation Organization',
        wroImage,
        'Based in over 100 countries, the World Relocation Organization team is proud to have helped countless clients achieve their migration goals for over 5 years.'
      )}

      {showExternalLink(
        'https://ourjourneyyourfuture.org/',
        'Our Journey, Your Future',
        ourJourneyImage,
        'A countdown clock, projecting the future.'
      )}

      <Heading>
        Conclusion
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I really enjoyed working with the team behind this project. They were very passionate about their work, and it was a pleasure to work with them.
      </Paragraph>

    </div>
  </Project>
}