import fetchGithubRepo from '@/utils/fetchGithubRepo'

export default async function Home()
{
  const data = await fetchGithubRepo()

  return (
    <main className='font-sans'>
      <div>
        <h1>Homepage</h1>
        <p>{JSON.stringify(data, null, 4)}</p>
      </div>
    </main>
  )
}