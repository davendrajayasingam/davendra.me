const fetchHelper = async ({ url, payload }: { url: string, payload: Array<any> }) =>
{
    const res = await fetch(url,
        {
            // headers: {
            //     Accept: 'application/vnd.github+json',
            //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            //     'X-GitHub-Api-Version': '2022-11-28',
            // },
            next: {
                revalidate: 3600,
            },
        }
    )
        .then(async res => 
        {
            const body = await res.json()
            if (body.message && body.documentation_url) 
            {
                console.error(body.message)
                console.error(body.documentation_url)
                return []
            }
            return body
        })
        .catch(err =>
        {
            console.error(err.message)
            return []
        })

    for (const file of res)
    {
        payload.push({
            name: file.name,
            path: file.path,
            type: file.type,
            url: file.download_url,
        })

        // if it's a directory, fetch the files inside it
        if (file.type === 'dir')
        {
            await fetchHelper({
                url: `${url}/${file.path}`,
                payload,
            })
        }
    }

    return payload
}

export default async function fetchGithubFiles()
{
    const res = await fetchHelper({
        url: process.env.GITHUB_URL!,
        payload: [],
    })

    return res
}