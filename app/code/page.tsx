import fetchFilesFromGitHub from '@/utils/fetchFilesFromGitHub'
import CodePage from '@/app/code/CodePage'

export default async function Page()
{
  const repoData = await fetchFilesFromGitHub()

  return <CodePage repoData={repoData} />
}