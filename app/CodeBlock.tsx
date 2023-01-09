'use client'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import
{
    javascript,
    jsx,
    typescript,
    tsx,
    markdown,
    css,
    json,
    ignore,
} from 'react-syntax-highlighter/dist/esm/languages/prism'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('ignore', ignore)

type Props = {
    repoFileData: RepoFileData,
}

const CodeBlock = ({ repoFileData }: Props) =>
{
    const fileExtension = repoFileData.name.split('.').pop()
    const codeString = repoFileData.data!

    const getLanguage = (extension: string) =>
    {
        if (extension.endsWith('ignore'))
        {
            return 'ignore'
        }

        switch (extension)
        {
            case 'js':
                return 'javascript'
            case 'jsx':
                return 'jsx'
            case 'ts':
                return 'typescript'
            case 'tsx':
                return 'tsx'
            case 'md':
                return 'markdown'
            case 'css':
                return 'css'
            case 'json':
                return 'json'
            default: return 'text'
        }
    }

    return <SyntaxHighlighter
        language={getLanguage(fileExtension!)}
        style={coldarkDark}
        showLineNumbers
    >
        {codeString}
    </SyntaxHighlighter>
}

export default CodeBlock