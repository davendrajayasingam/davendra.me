import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('javascript', js)

type Props = {
    codeString: string
}

const JavaScriptCodeBlock = ({ codeString }: Props) => (
    <SyntaxHighlighter
        language='javascript'
        style={railscasts}
    >
        {codeString}
    </SyntaxHighlighter>
)

export default JavaScriptCodeBlock