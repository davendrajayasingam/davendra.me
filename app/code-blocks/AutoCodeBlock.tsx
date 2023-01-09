import JavaScriptCodeBlock from '@/app/code-blocks/JavaScriptCodeBlock'
import TypeScriptCodeBlock from '@/app/code-blocks/TypeScriptCodeBlock'
import JSONCodeBlock from '@/app/code-blocks/JSONCodeBlock'
import CSSCodeBlock from '@/app/code-blocks/CSSCodeBlock'
import MarkdownCodeBlock from '@/app/code-blocks/MarkdownCodeBlock'
import PlainTextCodeBlock from '@/app/code-blocks/PlainTextCodeBlock'

type Props = {
    repoFileData: RepoFileData,
}

const AutoCodeBlock = ({ repoFileData }: Props) =>
{
    if (repoFileData.name.endsWith('.js') || repoFileData.name.endsWith('.jsx'))
    {
        return <JavaScriptCodeBlock codeString={repoFileData.data!} />
    }

    else if (repoFileData.name.endsWith('.ts') || repoFileData.name.endsWith('.tsx'))
    {
        return <TypeScriptCodeBlock codeString={repoFileData.data!} />
    }

    else if (repoFileData.name.endsWith('.json'))
    {
        return <JSONCodeBlock codeString={repoFileData.data!} />
    }

    else if (repoFileData.name.endsWith('.css'))
    {
        return <CSSCodeBlock codeString={repoFileData.data!} />
    }

    else if (repoFileData.name.endsWith('.md') || repoFileData.name.endsWith('.mdx'))
    {
        return <MarkdownCodeBlock codeString={repoFileData.data!} />
    }

    return <PlainTextCodeBlock codeString={repoFileData.data!} />
}

export default AutoCodeBlock