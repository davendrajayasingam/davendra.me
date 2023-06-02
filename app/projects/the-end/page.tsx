import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'

import coverImage from '@/app/projects/the-end/images/the-end-cover.png'

export const metadata = {
  title: 'The End',
  description: 'The End is a series of microsites that is the first chapter of a multi-part initiative leading up to the launch of Emergent Game\'s web3 triple-A MMO, Resurgence',
  category: 'MICROSITES'
}

export default async function Page()
{
  return <Project
    metadata={metadata}
    coverImage={coverImage}
  >
    <div className='mt-8 max-w-screen-xl mx-auto flex flex-col space-y-8'>
      <Paragraph className='px-4 max-w-xl mx-auto'>
        More details coming soon.
      </Paragraph>
    </div>
  </Project>
}