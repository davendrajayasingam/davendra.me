export const revalidate = 3600

async function getData()
{
  const res = await fetch('https://api.github.com/repos/davendrajayasingam/davendra.me/contents/',
    {
      // headers: {
      //   Accept: 'application/vnd.github+json',
      //   Authorization: `token ${process.env.GITHUB_TOKEN}`,
      //   'X-GitHub-Api-Version': '2022-11-28',
      // },
      next: {
        revalidate,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => err.message)

  return res
}

export default async function Home()
{
  const data = await getData()

  return (
    <main className='font-sans'>
      <div>
        <h1>Homepage</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    </main>
  )
}