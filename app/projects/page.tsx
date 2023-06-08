import Projects from '@/app/projects/Projects'

const metadataTitle = 'Projects'
const metadataDescription = 'Explore my portfolio of notable projects and see the creative solutions I\'ve crafted. From web development to gamification, discover how I can bring your ideas to life.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects'
  }
}

export default async function Page()
{
  return <Projects />
}