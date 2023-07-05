import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import ExternalLink from '@/app/(ui)/ExternalLink'

const coverImage = 'images/projects/tysonfsc/tysonfsc-cover.png'

const metadataTitle = 'TYSON FOODSERVICE CATALOGUE'
const metadataDescription = 'A flipbook styled digital catalogue for Tyson Food Service Malaysia.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/tysonfsc'
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
        The goal of this project was to transform their catalogue into a dynamic digital format, providing an engaging and interactive experience for their vendors.
        <br />
        <br />
        The catalogue was built to be responsive, included buttons to enter full screen mode, and to download a PDF version.
        <br />
        <br />
        The client also requested for a page flip sound effect when turning pages. They were happy with the final outcome.
        <br />
        <br />
        <ExternalLink href='https://tysonfsc.com'>
          Check out the flipbook here.
        </ExternalLink>
      </Paragraph>

    </div>
  </Project>
}