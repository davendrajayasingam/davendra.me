import fetchFilesFromGitHub from '@/utils/fetchFilesFromGitHub'
import Homepage from '@/app/Homepage'

export default async function Home()
{
  const repoData = await fetchFilesFromGitHub()

  return <Homepage repoData={repoData} />
}