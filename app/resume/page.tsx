import Resume from '@/app/resume/Resume'

const metadataTitle = 'Résumé'
const metadataDescription = 'Browse my professional résumé to learn more about my skills, experience, and qualifications. Discover how my expertise can contribute to your projects and organization. Get in touch to discuss potential collaborations.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/resume'
  }
}

export default async function Page()
{
  return <Resume />
}