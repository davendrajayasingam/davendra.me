type FetchHelperProps = {
    url: string,
    payload: Array<RepoFileData>,
}

const fetchHelper = async ({ url, payload }: FetchHelperProps) =>
{
    const res = await fetch(url,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
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
        const fileData: RepoFileData = {
            name: file.name,
            path: file.path,
            type: file.type,
        }

        // if it's a directory, fetch the files inside it
        if (file.type === 'dir')
        {
            await fetchHelper({
                url: `${process.env.GITHUB_URL!}/${file.path}`,
                payload: fileData.children = [],
            })
        }
        else
        {
            fileData.data = await fetch(file.download_url).then(res => res.text())
        }

        payload.push(fileData)
    }

    return payload.sort((a, b) => a.type === 'dir' ? b.type === 'dir' ? a.name.localeCompare(b.name) : -1 : b.type === 'dir' ? 1 : a.name.localeCompare(b.name))
}

const fetchFilesFromGitHub = async () =>
{
    const res = await fetchHelper({
        url: process.env.GITHUB_URL!,
        payload: [],
    })

    return res
}

export default fetchFilesFromGitHub