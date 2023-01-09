import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('typescript', ts)

type Props = {
    codeString: string
}

const TypeScriptCodeBlock = ({ codeString }: Props) => (
    <SyntaxHighlighter
        language='typescript'
        style={railscasts}
    >
        {codeString}
    </SyntaxHighlighter>
)

export default TypeScriptCodeBlock