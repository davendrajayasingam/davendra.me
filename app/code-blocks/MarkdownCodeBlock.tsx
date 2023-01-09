import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('markdown', markdown)

type Props = {
    codeString: string
}

const MarkdownCodeBlock = ({ codeString }: Props) => (
    <SyntaxHighlighter
        language='markdown'
        style={railscasts}
    >
        {codeString}
    </SyntaxHighlighter>
)

export default MarkdownCodeBlock