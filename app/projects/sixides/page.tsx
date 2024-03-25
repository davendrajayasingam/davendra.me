import Image from 'next/image'

import Paragraph from '@/app/(ui)/Paragraph'
import Project from '@/app/projects/Project'

import coverImage from '@/app/projects/sixides/images/sixides-cover.png'
import articlesImage from '@/app/projects/sixides/images/sixides-articles.png'
import interiorDesignersImage from '@/app/projects/sixides/images/sixides-interior-designers.png'
import eQuoteImage from '@/app/projects/sixides/images/sixides-equote.png'
import almanacImage from '@/app/projects/sixides/images/sixides-almanac.png'
import businessImage from '@/app/projects/sixides/images/sixides-business.png'
import cmsImage from '@/app/projects/sixides/images/sixides-cms.png'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

const metadataTitle = 'SIXiDES'
const metadataDescription = 'Sixides is an ID-tech, consumer driven platform to bridge homeowners towards professionals, vendors and institutions.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/sixides'
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
        Coming Soon!
      </Paragraph>

      {/* <Paragraph className='px-4 max-w-xl mx-auto'>
        The developers that the company initially engaged failed to deliver. The company dismissed them and brought me in as a freelance developer to deliver in an extremely short time frame. After a series of contact based extensions, I was offered a full-time position as the Lead Web Developer.
      </Paragraph>

      <Image
        src={articlesImage}
        alt='Articles'
        placeholder='blur'
      />

      <Heading>
        Tools
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I built the site using Next.js, and Tailwind CSS. I chose JavaScript over Typescript because speed was of the essence. AWS S3 was used to host the images, FaunaDB was the database of choice, and the site was deployed on Netlify. I was responsible for the entire stack, from the front-end to the back-end.
      </Paragraph>

      <Image
        src={interiorDesignersImage}
        alt='Interior Designers'
        placeholder='blur'
      />

      <Heading>
        Design
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I worked closely with the CTO and Head of Creative. The design of the site was provided in an Adobe XD document, and I was responsible for converting it into a responsive website. The creative team was meticulous and I had to make sure that the site was pixel perfect.
      </Paragraph>

      <Image
        src={eQuoteImage}
        alt='Almanac'
        placeholder='blur'
      />

      <Heading>
        eQuote
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        When using eQuote, the user gets asked a series of questions, have the option of uploading their floor plan, and images of their current space, and the tool will select interior designers based on the user's requirements, and provide an estimated cost of renovation.
      </Paragraph>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        There is an AI component involved in eQuote, and it was built by an external team. I was in charge of integrating the AI and making it web friendly.
      </Paragraph>

      <Image
        src={almanacImage}
        alt='Almanac'
        placeholder='blur'
      />

      <Heading>
        SIXiDES Almanac
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Almanac is the dashboard for users to view their projects, select and confirm interior designers, and monitor the progress of their renovation.
      </Paragraph>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        They can also rate the work of the interior designers, and leave reviews. Once payment has been made, they can upload receipts and invoices, and upload photos of progress for keeping a record in case of a dispute.
      </Paragraph>

      <Image
        src={businessImage}
        alt='Business'
        placeholder='blur'
      />

      <Heading>
        SIXiDES for Business
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        With SIXiDES for Business, interior designers can update the status of their projects and upload pictures to show progress. Before accepting a project, they can view project proposals, chat with homeowners, approve or reject the proposals, and assign their team members to projects.
      </Paragraph>

      <Image
        src={cmsImage}
        alt='CMS'
        placeholder='blur'
      />

      <Heading>
        Admin Dashboard
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Having a CMS was crucial, and I built the CMS from scratch because the requirements for the content were very specific and saving costs was a priority.
      </Paragraph>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The Dashboard also contains custom reporting from the analytics data. These reports helped the marketing team focus less on tabulating data and more on making decisions.
      </Paragraph>

      <Heading>
        Conclusion
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        This project was immensely challenging, but it was also crazy fun. The Agile Scrum model worked best, and embracing changes was a necessity. My team was super fun to work with, and I learned a lot. Check out our work at <ExternalLink href='https://sixides.com'>sixides.com</ExternalLink>.
      </Paragraph> */}

    </div>
  </Project>
}