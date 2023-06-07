import Projects from '@/app/projects/Projects'

import { metadata as sixidesMetadata } from '@/app/projects/sixides/page'
import { metadata as theEndMetadata } from '@/app/projects/the-end/page'

import sixidesCoverImage from '@/app/projects/sixides/images/sixides-cover.png'
import theEndCoverImage from '@/app/projects/the-end/images/the-end-cover.png'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of notable projects and see the creative solutions I\'ve crafted. From web development to gamification, discover how I can bring your ideas to life.'
}

export default async function Page()
{
  const allProjects = [
    {
      link: 'sixides',
      title: sixidesMetadata.title,
      category: 'Website',
      coverImage: sixidesCoverImage
    },
    {
      link: 'the-end',
      title: theEndMetadata.title,
      category: 'Microsites',
      coverImage: theEndCoverImage
    }
  ]

  return <Projects projects={allProjects} />
}