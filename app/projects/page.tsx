import Projects from '@/app/projects/Projects'

import { metadata as sixidesMetadata } from '@/app/projects/sixides/page'
import { metadata as theEndMetadata } from '@/app/projects/the-end/page'

import sixidesCoverImage from '@/app/projects/sixides/images/sixides-cover.png'
import theEndCoverImage from '@/app/projects/the-end/images/the-end-cover.png'

export default async function Page()
{
  const allProjects = [
    {
      link: 'sixides',
      metadata: sixidesMetadata,
      coverImage: sixidesCoverImage
    },
    {
      link: 'the-end',
      metadata: theEndMetadata,
      coverImage: theEndCoverImage
    }
  ]

  return <Projects projects={allProjects} />
}