import Resume from '@/app/resume/Resume'

export const metadata = {
  title: 'Résumé',
  description: 'Browse my professional résumé to learn more about my skills, experience, and qualifications. Discover how my expertise can contribute to your projects and organization. Get in touch to discuss potential collaborations.'
}

export default async function Page()
{
  return <Resume />
}