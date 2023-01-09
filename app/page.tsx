import fetchGitHubRepo from '../utils/fetchGitHubRepo'
import Homepage from '@/app/Homepage'

export default async function Home()
{
  const repoData = await fetchGitHubRepo()

  return (
    <Homepage
      repoData={repoData}
    />
  )
}