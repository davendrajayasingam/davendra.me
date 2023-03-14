'use client'

import { useEffect } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import ignore from 'react-syntax-highlighter/dist/esm/languages/prism/ignore'

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
    className?: string,
}

const CodeBlock = ({ repoFileData, className }: Props) =>
{
    console.log(repoFileData)
    const fileExtension = repoFileData?.name?.split('.')?.pop() || ''
    const codeString = repoFileData?.data

    useEffect(() =>
    {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [repoFileData])

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

    if (!codeString)
    {
        return <></>
    }

    return <div className={className}>
        <SyntaxHighlighter
            language={getLanguage(fileExtension!)}
            style={coldarkDark}
            showLineNumbers
            customStyle={{
                margin: 0,
                padding: '0.25rem 0.5rem',
                fontSize: '0.875rem',
            }}
        >
            {codeString}
        </SyntaxHighlighter>
    </div>
}

export default CodeBlock