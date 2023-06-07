import Projects from '@/app/projects/Projects'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of notable projects and see the creative solutions I\'ve crafted. From web development to gamification, discover how I can bring your ideas to life.'
}

export default async function Page()
{
  return <Projects />
}